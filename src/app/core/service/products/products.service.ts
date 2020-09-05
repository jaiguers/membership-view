import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { environment } from './../../../../environments/environment';
import { ProductRoutingModule } from 'src/app/product/product-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.urlApi + '/products');
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.urlApi}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.urlApi}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`);
  }

}
