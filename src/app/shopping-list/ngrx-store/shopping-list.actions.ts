import { Action } from "@ngrx/store"
import { Ingredient } from "src/shared/ingredients.model";

export const ADD_INGREDIENT ='ADD_INGREDIENT'
export const ADD_ALL_INGREDIENTS ='ADD_ALL_INGREDIENTS'
export const UPDATE_INGREDIENT= 'UPDATE_INGREDIENT'
export const DELETE_INGREDIENT= 'DELETE_INGREDIENT'

export class AddIngredient implements Action{
    readonly type= ADD_INGREDIENT;
    constructor(public payload : Ingredient){}
}

export class addAllIngredients implements Action{
    readonly type= ADD_ALL_INGREDIENTS;
    constructor(public payload : Ingredient[]){}
}

export class updateIngridient implements Action{
    readonly type = UPDATE_INGREDIENT;
    constructor(public payload : {index:number , ingredient:Ingredient}){}
}

export class deleteIngredient implements Action{
    readonly type = DELETE_INGREDIENT;
    constructor(public payload : number){}
}

