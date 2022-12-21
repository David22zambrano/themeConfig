import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetBodyComponent } from './mat-bottom-sheet-body/mat-bottom-sheet-body.component';

@Component({
  selector: 'app-mat-bottom-sheet',
  templateUrl: './mat-bottom-sheet.component.html',
  styleUrls: ['./mat-bottom-sheet.component.scss']
})
export class MatBottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetBodyComponent);
  }
}
