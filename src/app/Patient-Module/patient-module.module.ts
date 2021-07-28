import { MaterialModule } from './../shared/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PatientProfileComponent, CreatePatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ],
})
export class PatientModuleModule {}
