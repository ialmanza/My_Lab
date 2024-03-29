import { Component, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;


  constructor(private router: Router) {}

    someMethod() {
    this.trigger.openMenu();
  }

  navegarApcrForm() {
    this.router.navigate(['/pcr-form']);
    window.open('/pcr-form', '_blank');
  }

  navegarACadenasDeAdn() {
    this.router.navigate(['/cadena-adn']);
    window.open('/cadena-adn', '_blank');
  }


}
