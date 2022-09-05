import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"admin-panel", 
    loadChildren: () => import('./proyecto-panel/proyecto-panel.module').then((m) => m.ProyectoPanelModule),
  },
  {
    redirectTo:"admin-panel",
    path:"",
    pathMatch:"full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
