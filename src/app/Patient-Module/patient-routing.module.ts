import { PatientProfileComponent } from './Components/patient-profile/patient-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'PatientProfile', component: PatientProfileComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PatientRoutingModule { }
