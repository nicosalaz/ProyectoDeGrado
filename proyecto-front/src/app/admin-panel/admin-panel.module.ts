import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    MenuComponent,
    MenuHorizontalComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
