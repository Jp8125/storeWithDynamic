import { createAction, props } from "@ngrx/store";
import { UserModelTs } from "../Models/user.model.ts";

export const loadUsers=createAction('users')
export const loadAllUsers=createAction('loadAllUsers',props<{data:Array<UserModelTs>}>())
export const AddUser=createAction('AddUser',props<{userData:UserModelTs}>());
export const addTrigger=createAction('add',props<{value:UserModelTs}>())