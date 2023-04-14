import { Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { AllserviceService } from 'src/app/share/services/allservice.service';

@Component({
  selector: 'app-geolocalicacion',
  templateUrl: './geolocalicacion.component.html',
  styleUrls: ['./geolocalicacion.component.scss']
})
export class GeolocalicacionComponent implements OnInit {
  overlays:any;
  displayConfirm:boolean = true;
  informacionRequest:any = [];
  p: number = 1;
  infoUsuario:any;
  constructor(private servicesAll: AllserviceService) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.servicesAll.getEspecieArboreas().subscribe((resp) => {
        this.overlays = resp.response;
        this.displayConfirm = false;
      })
        this.servicesAll.getRequestEspecieArborea().subscribe((resp) => {
          this.informacionRequest = resp.response; 
          console.log(resp);
          
        })
      
    }, 2000);

  }

  editado(e:any){
    if(e?.type == 0){
      this.informacionRequest?.map((element:any) => {
        if(e?.cambios.id == element?.id_request){
          element.title = e.cambios.nombre;
          element.descripcion = e.cambios.descripcion;
          element.id = e.cambios.id_especie;
        }
      })
    }
    if(e?.type == 1){
      this.informacionRequest = this.informacionRequest?.filter((resp:any) => resp.id_request != e.cambios)
    }
    if(e?.type == 2){
      this.informacionRequest = this.informacionRequest?.filter((resp:any) => resp.id_request != e.cambios)
    }
    
    
  }

  requestNew(e:any){
    this.informacionRequest.push(e);
  }
}
