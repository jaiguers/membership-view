import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Sermon } from './../../models/sermon.model';

@Injectable({
  providedIn: 'root'
})
export class SermonService {

  constructor(private http: HttpClient) { }

  getAllSermons() {
    return this.http.get<Sermon[]>(environment.urlMembership + 'sermon');
  }

  getSermon(id: number) {
    return this.http.get<Sermon>(`${environment.urlMembership}sermon/${id}`);
  }

  createSermon(sermon: Sermon) {
    return this.http.post(`${environment.urlMembership}sermon/`, sermon);
  }

  updateSermon(id: number, changes: Partial<Sermon>) {
    return this.http.put(`${environment.urlMembership}sermon/${id}`, changes);
  }

  deleteSermon(id: number) {
    return this.http.delete(`${environment.urlMembership}sermon/${id}`);
  }
}
