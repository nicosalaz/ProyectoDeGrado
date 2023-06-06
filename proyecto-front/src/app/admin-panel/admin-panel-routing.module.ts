import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path:'',
    component: AdminPanelComponent,
    children: [
    {
      path:"perfil", 
      loadChildren: () => import('./perfil/perfil.module').then((m) => m.PerfilModule),
    },
    {
      path:"publicaciones", 
      loadChildren: () => import('./publicaciones/publicaciones.module').then((m) => m.PublicacionesModule),
    },
    {
      redirectTo:"publicaciones",
      path:"",
      pathMatch:"full",
    },
    {
      path:"geolocalizacion", 
      loadChildren: () => import('./geolocalicacion/geolocalicacion.module').then((m) => m.GeolocalicacionModule),
    },
    {
      path:"estadisticas", 
      loadChildren: () => import('./estadisticas/estadisticas.module').then((m) => m.EstadisticasModule),
    },
    
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
