import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces';
import { commonService } from 'src/app/homeservice.service';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  
  clase:string = ""
  nombre:string = ""

  constructor(private service:commonService) { }

  ngOnInit(): void {
  }



  personaje:Personaje = {
    nombre: "",
    clase: "",
    inventario: [],
    nivel: 1,
    exp: 0,
    expSubirLvl: 1000,
    vidaMax: 0,
    vida: 0,
    armadura: 0,
    dmgAtaque: 0,
    probCrit: 0,
    dmgCritico: 0,
    precision: 0,
    agilidad: 0
  }

  elegirClase(clase:string) {
    switch (clase) {
      case "Guerrero":
        this.personaje.clase = "Guerrero"
        this.personaje.vida = 20
        this.personaje.nombre = this.nombre
        this.personaje.armadura = 5
        this.personaje.dmgAtaque = 5
        this.personaje.probCrit = 10
        this.personaje.dmgCritico = this.personaje.dmgAtaque * 2
        this.personaje.precision = 80
        this.personaje.agilidad = 100
      break;
      case "Arquero":
        this.personaje.clase = "Arquero"
        this.personaje.vida = 15
        this.personaje.nombre = this.nombre
        this.personaje.armadura = 2
        this.personaje.dmgAtaque = 7
        this.personaje.probCrit = 25
        this.personaje.dmgCritico = this.personaje.dmgAtaque * 3
        this.personaje.precision = 40
        this.personaje.agilidad = 300
      break;
      case "Asesino":
        this.personaje.clase = "Asesino"
        this.personaje.vida = 10
        this.personaje.nombre = this.nombre
        this.personaje.armadura = 1
        this.personaje.dmgAtaque = 8
        this.personaje.probCrit = 5
        this.personaje.dmgCritico = this.personaje.dmgAtaque * 1.2
        this.personaje.precision = 95
        this.personaje.agilidad = 180
      break;
      case "Paladin":
        this.personaje.clase = "Paladin"
        this.personaje.vida = 30
        this.personaje.nombre = this.nombre
        this.personaje.armadura = 7
        this.personaje.dmgAtaque = 4
        this.personaje.probCrit = 30
        this.personaje.dmgCritico = this.personaje.dmgAtaque * 1.2
        this.personaje.precision = 70
        this.personaje.agilidad = 90
      break;
    }
  }

  crearPerfil(){
    this.personaje.nombre = this.nombre
    this.service.crearPerfil(this.personaje)

    this.personaje = {
      nombre: "",
      clase: "",
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
