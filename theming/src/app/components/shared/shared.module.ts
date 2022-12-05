import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule
 
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule
  ],
})
export class SharedModule { }
