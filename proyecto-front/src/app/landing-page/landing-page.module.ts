import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LandingPageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    GMapModule,
    DialogModule,
    MessagesModule,
    FormsModule,
    ButtonModule
  ]
})
export class LandingPageModule { }
