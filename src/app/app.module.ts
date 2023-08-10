import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './_material/material.module';
import { MesaComponent } from './pages/mesa/mesa.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './_shared/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    MesaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
