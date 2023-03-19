import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private _recipeService:RecipeService,
    private _router:Router,
    private route:ActivatedRoute) { }

  @Input() recipe:Recipe;
  @Input() index:number;
  
  ngOnInit(): void {
  }



  
}
