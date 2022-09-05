import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoPanelRoutingModule } from './proyecto-panel-routing.module';
import { ProyectoPanelComponent } from './proyecto-panel.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    ProyectoPanelComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ProyectoPanelRoutingModule
  ]
})
export class ProyectoPanelModule { }
