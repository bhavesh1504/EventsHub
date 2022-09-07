import { Injectable  } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../service/user.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  role:any='';

  constructor(private service : UserService, private toast : NgToastService){}


    canActivate(){
    const helper = new JwtHelperService()
    this.role = localStorage.getItem("token")
    const decodeToken = helper.decodeToken(this.role);
    console.log(decodeToken);
    if(decodeToken.role == "admin")
      return true;  
    this.toast.warning({detail:'STOP', summary:'You Don`t Have Admin Rights', duration:10000});
      return false;

  }

 
}

