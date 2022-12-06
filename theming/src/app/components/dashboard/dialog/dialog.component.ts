import { Component } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  
  constructor(public dialog: MatDialog){}
    
  openDialog(){
    this.dialog.open(DialogBoxComponent);

  }
}
