import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/homeservice.service';
import { Enemigo, MiniBoss, Objeto, Personaje } from 'src/app/interfaces';
import Swal, { SweetAlertResult } from 'sweetalert2'
import { Boss } from '../../interfaces';
import { CaminarService } from '../caminar.service';
import { VARIABLES } from 'src/services/PUBLIC-VARIABLES';

@Component({
  selector: 'app-caminar',
  templateUrl: './caminar.component.html',
  styleUrls: ['./caminar.component.css']
})
export class CaminarComponent implements OnInit {

  personaje: Personaje = this.service.perfil

  listaEnemigos: Enemigo[] = [];
  listaMiniBoss: MiniBoss[] = [];
  listaBoss: Boss[] = []
  listaObjetos: Objeto[] = [];



  constructor(private service: CommonService, private router: Router, private caminarService: CaminarService) { }


  async ngOnInit(): Promise<void> {
    await this.caminarService.getEnemigos().then((resp) => { this.listaEnemigos = resp })
    await this.caminarService.getMinibosses().then((resp) => { this.listaMiniBoss = resp })
    await this.caminarService.getBosses().then((resp) => { this.listaBoss = resp })
    await this.caminarService.getObjetos().then((resp) => { this.listaObjetos = resp })

  }

  caminar() {
    // Numero de generación al caminar
    let RNGEnemigo = Math.floor(Math.random() * VARIABLES.NUMERO_ENEMIGOS);
    let RNGBoss = Math.floor(Math.random() * VARIABLES.NUMERO_BOSSES);
    let RNGMiniBoss = Math.floor(Math.random() * VARIABLES.NUMERO_MINIBOSSES);
    let RNGObjeto = Math.floor(Math.random() * VARIABLES.NUMERO_OBJETOS);

    let RNG = Math.floor(Math.random() * VARIABLES.VALOR_RNG_MAXIMO);

    if (RNG <= 20) {
      this.NadaAparece();
    }
    else if (RNG <= 80 && RNG >= 21) {
      this.enemigoAparece(RNGEnemigo);
    }
    else if (RNG >= 81 && RNG <= 90) {
      this.MiniBossAparece(RNGMiniBoss);
    }
    else if (RNG >= 91 && RNG <= 95) {
      this.BossAparece(RNGBoss);
    }
    else if (RNG >= 96) {
      this.ObjetoAparece(RNGObjeto);
    }
  }

  private ObjetoAparece(RNGObjeto: number) {
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
      this.buscarObjeto(result, RNGObjeto);
    });
  }

  private NadaAparece() {
    Swal.fire(
      'No has encontrado nada'
    );
  }

  private BossAparece(RNGBoss: number) {
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
      this.buscarBoss(result, RNGBoss);
    });
  }

  private MiniBossAparece(RNGMiniBoss: number) {
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
      this.buscarMiniBoss(result, RNGMiniBoss);
    });
  }

  private enemigoAparece(RNGEnemigo: number) {
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
      this.buscarEnemigoNormal(result, RNGEnemigo);
    });
  }

  buscarObjeto(result: SweetAlertResult<any>, RNGObjeto: number) {
    if (result.isConfirmed) {
      switch (RNGObjeto) {
        case 0:
          this.service.tesoro = this.listaObjetos[0]
          break;
        case 1:
          this.service.tesoro = this.listaObjetos[1]
          break;
        case 2:
          this.service.tesoro = this.listaObjetos[2]
          break;
        case 3:
          this.service.tesoro = this.listaObjetos[3]
          break;
        case 4:
          this.service.tesoro = this.listaObjetos[4]
          break;
        case 5:
          this.service.tesoro = this.listaObjetos[5]
          break;
        case 6:
          this.service.tesoro = this.listaObjetos[6]
          break;
        case 7:
          this.service.tesoro = this.listaObjetos[7]
          break;
        case 8:
          this.service.tesoro = this.listaObjetos[8]
          break;
        case 9:
          this.service.tesoro = this.listaObjetos[9]
          break;
      }
    }
    else {
      Swal.fire({
        title: 'Perdiste la oportunidad de lootear algo importante...',
        icon: 'warning',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Bueno',
      });
    }
  }

  buscarEnemigoNormal(result: SweetAlertResult<any>, RNGEnemigo: number) {
    let nivelEnemigo = this.RNGNivelEnemigo();
    if (result.isConfirmed) {
      switch (RNGEnemigo) {
        case 0:
          this.service.enemigo = this.listaEnemigos[0];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 1:
          this.service.enemigo = this.listaEnemigos[1];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 2:
          this.service.enemigo = this.listaEnemigos[2];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 3:
          this.service.enemigo = this.listaEnemigos[3];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 4:
          this.service.enemigo = this.listaEnemigos[4];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 5:
          this.service.enemigo = this.listaEnemigos[5];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 6:
          this.service.enemigo = this.listaEnemigos[6];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 7:
          this.service.enemigo = this.listaEnemigos[7];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 8:
          this.service.enemigo = this.listaEnemigos[8];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
        case 9:
          this.service.enemigo = this.listaEnemigos[9];
          this.service.enemigo.agilidad += 1.2 * nivelEnemigo
          this.service.enemigo.armadura += 5 * nivelEnemigo
          this.service.enemigo.dmgAtaque += 2 * nivelEnemigo
          this.service.enemigo.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.enemigo.exp += 30 * nivelEnemigo
          this.service.enemigo.nivel = nivelEnemigo
          this.service.enemigo.vida += 7 * nivelEnemigo
          break;
      }
      this.router.navigate(['caminar/batalla', RNGEnemigo, "enemigo"]);
    }
    else {
      Swal.fire({
        title: "Huiste"
      });
    }
  }

  buscarMiniBoss(result: SweetAlertResult<any>, RNGMiniBoss: number) {
    let nivelEnemigo = this.RNGNivelEnemigo();
    if (result.isConfirmed) {
      switch (RNGMiniBoss) {
        case 0:
          this.service.miniBoss = this.listaMiniBoss[0]
          this.service.miniBoss.agilidad += 5 * nivelEnemigo
          this.service.miniBoss.armadura += 10 * nivelEnemigo
          this.service.miniBoss.dmgAtaque += 5 * nivelEnemigo
          this.service.miniBoss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.miniBoss.exp += 90 * nivelEnemigo
          this.service.miniBoss.nivel = nivelEnemigo
          this.service.miniBoss.vida += 20 * nivelEnemigo
          break;
        case 1:
          this.service.miniBoss = this.listaMiniBoss[1]
          this.service.miniBoss.agilidad += 5 * nivelEnemigo
          this.service.miniBoss.armadura += 10 * nivelEnemigo
          this.service.miniBoss.dmgAtaque += 5 * nivelEnemigo
          this.service.miniBoss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.miniBoss.exp += 90 * nivelEnemigo
          this.service.miniBoss.nivel = nivelEnemigo
          this.service.miniBoss.vida += 20 * nivelEnemigo
          break;
        case 2:
          this.service.miniBoss = this.listaMiniBoss[2]
          this.service.miniBoss.agilidad += 5 * nivelEnemigo
          this.service.miniBoss.armadura += 10 * nivelEnemigo
          this.service.miniBoss.dmgAtaque += 5 * nivelEnemigo
          this.service.miniBoss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.miniBoss.exp += 90 * nivelEnemigo
          this.service.miniBoss.nivel = nivelEnemigo
          this.service.miniBoss.vida += 20 * nivelEnemigo
          break;
        case 3:
          this.service.miniBoss = this.listaMiniBoss[3]
          this.service.miniBoss.agilidad += 5 * nivelEnemigo
          this.service.miniBoss.armadura += 10 * nivelEnemigo
          this.service.miniBoss.dmgAtaque += 5 * nivelEnemigo
          this.service.miniBoss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.miniBoss.exp += 90 * nivelEnemigo
          this.service.miniBoss.nivel = nivelEnemigo
          this.service.miniBoss.vida += 20 * nivelEnemigo
          break;
        case 4:
          this.service.miniBoss = this.listaMiniBoss[4]
          this.service.miniBoss.agilidad += 5 * nivelEnemigo
          this.service.miniBoss.armadura += 10 * nivelEnemigo
          this.service.miniBoss.dmgAtaque += 5 * nivelEnemigo
          this.service.miniBoss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.miniBoss.exp += 90 * nivelEnemigo
          this.service.miniBoss.nivel = nivelEnemigo
          this.service.miniBoss.vida += 20 * nivelEnemigo
          break;
      }
      this.router.navigate(['caminar/batalla', RNGMiniBoss, "MiniBoss"]);
    }
    else {
      Swal.fire({
        title: "Huiste"
      });
    }
  }

  buscarBoss(result: SweetAlertResult<any>, RNGBoss: number) {
    let nivelEnemigo = this.RNGNivelEnemigo();
    if (result.isConfirmed) {
      switch (RNGBoss) {
        case 0:
          this.service.boss = this.listaBoss[0]
          this.service.boss.agilidad += 15 * nivelEnemigo
          this.service.boss.armadura += 30 * nivelEnemigo
          this.service.boss.dmgAtaque += 15 * nivelEnemigo
          this.service.boss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.boss.exp += 200 * nivelEnemigo
          this.service.boss.nivel = nivelEnemigo
          this.service.boss.vida += 60 * nivelEnemigo
          break;
        case 1:
          this.service.boss = this.listaBoss[1]
          this.service.boss.agilidad += 15 * nivelEnemigo
          this.service.boss.armadura += 30 * nivelEnemigo
          this.service.boss.dmgAtaque += 15 * nivelEnemigo
          this.service.boss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.boss.exp += 200 * nivelEnemigo
          this.service.boss.nivel = nivelEnemigo
          this.service.boss.vida += 60 * nivelEnemigo
          break;
        case 2:
          this.service.boss = this.listaBoss[2]
          this.service.boss.agilidad += 15 * nivelEnemigo
          this.service.boss.armadura += 30 * nivelEnemigo
          this.service.boss.dmgAtaque += 15 * nivelEnemigo
          this.service.boss.dmgCritico += this.service.boss.dmgAtaque * 2
          this.service.boss.exp += 200 * nivelEnemigo
          this.service.boss.nivel = nivelEnemigo
          this.service.boss.vida += 60 * nivelEnemigo
          break;
      }
      this.router.navigate(['caminar/batalla', RNGBoss, "Boss"]);
    }
    else {
      Swal.fire({
        title: "Huiste"
      });
    }
  }




  RNG(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  RNGNivelEnemigo() {
    let maxNivelEnemigo = this.personaje.nivel + 3
    let minNivelEnemigo = this.personaje.nivel - 3
    let nivelEnemigo = Math.floor(Math.random() * (maxNivelEnemigo - minNivelEnemigo + 1)) + minNivelEnemigo;
    if (nivelEnemigo <= 0) {
      return 1;
    }
    return nivelEnemigo;
  }

  dejarDeCaminar() {
    this.router.navigate(['/home'])
  }

  inventario() {
    this.router.navigate(['inventario'])
  }
}
