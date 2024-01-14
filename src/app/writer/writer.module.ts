import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriterRoutingModule } from './writer-routing.module';
import { WriterComponent } from './writer.component';
import { FormsModule } from '@angular/forms';
import { WriterComponentsComponent } from './writer-components/writer-components.component';
import { NavbarComponent } from './writer-components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WriterComponent,
    WriterComponentsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class WriterModule { }
