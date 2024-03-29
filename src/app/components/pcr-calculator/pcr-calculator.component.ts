import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PcrService } from '../../services/pcr/pcr.service';
import { PcrFormComponent } from "../pcr-form/pcr-form.component";
import { Ipcr } from '../../models/Ipcr';

@Component({
  selector: 'app-pcr-calculator',
  standalone: true,
  imports: [ CommonModule, FormsModule, PcrFormComponent],
  templateUrl: './pcr-calculator.component.html',
  styleUrl: './pcr-calculator.component.css'
})
export class PcrCalculatorComponent {

  pcrs: Ipcr[];
  volumenIniciales: number[];
  volumenInicialResult: number;
  aguaResult: number;
  mixDeReaccionResult: number;


  constructor(private pcrService: PcrService) {
    this.volumenIniciales = [];
    this.pcrs = [];
    this.volumenInicialResult = 0;
    this.aguaResult = 0;
    this.mixDeReaccionResult = 0;
  }

  ngOnInit(): void {
    this.pcrs = this.pcrService.getPcrs();
  }

  calcularVolumenInicial() {

  }

  mostrarLosVolumenesIniciales(): number[] {
    return this.pcrService.mostrarLosVolumenesIniciales();
  }

   calculoDelMixDeReaccion(): void {

   }


   calcularAgua(): void {

   }
}
