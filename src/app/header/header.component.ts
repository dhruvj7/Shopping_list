import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean;

  constructor(private dataStorage : DataStorageService,private authService : AuthService) { }

  ngOnInit(): void {
    if(localStorage.userData){
      this.isAuthenticated=true;
    }
    this.authService.user.subscribe((user)=>{
      this.isAuthenticated = !!user;
    })
  }

  saveRecipes(){
    this.dataStorage.storeRecipes();
  }
  fetchRecipes(){
    this.dataStorage.fetchRecipes();
  }
  logout(){
    this.authService.logout();
  }

}
