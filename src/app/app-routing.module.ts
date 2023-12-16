import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path:"writer",
    loadChildren: () => import('./writer/writer.module').then(mod => mod.WriterModule)
  },
  {
    path:"",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path:"registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
