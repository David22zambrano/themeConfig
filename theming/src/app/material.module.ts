import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatIconModule                  } from '@angular/material/icon';
import { MatToolbarModule               } from '@angular/material/toolbar';
import { MatButtonModule                } from '@angular/material/button';
import { MatBadgeModule                 } from '@angular/material/badge';
import { MatCheckboxModule              } from '@angular/material/checkbox';
import { MatRadioModule                 } from '@angular/material/radio';
import { MatChipsModule                 } from '@angular/material/chips';
import { MatAutocompleteModule          } from '@angular/material/autocomplete';
import { MatFormFieldModule             } from '@angular/material/form-field';
import { MatInputModule                 } from '@angular/material/input';

const component = [
  CommonModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatRadioModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    component
  ],
  exports: [
    component
  ],
})
export class MaterialModule { }
