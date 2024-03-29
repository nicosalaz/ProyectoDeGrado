import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './share/services/login.guard';
const routes: Routes = [
  {
    path:"admin-panel", 
    loadChildren: () => import('./admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
    canActivate: [LoginGuard],
  },
  {
    path:"landing-page", 
    loadChildren: () => import('./landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    redirectTo:"login",
    path:"",
    pathMatch:"full",
  },
  {
    path:"login", 
    loadChildren: () => import('./share/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
