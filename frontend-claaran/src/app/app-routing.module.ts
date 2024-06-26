import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '',         loadChildren: () => import('./site/site.module').then( module => module.SiteModule ) },
  { path: 'auth',     loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule ) },
  { path: 'admin',    loadChildren: () => import('./admin/admin.module').then( module => module.AdminModule ) },
  /** Ruta para la redireccion de rutas desconocidas */
  { path: '**',       redirectTo: 'auth' }
];

// {path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
// {path: 'admin', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
