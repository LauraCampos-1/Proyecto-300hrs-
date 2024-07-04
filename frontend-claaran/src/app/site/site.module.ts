import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';

import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderComponent } from '../components/layout/header/header.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    CreditsComponent,
    NavbarComponent,
    FooterComponent,
    OurServicesComponent,
    AboutUsComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
