import * as userActions from '../actions/user.actions';
import { User } from '../user-table/models/users';

export function userReducer(state = [], action: userActions.Action) {
  switch (action.type) {
    case userActions.LOAD_USERS_SUCCESS: {
      return action.payload;
    }
    case userActions.DELETE_USER_SUCCESS: {
      return state.filter((user: User) => user.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}
