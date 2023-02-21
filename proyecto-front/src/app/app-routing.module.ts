import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"admin-panel", 
    loadChildren: () => import('./admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
  },
  {
    path:"landing-page", 
    loadChildren: () => import('./landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    redirectTo:"landing-page",
    path:"",
    pathMatch:"full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
