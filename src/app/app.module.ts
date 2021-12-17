// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './layouts/default/default.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonUtilsModule } from './utilities/material-utils.module';

// Component

// Services
import { DataService } from './services/data.service';
import { SharedUtils } from './utilities/shared-utils.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CommonUtilsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    SharedUtils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
