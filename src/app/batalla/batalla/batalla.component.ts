import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/homeservice.service';
import { Boss, Enemigo, MiniBoss, Personaje, TipoEnemigo } from '../../interfaces';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-batalla',
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.css']
})
export class BatallaComponent implements OnInit {

  constructor(private service: CommonService, private router: Router, private route: ActivatedRoute) { }

  
  tipoEnemigo: TipoEnemigo = {
    id: "",
    tipo: ""
  }

  personaje: Personaje = this.service.perfil
  turnoPersonaje: Boolean = false
  
  async ngOnInit(): Promise<void> {
    this.route.params.pipe().subscribe({
      next: (resp) => {
        this.tipoEnemigo.id = resp['id'];
        this.tipoEnemigo.tipo = resp['tipo'];

        switch (this.tipoEnemigo.tipo) {
          case "enemigo":
            this.rival = this.service.enemigo;
            break;
          case "MiniBoss":
            this.rival = this.service.miniBoss;
            break;
          case "Boss":
            this.rival = this.service.boss;
            break;
        }
        this.turnoPersonaje = this.personaje.agilidad > this.rival.agilidad;
      },
    })
    
  }

  rival!: Enemigo | MiniBoss | Boss
  
  RNG() {
    return Math.floor(Math.random() * 100)
  }

  huir() {
    Swal.fire({
      title: "Huiste"
    })
    this.router.navigate(['caminar'])
  }

  atacar() {
    /* --- variables --- */
    let daño = 0
    let tipoRival: Enemigo | MiniBoss | Boss = this.rival
    /* ------------- */

    //Primero vemos quien empieza la pelea

    //Turno del personaje
    if (this.turnoPersonaje) {
      if (this.RNG() <= this.personaje.precision) {
        // Hacemos la formula del daño
        daño = this.personaje.dmgAtaque / tipoRival.armadura
        if (daño <= 0) {
          daño = 1
        }
        Swal.fire({
          title: "Golpe con éxito",
          text: "Has hecho: " + Math.round(daño) + " puntos de daño",
          timer: 2000
        })
        if (this.RNG() <= this.personaje.probCrit) {
          // Hacemos la formula del daño
          daño = this.personaje.dmgCritico / tipoRival.armadura
          if (daño <= 0) {
            daño = 1
          }
          Swal.fire({
            title: "Golpe con CRÍTICO",
            text: "Has hecho: " + Math.round(daño) + " puntos de daño",
            timer: 2000
          })
        }

        tipoRival.vida -= daño
        if (tipoRival.vida <= 0) {
          Swal.fire({
            title: "El rival ha sido derrotado",
            text: `Has ganado ${tipoRival.exp} puntos de experiencia`
          })
          this.personaje.exp += tipoRival.exp;
          if (this.personaje.exp >= this.personaje.expSubirLvl) {
            this.personaje.exp = this.personaje.exp - this.personaje.expSubirLvl;

            /* --- Subida de estadisticas --- */
            this.subidaDeNivel();
            /* ------------------------------ */
          }
          this.router.navigate(['caminar'])
        }

        this.turnoPersonaje = false
      }
      else {
        Swal.fire({
          title: "Has fallado",
          timer: 2000
        })
        this.turnoPersonaje = false
      }
    }
    //Turno del rival
    else {

      if (this.RNG() <= tipoRival.precision) {
        // Hacemos la formula del daño
        daño = tipoRival.dmgAtaque / this.personaje.armadura
        if (daño <= 0) {
          daño = 1
        }
        Swal.fire({
          title: "Golpe con éxito",
          text: "El rival ha hecho: " + Math.round(daño) + " puntos de daño",
          timer: 2000
        })
        if (this.RNG() <= tipoRival.probCrit) {
          // Hacemos la formula del daño
          daño = tipoRival.dmgCritico / this.personaje.armadura
          if (daño <= 0) {
            daño = 1
          }
          Swal.fire({
            title: "Golpe con CRÍTICO",
            text: "El rival ha hecho: " + Math.round(daño) + " puntos de daño",
            timer: 2000
          })
        }

        this.personaje.vida -= daño
        if (this.personaje.vida <= 0) {
          Swal.fire({
            title: "Has sido derrotado"
          })
          this.personaje.vida = this.personaje.vidaMax
          if (this.personaje.exp - tipoRival.exp > 0) {
            this.personaje.exp -= tipoRival.exp
          }

          this.router.navigate(['caminar'])
        }

        this.turnoPersonaje = true
      }
      else {
        Swal.fire({
          title: "El rival ha fallado",
          timer: 2000
        })
        this.turnoPersonaje = true
      }

    }

  }

  subidaDeNivel() {
    this.personaje.nivel += 1
    this.personaje.vidaMax += 4
    this.personaje.vida += 4
    this.personaje.agilidad += 1;
    this.personaje.armadura += 0.5;
    this.personaje.dmgAtaque += 2;
    this.personaje.dmgCritico += 4;
    this.personaje.expSubirLvl += this.personaje.expSubirLvl * 0.5;
    if(this.personaje.probCrit + 0.2 > 100){
      this.personaje.probCrit = 100
    }
    else {
      this.personaje.probCrit += 0.2;
    }
    this.personaje.vidaMax + 3;
  }
}
