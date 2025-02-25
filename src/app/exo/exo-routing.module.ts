import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from './exo.component';
import {ChronometreComponent} from './chronometre/chronometre.component';

const routes: Routes = [
  {
    path: "",
    component: ExoComponent
  },
  {
    path: "chrono",
    component: ChronometreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
