import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreacionDeReferenciasComponent } from './components/creacion-de-referencias/creacion-de-referencias.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent },
  {path: 'dashboard',component:DashboardComponent },
  {path: 'dashboard/creacion-de-referencias',component:CreacionDeReferenciasComponent },
  {path: '**',redirectTo:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }