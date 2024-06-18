import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './components/home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';



@NgModule({
  declarations: [
    WebsiteComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
