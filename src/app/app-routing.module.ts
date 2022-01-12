import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { MaintenanceComponent } from './modules/maintenance/maintenance.component';

const routes: Routes = [{
  path: '', component: DefaultComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '**', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
