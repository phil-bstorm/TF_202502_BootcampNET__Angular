import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { DetailsProductComponent } from './details-product/details-product.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    CreateProductComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ShoppingListModule { }
