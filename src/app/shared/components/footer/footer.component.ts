import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor(

  ) { }

  ngOnInit() {
    this.emailField = new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]);
  }

  sendEmail() {
    if (this.emailField.valid) {

    }
  }

}
