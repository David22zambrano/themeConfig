import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher, ThemePalette } from '@angular/material/core';

// export declare type ThemePalette = 'primary' | 'accent' | 'success' | undefined;
@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent {
  
  // color:ThemePalette

  // mostrarColor(){
  //   console.log(this.color?.prim)
  // }

}
