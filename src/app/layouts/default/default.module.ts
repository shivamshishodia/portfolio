// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsModule } from 'src/app/utilities/material-utils.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

// Component
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { MaintenanceComponent } from 'src/app/modules/maintenance/maintenance.component';
import { ExperienceComponent } from 'src/app/modules/experience/experience.component';
import { AcademicsComponent } from 'src/app/modules/academics/academics.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    MaintenanceComponent,
    ExperienceComponent,
    AcademicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CommonUtilsModule
  ]
})
export class DefaultModule { }
