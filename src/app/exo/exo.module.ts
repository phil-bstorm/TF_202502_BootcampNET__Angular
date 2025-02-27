import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import {SharedModule} from '../shared/shared.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ListShoppingComponent } from './shopping/components/list-shopping/list-shopping.component';
import { AddShoppingItemComponent } from './shopping/components/add-shopping-item/add-shopping-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingServiceComponent} from './shopping-service/shopping-service.component';
import {
  ListShoppingServiceComponent
} from './shopping-service/components/list-shopping/list-shopping-service.component';
import {
  AddShoppingItemServiceComponent
} from './shopping-service/components/add-shopping-item/add-shopping-item-service.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
  declarations: [
    ExoComponent,
    /* Exo chronometre */
    ChronometreComponent,
    /* Exo shopping list */
    ShoppingComponent,
    ListShoppingComponent,
    AddShoppingItemComponent,
    /* Exo shopping list avec service */
    ShoppingServiceComponent,
    ListShoppingServiceComponent,
    AddShoppingItemServiceComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
