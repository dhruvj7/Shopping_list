import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
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
  constructor(private _shoppingService:ShoppingListService) { }
  
  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
    //slice added to pass a copy of array
  }

  findRecipe(index:number){
    return this.recipes[index];
  }
  
}
