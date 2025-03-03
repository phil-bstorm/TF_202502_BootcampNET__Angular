import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Product | null> = (route, state) => {

  const id = route.params['id'];

  if (!id) return null;

  return inject(ProductService).get(id);
};
