import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeeComponent } from '../employee/employee.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path: '', component: AdminComponent,
  children:[
    {
      path:"dashboard",
      loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
    {
      path:'employee/list',
      loadChildren: () => import('./admin-employee/admin-employee.module').then(mod => mod.AdminEmployeeModule)
    }
  ]
  },
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
