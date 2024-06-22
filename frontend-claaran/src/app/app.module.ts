import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';
<<<<<<< HEAD
import { footerComponent   } from './website/components/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './website/components/header/header.component';

=======
import { LoginComponent } from './auth/login/login.component';
import { AdministrationModule } from './administration/administration.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 0aab7c4afba4b6bc3fc51699c6c1d7a6c154fa88


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
    LoginComponent,
>>>>>>> 0aab7c4afba4b6bc3fc51699c6c1d7a6c154fa88
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    RouterModule
=======
    WebsiteModule,
    AdministrationModule,
    RouterModule,
    ReactiveFormsModule
>>>>>>> 0aab7c4afba4b6bc3fc51699c6c1d7a6c154fa88
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
