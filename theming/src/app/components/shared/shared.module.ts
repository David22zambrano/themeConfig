import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
 
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
})
export class SharedModule { }
