import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-especie',
  templateUrl: './card-especie.component.html',
  styleUrls: ['./card-especie.component.scss']
})
export class CardEspecieComponent implements OnInit {
  dialogVisible: boolean = false;
  cities: any[] = [];
  markerTitle:any;
  selectedPosition: any;
  selectedCity: any;
  constructor() { }

  ngOnInit(): void {
  }

}
