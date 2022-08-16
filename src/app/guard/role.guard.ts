import { Injectable  } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  role:any='';

  constructor(private service : UserService){}


    canActivate(){
    const helper = new JwtHelperService()
    this.role = localStorage.getItem("token")
    const decodeToken = helper.decodeToken(this.role);
    console.log(decodeToken);
    if(decodeToken.role == "admin")
      return true;
    alert("You Don't Have Admin Rights")
      return false;

  }

 
}

