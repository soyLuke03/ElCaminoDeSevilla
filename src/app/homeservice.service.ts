import { Injectable } from '@angular/core';
import { Enemigo, Personaje, MiniBoss, Boss, Objeto } from './interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class commonService {

  constructor(private router: Router) { }

  perfil: Personaje = {
    nombre: "Dummy",
    clase: "Guerrero",
    inventario: [],
    nivel: 1,
    exp: 0,
    expSubirLvl: 1000,
    vidaMax: 20,
    vida: 20,
    armadura: 5,
    dmgAtaque: 10,
    probCrit: 10,
    dmgCritico: 20,
    precision: 80,
    agilidad: 100
  }

  enemigo: Enemigo = {
    nombre: "Dummy",
    nivel: 1,
    exp: 0,
    vida: 20,
    armadura: 5,
    dmgAtaque: 10,
    probCrit: 10,
    dmgCritico: 20,
    precision: 80,
    agilidad: 100
  }

  miniBoss: MiniBoss = {
    nombre: "Dummy",
    nivel: 1,
    exp: 0,
    vida: 20,
    armadura: 5,
    dmgAtaque: 10,
    probCrit: 10,
    dmgCritico: 20,
    precision: 80,
    agilidad: 100
  }

  boss: Boss = {
    nombre: "Dummy",
    nivel: 1,
    exp: 0,
    vida: 20,
    armadura: 5,
    dmgAtaque: 10,
    probCrit: 10,
    dmgCritico: 20,
    precision: 80,
    agilidad: 100
  }

  tesoro: Objeto = {
    estadisticas: {
      agilidad: 0,
      armadura: 0,
      daño: 0,
      dañoCritico: 0,
      precision: 0,
      probabilidadCritica: 0,
      vida: 0
    },
    nombre: "Objeto"
  }



  crearPerfil(perfil: Personaje) {
    this.perfil = perfil;
    this.router.navigate(['/home'])
  }
}
