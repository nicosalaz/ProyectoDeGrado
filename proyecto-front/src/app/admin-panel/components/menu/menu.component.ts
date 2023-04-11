import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  infoUsuario:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let infoUsuario:any = localStorage.getItem('user');
    this.infoUsuario = JSON.parse(infoUsuario)
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
