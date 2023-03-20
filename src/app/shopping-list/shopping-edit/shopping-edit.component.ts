import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private _shoppingService : ShoppingListService) { }

  ing:Ingredient;
  shoppingForm : FormGroup;
  editMode:boolean;
  editItemIndex:number;

  ngOnInit(): void {
    this.shoppingForm= new FormGroup({
      name : new FormControl('',Validators.required),
      amount:new FormControl('',[Validators.required , Validators.pattern('^[1-9]+[0-9]*$')])
    })

    this._shoppingService.startedEditing
    .subscribe((index:number)=>{
      this.shoppingForm.setValue({
        name:this._shoppingService.ingredients[index].name,
        amount:this._shoppingService.ingredients[index].amount
      });
      this.editMode=true;
      this.editItemIndex=index;
    })
  }

  onSubmit(){
    // console.log(this.shoppingForm.get('name').value)
    const newIngredient= new Ingredient( this.shoppingForm.get('name').value,
    this.shoppingForm.get('amount').value );

    if(this.editMode){
      this._shoppingService.updateIngridients(this.editItemIndex,newIngredient);
      this.resetForm();
    }else{
      this._shoppingService.addIngredients(newIngredient);
      this.resetForm();
    }
  }

  resetForm(){
    this.shoppingForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this._shoppingService.deleteIngrideint(this.editItemIndex);
    this.resetForm();
  }

}
