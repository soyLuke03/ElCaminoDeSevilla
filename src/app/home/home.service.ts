import { Injectable } from '@angular/core';
import { Clase } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  async getClases():Promise<Clase[]> {
    const url = `./assets/clases.json`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('No se pudo obtener la información');
    }

    return response.json();
  }
}