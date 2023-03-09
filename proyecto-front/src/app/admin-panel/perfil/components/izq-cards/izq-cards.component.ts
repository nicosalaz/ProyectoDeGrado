import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izq-cards',
  templateUrl: './izq-cards.component.html',
  styleUrls: ['./izq-cards.component.scss']
})
export class IzqCardsComponent implements OnInit{
  infoUsuario:any;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
  }
  
}
