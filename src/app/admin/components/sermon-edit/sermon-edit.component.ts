import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SermonService } from './../../../core/service/sermon/sermon.service';

@Component({
  selector: 'app-sermon-edit',
  templateUrl: './sermon-edit.component.html',
  styleUrls: ['./sermon-edit.component.scss']
})
export class SermonEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: SermonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.service.getSermon(this.id).subscribe(sermon => {
        this.form.patchValue(sermon);
      });
    });
  }


  buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      preacher: ['', [Validators.required]],
      description: ['', [Validators.required]],
      sermondate: ['', [Validators.required]],
      urlfile: ['', [Validators.required]]
    });
  }

  updateSermon(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.service.updateSermon(this.id, this.form.value).subscribe(sermon => {
        this.router.navigate(['./admin/sermon']);
      });
    }
  }

}
