import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipe:Recipe;
  constructor(private _shoppingService:ShoppingListService, private _recipeService:RecipeService,
    private _route :ActivatedRoute,private router:Router) {
   }

   id:number;

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.id= +params.id;
      this.currentRecipe=this._recipeService.findRecipe(this.id);
    })
  }

  addToShoppingList(){
    for(let ingridient of this.currentRecipe.ingredients){
      this._shoppingService.addIngredients(ingridient);
    }
  }

  delete(){
    this._recipeService.deleteRecipe(this.id);
    this.router.navigate(['..']); //going one level up
  }

}
