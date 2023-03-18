import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  ing:Ingredient;
  @Output() addIngredient=new EventEmitter();
  
  ngOnInit(): void {
  }

  addIngredients(name:string,amount:number){
    this.ing= new Ingredient(name,amount);
    this.addIngredient.emit(this.ing);
  }

}
