import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { commonService } from 'src/app/homeservice.service';
import { Enemigo, MiniBoss, Personaje } from 'src/app/interfaces';
import Swal from 'sweetalert2'
import { Boss } from '../../interfaces';

@Component({
  selector: 'app-caminar',
  templateUrl: './caminar.component.html',
  styleUrls: ['./caminar.component.css']
})
export class CaminarComponent implements OnInit {

  personaje: Personaje = this.service.perfil
  enemigo: Enemigo | undefined;
  miniBoss: MiniBoss | undefined;
  boss: Boss | undefined;

  constructor(private service: commonService, private router: Router) { }


  ngOnInit(): void {
  }

  caminar() {
    // Numero de generación al caminar
    let RNGEnemigo = Math.floor(Math.random() * 10);
    let RNGBoss = Math.floor(Math.random() * 3);
    let RNGMiniBoss = Math.floor(Math.random() * 5);
    let RNG = Math.floor(Math.random() * 100);

    if (RNG <= 20) {
      Swal.fire(
        'No has encontrado nada'
      )
    }
    else if (RNG <= 80 && RNG > 20) {
      Swal.fire({
        title: 'Has encontrado un enemigo. Empieza la batalla',
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Vamos al lío',
        cancelButtonText: 'No, me cago'
      }).then((result) => {
        // Si se acepta la pelea

        //Obtenemos los parámetros del enemigo
        let nivelEnemigo = this.RNGNivelEnemigo()
        if (result.isConfirmed) {
          switch (RNGEnemigo) {
            case 0:
              this.service.enemigo = {
                nombre: "Un cani",
                nivel: nivelEnemigo,
                exp: 50 * nivelEnemigo,
                vida: 10 + (4 * nivelEnemigo),
                armadura: 1 + (0.5 * nivelEnemigo),
                dmgAtaque: 3 + (0.5 * nivelEnemigo),
                probCrit: 10,
                dmgCritico: 6 + (nivelEnemigo),
                precision: 80,
                agilidad: 80
              }
              break;
            case 1:
              this.service.enemigo = {
                nombre: "Alfredis",
                nivel: nivelEnemigo,
                exp: 80 * nivelEnemigo,
                vida: 20 + (5 * nivelEnemigo),
                armadura: 2.5 + (0.25 * nivelEnemigo),
                dmgAtaque: 5 + (0.5 * nivelEnemigo),
                probCrit: 20,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 80,
                agilidad: 40
              }
              break;
            case 2:
              this.service.enemigo = {
                nombre: "Un conejo malo",
                nivel: nivelEnemigo,
                exp: 20 * nivelEnemigo,
                vida: 40 + (4 * nivelEnemigo),
                armadura: 0 + (0 * nivelEnemigo),
                dmgAtaque: 1 + (0.5 * nivelEnemigo),
                probCrit: 0,
                dmgCritico: 2 + (nivelEnemigo),
                precision: 100,
                agilidad: 180
              }
              break;
            case 3:
              this.service.enemigo = {
                nombre: "Señor del dab",
                nivel: nivelEnemigo,
                exp: 150 * nivelEnemigo,
                vida: 6 + (6 * nivelEnemigo),
                armadura: 2 + (0.1 * nivelEnemigo),
                dmgAtaque: 5 + (1 * nivelEnemigo),
                probCrit: 10,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 50,
                agilidad: 150
              }
              break;
            case 4:
              this.service.enemigo = {
                nombre: "Tubo de metal",
                nivel: nivelEnemigo,
                exp: 250 * nivelEnemigo,
                vida: 10 + (10 * nivelEnemigo),
                armadura: 5 + (1 * nivelEnemigo),
                dmgAtaque: 5 + (0.5 * nivelEnemigo),
                probCrit: 10,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 100,
                agilidad: 0
              }
              break;
            case 5:
              this.service.enemigo = {
                nombre: "Tu profe de gimnasia",
                nivel: nivelEnemigo,
                exp: 60 * nivelEnemigo,
                vida: 5 + (5 * nivelEnemigo),
                armadura: 4 + (1 * nivelEnemigo),
                dmgAtaque: 2 + (0.15 * nivelEnemigo),
                probCrit: 90,
                dmgCritico: 4 + (nivelEnemigo),
                precision: 30,
                agilidad: 30
              }
              break;
            case 6:
              this.service.enemigo = {
                nombre: "Agente internacional Richard Widmark",
                nivel: nivelEnemigo,
                exp: 350 * nivelEnemigo,
                vida: 30 + (8 * nivelEnemigo),
                armadura: 3 + (0.5 * nivelEnemigo),
                dmgAtaque: 5 + (0.75 * nivelEnemigo),
                probCrit: 40,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 100,
                agilidad: 70
              }
              break;
            case 7:
              this.service.enemigo = {
                nombre: "La dramas",
                nivel: nivelEnemigo,
                exp: 70 * nivelEnemigo,
                vida: 20 + (3 * nivelEnemigo),
                armadura: 2 + (0.3 * nivelEnemigo),
                dmgAtaque: 1 + (0.5 * nivelEnemigo),
                probCrit: 30,
                dmgCritico: 2 + (nivelEnemigo),
                precision: 100,
                agilidad: 140
              }
              break;
            case 8:
              this.service.enemigo = {
                nombre: "Doble elefante telépata de guerra",
                nivel: nivelEnemigo,
                exp: 20 * nivelEnemigo,
                vida: 5 + (10 * nivelEnemigo),
                armadura: 5 + (1 * nivelEnemigo),
                dmgAtaque: 5 + (0.25 * nivelEnemigo),
                probCrit: 30,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 100,
                agilidad: 50
              }
              break;
            case 9:
              this.service.enemigo = {
                nombre: "Concejal de Podemos",
                nivel: nivelEnemigo,
                exp: 70 * nivelEnemigo,
                vida: 15 + (5 * nivelEnemigo),
                armadura: 0 + (0.5 * nivelEnemigo),
                dmgAtaque: 2.5 + (0.5 * nivelEnemigo),
                probCrit: 10,
                dmgCritico: 5 + (nivelEnemigo),
                precision: 50,
                agilidad: 180
              }
              break;
          }
          this.router.navigate(['caminar/batalla', RNGEnemigo, "enemigo"])
        }
        else {
          Swal.fire({
            title: "Huiste"
          })
        }
      })
    }
    else if (RNG > 80 && RNG <= 90) {
      Swal.fire({
        title: 'Has encontrado un miniBOSS',
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Vamos al lío',
        cancelButtonText: 'No, me cago'
      }).then((result) => {
        // Si se acepta la pelea

        //Obtenemos los parámetros del miniboss
        let nivelEnemigo = this.RNGNivelEnemigo()
        if (result.isConfirmed) {
          switch (RNGMiniBoss) {
            case 0:
              this.service.miniBoss = {
                nombre: "Iniesta de Kalipse",
                nivel: nivelEnemigo,
                exp: 300 * nivelEnemigo,
                vida: 30 + (10 * nivelEnemigo),
                armadura: 5 + (0.5 * nivelEnemigo),
                dmgAtaque: 10 + (1 * nivelEnemigo),
                probCrit: 30,
                dmgCritico: 20 + (nivelEnemigo),
                precision: 60,
                agilidad: 80
              }
              break;
            case 1:
              this.service.miniBoss = {
                nombre: "Paco",
                nivel: nivelEnemigo,
                exp: 280 * nivelEnemigo,
                vida: 5 + (25 * nivelEnemigo),
                armadura: 1 + (0.5 * nivelEnemigo),
                dmgAtaque: 1 + (1.5 * nivelEnemigo),
                probCrit: 40,
                dmgCritico: 2 + (nivelEnemigo),
                precision: 40,
                agilidad: 100
              }
              break;
            case 2:
              this.service.miniBoss = {
                nombre: "El Nano",
                nivel: nivelEnemigo,
                exp: 310 * nivelEnemigo,
                vida: 20 + (5 * nivelEnemigo),
                armadura: 1 + (1 * nivelEnemigo),
                dmgAtaque: 10 + (0.5 * nivelEnemigo),
                probCrit: 0,
                dmgCritico: 14 + (nivelEnemigo),
                precision: 80,
                agilidad: 200
              }
              break;
            case 3:
              this.service.miniBoss = {
                nombre: "Slapchop",
                nivel: nivelEnemigo,
                exp: 190 * nivelEnemigo,
                vida: 15 + (5 * nivelEnemigo),
                armadura: 3 + (0.1 * nivelEnemigo),
                dmgAtaque: 5 + (1 * nivelEnemigo),
                probCrit: 30,
                dmgCritico: 10 + (nivelEnemigo),
                precision: 100,
                agilidad: 100
              }
              break;
            case 4:
              this.service.miniBoss = {
                nombre: "Juan",
                nivel: nivelEnemigo,
                exp: 300 * nivelEnemigo,
                vida: 25 + (7 * nivelEnemigo),
                armadura: 0 + (1 * nivelEnemigo),
                dmgAtaque: 3 + (0.8 * nivelEnemigo),
                probCrit: 20,
                dmgCritico: 6 + (nivelEnemigo),
                precision: 100,
                agilidad: 190
              }
              break;
          }
          this.router.navigate(['caminar/batalla', RNGMiniBoss, "MiniBoss"])
        }
        else {
          Swal.fire({
            title: "Huiste"
          })
        }
      })
    }
    else if (RNG > 90 && RNG <= 95) {
      Swal.fire({
        title: 'Has encontrado un BOSS',
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Vamos al lío',
        cancelButtonText: 'No, me cago'
      }).then((result) => {
        // Si se acepta la pelea

        //Obtenemos los parámetros del boss
        let nivelEnemigo = this.RNGNivelEnemigo()
        if (result.isConfirmed) {
          switch (RNGBoss) {
            case 0:
              this.service.boss = {
                nombre: "Santiago Abascal",
                nivel: nivelEnemigo,
                exp: 500 * nivelEnemigo,
                vida: 70 + (10 * nivelEnemigo),
                armadura: 15 + (0.5 * nivelEnemigo),
                dmgAtaque: 15 + (1 * nivelEnemigo),
                probCrit: 30,
                dmgCritico: 30 + (nivelEnemigo),
                precision: 60,
                agilidad: 120
              }
              break;
            case 1:
              this.service.boss = {
                nombre: "Franco",
                nivel: nivelEnemigo,
                exp: 650 * nivelEnemigo,
                vida: 0 + (70 * nivelEnemigo),
                armadura: 5 + (1 * nivelEnemigo),
                dmgAtaque: 25 + (1 * nivelEnemigo),
                probCrit: 60,
                dmgCritico: 2 + (nivelEnemigo),
                precision: 40,
                agilidad: 100
              }
              break;
            case 2:
              this.service.boss = {
                nombre: "Juancarlos",
                nivel: nivelEnemigo,
                exp: 700 * nivelEnemigo,
                vida: 90 + (5 * nivelEnemigo),
                armadura: 2 + (1 * nivelEnemigo),
                dmgAtaque: 30 + (2 * nivelEnemigo),
                probCrit: 10,
                dmgCritico: 100 + (nivelEnemigo),
                precision: 70,
                agilidad: 250
              }
              break;
          }
          this.router.navigate(['caminar/batalla', RNGMiniBoss, "Boss"])
        }
        else {
          Swal.fire({
            title: "Huiste"
          })
        }
      })
    }
    else if (RNG > 95) {
      Swal.fire({
        title: 'Has encontrado un objeto extraño',
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Mirar qué es',
        cancelButtonText: 'No lo necesito, pa los pobres'
      }).then((result) => {
        // Si se acepta la pelea
        if (result.isConfirmed) {
          Swal.fire({
            title: "Encontraste un cofre"
          })
        }
        else {
          Swal.fire({
            title: 'Perdiste la oportunidad de lootear algo importante...',
            icon: 'warning',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Bueno',
          })
        }
      })
    }
  }

  dejarDeCaminar() {
    this.router.navigate(['/home'])
  }

  RNG(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  RNGNivelEnemigo() {
    let maxNivelEnemigo = this.personaje.nivel + 3
    let minNivelEnemigo = this.personaje.nivel - 3
    let nivelEnemigo = Math.floor(Math.random() * (maxNivelEnemigo - minNivelEnemigo + 1)) + minNivelEnemigo;
    if (nivelEnemigo <= 0) {
      return this.personaje.nivel;
    }
    return nivelEnemigo;
  }



}
