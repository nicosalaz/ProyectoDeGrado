import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocalicacionComponent } from './geolocalicacion.component';

const routes: Routes = [
  {
    path:'',
    component: GeolocalicacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocalicacionRoutingModule { }
