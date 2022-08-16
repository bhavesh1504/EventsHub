import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isUserLoggedIn(){
    debugger
    let token = localStorage.getItem('token')
    return token;
  }

 IsUserLoggedOut(){
  return localStorage.getItem('token')
}

}

