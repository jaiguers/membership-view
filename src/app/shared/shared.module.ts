import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartrepeatPipe } from './pipes/cartrepeat/cartrepeat.pipe';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartrepeatPipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartrepeatPipe
  ]
})
export class SharedModule { }
