import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadenasADNServiceService } from '../../services/cadenas_adn/cadenas-adnservice.service';

@Component({
  selector: 'app-cadena-form',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './cadena-form.component.html',
  styleUrl: './cadena-form.component.css'
})
export class CadenaFormComponent {

  cadena: string = "";
  resultado = "";
  cadenasADNService: CadenasADNServiceService;



  constructor(cadenasADNService: CadenasADNServiceService) {
    this.cadenasADNService = cadenasADNService;
}



addCadena(newTitle: HTMLInputElement) {
  console.log("addCadena", newTitle.value);
  return false;
}


acortarCadena(): any {
  if(this.cadena.length > 0) {
    this.resultado = this.cadenasADNService.cortarCadena(this.cadena);
    console.log("Cadena cortada:", this.resultado);
  }
  this.cadena = "";
  return this.resultado;
}
}
