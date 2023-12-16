import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriterComponent } from './writer.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path: '', component: WriterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
