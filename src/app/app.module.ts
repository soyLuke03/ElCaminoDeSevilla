import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InventarioModule } from './inventario/inventario.module';
import { BatallaModule } from './batalla/batalla.module';
import { ErrorModule } from './error/error.module';
import { commonService } from './homeservice.service';
import { RouterModule } from '@angular/router';
import { SuperiorComponent } from './menu-superior/superior/superior.component';
import { OpcionesComponent } from './menu-opciones/opciones/opciones.component';
import { FormsModule } from '@angular/forms';
import { CaminarModule } from './caminar/caminar.module';

@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    OpcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    InventarioModule,
    CaminarModule,
    BatallaModule,
    ErrorModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    commonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
