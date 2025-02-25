import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from './exo.component';

const routes: Routes = [
  {
    path: "",
    component: ExoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
