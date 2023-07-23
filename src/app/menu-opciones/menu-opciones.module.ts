import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionesComponent } from './opciones/opciones.component';



@NgModule({
  declarations: [
    OpcionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OpcionesComponent
  ]
})
export class MenuOpcionesModule { }
