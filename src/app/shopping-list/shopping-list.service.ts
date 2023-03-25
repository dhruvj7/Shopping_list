import { Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './ngrx-store/shoppingListReducer';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientsChanged= new Subject<Ingredient[]>();
  // startedEditing = new Subject<number>();

  constructor(private store :Store<fromShoppingList.AppState>) { }

   ingredients: Ingredient[] =[];

    // getIngredient(index: number) {
    //   this.store
    // .select('shoppingList')
    // .subscribe(stateData => {
    //   if (stateData.ingredients) {
    //     this.ingredients=stateData.ingredients;
    //   }
    // });

    // return this.ingredients[index];
  }

  // addIngredients(newIngredient: Ingredient){
  //   this.ingredients.push(newIngredient);
  //   this.ingredientsChanged.next(this.ingredients.slice())
  // }
  // updateIngridients(index:number, newIngredient:Ingredient){
  //   this.ingredients[index]= newIngredient;
  //   this.ingredientsChanged.next(this.ingredients.slice())
  // }
  // deleteIngrideint(index:number){
  //   this.ingredients.splice(index,1);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

// }
