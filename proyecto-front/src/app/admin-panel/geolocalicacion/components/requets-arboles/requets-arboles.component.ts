import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllserviceService } from 'src/app/share/services/allservice.service';
import { CreateEspecieArboreaRequestDto } from './components/card-especie/card-especie.component';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-requets-arboles',
  templateUrl: './requets-arboles.component.html',
  styleUrls: ['./requets-arboles.component.scss']
})
export class RequetsArbolesComponent implements OnInit {

  informacionRequest:any = [];
  selectedCity: any;
  position:any;
  dialogVisible: boolean = false;
  dialogAcept: boolean = false;
  dialogrechazo: boolean = false;
  dialogMensagge: boolean = false;
  cities: any[] = [];
  @Input() inforequest:any;
  @Output() newItemEvent = new EventEmitter<any>();
  infoUsuario:any;
  editRequest = new CreateEspecieArboreaRequestDto();
  justificacion:any;
  constructor(private servicesAll: AllserviceService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.position=JSON.parse(this.inforequest.position);
    this.servicesAll.getEspecie().subscribe((resp) => {
      
      this.cities = resp.response;
      this.cities = this.cities?.filter((resp) => resp.id != this.inforequest.id);
      this.cities.unshift({id:this.inforequest.id, nombre:this.inforequest.nombre})
    })
  }

  indexList(page:number, num: number){
    return (num+((page-1)*10))
  }

  editado(e:any){
    if(e?.type == 0){
      this.dialogVisible = true;
    }
    if(e?.type == 1){
      this.dialogAcept = true;
    }
    if(e?.type == 2){
      this.dialogrechazo = true;
    }
    
  }

  onClickEdit(){
    this.editRequest.nombre = this.inforequest?.nombre_esp;
    this.editRequest.id = this.inforequest?.id_request;
    this.editRequest.id_especie = this.inforequest?.nombre?.id;
    this.editRequest.descripcion = this.inforequest?.descripcion;
    this.editRequest.latitud = this.position?.lat;
    this.editRequest.longitud = this.position?.lng;
    this.editRequest.id_usuario = this.inforequest?.id_usuario;
    this.servicesAll.postEditarEspecieRequest(this.editRequest).subscribe((res) => {
      this.dialogVisible = false;
      this.dialogMensagge=true;
      setTimeout(() => {
        this.dialogMensagge=false;
        this.newItemEvent.emit({
          cambios:this.inforequest.id_request,
          type: 0
        });
       }, 3000);
      
    })
    
  }

  onclickAcepted(){
    this.servicesAll.postAceptarEspecieRequest({
      id:this.inforequest.id_request,
      aceptado_por: this.infoUsuario.id
    }).subscribe((resp) => {
      
      this.dialogAcept = false;
      this.dialogMensagge=true;
      setTimeout(() => {
        console.log('hola');
        this.dialogMensagge=false;
        this.newItemEvent.emit({
          cambios:this.inforequest.id_request,
          type: 1
        });
       }, 3000);
    })
  }

onClickRechazo(){
  this.servicesAll.postRechazarEspecieRequest({
    id:this.inforequest.id_request,
    rechazado_por: this.infoUsuario.id,
    justificacion_rechazo:this.justificacion
  }).subscribe((resp) => {
    console.log(resp);
    this.dialogrechazo = false;
    this.dialogMensagge = true;
   
    setTimeout(() => {
      console.log('hola');
      this.dialogMensagge=false;
      this.newItemEvent.emit({
        cambios:this.inforequest.id_request,
        type: 2
      });
     }, 3000);
    
  })

  
  
}



}
