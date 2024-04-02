import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadenasADNServiceService {
 private cadena: string = "";


  constructor() {
   }

  getCadena(): string {
    return this.cadena;
 }

 setCadena(cadena: string): void {
    this.cadena = cadena;
 }

 cortarCadena(cad: string): string {
    let contador = 0;
    let resultado = "";
    for(let i = 0; i < cad.length; i++) {
      if(cad.charAt(i) != ' '){
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
