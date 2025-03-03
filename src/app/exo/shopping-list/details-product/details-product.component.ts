import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-details-product',
  standalone: false,
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss'
})
export class DetailsProductComponent implements OnInit {

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  product!: Product;

  ngOnInit (): void {
    this.product = this.activatedRoute.snapshot.data['product'];
  }

  toUpdate (id: string) {
    this.router.navigate(['exo', 'shopping-list', 'products', 'update', id])
  }

}
