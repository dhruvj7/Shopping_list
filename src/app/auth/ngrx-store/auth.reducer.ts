import { User } from "../user.model";
import * as authActions from "./auth.actions";

export interface State{
    user : User
}

const initialState={
    user:null
}
export function AuthReducer(state:State=initialState , action :any) {
    switch(action.type){

        case authActions.LOGIN :
            const newUser = new User(action.payload.email,
                action.payload.id,action.payload.token,
                action.payload.expirationDate)
            return{
                ...state,
                user:newUser
            };

        case authActions.LOGOUT : 
            return{
                ...state,
                user:null
            };
        default : return state;
    }
}