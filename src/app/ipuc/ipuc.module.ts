import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpucRoutingModule } from './ipuc-routing.module';
import { IpucComponent } from './components/ipuc.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    IpucComponent
  ],
  imports: [
    CommonModule,
    IpucRoutingModule,
    SharedModule
  ]
})
export class IpucModule { }
