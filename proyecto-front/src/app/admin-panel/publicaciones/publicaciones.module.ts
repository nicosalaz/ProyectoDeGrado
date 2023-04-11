import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComentarioComponent } from './publicacion/component/comentario/comentario.component';

@NgModule({
  declarations: [
    PublicacionesComponent,
    PublicacionComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class PublicacionesModule { }
