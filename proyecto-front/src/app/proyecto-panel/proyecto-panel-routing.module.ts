import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoPanelComponent } from './proyecto-panel.component';

const routes: Routes = [
  {
    path:"", 
    component:ProyectoPanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoPanelRoutingModule { }
