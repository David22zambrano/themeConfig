import { Component, Input } from '@angular/core';

export interface MatChip{
  title: String;
  done: boolean;
}

@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['./mat-chips.component.scss']
})
export class MatChipsComponent {
  @Input() public MatChip: MatChip | any;

}
