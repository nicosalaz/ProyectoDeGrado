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
  displayConfirm:boolean = false;
  infoUsuario:any;
  loginForm!: FormGroup;
  publicacionesActivas: any=[];
  fileSelected:any;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.loginForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
    this.publicacionesActivas = this.infoPublicaciones.slice();
    
  }

  async onSubmit(){
    const data = { ...this.loginForm.value };
    let auxiliarData:any;
    this.displayConfirm = true;
    const form = new FormData()
    for (let clave in data){
      form.append(clave, data[clave]);
    }
    if(this.fileSelected != null){
      form.append('file', this.fileSelected);
    }
    
    setTimeout(() => {
       this.servicesPerfil.postPublicaciones(form).subscribe((resp)=>{
        auxiliarData = resp.response[0];
        console.log(auxiliarData);
        
        this.publicacionesActivas.unshift(auxiliarData)
        this.displayConfirm = false;
      })
    }, 1000);
    this.loginForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
  }

  tieneLike(idPublicacion:any){
    
    
    let estado = false;
    this.reaccionesUsuario?.map((resp:any)=>{
      if(resp.id_publicacion == idPublicacion){
        estado = true;
      }
    })
    return estado;
  }

  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }
}
