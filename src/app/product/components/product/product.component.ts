import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Portfolio } from './../../../core/models/portfolio.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Portfolio;

  constructor() { }

  ngOnInit() {
  }

}
