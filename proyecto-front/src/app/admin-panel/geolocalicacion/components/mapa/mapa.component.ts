import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  options: any;

  overlays: any[] = [];

  dialogVisible:boolean = false;

  markerTitle:any;

  selectedPosition: any;

  infoWindow: any;

  draggable: any;

  cities: any[] = [];

  selectedCity: any;
  constructor() {}

  ngOnInit() {
      this.options = {
        center: { lat: 3.34559, lng: -76.544 },
        zoom: 15,
      };

      this.initOverlays();

      this.infoWindow = new google.maps.InfoWindow();
      this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  }

  handleMapClick(event:any) {
      this.dialogVisible = true;
      this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event:any) {
      let isMarker = event.overlay.getTitle != undefined;

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
      this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable, icon:image}));
      this.markerTitle = null;
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
      if(!this.overlays||!this.overlays.length) {
          this.overlays = [
            new google.maps.Marker({
              position: { lat: 3.34594, lng: -76.54344 },
              title: 'Khardah',
              icon:image
          }),
          new google.maps.Marker({
              position: { lat: 3.34617, lng: -76.54532 },
              icon:image
          }),
              ];
      }
  }



}
