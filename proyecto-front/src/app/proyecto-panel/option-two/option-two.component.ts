import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-two',
  templateUrl: './option-two.component.html',
  styleUrls: ['./option-two.component.scss']
})
export class OptionTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
