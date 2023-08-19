import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/homeservice.service';
import { Personaje } from 'src/app/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CommonService, private router:Router) { }


  personaje:Personaje = this.service.perfil

  ngOnInit(): void {
  }

  caminar(){
    this.router.navigate(['caminar'])
  }

  
  descansar(){
    Swal.fire({
      title: "Te has curado"
    })
    this.personaje.vida = this.personaje.vidaMax
  }

  extras(){
    this.router.navigate(['extras'])
  }

  inventario(){
    this.router.navigate(['inventario'])
  }
}
