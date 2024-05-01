import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PcrFormComponent } from "./components/pcr-form/pcr-form.component";
import { PcrComponent } from "./components/pcr/pcr.component";
import { ListPcrsComponent } from "./components/list-pcrs/list-pcrs.component";
import { MenuComponent } from "./components/menu/menu.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        RouterModule,
        RouterOutlet,
        NavigationComponent,
        PcrFormComponent,
        PcrComponent,
        ListPcrsComponent,
        MenuComponent]
})
export class AppComponent {
  title = 'My_Lab';
}
