import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user = { userName: "", password: "" };
  submitSuccess = false;
  submitError = false;
  messageResponse = ""
  constructor(public router: Router, private loginProvider: LoginService) { }

  ngOnInit() {
  }
  onPressLogin(form) {
    if (form.valid) {
      this.loginProvider.login(this.user).subscribe((Res) => {
        localStorage.setItem("access-token", '123');
        localStorage.setItem("userData", JSON.stringify(Res));
        this.submitSuccess = true;
        this.messageResponse = 'Login Success';
        setTimeout(() => {
          this.submitSuccess = false;
          this.router.navigateByUrl("/user/users");
        }, 2000);

      }, err => {
        this.submitError = true;
        this.messageResponse = 'Login Fail';
        setTimeout(() => {
          this.submitError = false;
        }, 2000);
      });
    }

  }

}
