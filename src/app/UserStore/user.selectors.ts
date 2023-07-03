import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserStateModel } from "../Models/user-state.model";

export const SelecteUsers=createFeatureSelector<UserStateModel>('user')
export const selectAllUsers=createSelector(SelecteUsers,(state:UserStateModel)=>state.User)
