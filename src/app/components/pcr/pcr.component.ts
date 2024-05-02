import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PcrFormComponent } from "../pcr-form/pcr-form.component";
import { Ipcr } from '../../models/Ipcr';
import { PcrService } from '../../services/pcr/pcr.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../ventana-modal/ventana-modal.component';

@Component({
    selector: 'app-pcr',
    standalone: true,
    templateUrl: './pcr.component.html',
    styleUrl: './pcr.component.css',
    imports: [FormsModule, CommonModule, PcrFormComponent]
})
export class PcrComponent {

  @Input() pcrs: Ipcr | undefined;
  editing: boolean = false;
  volumenesIniciales: number[] = [];
  valorDelAgua: number = 0.0;

  //volumenes iniciales por reactivo
  volumenInicialBuffer: number = 0.0;
  volumenInicialMagnesio: number = 0.0;
  volumenInicialPrimerReverse: number = 0.0;
  volumenInicialPrimerForward: number = 0.0;
  volumenInicialDntps: number = 0.0;
  volumenInicialPolimerasa: number = 0.0;

  //mix de reaccion por reactivo
  mixDeReaccionBuffer: number = 0.0;
  mixDeReaccionMagnesio: number = 0.0;
  mixDeReaccionPrimerReverse: number = 0.0;
  mixDeReaccionPrimerForward: number = 0.0;
  mixDeReaccionDntps: number = 0.0;
  mixDeReaccionPolimerasa: number = 0.0;
  mixDeReaccionAgua: number = 0.0;

  volumenDelDNA: number = 0.0;
  cantidadDeTubos: number = 0.0;
  cantidadTotalolumenesIniciales: number = 0.0;




  constructor(private pcrService: PcrService, public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  deletePcr(pcrs: Ipcr) {
    if(confirm('Are you sure you want to delete this pcr?')) {
      this.pcrService.deletePcr(pcrs.id);
    }

  }

  deleteTask(pcrs: Ipcr) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, { // Abre la ventana modal
      width: '250px',
      data: pcrs// Puedes pasar datos al diálogo, como el objeto Task que se está eliminando
    });

    dialogRef.afterClosed().subscribe(result => { // Suscríbete al evento después de cerrar la ventana modal
      if (result) { // Si se confirma la eliminación en el diálogo, elimina la tarea
        this.pcrService.deletePcr(pcrs.id);
      }
    });
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  saveChanges() {
    if (this.pcrs) {
      this.pcrService.updatePcr(this.pcrs);
    }
    this.toggleEdit(); // Desactiva la edición después de guardar

  }


  todosLosCalculosEmpezandoPorLosVolumenesIniciales() {
    // calculos de los volumenes iniciales
    this.volumenInicialBuffer = (this.pcrs?.bufferConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.bufferConcentracionInicial!;
    this.volumenInicialMagnesio = (this.pcrs?.magnesioConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.magnesioConcentracionInicial!;
    this.volumenInicialPrimerReverse = (this.pcrs?.primerReverseConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.primerReverseConcentracionInicial!;
    this.volumenInicialPrimerForward = (this.pcrs?.primerForwardConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.primerForwardConcentracionInicial!;
    this.volumenInicialDntps = (this.pcrs?.dntpsConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.dntpsConcentracionInicial!;
    this.volumenInicialPolimerasa = (this.pcrs?.polimerasaConcentracionFinal! * this.pcrs?.volumenFinal!) / this.pcrs?.polimerasaConcentracionInicial!;
    this.volumenesIniciales.push(this.volumenInicialBuffer, this.volumenInicialMagnesio, this.volumenInicialPrimerReverse, this.volumenInicialPrimerForward, this.volumenInicialDntps, this.volumenInicialPolimerasa);

    // llamada al metodo del agua
    this.valorDelAgua = this.calculoDelValorDelAgua();

    // llamada a los metodos de los calculos de los mix de reaccion de cada reactivo
    this.mixDeReaccionBuffer = this.calculoDeMixDeReaccionBuffer();
    this.mixDeReaccionMagnesio = this.calculoDeMixDeReaccionMagnesio();
    this.mixDeReaccionPrimerReverse = this.calculoDeMixDeReaccionPrimerReverse();
    this.mixDeReaccionPrimerForward = this.calculoDeMixDeReaccionPrimerForward();
    this.mixDeReaccionDntps = this.calculoDeMixDeReaccionDntps();
    this.mixDeReaccionPolimerasa = this.calculoDeMixDeReaccionPolimerasa();this.mixDeReaccionAgua = this.calculoDeMixDeReaccionAgua();

    // Para mostrar
    this.volumenDelDNA = this.pcrs?.volumenDNA!;
    this.cantidadDeTubos = this.pcrs?.tubosDeReaccion!;
    this.cantidadTotalolumenesIniciales = this.calculoDelTotalDeVolumenesIniciales() + this.valorDelAgua;


  }

  calculoDelValorDelAgua() {
    let sumatoria = 0.0;
    let valorDelAgua = 0.0;
    for (let i = 0; i < this.volumenesIniciales.length; i++) {
      sumatoria += this.volumenesIniciales[i];
    }

    return valorDelAgua = this.pcrs?.volumenFinal! - (sumatoria + this.pcrs?.volumenDNA!);
  }

  calculoDeMixDeReaccionBuffer() {
    let valorMixDeReaccionBuffer = 0.0;
    return valorMixDeReaccionBuffer = this.volumenInicialBuffer * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionMagnesio() {
    let valorMixDeReaccionMagnesio = 0.0;
    return valorMixDeReaccionMagnesio = this.volumenInicialMagnesio * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionPrimerReverse() {
    let valorMixDeReaccionPrimerReverse = 0.0;
    return valorMixDeReaccionPrimerReverse = this.volumenInicialPrimerReverse * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionPrimerForward() {
    let valorMixDeReaccionPrimerForward = 0.0;
    return valorMixDeReaccionPrimerForward = this.volumenInicialPrimerForward * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionDntps() {
    let valorMixDeReaccionDntps = 0.0;
    return valorMixDeReaccionDntps = this.volumenInicialDntps * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionPolimerasa() {
    let valorMixDeReaccionPolimerasa = 0.0;
    return valorMixDeReaccionPolimerasa = this.volumenInicialPolimerasa * this.pcrs?.tubosDeReaccion!;
  }

  calculoDeMixDeReaccionAgua() {
    let valorMixDeReaccionAgua = 0.0;
    return valorMixDeReaccionAgua = this.valorDelAgua * this.pcrs?.tubosDeReaccion!;
  }

  calculoDelTotalDeVolumenesIniciales() {
    let sumatoria = 0.0;
    for (let i = 0; i < this.volumenesIniciales.length; i++) {
      sumatoria += this.volumenesIniciales[i];
    }
    return sumatoria;
  }

}
