import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionTwoComponent } from './option-two.component';

const routes: Routes = [{
    path:"", 
    component:OptionTwoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionTwoRoutingModule { }
