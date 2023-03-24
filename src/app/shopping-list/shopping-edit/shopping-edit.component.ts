import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import  * as shoppingListAction from '../ngrx-store/shopping-list.actions';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private _shoppingService : ShoppingListService , 
              private store :Store<{shoppingList : {ingredients : Ingredient[]}}>) { }

  ing:Ingredient;
  shoppingForm : FormGroup;
  editMode:boolean;
  editItemIndex:number;
  editedItem:Ingredient;

  ngOnInit(): void {

    this.shoppingForm= new FormGroup({
      name : new FormControl('',Validators.required),
      amount:new FormControl('',[Validators.required , Validators.pattern('^[1-9]+[0-9]*$')])
    })

    this._shoppingService.startedEditing
    .subscribe((index:number)=>{
      this.editMode=true;
      this.editItemIndex=index;
      this.editedItem = this._shoppingService.getIngredient(index);
      this.shoppingForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      });
    })

    
  }

  onSubmit(){
    const newIngredient= new Ingredient( this.shoppingForm.get('name').value,
    this.shoppingForm.get('amount').value );

    if(this.editMode){
      // this._shoppingService.updateIngridients(this.editItemIndex,newIngredient);
      this.store.dispatch(new shoppingListAction.updateIngridient({index: this.editItemIndex,ingredient :newIngredient}))
      this.resetForm();
    }else{
      // this._shoppingService.addIngredients(newIngredient);
      this.store.dispatch(new shoppingListAction.AddIngredient(newIngredient))
      this.resetForm();
    }
  }

  resetForm(){
    this.shoppingForm.reset();
    this.editMode=false;
  }

  onDelete(){
    // this._shoppingService.deleteIngrideint(this.editItemIndex);
    this.store.dispatch(new shoppingListAction.deleteIngredient(this.editItemIndex))
    this.resetForm();
  }

}
