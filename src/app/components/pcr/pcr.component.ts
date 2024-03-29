import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PcrFormComponent } from "../pcr-form/pcr-form.component";
import { Ipcr } from '../../models/Ipcr';
import { PcrService } from '../../services/pcr/pcr.service';

@Component({
    selector: 'app-pcr',
    standalone: true,
    templateUrl: './pcr.component.html',
    styleUrl: './pcr.component.css',
    imports: [FormsModule, CommonModule, PcrFormComponent]
})
export class PcrComponent {

  @Input() pcrs: Ipcr | undefined;



  constructor(private pcrService: PcrService) {

  }

  ngOnInit(): void {

  }

  deletePcr(pcrs: Ipcr) {
    if(confirm('Are you sure you want to delete this pcr?')) {
      this.pcrService.deletePcr(pcrs);
    }

  }

}
