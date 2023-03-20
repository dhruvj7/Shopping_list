import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[];
  constructor(private _shoppingService :ShoppingListService,
    private _router : Router) { }

  ngOnInit(): void {
    this.ingredients=this._shoppingService.ingredients;
    this._shoppingService.ingredientsChanged.subscribe((ingredients)=>{
      this.ingredients=ingredients;
    })
  }
  editShoppingList(){
    // this._router.navigate(['edit'],{relativeTo:this.route})
    // console.log(this.route)
    this._router.navigate(['shoppingList','edit'])
  }

  onEditItem(id:number){
    this._shoppingService.startedEditing.next(id);
  }

}
