import { Component, OnInit } from '@angular/core';
import { Clase, Personaje } from 'src/app/interfaces';
import { CommonService } from 'src/services/homeservice.service';
import { HomeService } from '../home.service';
import { VARIABLES } from 'src/services/PUBLIC-VARIABLES';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  clase: string = ""
  nombre: string = ""

  listaClases: Clase[] = []

  constructor(private service: CommonService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getClases().then((resp) => { 
      this.listaClases = resp 
      console.log(this.listaClases);
    })

  }



  personaje: Personaje = {
    nombre: "",
    clase: undefined,
    inventario: [],
    nivel: 1,
    exp: 0,
    expSubirLvl: VARIABLES.EXPERIENCIA_NIVEL_1,
    vidaMax: 0,
    vida: 0,
    armadura: 0,
    dmgAtaque: 0,
    probCrit: 0,
    dmgCritico: 0,
    precision: 0,
    agilidad: 0
  }

  elegirClase() {
    switch (this.clase) {
      case "Guerrero":
        this.asignarAtributos(0);
        break;
      case "Arquero":
        this.asignarAtributos(1);
        break;
      case "Asesino":
        this.asignarAtributos(2);
        break;
      case "Paladin":
        this.asignarAtributos(3);
        break;
    }
  }

  private asignarAtributos(idClase: number) {
    this.personaje.clase = this.listaClases[idClase].nombre;
    this.personaje.agilidad = parseFloat(this.listaClases[idClase].agilidad.toFixed(2));
    this.personaje.armadura = parseFloat(this.listaClases[idClase].armadura.toFixed(2));
    this.personaje.dmgAtaque = parseFloat(this.listaClases[idClase].dmgAtaque.toFixed(2));
    this.personaje.dmgCritico = parseFloat(this.listaClases[idClase].dmgCritico.toFixed(2));
    this.personaje.inventario = this.listaClases[idClase].inventario;
    this.personaje.nombre = this.nombre;
    this.personaje.precision = parseFloat(this.listaClases[idClase].precision.toFixed(2));
    this.personaje.probCrit = parseFloat(this.listaClases[idClase].probCrit.toFixed(2));
    this.personaje.vidaMax = parseFloat(this.listaClases[idClase].vidaMax.toFixed(2));
  }

  crearPerfil() {
    this.personaje.nombre = this.nombre
    this.service.crearPerfil(this.personaje)

    this.personaje = {
      nombre: "",
      clase: undefined,
      inventario: [],
      nivel: 1,
      exp: 0,
      expSubirLvl: 100,
      vidaMax: 0,
      vida: 0,
      armadura: 0,
      dmgAtaque: 0,
      probCrit: 0,
      dmgCritico: 0,
      precision: 0,
      agilidad: 0
    }
  }

}
