import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-body',
  templateUrl: './bottom-sheet-body.component.html',
})
export class BottomSheetBodyComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<any>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
