import { Component, OnInit, Input } from '@angular/core';
import { Icadena } from '../../../models/Icadena';
import { CadenasADNServiceService } from '../../../services/cadenas_adn/cadenas-adnservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadena-nueva',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './cadena-nueva.component.html',
  styleUrl: './cadena-nueva.component.css'
})
export class CadenaNuevaComponent {
  @Input() cadenas: Icadena | undefined;
  cadenaHeader: string = '';
  resultado = "";

  constructor( private cadenasADNService: CadenasADNServiceService) {

  }

  ngOnInit() { }

  deleteCadena(cadenas : Icadena) {
    if(confirm('Are you sure you want to delete this cadena?')) {
      this.cadenasADNService.deleteCadena(cadenas);
    }
  }


  acortarCadena(cadena:HTMLDivElement): any {
      let cadenaString = cadena.innerText;
      this.resultado = this.cadenasADNService.cortarCadena(cadenaString);
      console.log("Cadena cortada:", this.resultado);


    return this.resultado;
  }
}
