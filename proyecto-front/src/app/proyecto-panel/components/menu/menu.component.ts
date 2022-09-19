import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { subMenuDataInstitutions } from './meta-data/sub-menu-data-institutions';
import { subMenuData } from './meta-data/sub-menudata';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dataSubMenu = subMenuData;
  dataSubMenuInstitutions = subMenuDataInstitutions;

  constructor() {}

  ngOnInit(): void {}

  abrir(id: any) {
    const box = document.getElementById(id);
    if (box != null) {
      if (box.style.display == 'block') {
        box.style.display = 'none';
      } else {
        box.style.display = 'block';
      }

      console.log(box.style.display);
    }
  }
}
