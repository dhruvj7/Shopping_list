import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean = true;
  isLoaderVisible:boolean= false;
  errorMessage:string='';
  authObs:Observable<any>;

  constructor(private authService : AuthService , private router : Router,
                private store:Store<fromApp.AppState>) { }
  token:string=null;
  ngOnInit(): void {
    if(localStorage.userData){
      this.router.navigate(['recipes'])
    }
  }

  switchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm : NgForm){
    this.isLoaderVisible=true;

    if(!this.isLoginMode)
      this.authObs= this.authService.signup(authForm.controls.email.value,authForm.controls.password.value)
    else
      this.authObs = this.authService.signin(authForm.controls.email.value,authForm.controls.password.value)


      // this.store.select('auth')
      // .subscribe((data)=>{
      //   console.log("data-",data);
      // })

    this.authObs.subscribe(
      (data)=>{console.log("success",data) 
      // this.authService.isLogin=true;  
      this.router.navigate(['/recipes']);
    },
      (error)=>{console.log("error",error.error.error.message ) ; 
    this.errorMessage=error.error.error.message ;}
      )
    
    this.isLoaderVisible=false;
  }

  closeAlert(){
    this.errorMessage=null;
  }

}
