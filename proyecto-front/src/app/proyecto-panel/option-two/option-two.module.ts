import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionTwoRoutingModule } from './option-two-routing.module';
import { OptionTwoComponent } from './option-two.component';


@NgModule({
  declarations: [
    OptionTwoComponent
  ],
  imports: [
    CommonModule,
    OptionTwoRoutingModule
  ]
})
export class OptionTwoModule { }
