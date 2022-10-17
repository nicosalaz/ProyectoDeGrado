import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionOneComponent } from './option-one.component';

const routes: Routes = [
  {
    path:"", 
    component:OptionOneComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionOneRoutingModule { }
