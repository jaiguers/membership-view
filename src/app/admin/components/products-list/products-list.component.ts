import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.prodService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.prodService.deleteProduct(id).subscribe(rta => {
      this.fetchProducts();
    });
  }
}
