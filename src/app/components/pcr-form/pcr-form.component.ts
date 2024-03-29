import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PcrService } from '../../services/pcr/pcr.service';
import {MatTabsModule} from '@angular/material/tabs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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

  addPcrForm() {
    console.log("addPcrForm", this.pcrForm.value);
    this.pcrService.addPcr({
      volumenFinal: parseFloat(this.pcrForm.get('volumenFinal')?.value ?? '0'),
      volumenDNA: parseFloat(this.pcrForm.get('volumenDNA')?.value ?? '0'),
      tubosDeReaccion: parseFloat(this.pcrForm.get('tubosDeReaccion')?.value ?? '0'),

      bufferConcentracionInicial: parseFloat(this.pcrForm.get('bufferConcentracionInicial')?.value ?? '0'),
      bufferConcentracionFinal: parseFloat(this.pcrForm.get('bufferConcentracionFinal')?.value ?? '0'),
      bufferVolumenFinal: parseFloat(this.pcrForm.get('bufferVolumenFinal')?.value ?? '0'),

      magnesioConcentracionInicial: parseFloat(this.pcrForm.get('magnesioConcentracionInicial')?.value ?? '0'),
      magnesioConcentracionFinal: parseFloat(this.pcrForm.get('magnesioConcentracionFinal')?.value ?? '0'),
      magnesioVolumenFinal: parseFloat(this.pcrForm.get('magnesioVolumenFinal')?.value ?? '0'),

      primerReverseConcentracionInicial: parseFloat(this.pcrForm.get('primerReverseConcentracionInicial')?.value ?? '0'),
      primerReverseConcentracionFinal: parseFloat(this.pcrForm.get('primerReverseConcentracionFinal')?.value ?? '0'),
      primerReverseVolumenFinal: parseFloat(this.pcrForm.get('primerReverseVolumenFinal')?.value ?? '0'),

      primerForwardConcentracionInicial: parseFloat(this.pcrForm.get('primerForwardConcentracionOInicial')?.value ?? '0'),
      primerForwardConcentracionFinal: parseFloat(this.pcrForm.get('primerForwardConcentracionFinal')?.value ?? '0'),
      primerForwardVolumenFinal: parseFloat(this.pcrForm.get('primerForwardVolumenFinal')?.value ?? '0'),

      dntpsConcentracionInicial: parseFloat(this.pcrForm.get('dntpsConcentracionInicial')?.value ?? '0'),
      dntpsConcentracionFinal: parseFloat(this.pcrForm.get('dntpsConcentracionFinal')?.value ?? '0'),
      dntpsVolumenFinal: parseFloat(this.pcrForm.get('dntpsVolumenFinal')?.value ?? '0'),

      polimerasaConcentracionInicial: parseFloat(this.pcrForm.get('polimerasaConcentracionInicial')?.value ?? '0'),
      polimerasaConcentracionFinal: parseFloat(this.pcrForm.get('polimerasaConcentracionFinal')?.value ?? '0'),
      polimerasaVolumenFinal: parseFloat(this.pcrForm.get('polimerasaVolumenFinal')?.value ?? '0'),

      hide: true
    });

    // Limpiar el formulario
    this.pcrForm.reset();
}


}
