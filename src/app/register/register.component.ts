import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup; 

  constructor(private service : AuthService, private router : Router, private formbuilder : FormBuilder, private toast : NgToastService) { 
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
        this.toast.success({detail:'SUCCESS', summary:'Registered Successfull', duration:5000});
        this.signupForm.reset();
        this.router.navigate(['login']);
        
      },
      err => {
        console.log(err);
        this.toast.info({detail:'OOPS', summary:'Something Went Wrong', duration:10000});
      }
    )
  }

}
