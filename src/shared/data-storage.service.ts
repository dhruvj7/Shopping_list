import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from 'src/app/recipes/recipe.model';
import {map} from 'rxjs/operators'
import { RecipeService } from 'src/app/recipes/recipe.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService{

  constructor(private http : HttpClient, private recipeService:RecipeService , private auth:AuthService) { }
  

  ngOnInit(){
  }

  storeRecipes(){
   const recipes= this.recipeService.getRecipes();
   const tokenId=JSON.parse(localStorage.getItem('userData'))._token;
   const id=JSON.parse(localStorage.getItem('userData')).id;
    this.http.put('https://shopping-list-8dbc3-default-rtdb.firebaseio.com/recipes/'+id+'.json?auth='+ tokenId,recipes)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  fetchRecipes(){
    const tokenId=JSON.parse(localStorage.getItem('userData'))._token;
    const id=JSON.parse(localStorage.getItem('userData')).id;
    this.http.get<Recipe[]>('https://shopping-list-8dbc3-default-rtdb.firebaseio.com/recipes/'+id+'.json',{
      params:new HttpParams()
      .set('auth',tokenId)
    })
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
