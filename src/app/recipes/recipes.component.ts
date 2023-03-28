import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(private _recipeService:RecipeService ) { }

  ngOnInit(): void {
    // this._recipeService.selectedRecipe.subscribe(
    //   (recipeSelected)=>{ this.currentRecipe=recipeSelected}
    //   )
  }
}
