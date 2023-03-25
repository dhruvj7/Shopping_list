import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/shared/ingredients.model';
import * as shoppingListAction from 'src/app/shopping-list/ngrx-store/shopping-list.actions';
import * as fromShoppingList from 'src/app/shopping-list/ngrx-store/shoppingListReducer';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipe:Recipe;
  constructor(private _shoppingService:ShoppingListService, private _recipeService:RecipeService,
    private _route :ActivatedRoute,private router:Router,
    private store :Store<fromShoppingList.AppState>) {
   }

   id:number;

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.id= +params.id;
      this.currentRecipe=this._recipeService.findRecipe(this.id);
    })
  }

  addToShoppingList(){
    // for(let ingridient of this.currentRecipe.ingredients){
    //   this._shoppingService.addIngredients(ingridient);
    // }

    this.store.dispatch( new shoppingListAction.addAllIngredients(this.currentRecipe.ingredients))
  }

  delete(){
    this._recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']); //going one level up
  }

}
