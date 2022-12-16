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
import { MatProgressSpinnerModule       } from '@angular/material/progress-spinner';
import { MatProgressBarModule           } from '@angular/material/progress-bar';
import { MatDatepickerModule            } from '@angular/material/datepicker';
import { MatStepperModule               } from '@angular/material/stepper';
import { MatTabsModule                  } from '@angular/material/tabs';
import { MatSliderModule                } from '@angular/material/slider';
import { MatSlideToggleModule           } from '@angular/material/slide-toggle';


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
  MatInputModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatStepperModule,
  MatTabsModule,
  MatSliderModule,
  MatSlideToggleModule
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
