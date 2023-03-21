import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/recipes/recipe.model';
import {map} from 'rxjs/operators'
import { RecipeService } from 'src/app/recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient, private recipeService:RecipeService) { }

  storeRecipes(){
    const recipes= this.recipeService.getRecipes();
    this.http.put('https://shopping-list-8dbc3-default-rtdb.firebaseio.com/recipes.json',recipes)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  fetchRecipes(){
    this.http.get<Recipe[]>('https://shopping-list-8dbc3-default-rtdb.firebaseio.com/recipes.json',)
    .pipe(
      map(recipes => {   //rxjs operator
        return recipes.map (recipe=>{   //operator for array , parse each element in array
          return {... recipe ,ingredients:recipe.ingredients?recipe.ingredients:[] }
        })
      })
      )
    .subscribe((recipes)=>{
      this.recipeService.setRecipes(recipes);
    })
  }
}
