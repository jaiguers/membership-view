import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Living } from './../../models/living.model';

@Injectable({
  providedIn: 'root'
})
export class LivingService {

  constructor(private http: HttpClient) { }

  getAllLiving() {
    return this.http.get<Living[]>(environment.urlMembership + 'living');
  }

  getLiving(id: number) {
    return this.http.get<Living>(`${environment.urlMembership}living/${id}`);
  }
}
