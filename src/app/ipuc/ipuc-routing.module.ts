import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IpucComponent } from './components/ipuc.component';


const routes: Routes = [
  { path: '', component: IpucComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpucRoutingModule { }
