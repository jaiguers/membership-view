import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MembersService } from './../../../core/service/members/members.service';
import { MaritalService } from './../../../core/service/marital/marital.service';
import { EducationService } from './../../../core/service/education/education.service';
import { LivingService } from './../../../core/service/living/living.service';
import { Marital } from 'src/app/core/models/marital.model';
import { Education } from 'src/app/core/models/education.model';
import { Living } from 'src/app/core/models/living.model';
import { YesAndNot } from 'src/app/core/models/yesandnot.model';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  educations: Education[];
  maritals: Marital[];
  living: Living[];
  yesNot: YesAndNot[] = [
    { id: 0, name: 'No' },
    { id: 1, name: 'Si' }
  ];

  constructor(
    private memberService: MembersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private maritalService: MaritalService,
    private eduService: EducationService,
    private livingService: LivingService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;

      this.memberService.getMember(this.id).subscribe(member => {
        this.form.patchValue(member);
      });
    });

    this.fetchMarital();
    this.fetchEducation();
    this.fetchLiving();
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
      state: [1]
    });
  }

  updateMember(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.memberService.updateMember(this.id, this.form.value).subscribe((member) => {
        this.router.navigate(['./admin/members']);
      });
    }
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
