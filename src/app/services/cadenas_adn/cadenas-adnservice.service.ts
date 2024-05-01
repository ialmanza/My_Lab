import { Injectable } from '@angular/core';
import { Icadena } from '../../models/Icadena';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadenasADNServiceService {
  //cadenas: Icadena[];
  private cadenasSubject: BehaviorSubject<Icadena[]> = new BehaviorSubject<Icadena[]>([])


  constructor() {
     //this.cadenas = [];
     this.loadCadenasFromLocalStorage();

   }


  getCadenas():Observable<Icadena[]> {
    return this.cadenasSubject.asObservable();

   }

 addCadena(cadena: Icadena) {
  const storedCadenas = this.getCadenasFromLocalStorage();
  storedCadenas.push(cadena);
  this.saveCadenasToLocalStorage(storedCadenas);
  this.cadenasSubject.next(storedCadenas);
 }

 deleteCadena(id: string) {
  let storedPcrs = this.getCadenasFromLocalStorage();
  storedPcrs = storedPcrs.filter((cadena: { id: string; }) => cadena.id !== id);
  this.saveCadenasToLocalStorage(storedPcrs);
  this.cadenasSubject.next(storedPcrs);

}
private loadCadenasFromLocalStorage() {
  const storedPcrs = this.getCadenasFromLocalStorage();
  this.cadenasSubject.next(storedPcrs);
}

private getCadenasFromLocalStorage(): Icadena[] {
  const storedPcrs = localStorage.getItem('pcrs');
  return storedPcrs ? JSON.parse(storedPcrs) : [];
}

private saveCadenasToLocalStorage(pcrs: Icadena[]) {
  localStorage.setItem('pcrs', JSON.stringify(pcrs));
}

 cortarCadena(cad: string): string {
    let contador = 0;
    let resultado = "";

    let regex = /^[a-zA-Z]+$/;
    for(let i = 0; i < cad.length; i++) {
      if(cad.charAt(i) != ' '&& regex.test(cad.charAt(i))){
        resultado += cad.charAt(i);
        contador += 1;
      }

      if (contador === 3){
        resultado += " ";
        contador = 0;
      }
    }
    return resultado.toUpperCase();
 }


}
