
import { Ingredient } from "src/shared/ingredients.model";
import * as shoppingListAction from "./shopping-list.actions";
export interface State{
    ingredients : Ingredient[];
    editedIngredient : Ingredient;
    editedIngredientIndex : number;
}
export interface AppState{
    shoppingList : State;
}
const initialState =
{
    ingredients :[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
    ],
    editedIngredient: null,
    editedIngredientIndex:-1
};

export function shoppingListReducer(state:State=initialState, action:any){
    switch(action.type){
        case shoppingListAction.ADD_INGREDIENT: 
         return {
            ... state,
            ingredients : [...state.ingredients, action.payload]
         };
         case shoppingListAction.ADD_ALL_INGREDIENTS :
            return {
                ... state,
            ingredients : [...state.ingredients, ...action.payload] //spread operator to pull out ingridient from ingrideint array otherwise it will create a nested array

            }
            case shoppingListAction.UPDATE_INGREDIENT :
                const ingredient = state.ingredients[action.payload.index]
                const updatedIngredient={
                    ... ingredient,
                    ... action.payload.ingredient
                }
                const updatedIngredients=[...state.ingredients];
                updatedIngredients[action.payload.index]= updatedIngredient;
            return{
                ... state,
                ingredients : updatedIngredients
            }
            case shoppingListAction.DELETE_INGREDIENT :
            return{
                ... state,
                ingredients: state.ingredients.filter((ig,igIndex)=>{
                    return igIndex!=action.payload;
                })
            } ;
            case shoppingListAction.START_EDIT :
            return{
                    ... state,
                    editedIngredient : {...state.ingredients[action.payload]},
                    editedIngredientIndex:action.payload
                };
            case shoppingListAction.CANCEL_EDIT :
            return{
                ... state,
                editedIngredient:null,
                editedIngredientIndex:-1
                }

         default :
         return state;
    }
}