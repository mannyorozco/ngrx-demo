import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/users';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import * as userActions from './../actions/user.actions';

@Component({
  selector: 'app-table',
  templateUrl: './user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    // TODO: research if it is convention to set this in constructor?
    this.users$ = this.store.select((state) => state.users);
  }

  public ngOnInit(): void {
    this.getUsers();
  }

  public onDeleteUser(id: number): void {
    this.store.dispatch(new userActions.DeleteUserAction(id));
  }

  private getUsers(): void {
    this.store.dispatch(new userActions.LoadUsersAction());
  }
}
