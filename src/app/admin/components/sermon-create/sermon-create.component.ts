import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { SermonService } from './../../../core/service/sermon/sermon.service';

@Component({
  selector: 'app-sermon-create',
  templateUrl: './sermon-create.component.html',
  styleUrls: ['./sermon-create.component.scss']
})
export class SermonCreateComponent implements OnInit {

  form: FormGroup;
  urlFile$: Observable<any>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private afStorage: AngularFireStorage,
    private service: SermonService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveSermon(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.service.createSermon(this.form.value).subscribe(sermon => {
        this.router.navigate(['./admin/sermon']);
      });
    }
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

  uploadFile(event) {
    const file = event.target.files[0];
    const name = file.name;
    const fileRef = this.afStorage.ref(name);
    const task = this.afStorage.upload(name, file);

    task.snapshotChanges()
      .pipe(finalize(() => {
        this.urlFile$ = fileRef.getDownloadURL();
        this.urlFile$.subscribe(url => {
          this.form.get('urlfile').setValue(url);
        });
      }))
      .subscribe();
  }

}
