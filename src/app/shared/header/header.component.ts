import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  onPressLogout() {
    localStorage.removeItem('userDate');
    localStorage.removeItem('access-token');
    this.router.navigateByUrl("/login");
  }

}
