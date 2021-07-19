import { PatientRoutingModule } from './patient-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';

@NgModule({
  declarations: [PatientProfileComponent, CreatePatientComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModuleModule {}
