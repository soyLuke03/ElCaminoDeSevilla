import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/homeservice.service';
import { Personaje } from 'src/app/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor(private service: CommonService, private router: Router) { }


  personaje: Personaje = this.service.perfil

  ngOnInit(): void {
  }

  subirPoder() {
    this.personaje.agilidad += 1;
    this.personaje.armadura += 1;
    this.personaje.dmgAtaque += 1;
    this.personaje.dmgCritico += 2;
    if (this.personaje.probCrit + 1 < 100) {
      this.personaje.probCrit += 1;
    }
    else {
      this.personaje.probCrit = 100
    }
    if (this.personaje.precision + 1 < 100) {
      this.personaje.precision += 1;
    }
    else {
      this.personaje.precision = 100
    }
    this.personaje.vidaMax += 10;
  }

  bajarPoder() {
    this.personaje.agilidad -= 1;
    this.personaje.armadura -= 1;
    this.personaje.dmgAtaque -= 1;
    this.personaje.dmgCritico -= 2;
    this.personaje.vidaMax -= 10;
  }

  modoDios() {
    this.personaje.armadura = 999999999
    this.personaje.vidaMax = 999999999
  }

  onePunch() {
    this.personaje.dmgAtaque = 999999999
    this.personaje.dmgCritico = 999999999
  }

  subirNivel() {
    this.personaje.nivel += 1
    this.personaje.agilidad += 1;
    this.personaje.armadura += 0.2;
    this.personaje.vidaMax += 2
    this.personaje.vida += 2
    this.personaje.dmgAtaque += 1;
    this.personaje.dmgCritico += 2;
    this.personaje.expSubirLvl += Math.round(this.personaje.expSubirLvl * 0.05);
    if(this.personaje.probCrit + 0.2 > 100){
      this.personaje.probCrit = 100
    }
    else {
      this.personaje.probCrit += 0.2;
    }
    this.personaje.vidaMax + 3;
  }

  infalible() {
    this.personaje.precision = 100
  }

  fuerte() {
    this.personaje.probCrit = 100
  }

}
