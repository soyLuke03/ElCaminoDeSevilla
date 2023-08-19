import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    BienvenidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
