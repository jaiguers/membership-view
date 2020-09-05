import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PortfolioService } from './../../../core/service/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.scss']
})
export class PortfolioEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  serviceAs = [
    { id: 'Empleado', text: 'Empleado' },
    { id: 'Independiente', text: 'Independiente' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: PortfolioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.service.getPortfolio(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
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

  updatePortfolio(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.service.updatePortfolio(this.id, this.form.value).subscribe(portfolio => {
        this.router.navigate(['./admin/portfolios']);
      });
    }
  }
}
