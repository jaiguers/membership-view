import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import { PreachRoutingModule } from './preach-routing.module';
import { PreachComponent } from './components/preach/preach.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [PreachComponent],
  imports: [
    CommonModule,
    PreachRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PreachModule { }
