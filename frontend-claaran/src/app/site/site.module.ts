import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
