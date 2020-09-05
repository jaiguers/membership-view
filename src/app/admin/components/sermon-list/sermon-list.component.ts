import { Component, OnInit } from '@angular/core';

import { SermonService } from './../../../core/service/sermon/sermon.service';
import { Sermon } from './../../../core/models/sermon.model';

@Component({
  selector: 'app-sermon-list',
  templateUrl: './sermon-list.component.html',
  styleUrls: ['./sermon-list.component.scss']
})
export class SermonListComponent implements OnInit {

  sermons: Sermon[];
  displayedColumns: string[] = [
    'title', 'preacher', 'sermondate', 'actions'
  ];

  constructor(private service: SermonService) { }

  ngOnInit() {
    this.fetchSermons();
  }

  fetchSermons() {
    this.service.getAllSermons().subscribe(sermon => {
      this.sermons = sermon;
    });
  }

}
