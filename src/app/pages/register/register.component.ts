import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  user: User = {} as User;
  submitSuccess = false;
  submitError = false;
  messageResponse = ""
  constructor(private registerProvider: RegisterService, public router: Router) { }

  ngOnInit() {
  }
  onPressRegister(form) {
    if (form.valid) {
      this.registerProvider.register(this.user).subscribe((Res) => {
        this.submitSuccess = true;
        this.messageResponse = 'Added Success';
        setTimeout(() => {
          this.submitSuccess = false;
          this.router.navigateByUrl("/login");
        }, 2000);
      }, err => {
        this.submitError = true;
        this.messageResponse = 'Added Fail';
        setTimeout(() => {
          this.submitError = false;
        }, 2000);
      });
    }
  }

}
