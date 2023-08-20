import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/homeservice.service';
import { Estadisticas, Objeto, Personaje, TIPO_OBJETO } from 'src/app/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private service: CommonService) { }

  personaje: Personaje = this.service.perfil
  inventario: Objeto[] = this.personaje.inventario

  armaEquipada: Objeto | undefined = this.service.armaEquipada;
  cascoEquipado: Objeto | undefined = this.service.cascoEquipado;
  pecheraEquipada: Objeto | undefined = this.service.pecheraEquipada;
  pantalonEquipado: Objeto | undefined = this.service.pantalonEquipado;
  botasEquipadas: Objeto | undefined = this.service.botasEquipadas;
  manoSecundariaEquipado: Objeto | undefined = this.service.manoSecundariaEquipado;

  estadisticas: Estadisticas = this.service.estadisticasDelInventario

  ngOnInit(): void {
  }

  isEquipped(objeto: Objeto): boolean {
    return objeto === this.armaEquipada || objeto === this.cascoEquipado || objeto === this.pecheraEquipada || objeto === this.pantalonEquipado || objeto === this.botasEquipadas || objeto === this.manoSecundariaEquipado;
  }

  desequiparObjeto(Objeto: Objeto) {
    switch (Objeto.tipo) {
      // MANO PRINCIPAL - ARMA //
      case TIPO_OBJETO.ESPADA:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.ESPADA_A_DOS_MANOS:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.ARCO:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.BACULO:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.BALLESTA:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.DAGA:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.MAZA:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.MAZA_A_DOS_MANOS:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.TIRACHINAS:
        this.desequiparArma(Objeto);

        break;
      case TIPO_OBJETO.VARITA:
        this.desequiparArma(Objeto);

        break;
      // ----------------------------------- //

      // MANO SECUNDARIA //
      case TIPO_OBJETO.ANILLO:
        this.desequiparSecundaria(Objeto);

        break;
      case TIPO_OBJETO.ESCUDO:
        this.desequiparSecundaria(Objeto);

        break;
      case TIPO_OBJETO.BARRERA_MAGICA:
        this.desequiparSecundaria(Objeto);

        break;
      // ----------------------------------- //

      // CASCO //
      case TIPO_OBJETO.CASCO:
        this.desequiparCasco(Objeto)

        break;
      // ----------------------------------- //

      // PECHERA //
      case TIPO_OBJETO.PECHERA:
        this.desequiparPechera(Objeto)

        break;
      case TIPO_OBJETO.AMULETO:
        this.desequiparPechera(Objeto)

        break;
      // ----------------------------------- //

      // PANTALON //
      case TIPO_OBJETO.PANTALON:
        this.desequiparPantalon(Objeto)


        break;
      // ----------------------------------- //

      // BOTAS //
      case TIPO_OBJETO.BOTAS:
        this.desequiparBotas(Objeto)


        break;
      // ----------------------------------- //
    }
    this.reflejarStatsEnPersonaje(false);
    this.sumarEstadisticas(Objeto, false);
  }

  private desequiparArma(Objeto: Objeto) {
    if (this.comprobarArma(Objeto) == true) {
      this.armaEquipada = undefined;
      this.service.armaEquipada = undefined;
    };
  }
  private desequiparSecundaria(Objeto: Objeto) {
    if (this.comprobarSecundaria(Objeto) == true) {
      this.manoSecundariaEquipado = undefined;
      this.service.manoSecundariaEquipado = undefined;
    };
  }
  private desequiparCasco(Objeto: Objeto) {
    if (this.comprobarCasco(Objeto) == true) {
      this.cascoEquipado = undefined;
      this.service.cascoEquipado = undefined;
    };
  }
  private desequiparPechera(Objeto: Objeto) {
    if (this.comprobarPechera(Objeto) == true) {
      this.pecheraEquipada = undefined;
      this.service.pecheraEquipada = undefined;
    };
  }
  private desequiparPantalon(Objeto: Objeto) {
    if (this.comprobarPantalon(Objeto) == true) {
      this.pantalonEquipado = undefined;
      this.service.pantalonEquipado = undefined;
    };
  }
  private desequiparBotas(Objeto: Objeto) {
    if (this.comprobarBotas(Objeto) == true) {
      this.botasEquipadas = undefined;
      this.service.botasEquipadas = undefined;
    };
  }

  equiparObjeto(Objeto: Objeto) {

    switch (Objeto.tipo) {
      // MANO PRINCIPAL - ARMA //
      case TIPO_OBJETO.ESPADA:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.ESPADA_A_DOS_MANOS:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.ARCO:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.BACULO:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.BALLESTA:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.DAGA:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.MAZA:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.MAZA_A_DOS_MANOS:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.TIRACHINAS:
        this.equiparArma(Objeto);

        break;
      case TIPO_OBJETO.VARITA:
        this.equiparArma(Objeto);

        break;
      // ----------------------------------- //

      // MANO SECUNDARIA //
      case TIPO_OBJETO.ANILLO:
        this.equiparSecundaria(Objeto);

        break;
      case TIPO_OBJETO.ESCUDO:
        this.equiparSecundaria(Objeto);


        break;
      case TIPO_OBJETO.BARRERA_MAGICA:
        this.equiparSecundaria(Objeto);


        break;
      // ----------------------------------- //

      // CONSUMIBLES //
      case TIPO_OBJETO.ARROJADIZO:
        console.log("USAR ", Objeto.nombre);

        break;
      case TIPO_OBJETO.POCION:
        console.log("USAR ", Objeto.nombre);

        break;
      // ----------------------------------- //

      // CASCO //
      case TIPO_OBJETO.CASCO:
        this.equiparCasco(Objeto);


        break;
      // ----------------------------------- //

      // PECHERA //
      case TIPO_OBJETO.PECHERA:
        this.equiparPechera(Objeto);


        break;
      case TIPO_OBJETO.AMULETO:
        this.equiparPechera(Objeto);


        break;
      // ----------------------------------- //

      // PANTALON //
      case TIPO_OBJETO.PANTALON:
        this.equiparPantalon(Objeto);


        break;
      // ----------------------------------- //

      // BOTAS //
      case TIPO_OBJETO.BOTAS:
        this.equiparBotas(Objeto);


        break;
      // ----------------------------------- //
    }
    this.sumarEstadisticas(Objeto, true);
    this.reflejarStatsEnPersonaje(true);
  }


  private sumarEstadisticas(Objeto: Objeto, operador: Boolean) {
    let multiplicador: number = 1
    if (operador) {
      multiplicador = 1
    }
    else {
      multiplicador = -1
    }
    this.estadisticas.agilidad += Objeto.estadisticas.agilidad * multiplicador;
    this.estadisticas.armadura += Objeto.estadisticas.armadura * multiplicador;
    this.estadisticas.dmg += Objeto.estadisticas.dmg * multiplicador;
    this.estadisticas.dmgCritico += Objeto.estadisticas.dmgCritico * multiplicador;
    /* COMPROBAR SI LA PRECISION NO SUPERA EL UMBRAL */
    if (this.estadisticas.precision + Objeto.estadisticas.precision * multiplicador > 100) {
      this.estadisticas.precision = 100
    }
    else if (this.estadisticas.precision + Objeto.estadisticas.precision * multiplicador < 0) {
      this.estadisticas.precision = 0
    }
    else {
      this.estadisticas.precision += Objeto.estadisticas.precision * multiplicador;
    }
    /* --------------------------------------------- */
    /* COMPROBAR SI LA PROBABILIDAD CRITICA NO SUPERA EL UMBRAL */
    if (this.estadisticas.probabilidadCritica + Objeto.estadisticas.probabilidadCritica * multiplicador > 100) {
      this.estadisticas.probabilidadCritica = 100
    }
    else if (this.estadisticas.probabilidadCritica + Objeto.estadisticas.probabilidadCritica * multiplicador < 0) {
      this.estadisticas.probabilidadCritica = 0
    }
    else {
      this.estadisticas.probabilidadCritica += Objeto.estadisticas.probabilidadCritica * multiplicador
    }
    /* --------------------------------------------- */
    this.estadisticas.vidaMax += Objeto.estadisticas.vidaMax * multiplicador;
  }

  private reflejarStatsEnPersonaje(operador: Boolean) {
    let multiplicador: number = 1
    if (operador) {
      multiplicador = 1
    }
    else {
      multiplicador = -1
    }
    this.service.perfil.agilidad += this.estadisticas.agilidad * multiplicador;
    this.service.perfil.armadura += this.estadisticas.armadura * multiplicador;
    this.service.perfil.dmgAtaque += this.estadisticas.dmg * multiplicador;
    this.service.perfil.dmgCritico += this.estadisticas.dmgCritico * multiplicador;
    /* COMPROBAR SI LA PRECISION NO SUPERA EL UMBRAL */
    if (this.service.perfil.precision + this.estadisticas.precision * multiplicador > 100) {
      this.service.perfil.precision = 100
    }
    else if (this.service.perfil.precision + this.estadisticas.precision * multiplicador < 0) {
      this.service.perfil.precision = 0
    }
    else {
      this.service.perfil.precision += this.estadisticas.precision * multiplicador;
    }
    /* --------------------------------------------- */
    /* COMPROBAR SI LA PROBABILIDAD CRITICA NO SUPERA EL UMBRAL */
    if (this.service.perfil.probCrit + this.estadisticas.probabilidadCritica * multiplicador > 100) {
      this.service.perfil.probCrit = 100
    }
    else if (this.service.perfil.probCrit + this.estadisticas.probabilidadCritica * multiplicador < 0) {
      this.service.perfil.probCrit = 0
    }
    else {
      this.service.perfil.probCrit += this.estadisticas.probabilidadCritica * multiplicador
    }
    /* --------------------------------------------- */
    this.service.perfil.vidaMax += this.estadisticas.vidaMax * multiplicador;
  }



  private equiparArma(Objeto: Objeto) {
    if (this.armaEquipada != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.armaEquipada, false);
    }
    if (this.comprobarArma(Objeto) == false) {
      this.armaEquipada = Objeto;
      this.service.armaEquipada = Objeto
    };
  }
  private equiparSecundaria(Objeto: Objeto) {
    if (this.manoSecundariaEquipado != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.manoSecundariaEquipado, false);
    }
    if (this.comprobarSecundaria(Objeto) == false) {
      this.manoSecundariaEquipado = Objeto;
      this.service.manoSecundariaEquipado = Objeto
    };
  }
  private equiparCasco(Objeto: Objeto) {
    if (this.cascoEquipado != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.cascoEquipado, false);
    }
    if (this.comprobarCasco(Objeto) == false) {
      this.cascoEquipado = Objeto;
      this.service.cascoEquipado = Objeto
    };
  }
  private equiparPechera(Objeto: Objeto) {
    if (this.pecheraEquipada != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.pecheraEquipada, false);
    }
    if (this.comprobarPechera(Objeto) == false) {
      this.pecheraEquipada = Objeto;
      this.service.pecheraEquipada = Objeto
    };
  }
  private equiparPantalon(Objeto: Objeto) {
    if (this.pantalonEquipado != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.pantalonEquipado, false);
    }
    if (this.comprobarPantalon(Objeto) == false) {
      this.pantalonEquipado = Objeto;
      this.service.pantalonEquipado = Objeto
    };
  }
  private equiparBotas(Objeto: Objeto) {
    if (this.botasEquipadas != undefined) {
      this.reflejarStatsEnPersonaje(false)
      this.sumarEstadisticas(this.botasEquipadas, false);
    }
    if (this.comprobarBotas(Objeto) == false) {
      this.botasEquipadas = Objeto;
      this.service.botasEquipadas = Objeto
    };
  }

  comprobarArma(Arma: Objeto): Boolean {
    if (this.armaEquipada != Arma) {
      return false;
    }
    else {
      return true;
    }
  }
  comprobarSecundaria(Secundaria: Objeto): Boolean {
    if (this.manoSecundariaEquipado != Secundaria) {
      return false;
    }
    else {
      return true;
    }
  }
  comprobarCasco(Casco: Objeto): Boolean {
    if (this.cascoEquipado != Casco) {
      return false;
    }
    else {
      return true;
    }
  }
  comprobarPechera(Pechera: Objeto): Boolean {
    if (this.pecheraEquipada != Pechera) {
      return false;
    }
    else {
      return true;
    }
  }
  comprobarPantalon(Pantalon: Objeto): Boolean {
    if (this.pantalonEquipado != Pantalon) {
      return false;
    }
    else {
      return true;
    }
  }
  comprobarBotas(Botas: Objeto): Boolean {
    if (this.botasEquipadas != Botas) {
      return false;
    }
    else {
      return true;
    }
  }

}
