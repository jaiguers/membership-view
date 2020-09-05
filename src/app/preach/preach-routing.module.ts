import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreachComponent } from './components/preach/preach.component';

const routes: Routes = [
  { path: '', component: PreachComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreachRoutingModule { }
