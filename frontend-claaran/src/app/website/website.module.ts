import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
/* import { FooterComponent } from './components/shared/footer/footer.component'; */
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { footerComponent } from './components/shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterService } from '../services/footer.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    WebsiteComponent,
    NavbarComponent,
    footerComponent,
    HeaderComponent,
    AboutUsComponent,
    ServicesComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    
  ], 
   providers: [
    provideHttpClient()
   ]
})
export class WebsiteModule { }
