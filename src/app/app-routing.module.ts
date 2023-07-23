import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './error/error/error.component';
import { BienvenidoComponent } from './home/bienvenido/bienvenido.component';
import { CaminarComponent } from './caminar/caminar/caminar.component';
import { BatallaComponent } from './batalla/batalla/batalla.component';
import { InventarioComponent } from './inventario/inventario/inventario.component';

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
    path: 'caminar/batalla/:boss/:tipo',
    component: BatallaComponent
  },
  { 
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
