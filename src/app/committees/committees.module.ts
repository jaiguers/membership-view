import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteesRoutingModule } from './committees-routing.module';
import { CommitteesComponent } from './components/committees/committees.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [CommitteesComponent],
  imports: [
    CommonModule,
    CommitteesRoutingModule,
    SharedModule
  ]
})
export class CommitteesModule { }
