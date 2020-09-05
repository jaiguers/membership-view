import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: '1', title: 'Bienvenidos', cols: 1, rows: 1 },
          { id: '2', title: 'Horarios de culto', cols: 1, rows: 1 }
        ];
      }

      return [
        { id: '1', title: 'Bienvenidos', cols: 1, rows: 1 },
        { id: '2', title: 'Horarios de culto', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
