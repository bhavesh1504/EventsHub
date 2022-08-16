import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private service : AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/posts").subscribe(res => {
      console.log(res)
      let admin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.UHnffynBjuE3dcwEUyqldVbN-5QzMT-oiyXqkRbWJOI'
      let users = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciJ9.04wRHoeP0SL7-IWcxX-KFt6fgXT8urkjy8vyEwB0Gbc'

      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      
    
      if(user?.role=='admin'){
        localStorage.setItem('token',admin)
        
        this.router.navigate(["specialevents"])
        alert("Login Successfull");
        this.loginForm.reset();

      }
      else if(user?.role=='user'){
        localStorage.setItem('token',users)
        this.router.navigate(["events"])
        alert("Login Successfull");
        this.loginForm.reset();
       
      }else{
        if(!user){
        alert("User not found!");
        }}
     })
    }
  }



