import { Component, OnInit } from '@angular/core';
import { CadenasADNServiceService } from '../../../services/cadenas_adn/cadenas-adnservice.service';
import { CadenaNuevaListComponent } from "../cadena-nueva-list/cadena-nueva-list.component";

@Component({
    selector: 'app-cadena-nueva-form',
    standalone: true,
    providers: [CadenasADNServiceService],
    templateUrl: './cadena-nueva-form.component.html',
    styleUrl: './cadena-nueva-form.component.css',
    imports: [CadenaNuevaListComponent]
})
export class CadenaNuevaFormComponent {

  constructor(
    private cadenasADNService: CadenasADNServiceService
  ) {}

  ngOnInit() {}

  addCadena( newCadena: HTMLInputElement, newResultado: HTMLTextAreaElement) {
    const id = Date.now().toString();
    this.cadenasADNService.addCadena({ id, titulo: newCadena.value, resultado: newResultado.value, hide: true});
    newCadena.value = '';
    newResultado.value = '';
    newCadena.focus();
    return false;
  }


}
