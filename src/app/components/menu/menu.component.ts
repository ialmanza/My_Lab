import { Component, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule,
            MatMenuModule,
            MatIconModule,
            RouterModule,
            MatSidenavModule],
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
  }

  navegarACadenasDeAdn() {
    this.router.navigate(['/cadena-adn']);
  }

  navigateToStart() {
    this.router.navigate(['/']);
  }

}
