import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { HeaderPerfilComponent } from './components/header-perfil/header-perfil.component';
import { IzqCardsComponent } from './components/izq-cards/izq-cards.component';
import { CenterCardsComponent } from './components/center-cards/center-cards.component';
import { PublicacionComponent } from './components/center-cards/component/publicacion/publicacion.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComentarioComponent } from './components/center-cards/component/publicacion/component/comentario/comentario.component';

@NgModule({
  declarations: [
    PerfilComponent,
    HeaderPerfilComponent,
    IzqCardsComponent,
    CenterCardsComponent,
    PublicacionComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class PerfilModule { }
