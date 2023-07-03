import { createReducer, on } from "@ngrx/store";
import { UserStateModel } from "../Models/user-state.model";
import { AddUser, loadAllUsers } from "./user.actions";


const initUser:UserStateModel={
 User:[]   
}
export const userReducer=createReducer(initUser,
    on(AddUser,(state,{userData})=>({...state,User:[...state.User,userData]})),
    on(loadAllUsers,(state,{data})=>({...state,User:[...state.User,...data]}))
    )