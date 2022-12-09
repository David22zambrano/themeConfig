import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { TypographyLevelsComponent } from './typography-levels/typography-levels.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { DialogBoxComponent } from './dialog/dialog-box/dialog-box.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetBodyComponent } from './bottom-sheet/bottom-sheet-body/bottom-sheet-body.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TypographyLevelsComponent,
    NavBarComponent,
    CardComponent,
    DialogComponent,
    TableComponent,
    DialogBoxComponent,
    BottomSheetComponent,
    BottomSheetBodyComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
