import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Education } from './../../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  getAllEducations() {
    return this.http.get<Education[]>(environment.urlMembership + 'educations');
  }

  getEducation(id: number) {
    return this.http.get<Education>(`${environment.urlMembership}education/${id}`);
  }

}
