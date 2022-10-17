import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionOneRoutingModule } from './option-one-routing.module';
import { OptionOneComponent } from './option-one.component';


@NgModule({
  declarations: [
    OptionOneComponent
  ],
  imports: [
    CommonModule,
    OptionOneRoutingModule
  ]
})
export class OptionOneModule { }
