import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full', },
      { path: 'home', loadChildren: () => import('./home/home.module').then(j => j.HomeModule) },
      { path: 'preach', loadChildren: () => import('./preach/preach.module').then(j => j.PreachModule) },
      { path: 'ipuc-san-judas', loadChildren: () => import('./ipuc/ipuc.module').then(j => j.IpucModule) },
      { path: 'committees', loadChildren: () => import('./committees/committees.module').then(j => j.CommitteesModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(j => j.ContactModule) },
      { path: 'order', canActivate: [AdminGuard], loadChildren: () => import('./order/order.module').then(j => j.OrderModule) },
      { path: 'products', loadChildren: () => import('./product/product.module').then(j => j.ProductModule) },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(j => j.AdminModule)
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(j => j.AuthModule) },
  {
    path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(j => j.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
