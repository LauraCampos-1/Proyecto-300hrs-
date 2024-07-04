import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferencesCreationComponent } from './pages/references-creation/references-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponentComponent } from './footer.component/footer.component.component';
import { HeaderComponentComponent } from './header.component/header.component.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ReferencesCreationComponent,
    HeaderComponentComponent,
    FooterComponentComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
