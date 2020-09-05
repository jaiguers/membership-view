import { Component, OnInit } from '@angular/core';

import { PortfolioService } from './../../../core/service/portfolio/portfolio.service';
import { Portfolio } from './../../../core/models/portfolio.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolios: Portfolio[];
  displayedColumns: string[] = [
    'agent', 'cellphone', 'email', 'socialnetwork', 'urlwebsite', 'actions'
  ];

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.fetchPortfolios();
  }

  fetchPortfolios() {
    this.service.getAllPortfolio().subscribe(portfolio => {
      this.portfolios = portfolio;
    });
  }

}
