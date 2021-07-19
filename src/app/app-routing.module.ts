import { PatientModuleModule } from './patient-module/patient-module.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //canActivateChild: [AuthGurdService],
    children: [
      {
        path: 'patient',
        loadChildren: () =>
          import('./patient-module/patient-module.module').then(
            (m) => m.PatientModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
