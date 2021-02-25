import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Portfolio } from './../../../core/models/portfolio.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Portfolio;

  constructor(
    private title: Title,
    private meta: Meta) {

  }

  ngOnInit() {
    this.title.setTitle("Portafolio de hnos IPUC San Judas");

    this.meta.updateTag({ name: "description", content: "Portafolio de servicios como Tienda de ropa, Maestro de obra contratista, desarrollo de software,Pasteles de pollo, Pastelería melany, Calzado, Productos de aseo, hallelujahcode" });
  }

}
