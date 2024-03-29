import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadenasADNServiceService } from '../../services/cadenas_adn/cadenas-adnservice.service';

@Component({
  selector: 'app-cadena-adn',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadena-adn.component.html',
  styleUrl: './cadena-adn.component.css'
})
export class CadenaADNComponent {
  cadena: string = "";
  resultado ="";
  cadenasADNService: CadenasADNServiceService;


  constructor(cadenasADNService: CadenasADNServiceService) {
    this.cadenasADNService = cadenasADNService;
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
