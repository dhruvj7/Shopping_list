import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private _shoppingService : ShoppingListService) { }

  ing:Ingredient;
  
  ngOnInit(): void {
  }

  addIngredients(name:string,amount:number){
    this.ing= new Ingredient(name,amount);
    this._shoppingService.addIngredients(this.ing)
  }

}
