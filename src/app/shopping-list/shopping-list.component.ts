import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as shoppingListAction from './ngrx-store/shopping-list.actions';
import * as fromShoppingList from './ngrx-store/shoppingListReducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Observable<{ingredients : Ingredient[]}>; //this observable will yield this in the end
  constructor(
    private _shoppingService :ShoppingListService,
    private _router : Router, 
    private store :Store<fromShoppingList.AppState>, //what does my reducer function yields key:value
    ) { }

  ngOnInit(): void {
    this.ingredients=this.store.select('shoppingList');
  }
  editShoppingList(){
    // this._router.navigate(['edit'],{relativeTo:this.route})
    // console.log(this.route)
    this._router.navigate(['shoppingList','edit'])
  }

  onEditItem(id:number){
    // console.log("shopping list item with id ",id);
    // this._shoppingService.startedEditing.next(id);

    this.store.dispatch(new shoppingListAction.startEdit(id));
  }

}
