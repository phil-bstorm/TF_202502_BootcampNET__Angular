import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

  product!: Product | null;
  form!: FormGroup;

  fb: FormBuilder = inject(FormBuilder);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);

  ngOnInit (): void {

    this.product = this.activatedRoute.snapshot.data['product'];

    this.form = this.fb.group({
      name: [null, [Validators.minLength(2)]],
      description: [null, []],
      quantity: [0, [Validators.min(0)]],
      price: [0, [Validators.min(0)]]
    });

    if (this.product) {
      this.form.addControl('id', new FormControl());
      this.form.addControl('selected', new FormControl());
      this.form.patchValue(this.product);
    }
  }

  onSubmit () {
    if (this.form.invalid) return;

    if (!this.product) {
      this.productService.create({ ...this.form.value, selected: false })
        .subscribe(product => {
          this.router.navigate(['exo', 'shopping-list']);
        });
    }
    else {
      this.productService.update(this.product.id, this.form.value)
        .subscribe(product => this.router.navigate(['exo', 'shopping-list', 'products', product.id]));
    }
  }
}
