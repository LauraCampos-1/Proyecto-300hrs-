import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreacionDeReferenciasComponent } from './components/creacion-de-referencias/creacion-de-referencias.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent,
    CreacionDeReferenciasComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdministrationModule { }
