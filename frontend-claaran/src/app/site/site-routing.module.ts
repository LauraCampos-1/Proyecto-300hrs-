import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HomeComponent } from '../pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';

const routes: Routes = [
  /** Rutas de los componentes del Modulo Admin */
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '',         component: HomeComponent },
      { path: 'credits',  component: CreditsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
