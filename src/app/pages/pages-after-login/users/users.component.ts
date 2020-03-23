import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users = [];
  user: any;
  constructor() { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    this.user = JSON.parse(localStorage.getItem("userData"));
    this.users = this.users.filter(v => v.userId != this.user.userId); 
  }
  onPressDelete(item) {
    const index = this.users.findIndex(v => v.userId == item.userId);
    this.users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

}
