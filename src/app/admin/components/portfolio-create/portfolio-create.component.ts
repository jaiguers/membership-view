import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { PortfolioService } from './../../../core/service/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.scss']
})
export class PortfolioCreateComponent implements OnInit {

  serviceAs = [
    { id: 'Empleado', text: 'Empleado' },
    { id: 'Independiente', text: 'Independiente' }
  ];

  form: FormGroup;
  urlImage$: Observable<any>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private afStorage: AngularFireStorage,
    private service: PortfolioService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      agent: ['', [Validators.required]],
      name: ['', [Validators.required]],
      cellphone: ['', [Validators.required]],
      email: [''],
      socialnetwork: [''],
      urlwebsite: [''],
      typeservice: ['', [Validators.required]],
      description: ['', [Validators.required]],
      urlimage: [''],
    });
  }

  /*uploadFile(event) {
    const file = event.target.files[0];
    const name = file.name;
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
  }*/

  savePortfolio(event: Event) {
    event.preventDefault();

    this.form.get('urlimage').setValue('/assets/images/portfolio-front.png');
    if (this.form.valid) {
      this.service.createPortfolio(this.form.value).subscribe(portfolio => {
        this.router.navigate(['./admin/portfolios']);
      });
    }
  }

}
