import { Component } from '@angular/core';
import { CadenaADNComponent } from "../cadena-adn/cadena-adn.component";
import { CommonModule } from '@angular/common';
import { CadenasADNServiceService } from "../../services/cadenas_adn/cadenas-adnservice.service";
import { Icadena } from '../../models/Icadena';


@Component({
    selector: 'app-list-cadenas',
    standalone: true,
    templateUrl: './list-cadenas.component.html',
    styleUrl: './list-cadenas.component.css',
    imports: [CadenaADNComponent, CommonModule]
})
export class ListCadenasComponent {
    cadenas:Icadena[];

    constructor( private cadenasADNService: CadenasADNServiceService) {
      this.cadenas = [];
    }

    ngOnInit(): void {
      this.cadenas = this.cadenasADNService.getCadenas();
    }
}
