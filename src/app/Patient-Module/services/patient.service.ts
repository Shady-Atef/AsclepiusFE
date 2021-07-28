import { PatientRequest } from './../models/PatientRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlsConfiguration } from 'src/app/shared/config/Urls.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _HttpClient: HttpClient) {}

  CreateNewPatient(request: any) {
    let url =
      UrlsConfiguration.EndPoints.ImhotepApi +
      UrlsConfiguration.Urls.Patient.CreatePatient;
    return this._HttpClient.post(url, request) as Observable<boolean>;
  }
}
