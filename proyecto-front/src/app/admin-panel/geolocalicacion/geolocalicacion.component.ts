import { Component, OnInit } from '@angular/core';
import { AllserviceService } from 'src/app/share/services/allservice.service';

@Component({
  selector: 'app-geolocalicacion',
  templateUrl: './geolocalicacion.component.html',
  styleUrls: ['./geolocalicacion.component.scss']
})
export class GeolocalicacionComponent implements OnInit {
  overlays:any;
  displayConfirm:boolean = true;
  constructor(private servicesAll: AllserviceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.servicesAll.getEspecieArboreas().subscribe((resp) => {
        this.overlays = resp.response;
        this.displayConfirm = false;
      })
    }, 2000);

  }

}
