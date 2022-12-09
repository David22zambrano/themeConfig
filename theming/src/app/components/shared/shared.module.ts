import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule
  ],
})
export class SharedModule {}
