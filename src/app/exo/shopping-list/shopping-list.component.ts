import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit {


  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);

  products: Product[] = [];

  ngOnInit (): void {
    this.productService.getAll()
      .subscribe(products => this.products = products);
  }

  toDetails (id: string) {
    this.router.navigate(['exo', 'shopping-list', 'products', id]);
  }

  toDelete (id: string) {
    if (!confirm(`Voulez-vous supprimer le produit: "${this.products.find(p => p.id === id)?.name}" ?`)) return;

    this.productService.delete(id)
      .pipe(
        tap(() => this.products = this.products.filter(p => p.id !== id))
      )
      .subscribe(() => { });
  }

  onChangeSelected (id: string, event: Event) {
    // console.log("ProductId: ", id);
    // console.log("Valeur de selected: ", (event.target as HTMLInputElement).checked);

    this.productService.patch(id, { selected: (event.target as HTMLInputElement).checked })
      .subscribe();
  }

}
