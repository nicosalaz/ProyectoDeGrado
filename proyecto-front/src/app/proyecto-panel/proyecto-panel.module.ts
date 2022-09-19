import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoPanelRoutingModule } from './proyecto-panel-routing.module';
import { ProyectoPanelComponent } from './proyecto-panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/menu/components/sub-menu/sub-menu.component';
import { AccordingComponent } from './components/according/according.component';


@NgModule({
  declarations: [
    ProyectoPanelComponent,
    MenuComponent,
    SubMenuComponent,
    AccordingComponent
  ],
  imports: [
    CommonModule,
    ProyectoPanelRoutingModule
  ]
})
export class ProyectoPanelModule { }
