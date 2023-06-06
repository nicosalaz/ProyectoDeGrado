import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllserviceService } from 'src/app/share/services/allservice.service';
import { ServicesPerfilService } from '../perfil/services/services-perfil.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  constructor(private servicesPerfil:ServicesPerfilService, private servicesAll: AllserviceService) { }
  displayConfirm:boolean = true;
  infoUsuario:any;
  loginForm!: FormGroup;
  publicacionesUsuario:any;
  reaccionesUsuario:any;
  fileSelected:any;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.loginForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
    setTimeout(() => {
      this.servicesAll.getPublicaciones().subscribe((resp) => {
        this.publicacionesUsuario = resp.response;
        this.displayConfirm = false
      })
      
      this.servicesPerfil.getReaccionesUsers(this.infoUsuario.id).subscribe((resp) => {
        this.reaccionesUsuario = resp.response;
      })
      
    }, 2000);

    
  }

  async onSubmit(){
    const data = { ...this.loginForm.value };
    let auxiliarData:any;
    this.displayConfirm = true;
    console.log(data);
    const form = new FormData()
    for (let clave in data){
      form.append(clave, data[clave]);
    }
    if(this.fileSelected != null){
      form.append('file', this.fileSelected);
    }
    
    console.log(form);
    
    setTimeout(() => {
       this.servicesPerfil.postPublicaciones(form).subscribe((resp)=>{
        auxiliarData = resp.response[0];
        this.publicacionesUsuario.unshift(auxiliarData)
        this.displayConfirm = false;
      })
    }, 1000);
    this.loginForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });

    
  }
  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
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

}
