import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Marital } from './../../models/marital.model';

@Injectable({
  providedIn: 'root'
})
export class MaritalService {

  constructor(private http: HttpClient) { }

  getAllMaritalStatus() {
    return this.http.get<Marital[]>(environment.urlMembership + 'marital');
  }

  getMaritalStatus(id: number) {
    return this.http.get<Marital>(`${environment.urlMembership}marital/${id}`);
  }
}
