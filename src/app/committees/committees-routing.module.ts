import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitteesComponent } from './components/committees/committees.component';

const routes: Routes = [
  { path: ':id', component: CommitteesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitteesRoutingModule { }
