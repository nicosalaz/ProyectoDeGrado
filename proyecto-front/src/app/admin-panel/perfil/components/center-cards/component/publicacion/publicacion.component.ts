import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit{

  @Input () infoPublicaciones: any;
  @Input () estadoLike: any;
  constructor() { }
  
  infoUsuario:any;
  
  ngOnInit(): void {
    
  }
}
