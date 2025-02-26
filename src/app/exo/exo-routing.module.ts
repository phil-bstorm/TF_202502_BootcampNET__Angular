import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from './exo.component';
import {ChronometreComponent} from './chronometre/chronometre.component';
import {ShoppingComponent} from './shopping/shopping.component';

const routes: Routes = [
  {
    path: "",
    component: ExoComponent
  },
  {
    path: "chrono",
    component: ChronometreComponent
  },
  {
    path: "shopping",
    component: ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
