import { Action } from "@ngrx/store"

export const LOGIN= 'LOGIN'
export const LOGOUT='LOGOUT'

export class login implements Action{
    readonly type= LOGIN
    constructor(public payload : {email:String,id:string, token:string, expirationDate:Date}){}
}

export class logout implements Action{
    readonly type= LOGOUT
}