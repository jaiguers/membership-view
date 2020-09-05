import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$
      .pipe(map((products: []) => {
        const p = [...new Set(products)];
        return p;
      }));
  }

  ngOnInit() {
  }

}
