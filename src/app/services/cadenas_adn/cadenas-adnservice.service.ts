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
  let storedCadenas = this.getCadenasFromLocalStorage();
  storedCadenas = storedCadenas.filter((cadena: { id: string; }) => cadena.id !== id);
  this.saveCadenasToLocalStorage(storedCadenas);
  this.cadenasSubject.next(storedCadenas);

}
private loadCadenasFromLocalStorage() {
  const storedCadenas = this.getCadenasFromLocalStorage();
  this.cadenasSubject.next(storedCadenas);
}

private getCadenasFromLocalStorage(): Icadena[] {
  const storedCadenas = localStorage.getItem('cadenas');
  return storedCadenas ? JSON.parse(storedCadenas) : [];
}

private saveCadenasToLocalStorage(cadenas: Icadena[]) {
  localStorage.setItem('cadenas', JSON.stringify(cadenas));
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
