import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MembersService } from './../../../core/service/members/members.service';
import { Members } from './../../../core/models/members.model';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Members[];
  displayedColumns: string[] = [
    'names', 'surname', 'email', 'numberid',
    'birthdate', 'maritalstatus', 'baptized',
    'mobile', 'education', 'profession',
    'livingplace', 'eps', 'sisben', 'gethelp',
    'whohelps', 'funeralservice', 'pension',
    'spouse', 'pastorbaptized', 'numberchildren', 'actions'
  ];
  dataSource: MatTableDataSource<Members>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private memberService: MembersService) {
  }

  ngOnInit() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.memberService.getAllMembers().pipe(timeout(30000)).subscribe(member => {
      this.members = member;

      this.dataSource = new MatTableDataSource(this.members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
