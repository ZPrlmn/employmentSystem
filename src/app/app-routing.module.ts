import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path:"login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path:"registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule)
  },
  {
    path:"employee",
    loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
