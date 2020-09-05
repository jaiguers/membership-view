import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ContentComponent } from './components/content/content.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
        ContentComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule,
        MaterialModule
    ]
})
export class HomeModule {

}
