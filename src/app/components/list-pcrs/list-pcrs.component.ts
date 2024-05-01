import { Component } from '@angular/core';
import { PcrService } from '../../services/pcr/pcr.service';
import { Ipcr } from '../../models/Ipcr';
import { CommonModule } from '@angular/common';
import { PcrComponent } from "../pcr/pcr.component";

@Component({
    selector: 'app-list-pcrs',
    standalone: true,
    templateUrl: './list-pcrs.component.html',
    styleUrl: './list-pcrs.component.css',
    imports: [CommonModule, PcrComponent]
})
export class ListPcrsComponent {

  pcrs: Ipcr[];

  constructor(private pcrService: PcrService) {
    this.pcrs = [ ];

  }

  ngOnInit(): void {
    this.pcrService.getPcrs().subscribe((pcrs: Ipcr[]) => {
      this.pcrs = pcrs;
    });

  }


}
