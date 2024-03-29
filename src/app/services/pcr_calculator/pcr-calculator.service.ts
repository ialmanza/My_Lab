import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PcrCalculatorService {

  private volumenesIniciales: number[];
  private agua: number = 0.0;

  constructor() {
    this.volumenesIniciales = [];
  }

  calcularVolumenInicial(concentracionInicial: number, concentracionFinal: number, volumenFinal: number): number {
    // Implementa la lógica de cálculo del volumen inicial
    let volumenInicial = (concentracionFinal * volumenFinal) / concentracionInicial;
    this.volumenesIniciales.push(volumenInicial);
    return volumenInicial;
  }

  mostrarLosVolumenesIniciales(): number[] {
    return this.volumenesIniciales;
  }

  calculoDelMixDeReaccion(buffer: number, magnesio: number, primerReverse: number, primerForward: number, dntps: number, polimerasa: number, tubosDeReaccion: number): number {
    const resultadoDelMix = buffer * magnesio * primerReverse * primerForward * dntps * polimerasa * this.agua * tubosDeReaccion;
    return resultadoDelMix;
  }

  calcularAgua(volumenFinal: number, volumenDNA: number): number {
    let sumaDeVolumenesIniciales =  0.0;

    for (let i =  0; i < this.volumenesIniciales.length; i++) {
      sumaDeVolumenesIniciales += this.volumenesIniciales[i];
    }

    this.agua = volumenFinal - (sumaDeVolumenesIniciales + volumenDNA);
    return this.agua;
  }


}
