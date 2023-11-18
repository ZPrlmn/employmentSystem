import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule
  ]
})
export class LayoutModule { }
