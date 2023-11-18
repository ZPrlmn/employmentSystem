import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { TableComponent } from 'src/app/components/table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
