import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';
import { HomeComponent } from './website/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
