import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllserviceService } from 'src/app/share/services/allservice.service';

export class CreateEspecieArboreaRequestDto {

  id!:number;
  nombre!: string;

  descripcion!: string;

  id_especie!: number;

  longitud!: string;

  latitud!: string;

  id_usuario!: number;

}

@Component({
  selector: 'app-card-especie',
  templateUrl: './card-especie.component.html',
  styleUrls: ['./card-especie.component.scss']
})
export class CardEspecieComponent implements OnInit {
  @Input() inforequest:any;
  @Output() newItemEvent = new EventEmitter<any>();
  editRequest = new CreateEspecieArboreaRequestDto();
  constructor(private servicesAll: AllserviceService) { }

  ngOnInit(): void {

  }

  onClickEdit(type:any){
      this.newItemEvent.emit({
        type:type,
        status:true
      });
    
  }

}
