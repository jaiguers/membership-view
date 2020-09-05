import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { CommitteesService } from './../../../core/service/committees/committees.service';

@Component({
  selector: 'app-committee-create',
  templateUrl: './committee-create.component.html',
  styleUrls: ['./committee-create.component.scss']
})
export class CommitteeCreateComponent implements OnInit {

  form: FormGroup;
  urlImage$: Observable<any>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private afStorage: AngularFireStorage,
    private commService: CommitteesService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }


  buildForm() {
    this.form = this.formBuilder.group({
      identification: [0],
      description: ['', [Validators.required]],
      image: [''],
      name: ['', [Validators.required]],
      president: [''],
      secretary: [''],
      treasurer: [''],
      vicepresident: [],
      vocal1: [''],
      vocal2: [''],
      vocal3: [''],
    });
  }

  uploadFile(event) {
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
  }

  saveCommitte(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.commService.createCommittee(this.form.value).subscribe(member => {
        this.router.navigate(['./admin/committees']);
      });
    }
  }

}
