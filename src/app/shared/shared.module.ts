import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CommonUtilsModule } from '../utilities/material-utils.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsModule,
    RouterModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
