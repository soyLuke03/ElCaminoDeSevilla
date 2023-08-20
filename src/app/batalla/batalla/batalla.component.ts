import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/homeservice.service';
import { Boss, Enemigo, MiniBoss, Personaje, TipoEnemigo } from '../../interfaces';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { VARIABLES } from 'src/services/PUBLIC-VARIABLES';

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

    // ---------- AQUI SE ELIGE QUE TIPO DE ENEMIGO ES ---------- //
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
    //-----------------------------------------------------------------------//
  }

  rival!: Enemigo | MiniBoss | Boss
  
  /**
   * Metodo para obtener un numero entre 0 y el maximo de la variable
   * @returns Number
   */
  RNG() {
    return Math.floor(Math.random() * VARIABLES.VALOR_RNG_MAXIMO)
  }

  /**
   * Metodo para huir de la pelea
   */
  huir() {
    Swal.fire({
      title: "Huiste"
    })
    this.router.navigate(['caminar'])
  }

  /**
   * Metodo para avanzar el turno y realizar el ataque
   */
  atacar() {
    /* --- variables --- */
    let daño = 0
    let tipoRival: Enemigo | MiniBoss | Boss = this.rival
    /* ------------- */

    //Primero vemos quien empieza la pelea

    //Turno del personaje
    if (this.turnoPersonaje) {
      daño = this.turnoDelJugador(daño, tipoRival);
    }
    //Turno del rival
    else {
      daño = this.turnoDelRival(tipoRival, daño);
    }
  }

  /**
   * Metodo que inicia el turno del rival
   * @param tipoRival 
   * @param daño 
   * @returns Daño realizado
   */
  private turnoDelRival(tipoRival: Enemigo | MiniBoss | Boss, daño: number) {
    if (this.RNG() <= tipoRival.precision) {
      // Hacemos la formula del daño
      daño = this.enemigoAtaca(daño, tipoRival);
    }
    else {
      this.enemigoFalla();
    }
    return daño;
  }

  /**
   * Metodo que hace que el enemigo ataque
   * @param daño 
   * @param tipoRival 
   * @returns Daño realizado
   */
  private enemigoAtaca(daño: number, tipoRival: Enemigo | MiniBoss | Boss) {
    daño = tipoRival.dmgAtaque / this.personaje.armadura;
    if (daño <= 0) {
      daño = 1;
    }
    Swal.fire({
      title: "Golpe con éxito",
      text: "El rival ha hecho: " + Math.round(daño) + " puntos de daño",
      timer: 2000
    });
    if (this.RNG() <= tipoRival.probCrit) {
      // Hacemos la formula del daño
      daño = tipoRival.dmgCritico / this.personaje.armadura;
      if (daño <= 0) {
        daño = 1;
      }
      Swal.fire({
        title: "Golpe con CRÍTICO",
        text: "El rival ha hecho: " + Math.round(daño) + " puntos de daño",
        timer: 2000
      });
    }

    this.personaje.vida -= daño;
    if (this.personaje.vida <= 0) {
      this.jugadorDerrotado(tipoRival);
    }

    this.turnoPersonaje = true;
    return daño;
  }

  /**
   * Metodo para dar por derrotado al jugador
   * @param tipoRival 
   */
  private jugadorDerrotado(tipoRival: Enemigo | MiniBoss | Boss) {
    Swal.fire({
      title: "Has sido derrotado"
    });
    this.personaje.vida = this.personaje.vidaMax;
    if (this.personaje.exp - tipoRival.exp > 0) {
      this.personaje.exp -= tipoRival.exp;
    }

    this.router.navigate(['caminar']);
  }

  /**
   * Metodo cuando el enemigo falla el ataque
   */
  private enemigoFalla() {
    Swal.fire({
      title: "El rival ha fallado",
      timer: 2000
    });
    this.turnoPersonaje = true;
  }

  /**
   * Metodo que inicia el ataque del jugador
   * @param daño 
   * @param tipoRival 
   * @returns Daño realizado
   */
  private turnoDelJugador(daño: number, tipoRival: Enemigo | MiniBoss | Boss) {
    if (this.RNG() <= this.personaje.precision) {
      daño = this.jugadorAtaca(daño, tipoRival);
    }
    else {
      this.jugadorFalla();
    }
    return daño;
  }

  /**
   * Metodo cuando el jugador falla el ataque
   */
  private jugadorFalla() {
    Swal.fire({
      title: "Has fallado",
      timer: 2000
    });
    this.turnoPersonaje = false;
  }

  /**
   * Metodo que hace que el jugador ataque
   * @param daño 
   * @param tipoRival 
   * @returns Daño realizado
   */
  private jugadorAtaca(daño: number, tipoRival: Enemigo | MiniBoss | Boss) {
    // Hacemos la formula del daño
    daño = parseInt((this.personaje.dmgAtaque * (1 - Math.log(tipoRival.armadura + 1))).toFixed(2));
    if (daño <= 0) {
      daño = 1;
    }
    Swal.fire({
      title: "Golpe con éxito",
      text: "Has hecho: " + Math.round(daño) + " puntos de daño",
      timer: 2000
    });
    if (this.RNG() <= this.personaje.probCrit) {
      // Hacemos la formula del daño
      daño = parseInt((this.personaje.dmgCritico * (1 - Math.log(tipoRival.armadura + 1))).toFixed(2));
      if (daño <= 0) {
        daño = 1;
      }
      Swal.fire({
        title: "Golpe con CRÍTICO",
        text: "Has hecho: " + Math.round(daño) + " puntos de daño",
        timer: 2000
      });
    }

    tipoRival.vida -= daño;
    if (tipoRival.vida <= 0) {
      this.rivalDerrotado(tipoRival);
    }
    this.turnoPersonaje = false;
    return daño;
  }

  /**
   * Metodo para dar por derrotado al rival
   * @param tipoRival 
   */
  private rivalDerrotado(tipoRival: Enemigo | MiniBoss | Boss) {
    Swal.fire({
      title: "El rival ha sido derrotado",
      text: `Has ganado ${tipoRival.exp} puntos de experiencia`
    });
    this.personaje.exp += tipoRival.exp;
    if (this.personaje.exp >= this.personaje.expSubirLvl) {
      this.personaje.exp = this.personaje.exp - this.personaje.expSubirLvl;

      /* --- Subida de estadisticas --- */
      this.subidaDeNivel();
      /* ------------------------------ */
    }
    this.router.navigate(['caminar']);
  }

  /**
   * Metodo para subir de nivel
   */
  subidaDeNivel() {
    this.personaje.nivel += 1
    this.personaje.vidaMax += 15
    this.personaje.vida += 8
    this.personaje.agilidad += 3;
    this.personaje.armadura += 5;
    this.personaje.dmgAtaque += 8;
    this.personaje.dmgCritico += 16;
    this.personaje.expSubirLvl += this.personaje.expSubirLvl * 0.5;
  }

  /**
   * Metodo para navegar al inventario
   */
  inventario(){
    this.router.navigate(['inventario'])
  }
}
