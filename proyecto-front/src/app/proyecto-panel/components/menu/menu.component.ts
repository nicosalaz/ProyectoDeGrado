import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  abrir(){
    const box = document.getElementById("side-menu");
    if (box != null) {
      if(box.style.display == 'block'){
        box.style.display = 'none';
        
      }else{
        box.style.display = 'block';
      }
    
    console.log(box.style.display);
    }
}

}
