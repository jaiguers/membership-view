import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { UsersService } from './../../../core/service/users/users.service';
import { AuthService } from './../../../core/service/auth/auth.service';
import { Menu } from './../../../core/models/menu.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuList: Menu[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['./home']);
      });
  }

  getMenu() {

    this.authService.hasUser().subscribe(user => {

      if (user !== null) {
        this.userService.getUserEmail(user.email).subscribe(users => {

          const rolid = users.userRols[0].identificacion;

          this.userService.getUserMenu(rolid).subscribe(menus => {
            this.menuList = menus;
          });

        });
      }

    });


  }

}
