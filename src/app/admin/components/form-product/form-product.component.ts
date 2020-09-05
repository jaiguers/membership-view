import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { ProductsService } from './../../../core/service/products/products.service';
import { CustomValidators } from './../../../utils/validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  urlImage$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private prodService: ProductsService,
    private router: Router,
    private afStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.prodService.createProduct(this.form.value).subscribe((product) => {
        this.router.navigate(['./admin/products']);
      });
    }

  }

  uploadFile(event) {
    const file = event.target.files[0];
    const name = 'image.png';
    const fileRef = this.afStorage.ref(name);
    const task = this.afStorage.upload(name, file);

    task.snapshotChanges()
      .pipe(finalize(() => {
        this.urlImage$ = fileRef.getDownloadURL();
        this.urlImage$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      }))
      .subscribe();
  }

  get priceField() {
    return this.form.get('price');
  }

}
