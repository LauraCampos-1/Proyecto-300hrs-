import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferencesCreationComponent } from './pages/references-creation/references-creation.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ReferencesCreationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
