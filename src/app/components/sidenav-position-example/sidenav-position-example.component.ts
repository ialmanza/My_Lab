import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-position-example',
  standalone: true,
  imports: [ MatSidenavModule],
  templateUrl: './sidenav-position-example.component.html',
  styleUrl: './sidenav-position-example.component.css'
})
export class SidenavPositionExampleComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
