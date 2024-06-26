import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HomeComponent } from '../pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

const routes: Routes = [
  /** Rutas de los componentes del Modulo Admin */
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '',               component: HomeComponent },
      { path: 'about-us',       component: AboutUsComponent },
      { path: 'our-services',   component: OurServicesComponent },
      { path: 'credits',        component: CreditsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
