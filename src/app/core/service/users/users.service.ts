import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { UserIpuc } from './../../models/useripuc.model';
import { Menu } from './../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserEmail(email: string) {
    return this.http.get<UserIpuc>(`${environment.urlMembership}useri/${email}`);
  }

  getUserMenu(id: number) {
    return this.http.get<Menu[]>(`${environment.urlMembership}menu/${id}`);
  }
}
