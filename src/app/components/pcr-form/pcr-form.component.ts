import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PcrService } from '../../services/pcr/pcr.service';
import {MatTabsModule} from '@angular/material/tabs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPcrsComponent } from "../list-pcrs/list-pcrs.component";


@Component({
    selector: 'app-pcr-form',
    standalone: true,
    templateUrl: './pcr-form.component.html',
    styleUrl: './pcr-form.component.css',
    imports: [FormsModule, CommonModule, MatTabsModule, ReactiveFormsModule, ListPcrsComponent]
})
export class PcrFormComponent {
  pcrForm: FormGroup;
  form: any;

  constructor( private pcrService: PcrService, private fb: FormBuilder) {
    this.pcrForm = this.fb.group({
      volumenFinal: [''],
      volumenDNA: [''],
      tubosDeReaccion: [''],
      //buffer
      bufferConcentracionInicial: [''],
      bufferConcentracionFinal: [''],
      bufferVolumenFinal: [''],
      //magnesio
      magnesioConcentracionInicial: [''],
      magnesioConcentracionFinal: [''],
      magnesioVolumenFinal: [''],
      //primerReverse
      primerReverseConcentracionInicial: [''],
      primerReverseConcentracionFinal: [''],
      primerReverseVolumenFinal: [''],
      //primerForward
      primerForwardConcentracionInicial: [''],
      primerForwardConcentracionFinal: [''],
      primerForwardVolumenFinal: [''],
      //dntps
      dntpsConcentracionInicial: [''],
      dntpsConcentracionFinal: [''],
      dntpsVolumenFinal: [''],
      //polimerasa
      polimerasaConcentracionInicial: [''],
      polimerasaConcentracionFinal: [''],
      polimerasaVolumenFinal: [''],

    });

  }


  ngOnInit(): void {

  }

  addPcrForm(  volumenFinal:HTMLInputElement, volumenDNA:HTMLInputElement, tubosDeReaccion:HTMLInputElement,
               bufferConcentracionInicial:HTMLInputElement, bufferConcentracionFinal:HTMLInputElement, bufferVolumenFinal:HTMLInputElement,
               magnesioConcentracionInicial:HTMLInputElement, magnesioConcentracionFinal:HTMLInputElement, magnesioVolumenFinal:HTMLInputElement,
               primerReverseConcentracionInicial:HTMLInputElement, primerReverseConcentracionFinal:HTMLInputElement, primerReverseVolumenFinal:HTMLInputElement,
               primerForwardConcentracionInicial:HTMLInputElement, primerForwardConcentracionFinal:HTMLInputElement, primerForwardVolumenFinal:HTMLInputElement,
               dntpsConcentracionInicial:HTMLInputElement, dntpsConcentracionFinal:HTMLInputElement, dntpsVolumenFinal:HTMLInputElement,
               polimerasaConcentracionInicial:HTMLInputElement, polimerasaConcentracionFinal:HTMLInputElement, polimerasaVolumenFinal:HTMLInputElement
  ) {
    const id = Date.now().toString();
    this.pcrService.addPcr({
      id,
      volumenFinal: parseFloat(volumenFinal?.value ?? '0'),
      volumenDNA: parseFloat(volumenDNA?.value ?? '0'),
      tubosDeReaccion: parseFloat(tubosDeReaccion?.value ?? '0'),

      bufferConcentracionInicial: parseFloat(bufferConcentracionInicial?.value ?? '0'),
      bufferConcentracionFinal: parseFloat(bufferConcentracionFinal?.value ?? '0'),
      bufferVolumenFinal: parseFloat(bufferVolumenFinal?.value ?? '0'),

      magnesioConcentracionInicial: parseFloat(magnesioConcentracionInicial?.value ?? '0'),
      magnesioConcentracionFinal: parseFloat(magnesioConcentracionFinal?.value ?? '0'),
      magnesioVolumenFinal: parseFloat(magnesioVolumenFinal?.value ?? '0'),

      primerReverseConcentracionInicial: parseFloat(primerReverseConcentracionInicial?.value ?? '0'),
      primerReverseConcentracionFinal: parseFloat(primerReverseConcentracionFinal?.value ?? '0'),
      primerReverseVolumenFinal: parseFloat(primerReverseVolumenFinal?.value ?? '0'),

      primerForwardConcentracionInicial: parseFloat(primerForwardConcentracionInicial?.value ?? '0'),
      primerForwardConcentracionFinal: parseFloat(primerForwardConcentracionFinal?.value ?? '0'),
      primerForwardVolumenFinal: parseFloat(primerForwardVolumenFinal?.value ?? '0'),

      dntpsConcentracionInicial: parseFloat(dntpsConcentracionInicial?.value ?? '0'),
      dntpsConcentracionFinal: parseFloat(dntpsConcentracionFinal?.value ?? '0'),
      dntpsVolumenFinal: parseFloat(dntpsVolumenFinal?.value ?? '0'),

      polimerasaConcentracionInicial: parseFloat(polimerasaConcentracionInicial?.value ?? '0'),
      polimerasaConcentracionFinal: parseFloat(polimerasaConcentracionFinal?.value ?? '0'),
      polimerasaVolumenFinal: parseFloat(polimerasaVolumenFinal?.value ?? '0'),

      hide: true
    });

    volumenFinal.value = '';
    volumenDNA.value = '';
    tubosDeReaccion.value = '';

    bufferConcentracionInicial.value = '';
    bufferConcentracionFinal.value = '';
    bufferVolumenFinal.value = '';

    magnesioConcentracionInicial.value = '';
    magnesioConcentracionFinal.value = '';
    magnesioVolumenFinal.value = '';

    primerReverseConcentracionInicial.value = '';
    primerReverseConcentracionFinal.value = '';
    primerReverseVolumenFinal.value = '';

    primerForwardConcentracionInicial.value = '';
    primerForwardConcentracionFinal.value = '';
    primerForwardVolumenFinal.value = '';

    dntpsConcentracionInicial.value = '';
    dntpsConcentracionFinal.value = '';
    dntpsVolumenFinal.value = '';

    polimerasaConcentracionInicial.value = '';
    polimerasaConcentracionFinal.value = '';
    polimerasaVolumenFinal.value = '';


    volumenFinal.focus();
    return false;
  }


}
