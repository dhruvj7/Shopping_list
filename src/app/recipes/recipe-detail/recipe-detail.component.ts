import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe:Recipe;

  constructor(private _shoppingService:ShoppingListService) {
   }
   
  ngOnInit(): void {
  }

  addToShoppingList(){
    console.log(this.currentRecipe.ingredients)
    for(let ingridient of this.currentRecipe.ingredients){
      this._shoppingService.addIngredients(ingridient);
    }
  }

}
