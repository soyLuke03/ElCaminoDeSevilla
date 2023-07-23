import { Component, OnInit } from '@angular/core';
import { commonService } from 'src/app/homeservice.service';
import { Objeto, Personaje } from 'src/app/interfaces';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private service:commonService) { }

  personaje:Personaje = this.service.perfil
  inventario:Objeto[] = this.personaje.inventario

  
  ngOnInit(): void {
    
  }

}
