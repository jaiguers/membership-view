import { Component, OnInit } from '@angular/core';

import { CommitteesService } from './../../../core/service/committees/committees.service';
import { Committee } from './../../../core/models/committee.model';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent implements OnInit {

  committees: Committee[];
  displayedColumns: string[] = ['name', 'president', 'actions'];

  constructor(private commService: CommitteesService) { }

  ngOnInit() {
    this.fetchCommittees();
  }

  fetchCommittees() {
    this.commService.getAllCommittees().subscribe(comm => {
      this.committees = comm;
    });
  }

  deleteCommittees(id: number) {

  }
}
