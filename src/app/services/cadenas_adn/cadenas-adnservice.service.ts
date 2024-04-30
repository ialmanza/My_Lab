import { Injectable } from '@angular/core';
import { Icadena } from '../../models/Icadena';

@Injectable({
  providedIn: 'root'
})
export class CadenasADNServiceService {
  cadenas: Icadena[];


  constructor() {
    this.cadenas = [
      {cadena: "ATGCGA", resultado: "adenina", hide: true},
      {cadena: "TGGCCA", resultado: "guanina", hide: true},
      {cadena: "ATGCCG", resultado: "citosina", hide: true}
    ];

   }

  getCadenas() {
    return this.cadenas;
 }

 setCadena(cadena: Icadena[]) {
    this.cadenas = cadena;
 }
 addCadena(cadena: Icadena) {
    this.cadenas.push(cadena);

 }

 deleteCadena(cadena: Icadena) {
    for (let i = 0; i < this.cadenas.length; i++) {
      if (this.cadenas[i] === cadena) {
        this.cadenas.splice(i, 1);
      }
    }
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
    return resultado;
 }


}
