import { Injectable } from '@angular/core';
import { Boss, Enemigo, MiniBoss, Objeto } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CaminarService {

  async getEnemigos():Promise<Enemigo[]> {
    const url = `./assets/enemigos.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('No se pudo obtener la información');
    }

    return response.json();
  }

  async getMinibosses():Promise<MiniBoss[]> {
    const url = `./assets/miniBoss.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('No se pudo obtener la información');
    }

    return response.json();
  }

  async getBosses():Promise<Boss[]> {
    const url = `./assets/boss.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('No se pudo obtener la información');
    }

    return response.json();
  }

  async getObjetos():Promise<Objeto[]> {
    const url = `./assets/objetos.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('No se pudo obtener la información');
    }

    return response.json();
  }
}