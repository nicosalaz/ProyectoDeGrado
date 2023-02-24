import { Component, OnInit } from '@angular/core';
import { ServicesPerfilService } from './services/services-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  constructor(private servicesPerfil:ServicesPerfilService ) { }
  
  infoUsuario:any;
  publicacionesUsuario:any;
  reaccionesUsuario:any;
  displayConfirm = true;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    
    setTimeout(() => {
    this.servicesPerfil.getPublicaciones(this.infoUsuario.id).subscribe((resp) => {
      this.publicacionesUsuario = resp.response;
    })
    
    this.servicesPerfil.getReaccionesUsers(this.infoUsuario.id).subscribe((resp) => {
      this.reaccionesUsuario = resp.response;
      console.log(this.reaccionesUsuario);
      this.displayConfirm = false
      
    })
    
  }, 2000);
    
  }


}
