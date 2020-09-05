import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { CommitteeCreateComponent } from './components/committee-create/committee-create.component';
import { CommitteeListComponent } from './components/committee-list/committee-list.component';
import { SermonListComponent } from './components/sermon-list/sermon-list.component';
import { SermonCreateComponent } from './components/sermon-create/sermon-create.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { ExporthnosComponent } from './components/exporthnos/exporthnos.component';
import { SermonEditComponent } from './components/sermon-edit/sermon-edit.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { CommitteEditComponent } from './components/committe-edit/committe-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberEditComponent,
    CommitteeCreateComponent,
    CommitteeListComponent,
    SermonListComponent,
    SermonCreateComponent,
    PortfolioListComponent,
    PortfolioCreateComponent,
    ExporthnosComponent,
    SermonEditComponent,
    PortfolioEditComponent,
    CommitteEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class AdminModule { }
