import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { UserComponentsComponent } from './user-components/user-components.component';
import { NavbarComponent } from './user-components/navbar/navbar.component';


@NgModule({
  declarations: [
    UserComponent,
    UserComponentsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
