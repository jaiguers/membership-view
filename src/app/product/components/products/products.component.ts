import { Component, OnInit } from '@angular/core';

import { Portfolio } from './../../../core/models/portfolio.model';
import { PortfolioService } from './../../../core/service/portfolio/portfolio.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Portfolio[];

  constructor(private profService: PortfolioService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {

  }

  fetchProducts() {
    this.profService.getAllPortfolio().subscribe(products => {
      this.products = products;
    });
  }

}
