import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoPanelComponent } from './proyecto-panel.component';

const routes: Routes = [
  {
    path:"", 
    component:ProyectoPanelComponent,
    children:[
      {
        path:'home',
        loadChildren : () => import('./option-two/option-two.module').then((m) => m.OptionTwoModule),
      },
      {
        path:'homeO',
        loadChildren : () => import('./option-one/option-one.module').then((m) => m.OptionOneModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoPanelRoutingModule { }
