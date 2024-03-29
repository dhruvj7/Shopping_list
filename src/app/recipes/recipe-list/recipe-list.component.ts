import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] =[];
  constructor(private _recipeService:RecipeService) { }

  @Output() sendDetails=new EventEmitter();
  
  ngOnInit(): void {
    this.recipes=this._recipeService.getRecipes();
    this._recipeService.recipesChanged.subscribe((newRecipes)=>{
      this.recipes=newRecipes;
    })
  }
  
  showDetails(data){
    this.sendDetails.emit(data);
  }

}
