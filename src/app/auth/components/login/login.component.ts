import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/service/auth/auth.service';
import { UsersService } from './../../../core/service/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UsersService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const values = this.form.value;
      this.authService.login(values.email, values.password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch(() => {
          alert('Usuario no válido');
        });
    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
