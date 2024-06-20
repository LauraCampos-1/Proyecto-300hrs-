import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionDeReferenciasComponent } from './components/creacion-de-referencias/creacion-de-referencias.component';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {path: 'creacion-referencias', component: CreacionDeReferenciasComponent},
    ]
  }
];

// const routes: Routes = [
//   {path: 'creacionref', component: CreacionDeReferenciasComponent}
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }