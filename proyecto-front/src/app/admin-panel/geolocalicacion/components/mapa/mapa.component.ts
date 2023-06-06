import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllserviceService } from 'src/app/share/services/allservice.service';

declare var google: any;

export interface requestEspecieArborea{
  nombre: string;

  descripcion: string;

  id_especie: number;

  longitud: string;

  latitud: string;

  id_usuario: number;
}
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  options: any;
  _value: string = '';
  overlays: any[] = [];

  dialogVisible:boolean = false;

  markerTitle:any;

  selectedPosition: any;

  infoWindow: any;

  draggable: any;

  cities: any[] = [];
  infoUsuario:any;
  selectedCity: any;
  displayConfirm:boolean = false;
  
  dialogMensagge: boolean = false;
  @Input() informacionEspecieArbore: any;
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(private servicesAll: AllserviceService) {}

  ngOnInit() {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
      this.options = {
        center: { lat: 3.34559, lng: -76.544 },
        zoom: 15,
      };
      this.initOverlays()
      this.infoWindow = new google.maps.InfoWindow();
      this.servicesAll.getEspecie().subscribe((resp) => {
        this.cities = resp.response;
      })
      
      console.log(this.overlays);
      
  }

  handleMapClick(event:any) {
      this.dialogVisible = true;
      this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event:any) {
      let isMarker = event.overlay.getTitle != undefined;
    console.log(event);
    
      if(isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + ''+ '</br><img src="https://mybucketespeciesarboreas.s3.amazonaws.com/media/lol.jpg" alt="img" height="100px" >');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());

          
      }
     
  }

  addMarker() {
    const image =
    {
      path:`M326.039,229.594c20.662,10.332,58.534-9.176,58.534-9.176C301.915,128.572,256.001,0,256.001,0
      s-45.916,128.572-128.573,220.418c0,0,37.872,19.509,58.538,9.176c0,0-20.666,79.215-113.64,183.691
      c82.642,22.948,144.634-14.936,144.634-14.936V512h29.865h18.352h29.866V398.348c0,0,61.992,37.884,144.634,14.936
      C346.701,308.809,326.039,229.594,326.039,229.594z`,
      fillColor: "#80F500",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 0.05,
     
    };
    const formEspecieArborea: requestEspecieArborea = {
      nombre: this.markerTitle,

      descripcion: this._value,
    
      id_especie:Number(this.selectedCity.id),
    
      longitud: this.selectedPosition.lng(),
    
      latitud: this.selectedPosition.lat(),
    
      id_usuario:  Number(this.infoUsuario.id)
    }
    
    this.servicesAll.postrequestEspecie(formEspecieArborea).subscribe((resp)=>{
      console.log(resp);
      this.dialogMensagge=true;
      setTimeout(() => {
          console.log('hola');
          this.dialogMensagge=false;
          this.newItemEvent.emit(resp.response[0]);
         }, 3000);
      
    })

    console.log(formEspecieArborea);
    
      //this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable, icon:image}));
      this.markerTitle = null;
      this._value = '';
      this.selectedCity = null;
      this.dialogVisible = false;
  }

  handleDragEnd(event:any) {
      console.log('holoa');
      
  }

  initOverlays() {
    const image =
    {
      path:`M326.039,229.594c20.662,10.332,58.534-9.176,58.534-9.176C301.915,128.572,256.001,0,256.001,0
      s-45.916,128.572-128.573,220.418c0,0,37.872,19.509,58.538,9.176c0,0-20.666,79.215-113.64,183.691
      c82.642,22.948,144.634-14.936,144.634-14.936V512h29.865h18.352h29.866V398.348c0,0,61.992,37.884,144.634,14.936
      C346.701,308.809,326.039,229.594,326.039,229.594z`,
      fillColor: "#80F500",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 0.05,
     
    };
    
      if(this.overlays.length == 0) {
          this.informacionEspecieArbore.forEach((element:any) => {
            this.overlays.push(
              new google.maps.Marker({
                position:JSON.parse(element.position), 
                title:element.title, icon:image})
            )
          });
      }
  }


}
