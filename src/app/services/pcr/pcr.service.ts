import { Injectable, input } from '@angular/core';
import { Ipcr } from '../../models/Ipcr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcrService {

  private pcrsSubject: BehaviorSubject<Ipcr[]> = new BehaviorSubject<Ipcr[]>([]);

  constructor( ) {
    this.loadPcrsFromLocalStorage();
  }

getPcrs(): Observable<Ipcr[]> {
  return this.pcrsSubject.asObservable();
}

// Método para agregar un PCR
addPcr(pcr: Ipcr) {
  const storedPcrs = this.getPcrsFromLocalStorage();
  this.cleanPcrData(pcr);
  storedPcrs.push(pcr);
  this.savePcrsToLocalStorage(storedPcrs);
  this.pcrsSubject.next(storedPcrs);
}

// Método para eliminar un PCR
deletePcr(id: string) {
  let storedPcrs = this.getPcrsFromLocalStorage();
  storedPcrs = storedPcrs.filter(pcr => pcr.id !== id);
  this.savePcrsToLocalStorage(storedPcrs);
  this.pcrsSubject.next(storedPcrs);
}

// Método para actualizar un PCR
updatePcr(updatedPcr: Ipcr) {
  let storedPcrs = this.getPcrsFromLocalStorage();
  const index = storedPcrs.findIndex(pcr => pcr.id === updatedPcr.id);
  if (index !== -1) {
      storedPcrs[index] = updatedPcr;
      this.savePcrsToLocalStorage(storedPcrs);
      this.pcrsSubject.next(storedPcrs);
  } else {
      console.error('PCR not found in local storage.');
  }
}

private loadPcrsFromLocalStorage() {
  const storedPcrs = this.getPcrsFromLocalStorage();
  this.pcrsSubject.next(storedPcrs);
}

private getPcrsFromLocalStorage(): Ipcr[] {
  const storedPcrs = localStorage.getItem('pcrs');
  return storedPcrs ? JSON.parse(storedPcrs) : [];
}

private savePcrsToLocalStorage(pcrs: Ipcr[]) {
  localStorage.setItem('pcrs', JSON.stringify(pcrs));
}

cleanPcrData(pcr: Ipcr): void {
  for (const key in pcr) {
    if (Object.prototype.hasOwnProperty.call(pcr, key)) {
      const value = (pcr as any)[key];
      if (typeof value === 'number' && isNaN(value)) {
        (pcr as any)[key] = 0;
      }
    }
  }
}

}
