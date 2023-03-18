import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [ new Recipe("A test recipe","this is a testing recipe","https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1"),
                        new Recipe ("second test","second testing","https://th.bing.com/th/id/OIP.aclJvvwAnYlHcv5vAw706AHaLH?pid=ImgDet&rs=1")];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
    
    //ye .splice not sure why added
  }
}
