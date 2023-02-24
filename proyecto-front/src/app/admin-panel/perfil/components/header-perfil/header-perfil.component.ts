import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-perfil',
  templateUrl: './header-perfil.component.html',
  styleUrls: ['./header-perfil.component.scss']
})
export class HeaderPerfilComponent implements OnInit{
  @Input () infoUser: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.infoUser);
    
  }
}
