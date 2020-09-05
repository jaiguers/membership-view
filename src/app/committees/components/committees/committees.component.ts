import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CommitteesService } from './../../../core/service/committees/committees.service';
import { Committee } from './../../../core/models/committee.model';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  committee: Committee;

  constructor(
    private route: ActivatedRoute,
    private commService: CommitteesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetCommittee(id);
    });
  }

  fetCommittee(id: number) {
    this.commService.getCommittee(id).subscribe(comm => {
      this.committee = comm;
    });
  }
}
