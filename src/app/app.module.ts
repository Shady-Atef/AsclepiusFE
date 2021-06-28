import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientProfileComponent } from './Patient-Module/Components/patient-profile/patient-profile.component';
import { PatientRoutingModule } from './Patient-Module/patient-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
