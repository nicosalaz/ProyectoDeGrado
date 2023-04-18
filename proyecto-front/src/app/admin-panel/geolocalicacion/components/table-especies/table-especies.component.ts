import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService, Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { AllserviceService } from 'src/app/share/services/allservice.service';


export interface eliminarEspecieArborea{
    id:number;
    active:any;
  }

export class especieArborea{
  id!:number;
  title!:string;
  nombre_especie!:any;
  descripcion!:string;
  position!:string;
  id_especie!:any;
}

@Component({
  selector: 'app-table-especies',
  templateUrl: './table-especies.component.html',
  styleUrls: ['./table-especies.component.scss']
})
export class TableEspeciesComponent implements OnInit {
  products: any[] = [];
  dialogVisible: boolean = false;
  cities: any[] = [];
  markerTitle:any;
  selectedPosition = {
    lat:'', lng:''
  };
  dialogMensagge: boolean = false;
  selectedCity: any;
  loading:boolean = true;
  especieArborea:especieArborea = new especieArborea();
  infoUsuario:any;
  constructor(private confirmationService: ConfirmationService, private servicesAll: AllserviceService) { }
  @ViewChild('miTabla') miTabla!: any;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.servicesAll.getEspecieArboreas().subscribe((resp) => {
        this.products = resp.response;
        this.loading = false;
        console.log(resp);
        
      })
  this.servicesAll.getEspecie().subscribe((resp) => {
    this.cities = resp.response;
    
  })
  }


  confirm1(product:any) {
    this.confirmationService.confirm({
        message: 'Estas seguro de eliminar esta esecie arborea?',
        header: 'Confirmacion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            const eliminar: eliminarEspecieArborea = {
                id:product.id,
                active:"false"
            }
            this.servicesAll.postreliminarEspecieArborea(eliminar).subscribe((resp)=>{
                console.log(resp);
            })
            let index = this.products.findIndex(elem => elem.id == product.id);
            this.products.splice(index, 1) 
            this.miTabla.refresh();

        },
        reject: () => {
          
            
        }
    });
}

editarEspecieArborea(especieArborea:any){
  this.dialogVisible=true;
  this.especieArborea = {...especieArborea};
  this.selectedPosition = JSON.parse(this.especieArborea['position']);
  this.cities = this.cities?.filter((resp) => resp.id != this.especieArborea.id_especie);
  this.cities.unshift({id:this.especieArborea.id_especie, nombre:this.especieArborea.nombre_especie})
}


onEdit(){
  console.log(this.especieArborea);
  this.servicesAll.postEditarEspecie({
    id: this.especieArborea.id,
    nombre:  this.especieArborea.title,
    descripcion:  this.especieArborea.descripcion,
    id_especie: this.especieArborea.nombre_especie.id 
  
  }).subscribe((resp)=>{
    console.log(resp);
    this.products.filter( (resp:any) => {
      if(resp.id == this.especieArborea.id){
        resp.title = this.especieArborea.title 
        resp.descripcion = this.especieArborea.descripcion 
        resp.id_especie= this.especieArborea.nombre_especie.id
        resp.nombre_especie = this.especieArborea.nombre_especie.nombre
        this.dialogVisible = false;
        this.dialogMensagge=true;
        setTimeout(() => {
          console.log('hola');
          this.dialogMensagge=false;
          
         }, 3000);
      } 
    })
  })
}
}
