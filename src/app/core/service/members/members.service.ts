import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Members } from './../../models/members.model';
import { Member } from './../../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  getAllMembers() {
    return this.http.get<Members[]>(environment.urlMembership + 'members');
  }

  getMember(id: number) {
    return this.http.get<Members>(`${environment.urlMembership}members/${id}`);
  }

  createMember(member: Member) {
    return this.http.post(`${environment.urlMembership}members/`, member);
  }

  updateMember(id: number, changes: Partial<Member>) {
    return this.http.put(`${environment.urlMembership}members/${id}`, changes);
  }

  deleteMember(id: number) {
    return this.http.delete(`${environment.urlMembership}members/${id}`);
  }
}
