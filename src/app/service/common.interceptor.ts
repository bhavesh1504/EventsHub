import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private user : UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const token = this.user.isUserLoggedIn();
      request = request.clone({setHeaders:{
        Authorization: `token ${token}` 
      }});
    return next.handle(request);
  }
}
