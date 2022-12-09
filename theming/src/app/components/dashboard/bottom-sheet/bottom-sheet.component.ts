import { Component } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetBodyComponent } from './bottom-sheet-body/bottom-sheet-body.component';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet){}

  openSheet(){
    this._bottomSheet.open(BottomSheetBodyComponent);
  }

}
