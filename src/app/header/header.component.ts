import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage : DataStorageService) { }

  ngOnInit(): void {
  }

  saveRecipes(){
    this.dataStorage.storeRecipes();
  }
  fetchRecipes(){
    this.dataStorage.fetchRecipes();
  }

}
