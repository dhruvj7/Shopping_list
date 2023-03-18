import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() recipeFlag = new EventEmitter();
  @Output() shoppingFlag = new EventEmitter();


  loadRecipes(){
    this.recipeFlag.emit({isRecipeVisible:true,isShoppingListVisible:false});
  }
  loadShoppingList(){
    this.shoppingFlag.emit({isRecipeVisible:false,isShoppingListVisible:true});
  }

}
