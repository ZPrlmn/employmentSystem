import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEmployeeComponent } from './admin-employee.component';

const routes: Routes = [
  {path: '', component: AdminEmployeeComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmployeeRoutingModule { }
