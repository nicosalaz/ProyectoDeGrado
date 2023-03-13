import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesPerfilService } from 'src/app/admin-panel/perfil/services/services-perfil.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {
  @Input () infoPublicacion: any;
  @Input () esComentarioUsuario: any;
  @Input () infoComentario: any;
  @Input () infoUsuario: any;
  @Output() newItemEvent = new EventEmitter<number>();
  comentarioForm!:FormGroup;
  loading:boolean = false;
  actualizaBoolean:boolean = false;
  deleteDialog:boolean = false;
  constructor(private servicesPerfil:ServicesPerfilService) { }

  ngOnInit(): void {
    this.comentarioForm = new FormGroup({
      id:new FormControl(Number(this.infoComentario.id)),
      id_publicacion: new FormControl(Number(this.infoPublicacion.id)),
      descripcion: new FormControl(this.infoComentario.descripcion),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
    console.log(this.infoComentario);
    console.log(this.infoUsuario);
  }


  async onSumitedComentario(){
    const data = {...this.comentarioForm.value}
    this.loading = true;
    console.log(data);
    this.infoComentario.descripcion = data.descripcion;
    setTimeout(() => {
       this.servicesPerfil.patchActualizarComentario(data).subscribe((resp)=>{

        this.loading = false;
        this.actualizaBoolean = false;
      })
    }, 1000);
    this.comentarioForm = new FormGroup({
      id:new FormControl(Number(this.infoComentario.id)),
      id_publicacion: new FormControl(Number(this.infoPublicacion.id)),
      descripcion: new FormControl(this.infoComentario.descripcion),
      id_usuario: new FormControl(Number(this.infoUsuario.id)),
    });
  }


  deletePublicaciones(){
    this.loading = true;
    this.addNewItem(this.infoComentario.id);
    setTimeout(() => {
       this.servicesPerfil.patchDeleteComentario({id:this.infoComentario.id}).subscribe((resp)=>{
        this.loading = false;
        this.deleteDialog = false;
      })
    }, 1000);
    
  }

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
}
