import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-izq-cards',
  templateUrl: './izq-cards.component.html',
  styleUrls: ['./izq-cards.component.scss']
})
export class IzqCardsComponent implements OnInit{
  infoUsuario:any;
  likesTotal:number = 0;
  @Input () infoPublicaciones: any;
  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario);
    this.likesNum()
  }

  likesNum(){
    this.infoPublicaciones.map((resp:any) =>{
      
      
      this.likesTotal = Number(resp.like) + Number(this.likesTotal)
    })
  }
  
}
