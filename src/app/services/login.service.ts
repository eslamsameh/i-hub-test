import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient) { }
  login(data) {
    return this.http.get("../../assets/users.json", { headers: { allow: "true" } }).pipe(map((r: any) => {
      let user = null;
      const users = JSON.parse(localStorage.getItem("users"));
      if (users && users.length) {
        user = users.filter(v => v.userName == data.userName && v.password == data.password)[0];
      } else {
        localStorage.setItem("users", JSON.stringify(r.users));
        user = r.users.filter(v => v.userName == data.userName && v.password == data.password)[0];
      }
      if (user) {
        return user;
      } else {
        throw throwError('error');
      }

    }));
  }
}
