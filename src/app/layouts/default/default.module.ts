// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsModule } from 'src/app/utilities/material-utils.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

// Component
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CommonUtilsModule
  ]
})
export class DefaultModule { }
