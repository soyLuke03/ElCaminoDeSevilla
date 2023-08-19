import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/homeservice.service';
import { Objeto, Personaje } from 'src/app/interfaces';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private service:CommonService) { }

  personaje:Personaje = this.service.perfil
  inventario:Objeto[] = this.personaje.inventario

  armaEquipada:Objeto | undefined;
  cascoEquipado:Objeto | undefined;
  pecheraEquipada:Objeto | undefined;
  pantalonEquipado:Objeto | undefined;
  botasEquipadas:Objeto | undefined;
  escudoEquipado:Objeto | undefined;

  
  ngOnInit(): void {
    
  }

}
