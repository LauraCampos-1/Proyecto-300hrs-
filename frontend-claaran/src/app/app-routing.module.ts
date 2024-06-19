import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
  {path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
