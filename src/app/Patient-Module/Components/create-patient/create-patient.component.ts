import { PatientRequest } from './../../models/PatientRequest';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss'],
})
export class CreatePatientComponent implements OnInit {
  constructor(private _patientService: PatientService) {}

  patient = new PatientRequest();
  ERROR = '';
  ngOnInit(): void {}

  createPatient() {
    let x = {
      firstName: 's',
      lastName: 'a',
      middleName: 'znull',
      dob: '1994-01-01T00:00:00',
      nationaID: '433434',
      address: 'sadada',
    };
    this._patientService.CreateNewPatient(x).subscribe(
      (res) => {
        let x = 10;
        //this._Router.navigateByUrl('/complaint/complaints-list');
      },
      (err) => {
        this.ERROR = err;
        //this._LoaderService.DecreaseCount();
      },
      () => {
        //this._LoaderService.DecreaseCount();
      }
    );
  }
}
