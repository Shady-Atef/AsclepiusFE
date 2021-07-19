import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'patient-profile', component: PatientProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
