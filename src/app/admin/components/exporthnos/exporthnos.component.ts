import { Component, OnInit } from '@angular/core';

import { MembersService } from './../../../core/service/members/members.service';
import { Members } from './../../../core/models/members.model';

@Component({
  selector: 'app-exporthnos',
  templateUrl: './exporthnos.component.html',
  styleUrls: ['./exporthnos.component.scss']
})
export class ExporthnosComponent implements OnInit {

  members: Members[];
  displayedColumns: string[] = [
    'names', 'surname', 'email', 'numberid', 'birthdate',
    'maritalstatus', 'baptized', 'mobile', 'education', 'profession',
    'livingplace', 'eps', 'sisben', 'gethelp', 'whohelps', 'funeralservice'
  ];

  constructor(private memberService: MembersService) { }

  ngOnInit() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.memberService.getAllMembers().subscribe(member => {
      this.members = member;
    });
  }

}
