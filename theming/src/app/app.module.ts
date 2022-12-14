import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizeDirective } from './Directivas/size.directive';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatAutocompleteComponent } from './components/mat-autocomplete/mat-autocomplete.component';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatSpinnerComponent } from './components/mat-spinner/mat-spinner.component';
import { MatBagdeComponent } from './components/mat-bagde/mat-bagde.component';
import { MatProgressBarComponent } from './components/mat-progress-bar/mat-progress-bar.component';
import { MatRadioButtonsComponent } from './components/mat-radio-buttons/mat-radio-buttons.component';
import { MatChipsComponent } from './components/mat-chips/mat-chips.component';
import { MatDataPickerComponent } from './components/mat-data-picker/mat-data-picker.component';
import { MatStepperComponent } from './components/mat-stepper/mat-stepper.component';
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import { MatSlideToggleComponent } from './components/mat-slide-toggle/mat-slide-toggle.component';


@NgModule({
  declarations: [AppComponent,
    ToolbarComponent,
    CheckboxComponent,
    MatAutocompleteComponent,
    MatInputComponent,
    MatButtonsComponent,
    MatSpinnerComponent,
    MatBagdeComponent,
    MatProgressBarComponent,
    MatRadioButtonsComponent,
    MatChipsComponent,
    MatDataPickerComponent,
    MatStepperComponent,
    MatTabsComponent,
    MatSliderComponent,
    MatSlideToggleComponent, SizeDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatChipsModule,
    MatSliderModule,
    MatRadioModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
