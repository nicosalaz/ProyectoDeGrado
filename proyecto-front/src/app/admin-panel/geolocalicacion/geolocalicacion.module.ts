import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocalicacionRoutingModule } from './geolocalicacion-routing.module';
import { GeolocalicacionComponent } from './geolocalicacion.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableEspeciesComponent } from './components/table-especies/table-especies.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RequetsArbolesComponent } from './components/requets-arboles/requets-arboles.component';
import { CardEspecieComponent } from './components/requets-arboles/components/card-especie/card-especie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TablaEspComponent } from './components/tabla-esp/tabla-esp.component';
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [
    GeolocalicacionComponent,
    MapaComponent,
    TableEspeciesComponent,
    RequetsArbolesComponent,
    CardEspecieComponent,
    TablaEspComponent,
   

  ],
  imports: [
    CommonModule,
    GeolocalicacionRoutingModule,
    GMapModule,
    DialogModule,
    MessagesModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    NgxPaginationModule,
    BadgeModule
    ],
    providers: [ConfirmationService],
})
export class GeolocalicacionModule { }
