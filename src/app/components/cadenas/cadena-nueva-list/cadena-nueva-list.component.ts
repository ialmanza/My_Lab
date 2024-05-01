import { Component } from '@angular/core';
import { CadenasADNServiceService } from '../../../services/cadenas_adn/cadenas-adnservice.service';
import { Icadena } from '../../../models/Icadena';
import { CommonModule } from '@angular/common';
import { CadenaNuevaComponent } from "../cadena-nueva/cadena-nueva.component";

@Component({
    selector: 'app-cadena-nueva-list',
    standalone: true,
    templateUrl: './cadena-nueva-list.component.html',
    styleUrl: './cadena-nueva-list.component.css',
    imports: [CommonModule, CadenaNuevaComponent]
})
export class CadenaNuevaListComponent {

  cadenas: Icadena[];

  constructor( private cadenasADNService: CadenasADNServiceService) {
    this.cadenas = [ ];
  }

  ngOnInit():void {
    this.cadenasADNService.getCadenas().subscribe((cadenas: Icadena[]) => {
      this.cadenas = cadenas;
    });
  }


}
