import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]=[new Ingredient('Apple',5) , 
  new Ingredient('chilli',10)
];
  constructor() { }

  ngOnInit(): void {
  }

  addIngridient(newIngrident:Ingredient){
    this.ingredients.push(newIngrident);
    debugger;
  }

}
