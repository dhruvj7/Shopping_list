import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe("A test recipe","this is a testing recipe","https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1"),
                        new Recipe ("second test","second testing","https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1")];
  constructor() { }

  ngOnInit(): void {
  }

}
