import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('access-token')) {
            const token = localStorage.getItem('access-token');
            const header = new HttpHeaders().set("access-token", token).set("Content-Type", 'application/json');
            const AuthRequest = request.clone({ headers: header });
            return next.handle(AuthRequest);
        }  else if (request.headers.get("allow") === 'true') {
            const header = new HttpHeaders().set("Content-Type", 'application/json');
            return next.handle(request.clone({ headers: header }));
        } else {
            return;
        }
    }
}
