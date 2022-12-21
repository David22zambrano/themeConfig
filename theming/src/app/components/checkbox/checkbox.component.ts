import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  constructor() {}

  checked = true;
  indeterminate = true;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
