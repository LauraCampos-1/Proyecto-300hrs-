import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';

import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    CreditsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
