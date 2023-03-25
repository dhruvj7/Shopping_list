import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';
import{tap} from 'rxjs/operators'
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { Store } from '@ngrx/store';
import * as authActions from './ngrx-store/auth.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http : HttpClient, private router:Router,private store:Store) { }

  ngOnInit(){
  }
  
  // user = new Subject<User>();
  
  signup(email:string,password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseApiKey,
    {
      email: email,
      password:password,
      returnSecureToken:true
    }) .pipe(
      tap ((resData:any)=>{
        this.handleAuthetication(resData);
      })
    )
  }

  signin(email:string,password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseApiKey,
    {
      email: email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap ((resData:any)=>{
        this.handleAuthetication(resData);
      })
    )
  }

  autoLogin(){
    const userData: {
      username:string, 
      id:string,
      _token:string,
      expirationTime:string

    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadUser = new User(userData.username,userData.id,userData._token,new Date (userData.expirationTime));
    if(loadUser.token){
      this.store.dispatch(new authActions.login({email:loadUser.username , id:loadUser.id, 
        token:loadUser.token , expirationDate:loadUser.expirationTime}))
    }
  }

  autoLogout(){
      if(localStorage.userData){
      const expirationDate:Date=new Date(JSON.parse(localStorage.userData).expirationTime);
      const newDate =new Date();
      if(expirationDate <= newDate){
        this.logout();
      }
      console.log("expiration date",expirationDate , "current date",newDate)
    }
  }

  private handleAuthetication(resData:any){
    const expirationDate = new Date(new Date().getTime() + +resData.expiresIn*1000)
    const newUser= new User(resData.email,resData.localId, resData.idToken,expirationDate);
    
    this.store.dispatch(new authActions.login({email:resData.email,id:resData.localId, 
                                                token:resData.idToken,expirationDate:expirationDate}))

    // this.user.next(newUser);
    localStorage.setItem('userData',JSON.stringify(newUser));
  }

  logout(){
    // this.user.next(null);
    this.store.dispatch(new authActions.logout());
    this.router.navigate(['auth']);
    localStorage.clear();
  }

}
