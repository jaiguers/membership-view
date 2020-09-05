import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { CartService } from './../../../core/service/cart.service';
import { CommitteesService } from './../../../core/service/committees/committees.service';
import { Committee } from './../../../core/models/committee.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  committees: Committee[];

  constructor(
    private commService: CommitteesService,
    @Inject(PLATFORM_ID) private platformId
  ) {
  }

  ngOnInit() {
    this.getAllCommittees();
  }

  getAllCommittees() {
    this.commService.getAllCommittees().subscribe(committees => {
      this.committees = committees.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  showMenu() {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector('.nav-menu').classList.toggle('show');
    }

  }
}
