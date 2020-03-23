import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
  submitSuccess = false;
  submitError = false;
  messageResponse = "";
  user = {password: "", confirmPassword: ""};
  currentUser: any;
  users = [];
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("userData"));
    this.users = JSON.parse(localStorage.getItem("users"));
  }
  onPressChange(form) {
    if (form.valid) {
      if (this.user.password == this.user.confirmPassword) {
        this.currentUser.password = this.user.password;
        const index = this.users.findIndex(v => v.userId == this.currentUser.userId);
        this.users.splice(index, 1, this.currentUser);
        localStorage.setItem("userData", JSON.stringify(this.currentUser));
        localStorage.setItem("users", JSON.stringify(this.users));
        this.submitSuccess = true;
        this.messageResponse = 'Save Success';
        setTimeout(() => {
          this.submitSuccess = false;
        }, 2000);

      } else {
        this.submitError = true;
        this.messageResponse = 'Password and Confirm Password Must Be The Same';
        setTimeout(() => {
          this.submitError = false;
        }, 2000);
      }
    }
  }

}
