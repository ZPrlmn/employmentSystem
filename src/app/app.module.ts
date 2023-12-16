import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationModule } from './registration/registration.module';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { WriterModule } from './writer/writer.module';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistrationModule,
    UserModule,
    WriterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
