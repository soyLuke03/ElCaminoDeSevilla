import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BienvenidoComponent } from './home/bienvenido/bienvenido.component';
import { CaminarComponent } from './caminar/caminar/caminar.component';
import { BatallaComponent } from './batalla/batalla/batalla.component';
import { InventarioComponent } from './inventario/inventario/inventario.component';
import { ExtrasComponent } from './extras/extras/extras.component';

const routes: Routes = [
  { 
    path: '',
    component: BienvenidoComponent
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'caminar',
    component: CaminarComponent
  },
  { 
    path: 'caminar/batalla/:id/:tipo',
    component: BatallaComponent
  },
  { 
    path: 'extras',
    component: ExtrasComponent
  },
  { 
    path: 'inventario',
    component: InventarioComponent
  },
  { 
    path: '**',
    redirectTo: '', // Redirige a la ruta 'bienvenido'
    pathMatch: 'full', // Solo redirige si la ruta completa no coincide con ninguna otra ruta
    component: BienvenidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
