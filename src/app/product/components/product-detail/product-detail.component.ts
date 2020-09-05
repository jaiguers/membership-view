import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PortfolioService } from './../../../core/service/portfolio/portfolio.service';
import { Portfolio } from './../../../core/models/portfolio.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Portfolio;
  constructor(
    private route: ActivatedRoute,
    private service: PortfolioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const paramId = params.id;
      const id = paramId.substr(paramId.lastIndexOf('_') + 1);

      this.fetchProduct(id);
    });
  }

  fetchProduct(id: number) {
    this.service.getPortfolio(id).subscribe(product => {
      this.product = product;
    });
  }
}
