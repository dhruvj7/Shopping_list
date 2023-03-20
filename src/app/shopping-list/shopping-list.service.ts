import { Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged= new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  // ingridientsChanged:Subject<Ingredient[]>;

  constructor() { }

  ingredients : Ingredient[]=[];

  addIngredients(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  updateIngridients(index:number, newIngredient:Ingredient){
    this.ingredients[index]= newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngrideint(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
