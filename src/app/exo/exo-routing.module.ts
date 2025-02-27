import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from './exo.component';
import {ChronometreComponent} from './chronometre/chronometre.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {ShoppingServiceComponent} from './shopping-service/shopping-service.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

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
  },
  {
    path: "shopping-service",
    component: ShoppingServiceComponent
  },
  {
    path : 'formulaire',
    component : FormulaireComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
