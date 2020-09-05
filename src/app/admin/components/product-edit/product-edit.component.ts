import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/service/products/products.service';
import { CustomValidators } from './../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private prodService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.prodService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.prodService.updateProduct(this.id, this.form.value).subscribe((product) => {
        this.router.navigate(['./admin/products']);
      });
    }

  }

  get priceField() {
    return this.form.get('price');
  }

}
