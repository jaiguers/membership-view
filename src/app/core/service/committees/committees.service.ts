import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Committee } from '../../models/committee.model';

@Injectable({
  providedIn: 'root'
})
export class CommitteesService {

  constructor(private http: HttpClient) { }

  getAllCommittees() {
    return this.http.get<Committee[]>(environment.urlMembership + 'committees');
  }

  getCommittee(id: number) {
    return this.http.get<Committee>(`${environment.urlMembership}committees/${id}`);
  }

  createCommittee(comm: Committee) {
    return this.http.post(`${environment.urlMembership}committees`, comm);
  }

  updateCommittee(id: string, changes: Partial<Committee>) {
    return this.http.put(`${environment.urlMembership}committees/${id}`, changes);
  }

}
