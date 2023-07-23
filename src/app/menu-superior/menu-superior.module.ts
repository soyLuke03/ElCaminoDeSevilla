import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperiorComponent } from './superior/superior.component';



@NgModule({
  declarations: [
    SuperiorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SuperiorComponent
  ]
})
export class MenuSuperiorModule { }
