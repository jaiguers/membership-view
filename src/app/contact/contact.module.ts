import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
