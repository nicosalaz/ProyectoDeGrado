import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesPerfilService } from '../../services/services-perfil.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-center-cards',
  templateUrl: './center-cards.component.html',
  styleUrls: ['./center-cards.component.scss']
})
export class CenterCardsComponent implements OnInit{
  constructor(private servicesPerfil:ServicesPerfilService) { }
  
  @Input () infoPublicaciones: any;
  @Input () reaccionesUsuario: any;

  infoUsuario:any;
  loginForm!: FormGroup;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.loginForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
    console.log(this.infoPublicaciones);
    
  }

  async onSubmit(){
    const data = { ...this.loginForm.value };
    let auxiliarData:any;
    
    await this.servicesPerfil.postPublicaciones(data).subscribe((resp)=>{
      auxiliarData = resp.response;
      window.location.reload();
    })
  }

  tieneLike(idPublicacion:any){
    let estado = false;
    this.reaccionesUsuario.map((resp:any)=>{
      if(resp.id_publicacion == idPublicacion){
        estado = true;
      }
    })
    return estado;
  }

   
}
