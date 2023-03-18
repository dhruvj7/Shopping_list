import { Component } from '@angular/core';

@Component({   //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_list';

  isShoppingListVisible :boolean=false;
  isRecipeVisible:boolean=true;

  visibility(event:{isRecipeVisible:boolean,isShoppingListVisible:boolean}){
    this.isRecipeVisible=event.isRecipeVisible;
    this.isShoppingListVisible=event.isShoppingListVisible;
  }
}
