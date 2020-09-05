import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { CommitteeCreateComponent } from './components/committee-create/committee-create.component';
import { CommitteeListComponent } from './components/committee-list/committee-list.component';
import { ExporthnosComponent } from './components/exporthnos/exporthnos.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { SermonListComponent } from './components/sermon-list/sermon-list.component';
import { SermonCreateComponent } from './components/sermon-create/sermon-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { SermonEditComponent } from './components/sermon-edit/sermon-edit.component';

const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'create', component: ProductFormComponent },
      { path: 'table', component: TableComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/create', component: FormProductComponent },
      { path: 'products/edit/:id', component: ProductEditComponent },
      { path: 'members', component: MemberListComponent },
      { path: 'members/create', component: MemberCreateComponent },
      { path: 'committees', component: CommitteeListComponent },
      { path: 'committees/create', component: CommitteeCreateComponent },
      // { path: 'committees/edit/:id', component: committeed },
      { path: 'members/exporthnos', component: ExporthnosComponent },
      { path: 'portfolios', component: PortfolioListComponent },
      { path: 'portfolios/create', component: PortfolioCreateComponent },
      { path: 'portfolios/edit/:id', component: PortfolioEditComponent },
      { path: 'sermon', component: SermonListComponent },
      { path: 'sermon/create', component: SermonCreateComponent },
      { path: 'sermon/edit/:id', component: SermonEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
