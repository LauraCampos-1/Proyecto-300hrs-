import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebsiteModule } from './website.module';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {path: 'home', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }