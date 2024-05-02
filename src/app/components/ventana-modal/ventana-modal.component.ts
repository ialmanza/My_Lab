
import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ventana-modal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css']
 })
 export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
     this.dialog.open(DialogAnimationsExampleDialog, {
       width: '250px',
     });
  }
 }

 @Component({
  selector: 'dialog-animations-example-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './ventana-modal.html',
  styleUrls: ['./ventana-modal.component.css']
 })
 export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
 }
