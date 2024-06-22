import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreacionDeReferenciasComponent } from './components/creacion-de-referencias/creacion-de-referencias.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent,
    CreacionDeReferenciasComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdministrationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
