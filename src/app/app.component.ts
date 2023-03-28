import { Component } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';
import { AuthService } from './auth/auth.service';

@Component({   //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_list';
  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.authService.autoLogout();
  }
}
