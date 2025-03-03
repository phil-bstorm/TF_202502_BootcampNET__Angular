import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { productResolver } from './resolvers/product.resolver';
import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'products/:id', component: DetailsProductComponent, resolve: {product: productResolver} },
  { path: 'products/update/:id', component: CreateProductComponent, resolve: {product: productResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
