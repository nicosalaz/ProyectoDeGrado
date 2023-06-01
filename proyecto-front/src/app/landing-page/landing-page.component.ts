import { Component, OnInit } from '@angular/core';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import { MessageService } from 'primeng/api';
import { AllserviceService } from '../share/services/allservice.service';

declare var google: any;
export class CreateUsuarioDto {
  nombre!: string;

  apellido!: string;

  id_identificacion!: number;

  numero_identificacion!: number;

  correo!: string;

  usuario!: string;

  clave!: string;

  descripcion!: string;

  ciudad!: string;

  telefono!: number;

  file!:  FormData;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  

  constructor( private servicesAll: AllserviceService) { }
  options:any;
  overlays: any[] = [];
  fileSelected: any = null;
  

  ngOnInit(): void {
    this.options = {
      center: { lat: 3.34559, lng: -76.544 },
      zoom: 15,
  };
  this.overlays = [
    new google.maps.Marker({
        position: { lat: 3.34594, lng: -76.54344 },
        title: 'Khardah',
    }),
    new google.maps.Marker({
        position: { lat: 3.34617, lng: -76.54532 },
        title: 'Barrackpore',
    }),
];
  }

  
  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }

  async handleSendFile() {
    console.log("handleSendFile")
    const form = new FormData()
    form.append('file', this.fileSelected);
    form.append('apellido', 'juan')
    
    this.servicesAll.postImages(form).subscribe((resp) => {
      console.log(resp);
      
    })
  }


}
