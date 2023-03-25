import * as fromShoppingList from "../shopping-list/ngrx-store/shoppingListReducer";
import * as fromAuth from "../auth/ngrx-store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";


export interface AppState{
    shoppingList : fromShoppingList.State;
    auth:fromAuth.State
}

export const AppReducer : ActionReducerMap<AppState> ={
    shoppingList :fromShoppingList.shoppingListReducer,
    auth:fromAuth.AuthReducer
}