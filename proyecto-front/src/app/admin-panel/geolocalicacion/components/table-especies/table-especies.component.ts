import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService, Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { AllserviceService } from 'src/app/share/services/allservice.service';


export interface eliminarEspecieArborea{
    id:number;
    active:any;
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
  selectedPosition: any;
  selectedCity: any;
  loading:boolean = true;
  constructor(private confirmationService: ConfirmationService, private servicesAll: AllserviceService) { }
  @ViewChild('miTabla') miTabla!: any;
  ngOnInit(): void {
    this.servicesAll.getEspecieArboreas().subscribe((resp) => {
        this.products = resp.response;
        this.loading = false;
      })
  this.servicesAll.getEspecie().subscribe((resp) => {
    this.cities = resp.response;
  })
  }


  confirm1(product:any) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
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
}
