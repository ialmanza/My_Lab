import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadenasADNServiceService } from '../../services/cadenas_adn/cadenas-adnservice.service';
import { Icadena } from '../../models/Icadena';
import { ListCadenasComponent } from "../list-cadenas/list-cadenas.component";
import { CadenaNuevaListComponent } from "../cadenas/cadena-nueva-list/cadena-nueva-list.component";

@Component({
    selector: 'app-cadena-adn',
    standalone: true,
    templateUrl: './cadena-adn.component.html',
    styleUrl: './cadena-adn.component.css',
    imports: [FormsModule, CommonModule, ListCadenasComponent, CadenaNuevaListComponent]
})
export class CadenaADNComponent {

  cadena: string = "";
  resultado ="";
  cadenasADNService: CadenasADNServiceService;

  @Input() cad: Icadena | undefined;



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

  deleteCadena(cadena : any) {
    if(confirm('Are you sure you want to delete this cadena?')) {
      //this.cadenasADNService.deleteCadena(cadena);
    }
  }
}
