import { Injectable } from '@angular/core';
import { UserTableService } from '../user-table/user-table.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as userActions from './../actions/user.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(
    private userTableService: UserTableService,
    private actions$: Actions
  ) {}

  // actions will emit every action
  @Effect() loadUsers$ = this.actions$.pipe(
    ofType(userActions.LOAD_USERS),
    switchMap(() =>
      this.userTableService
        .getUsers()
        .pipe(map((users) => new userActions.LoadUsersSuccessAction(users)))
    )
  );

  @Effect() deleteUser$ = this.actions$.pipe(
    ofType(userActions.DELETE_USER),
    switchMap((action: userActions.DeleteUserAction) =>
      this.userTableService
        .deleteUser(action.payload)
        .pipe(map((user) => new userActions.DeleteUserSuccessAction(user.id)))
    )
  );
}
