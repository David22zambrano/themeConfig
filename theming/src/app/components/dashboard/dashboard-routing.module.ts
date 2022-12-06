import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { TypographyLevelsComponent } from './typography-levels/typography-levels.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:TypographyLevelsComponent},
    {path:'typographys',component:TypographyLevelsComponent},
    {path:'card',component:CardComponent},
    {path:'dialog',component:DialogComponent},
    {path:'table',component:TableComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
