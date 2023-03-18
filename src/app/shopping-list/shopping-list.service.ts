import { Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  ingredients : Ingredient[]=[new Ingredient('Apple',5) , 
  new Ingredient('chilli',10) ];

  addIngredients(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
  }

}
