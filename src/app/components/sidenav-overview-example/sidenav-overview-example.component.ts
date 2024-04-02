import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-overview-example',
  standalone: true,
  imports: [ MatSidenavModule],
  templateUrl: './sidenav-overview-example.component.html',
  styleUrl: './sidenav-overview-example.component.css'
})
export class SidenavOverviewExampleComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
