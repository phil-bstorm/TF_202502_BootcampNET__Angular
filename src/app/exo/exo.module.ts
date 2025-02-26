import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import {SharedModule} from '../shared/shared.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ListShoppingComponent } from './shopping/components/list-shopping/list-shopping.component';
import { AddShoppingItemComponent } from './shopping/components/add-shopping-item/add-shopping-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ExoComponent,
    ChronometreComponent,
    ShoppingComponent,
    ListShoppingComponent,
    AddShoppingItemComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExoModule { }
