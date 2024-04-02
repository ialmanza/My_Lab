import { Injectable, input } from '@angular/core';
import { Ipcr } from '../../models/Ipcr';

@Injectable({
  providedIn: 'root'
})
export class PcrService {
  pcrs: Ipcr[];
  private volumenesIniciales: number[];
  private agua: number = 0.0;

  constructor( ) {
    this.volumenesIniciales = [];
    this.pcrs = [
      {
        volumenFinal: 1,
        volumenDNA: 2,
        tubosDeReaccion: 3,
        bufferConcentracionInicial: 4,
        bufferConcentracionFinal: 5,
        bufferVolumenFinal: 6,
        magnesioConcentracionInicial: 7,
        magnesioConcentracionFinal: 8,
        magnesioVolumenFinal: 9,
        primerReverseConcentracionInicial: 10,
        primerReverseConcentracionFinal: 11,
        primerReverseVolumenFinal: 12,
        primerForwardConcentracionInicial: 13,
        primerForwardConcentracionFinal: 14,
        primerForwardVolumenFinal: 15,
        dntpsConcentracionInicial: 16,
        dntpsConcentracionFinal: 17,
        dntpsVolumenFinal: 18,
        polimerasaConcentracionInicial: 19,
        polimerasaConcentracionFinal: 20,
        polimerasaVolumenFinal: 21,
        hide: true
      },
      {

        volumenFinal: 22,
        volumenDNA: 23,
        tubosDeReaccion: 35,
        bufferConcentracionInicial: 47,
        bufferConcentracionFinal: 51,
        bufferVolumenFinal: 69,
        magnesioConcentracionInicial: 74,
        magnesioConcentracionFinal: 58,
        magnesioVolumenFinal: 89,
        primerReverseConcentracionInicial: 81,
        primerReverseConcentracionFinal: 98,
        primerReverseVolumenFinal: 65,
        primerForwardConcentracionInicial: 47,
        primerForwardConcentracionFinal: 24,
        primerForwardVolumenFinal: 79,
        dntpsConcentracionInicial: 24,
        dntpsConcentracionFinal: 86,
        dntpsVolumenFinal: 88,
        polimerasaConcentracionInicial: 39,
        polimerasaConcentracionFinal: 54,
        polimerasaVolumenFinal: 77,
        hide: true
       }
    ]

  }

  getPcrs(){
    return this.pcrs;
  }


  addPcr(pcr: Ipcr){
    console.log(pcr);
    this.pcrs.push(pcr);
  }

  deletePcr(pcr: Ipcr){
    for (let i = 0; i < this.pcrs.length; i++){
      if (this.pcrs[i] === pcr){
        this.pcrs.splice(i, 1);
      }
    }
  }

  calcularVolumenInicial() {
    // for(let i = 0; i < this.volumenesIniciales.length; i++){
    //   this.volumenesIniciales[i] = (this.pcrs[i].concentracionFinal * this.pcrs[i].volumenFinal) / this.pcrs[i].concentracionInicial;
    //   this.volumenesIniciales.push(this.volumenesIniciales[i]);
    // }

    return this.volumenesIniciales;
  }

  mostrarLosVolumenesIniciales(): number[] {
    return this.volumenesIniciales;
  }

  calculoDelMixDeReaccion(): number {
    let tubosDeReaccion = 0;
    let resultadoDelMix = 0;
    const inputTubosDeReaccion = document.getElementById('inputTubosDeReaccion') as HTMLInputElement;
    if (inputTubosDeReaccion && !isNaN(inputTubosDeReaccion.valueAsNumber)){
      tubosDeReaccion = inputTubosDeReaccion.valueAsNumber;
    }

    // for(let i = 0; i < this.pcrs.length; i++){
    //   resultadoDelMix = this.pcrs[i].bufferValue * this.pcrs[i].magnesioValue * this.pcrs[i].primerReverseValue * this.pcrs[i].primerForwardValue * this.pcrs[i].dntpsValue * this.pcrs[i].polimerasaValue * this.agua * tubosDeReaccion;
    // }

    return resultadoDelMix;
  }

  calcularAgua(): number {
    let agua = 0.0;
    let sumaDeVolumenesIniciales =  0.0;

    for (let i =  0; i < this.pcrs.length; i++) {
      //for (let j =  0; j < this.volumenesIniciales.length; j++) {
        sumaDeVolumenesIniciales += this.volumenesIniciales[i];
      //}
      agua = this.pcrs[i].volumenFinal - (sumaDeVolumenesIniciales + this.pcrs[i].volumenDNA);
    }
    return agua;
  }



}
