import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient) { }
  register(data: User) {

    return this.http.get("../../assets/users.json", { headers: { allow: "true" } }).pipe(map((r: any) => {
      debugger;
      const users = JSON.parse(localStorage.getItem("users")) || r.users;
      data.userId = (parseInt(users[users.length - 1].userId) + 1).toString() || 0;
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      return {status: 'ok', message: "Added Successfully"}

    }));

  }
}
