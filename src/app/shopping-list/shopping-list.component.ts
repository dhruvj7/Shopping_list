import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[];
  constructor(private _shoppingService :ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this._shoppingService.ingredients;
  }

}
