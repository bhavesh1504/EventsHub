import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup; 

  constructor(private service : AuthService, private router : Router, private formbuilder : FormBuilder) { 
    this.signupForm = this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern("[a-zA-z@_]{6,}")]],
      role:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.postUser(this.signupForm.value)
    .subscribe(
      res => { console.log(res);
        alert("Register successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
        
      },
      err => {
        console.log(err);
        alert("Something went wrong");
      }
    )
  }

}
