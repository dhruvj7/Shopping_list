import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';
import{tap} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http : HttpClient, private router:Router) { }

  ngOnInit(){

  }
  
  user = new Subject<User>();
  
  signup(email:string,password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAWYy--ew7qXEpajpHzKucK5iZ4avWjVo',
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
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAWYy--ew7qXEpajpHzKucK5iZ4avWjVo',
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
      email:string, 
      id:string,
      _token:string,
      tokenExpirationDate:string

    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadUser = new User(userData.email,userData.id,userData._token,new Date (userData.tokenExpirationDate));
    if(loadUser.token){
      this.user.next(loadUser);
    }
  }

  private handleAuthetication(resData:any){
    const expirationTime = new Date(new Date().getTime() + +resData.expiresIn*1000)
    const newUser= new User(resData.email,resData.localId, resData.idToken,expirationTime);
    this.user.next(newUser);
    localStorage.setItem('userData',JSON.stringify(newUser));
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['auth']);
    localStorage.clear();
  }

}
