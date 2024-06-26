import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './components/home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministrationModule } from '../administration/administration.module';



@NgModule({
  declarations: [
    WebsiteComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    AdministrationModule
  ],
  exports: [
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
