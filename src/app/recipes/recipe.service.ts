import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Ingredient } from 'src/shared/ingredients.model';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [ 
    new Recipe("Meat burger",
    "Burger with oozing cheese and meat",
    "https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1",
    [
      new Ingredient("meat",1),
      new Ingredient("corn flour",12)
    ]),
  new Recipe ("Aloo ka paratha",
  "Best breakfast",
  "https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1",
  [
    new Ingredient("aloo",5),
    new Ingredient("masale",5)
  ]
  )
];
  constructor() { }

  recipesChanged= new Subject<Recipe[]>();

  getRecipes(){
    return this.recipes.slice();
    //slice added to pass a copy of array
  }

  findRecipe(index:number){
    return this.recipes[index];
  }
  updateRecipe(index:number , newRecipe:Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes);
  }
  addRecipe(newRecipe:Recipe){
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes);
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes);
  }
  
}
