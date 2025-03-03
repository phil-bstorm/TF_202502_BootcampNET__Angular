import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { ExoComponent } from './exo.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ShoppingServiceComponent } from './shopping-service/shopping-service.component';
import { ShoppingComponent } from './shopping/shopping.component';

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
    path: 'formulaire',
    component: FormulaireComponent
  },
  {
    path: "crud",
    loadChildren: () => import("./crud/crud.module").then(m => m.CrudModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import("./shopping-list/shopping-list.module").then(m => m.ShoppingListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
