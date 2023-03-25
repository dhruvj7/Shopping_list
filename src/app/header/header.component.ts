import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataStorageService } from 'src/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean;

  constructor(private dataStorage : DataStorageService,private authService : AuthService,
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    if(localStorage.userData){
      this.isAuthenticated=true;
    }
    this.store.select('auth').pipe(map((authState)=>{
      return authState.user
    })).subscribe((user)=>{
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
