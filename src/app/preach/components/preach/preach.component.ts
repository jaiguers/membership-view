import { Component, OnInit } from '@angular/core';

import { SermonService } from '../../../core/service/sermon/sermon.service';
import { Sermon } from './../../../core/models/sermon.model';

@Component({
  selector: 'app-preach',
  templateUrl: './preach.component.html',
  styleUrls: ['./preach.component.scss']
})
export class PreachComponent implements OnInit {

  sermons: Sermon[];

  constructor(private sermonService: SermonService) { }

  ngOnInit() {
    this.fetchSermon();
  }

  fetchSermon() {
    this.sermonService.getAllSermons().subscribe(serm => {
      this.sermons = serm;
    });
  }

}
