import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AdminComponent } from '../admin/admin.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'user', component:UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
