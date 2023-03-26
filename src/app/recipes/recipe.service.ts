import { Injectable, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import { Ingredient } from 'src/shared/ingredients.model';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService{
  private recipes: Recipe[] = [ 
    new Recipe("Meat burger",
    "A culinary creation with a perfectly seasoned patty made from the finest quality beef, spices and lots of cheese",
    "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    [
      new Ingredient("meat",1),
      new Ingredient("corn flour",12)
    ]),
  new Recipe ("Aloo ka paratha",
  "Aloo ka paratha is a delicious and popular Indian flatbread made from unleavened dough stuffed with a spiced mashed potato filling.",
  "https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Piping-Pot-Curry.jpg",
  [
    new Ingredient("potato",5),
    new Ingredient("ghee",1)
  ]
  )
];
  constructor() { }

  recipesChanged= new Subject<Recipe[]>();

  getRecipes(){
    return this.recipes.slice();
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
  setRecipes(newRecipes:Recipe[]){
    this.recipes =newRecipes;
    this.recipesChanged.next(this.recipes);
  }
  
}
