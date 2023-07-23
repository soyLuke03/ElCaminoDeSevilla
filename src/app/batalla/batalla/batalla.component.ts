import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/homeservice.service';
import { Boss, Enemigo, MiniBoss, Personaje } from '../../interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batalla',
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.css']
})
export class BatallaComponent implements OnInit {

  constructor(private service: commonService, private router: Router) { }

  oponente: Enemigo | MiniBoss | Boss = this.service.enemigo
  personaje: Personaje = this.service.perfil

  turnoPersonaje: Boolean = this.personaje.agilidad > this.oponente.agilidad

  ngOnInit(): void {
  }

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
    /* --- cariables --- */
    let daño = 0
    /* ------------- */

    //Primero vemos quien empieza la pelea

    //Turno del personaje
    if (this.turnoPersonaje) {
      if (this.RNG() <= this.personaje.precision) {
        Swal.fire({
          title: "Golpe con éxito",
          timer: 2000
        })
        if (this.RNG() <= this.personaje.probCrit) {
          Swal.fire({
            title: "Golpe con CRÍTICO",
            timer: 2000
          })
          // Hacemos la formula del daño
          daño = this.personaje.dmgCritico / this.oponente.armadura
          if (daño <= 0) {
            daño = 1
          }
        }
        else {
          // Hacemos la formula del daño
          daño = this.personaje.dmgAtaque / this.oponente.armadura
          if (daño <= 0) {
            daño = 1
          }

        }

        this.oponente.vida -= daño        
        if (this.oponente.vida <= 0) {
          Swal.fire({
            title: "El rival ha sido derrotado",
            text: `Has ganado ${this.oponente.exp} puntos de experiencia`
          })
          this.personaje.exp += this.oponente.exp;
          if(this.personaje.exp >= this.personaje.expSubirLvl){
            this.personaje.exp = this.personaje.exp - this.personaje.expSubirLvl;
            this.personaje.nivel += 1 

            /* --- Subida de estadisticas --- */

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

      if (this.RNG() <= this.oponente.precision) {
        Swal.fire({
          title: "Golpe con éxito",
          timer: 2000
        })
        if (this.RNG() <= this.oponente.probCrit) {
          Swal.fire({
            title: "Golpe con CRÍTICO",
            timer: 2000
          })
          // Hacemos la formula del daño
          daño = this.oponente.dmgCritico / this.personaje.armadura
          if (daño <= 0) {
            daño = 1
          }
        }
        else {
          // Hacemos la formula del daño
          daño = this.oponente.dmgAtaque / this.personaje.armadura
          if (daño <= 0) {
            daño = 1
          }

        }

        this.personaje.vida -= daño
        if (this.personaje.vida <= 0) {
          Swal.fire({
            title: "Has sido derrotado"
          })
          this.personaje.vida = this.personaje.vidaMax
          if(this.personaje.exp - this.oponente.exp > 0){
            this.personaje.exp -= this.oponente.exp
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


}
