import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Portfolio } from './../../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getAllPortfolio() {
    return this.http.get<Portfolio[]>(environment.urlMembership + 'portfolio');
  }

  getPortfolio(id: number) {
    return this.http.get<Portfolio>(`${environment.urlMembership}portfolio/${id}`);
  }

  createPortfolio(portfolio: Portfolio) {
    return this.http.post(`${environment.urlMembership}portfolio/`, portfolio);
  }

  updatePortfolio(id: number, changes: Partial<Portfolio>) {
    return this.http.put(`${environment.urlMembership}portfolio/${id}`, changes);
  }

  deletePortfolio(id: string) {
    return this.http.delete(`${environment.urlMembership}portfolio/${id}`);
  }
}
