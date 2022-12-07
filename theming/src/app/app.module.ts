import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DirectivasColor } from 'src/theming/config';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatAutocompleteComponent } from './components/mat-autocomplete/mat-autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DirectivasColor,
    CheckboxComponent,
    MatAutocompleteComponent
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
