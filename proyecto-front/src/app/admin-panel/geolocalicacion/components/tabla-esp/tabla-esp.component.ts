import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AllserviceService } from 'src/app/share/services/allservice.service';
export interface eliminarEspecieArborea{
  id:number;
  active:any;
}

export class especieArborea{
id!:number;
nombre!:string;

}

@Component({
  selector: 'app-tabla-esp',
  templateUrl: './tabla-esp.component.html',
  styleUrls: ['./tabla-esp.component.scss']
})
export class TablaEspComponent implements OnInit {

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
  dialogcrear: boolean = false;
  especie:especieArborea = new especieArborea();
  constructor(private confirmationService: ConfirmationService, private servicesAll: AllserviceService) { }
  @ViewChild('miTabla') miTabla!: any;
  ngOnInit(): void {
  this.servicesAll.getEspecie().subscribe((resp) => {
    this.products = resp.response;
    console.log(resp);
    this.loading=false;
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
            this.servicesAll.postEliminarEsp(eliminar).subscribe((resp)=>{
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
  this.especie = {...especieArborea};
}


onEdit(){
  console.log(this.especie);
  this.servicesAll.postEditaEsp({
    id: this.especie.id,
    nombre:  this.especie.nombre,
  }).subscribe((resp)=>{
    console.log(resp);
    this.products.filter( (resp:any) => {
      if(resp.id == this.especie.id){
        resp.nombre = this.especie.nombre 
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


crearEspecie(){
  this.dialogcrear = true;
  this.servicesAll.postCrearEsp({
    nombre:  this.especie.nombre,
  }).subscribe((resp)=>{
    console.log(resp);
    this.dialogcrear = false;
        this.dialogMensagge=true;
        this.products.push("hola")
        setTimeout(() => {
          console.log('hola');
          this.dialogMensagge=false;
         }, 3000);
  })
}

}
