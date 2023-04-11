import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesPerfilService } from '../../services/services-perfil.service';

@Component({
  selector: 'app-header-perfil',
  templateUrl: './header-perfil.component.html',
  styleUrls: ['./header-perfil.component.scss']
})
export class HeaderPerfilComponent implements OnInit{
  @Input () infoUser: any;
  editModal:boolean = false;
  comentarioForm!:FormGroup;
  infoUsuario:any;
  constructor(private servicesPerfil:ServicesPerfilService) { }

  ngOnInit(): void {
    console.log(this.infoUser);
    let infoUsuario:any = localStorage.getItem('user');
    
    
    this.infoUsuario = JSON.parse(infoUsuario);
    this.comentarioForm = new FormGroup({
      id:new FormControl(Number(this.infoUser.id)),
      telefono: new FormControl(Number(this.infoUser.numero)),
      descripcion: new FormControl(this.infoUser.descripcion),
      ciudad: new FormControl(this.infoUser.ciudad),
      nombre: new FormControl(this.infoUser.nombre),
      apellido: new FormControl(this.infoUser.apellido),
      correo: new FormControl(this.infoUser.email),
    });
    
  }

  OnSumitedEditar(){
    const data = {...this.comentarioForm.value}
    console.log(data);
    setTimeout(() => {
      this.servicesPerfil.patchEditarPerfil(data).subscribe((resp)=>{

        window.location.reload();
     })
   }, 1000);
    
   this.infoUsuario.nombre = data.nombre;
    this.infoUsuario.apellido = data.apellido;
    this.infoUsuario.ciudad = data.ciudad;
    this.infoUsuario.numero = data.telefono;
    this.infoUsuario.descripcion = data.descripcion;
    this.infoUsuario.email = data.correo;
    this.infoUsuario.name = data.nombre +' '+ data.apellido;
    localStorage.setItem('user', JSON.stringify(this.infoUsuario))
    window
  }
}
