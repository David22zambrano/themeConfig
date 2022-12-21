import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatAutocompleteComponent } from './components/mat-autocomplete/mat-autocomplete.component';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatSpinnerComponent } from './components/mat-spinner/mat-spinner.component';
import { MatBagdeComponent } from './components/mat-bagde/mat-bagde.component';
import { MatProgressBarComponent } from './components/mat-progress-bar/mat-progress-bar.component';
import { MatRadioButtonsComponent } from './components/mat-radio-buttons/mat-radio-buttons.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatChipsComponent } from './components/mat-chips/mat-chips.component';
import { MatDataPickerComponent } from './components/mat-data-picker/mat-data-picker.component';
import { MatStepperComponent } from './components/mat-stepper/mat-stepper.component';
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import { MatSlideToggleComponent } from './components/mat-slide-toggle/mat-slide-toggle.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatExpancionPanelComponent } from './components/mat-expancion-panel/mat-expancion-panel.component';
import { MatMenuComponent } from './components/mat-menu/mat-menu.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatSidenavComponent } from './components/mat-sidenav/mat-sidenav.component';
import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    MatAutocompleteComponent,
    MatInputComponent,
    MatButtonsComponent,
    MatCardComponent,
    MatSpinnerComponent,
    MatBagdeComponent,
    MatProgressBarComponent,
    MatRadioButtonsComponent,
    MatChipsComponent,
    MatDataPickerComponent,
    MatStepperComponent,
    MatTabsComponent,
    MatSliderComponent,
    MatSlideToggleComponent,
    MatTableComponent,
    MatExpancionPanelComponent,
    MatMenuComponent,
    MatSelectComponent,
    MatSidenavComponent,
    MatSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})

export class AppModule { }
