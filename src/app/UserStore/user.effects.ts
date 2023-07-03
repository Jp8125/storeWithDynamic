import { Injectable } from "@angular/core";
import { TempDataService } from "../Serveices/temp-data.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AddUser, addTrigger, loadAllUsers, loadUsers } from "./user.actions";
import { exhaustMap, map, mergeMap } from "rxjs";
import { UserModelTs } from "../Models/user.model.ts";

@Injectable()
export class UserEffect {
    constructor(private userService: TempDataService, private Action: Actions) {
    }
    userEffect = createEffect(() =>
        this.Action.pipe(
            ofType(loadUsers),
            mergeMap(() =>
                this.userService.GetUsers().pipe(
                    map((users) => loadAllUsers({ data: users }))
                ))
        )
    )
    addUserEffect = createEffect(() =>
        this.Action.pipe(
            ofType(addTrigger),
            mergeMap((obj) =>
                this.userService.postUser(obj.value).pipe(
                    map((user: UserModelTs) => AddUser({ userData: user }))
                )
            )

        )
    )
}