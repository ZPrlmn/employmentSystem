import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path: '', component: AdminComponent,
  children:[
    {
      path:"dashboard",
      loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
    {
      path:"list",
      loadChildren: () => import('./list/list.module').then(mod => mod.ListModule)
    },
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
