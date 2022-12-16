import { Component, Input, OnInit } from '@angular/core';
export interface Checkbox {
  title: string;
  done: boolean;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  constructor() {}

  @Input() public  checkbox: Checkbox | any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;


}
