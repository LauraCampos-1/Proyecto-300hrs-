import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

// {path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
  // {path: 'admin', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
