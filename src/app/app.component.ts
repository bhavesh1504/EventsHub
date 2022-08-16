import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventsHub';
  constructor(private route:Router, private user : UserService){}
  
  logout(){
    localStorage.clear()
    this.route.navigate(["login"])
  }
  IsUserLoggedOut(){
    return this.user.IsUserLoggedOut();
  }
}
