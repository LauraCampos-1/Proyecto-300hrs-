import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferencesCreationComponent } from './pages/references-creation/references-creation.component';

const routes: Routes = [
  /** Rutas de los componentes del Modulo Admin */
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '',                     component: DashboardComponent },
      { path: 'references-creation',  component: ReferencesCreationComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
