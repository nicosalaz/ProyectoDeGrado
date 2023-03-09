import { Component, Input, OnInit } from '@angular/core';
import { ServicesPerfilService } from '../../../../services/services-perfil.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit{

  @Input () infoPublicaciones: any;
  @Input () estadoLike: any;
  constructor(private servicesPerfil:ServicesPerfilService) { }
  displayConfirm:boolean = false;
  loading:boolean = false;
  deleteDialog:boolean = false;
  displayComentarios:boolean = false;
  infoUsuario:any;
  loginForm!: FormGroup;
  comentarioForm!:FormGroup;
  comentarios:any=[];

  ngOnInit(): void {
    this.infoUsuario = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(this.infoUsuario);
    console.log(this.infoUsuario);
    this.loginForm = new FormGroup({
      id: new FormControl(Number(this.infoPublicaciones.id)),
      descripcion: new FormControl('', Validators.required),
    });

    this.comentarioForm = new FormGroup({
      id_publicacion: new FormControl(Number(this.infoPublicaciones.id)),
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });

    
  }

  onclickLike(){
    this.estadoLike = !this.estadoLike;
    const data = {
      id_usuario:Number(this.infoUsuario.id),
      id_publicacion:Number(this.infoPublicaciones.id)
    }
    try {
      this.servicesPerfil.postReaccion(data).subscribe((resp)=>{
        console.log(resp);
      })
      if(this.estadoLike == true){
        this.infoPublicaciones.like = Number(this.infoPublicaciones.like) + 1
      }else{
        this.infoPublicaciones.like = Number(this.infoPublicaciones.like) - 1
      }
    } catch (error) {
      console.log('error');
      
    }
    
  }

  async onSubmit(){
    const data = { ...this.loginForm.value };
    this.loading = true;
    console.log(data);
    this.infoPublicaciones.descripcion = data.descripcion;
    setTimeout(() => {
       this.servicesPerfil.patchPublicacion(data).subscribe((resp)=>{

        this.loading = false;
      })
    }, 1000);
    this.loginForm = new FormGroup({
      id: new FormControl(Number(this.infoPublicaciones.id)),
      descripcion: new FormControl('', Validators.required),
    });
  }

  async deletePublicaciones(){
    const data = {
      id: this.infoPublicaciones.id,
      activo: 0
    }
    this.loading = true;
    setTimeout(() => {
       this.servicesPerfil.patchDeletePublicacion(data).subscribe((resp)=>{
        window.location.reload();
      })
    }, 1000);
  }


  async comentariosPublicacion(){
    this.loading = true;
    setTimeout(() => {
      this.servicesPerfil.getComentarios(Number(this.infoPublicaciones.id)).subscribe((resp)=>{
        this.comentarios = resp.response;
        this.loading = false;
        this.displayComentarios = true;
      })
    }, 1000);
  }


  async onSumitedComentario(){
    
  }
}
