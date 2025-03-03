import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  readonly BASE_URL: string = "http://localhost:3000/products";
  
  httpClient: HttpClient = inject(HttpClient);
  
  create (product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.BASE_URL, product);
  }
  
  getAll (): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }
  
  delete (id: string): Observable<void> {
    return this.httpClient.delete<void>(this.BASE_URL + "/" + id);
  }
  
  get (id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.BASE_URL + "/" + id);
  }

  patch (id: string, product: Partial<Product>): Observable<Product> {
    return this.httpClient.patch<Product>(this.BASE_URL + "/" + id, product);
  }

  update (id: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.BASE_URL + "/" + id, product);
  }
}
