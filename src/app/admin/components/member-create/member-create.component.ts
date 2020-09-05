import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { MembersService } from './../../../core/service/members/members.service';
import { MaritalService } from './../../../core/service/marital/marital.service';
import { EducationService } from './../../../core/service/education/education.service';
import { LivingService } from './../../../core/service/living/living.service';
import { Marital } from 'src/app/core/models/marital.model';
import { Education } from 'src/app/core/models/education.model';
import { Living } from 'src/app/core/models/living.model';
import { YesAndNot } from 'src/app/core/models/yesandnot.model';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss'],
})
export class MemberCreateComponent implements OnInit, AfterContentChecked {

  form: FormGroup;
  urlImage$: Observable<any>;
  educations: Education[];
  maritals: Marital[];
  living: Living[];
  isValid = true;
  loadImage = false;
  yesNot: YesAndNot[] = [
    { id: 0, name: 'No' },
    { id: 1, name: 'Si' }
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private afStorage: AngularFireStorage,
    private memberService: MembersService,
    private maritalService: MaritalService,
    private eduService: EducationService,
    private livingService: LivingService
  ) {
    this.buildForm();
  }
  ngAfterContentChecked(): void {
    if (!this.loadImage) {
      this.isValid = this.form.invalid;
    }

  }

  ngOnInit() {
    this.fetchMarital();
    this.fetchEducation();
    this.fetchLiving();
    this.isValid = this.form.invalid;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      identification: 0,
      names: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      secondsurname: [''],
      numberid: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: [''],
      mobile: [''],
      idmaritalstatus: ['', [Validators.required]],
      ideducation: ['', [Validators.required]],
      idlivingplace: ['', [Validators.required]],
      baptized: ['', [Validators.required]],
      promised: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      eps: ['', [Validators.required]],
      sisben: ['', [Validators.required]],
      image: [''],
      gethelp: ['', [Validators.required]],
      whohelps: ['', [Validators.required]],
      funeralservice: ['', [Validators.required]],
      facebook: [''],
      twitter: [''],
      pension: ['', [Validators.required]],
      spouse: [''],
      pastorbaptized: [''],
      numberchildren: ['', [Validators.required]],
      neighborhood: [''],
      occupation: ['', [Validators.required]],
      manylives: ['', [Validators.required]],
      baptismcity: [''],
      placeofbirth: ['', [Validators.required]],
      baptismdate: ['', [Validators.required]],
      holyspiritdate: [''],
      dependents: [''],
      state: [1]
    });
  }

  saveMember(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.memberService.createMember(this.form.value).subscribe(member => {
        this.router.navigate(['./admin/members']);
      });
    }
  }

  uploadFile(event) {
    this.loadImage = true;
    if (!this.isValid) {
      this.isValid = true;
    }
    const file = event.target.files[0];
    const name = file.name;
    const fileRef = this.afStorage.ref(name);
    const task = this.afStorage.upload(name, file);

    task.snapshotChanges()
      .pipe(finalize(() => {
        this.urlImage$ = fileRef.getDownloadURL();
        this.urlImage$.subscribe(url => {
          this.form.get('image').setValue(url);
          this.isValid = false;

        });
      }))
      .subscribe();
  }

  fetchMarital() {
    this.maritalService.getAllMaritalStatus().subscribe(marital => {
      this.maritals = marital;
    });
  }

  fetchEducation() {
    this.eduService.getAllEducations().subscribe(edu => {
      this.educations = edu;
    });
  }

  fetchLiving() {
    this.livingService.getAllLiving().subscribe(liv => {
      this.living = liv;
    });
  }
}
