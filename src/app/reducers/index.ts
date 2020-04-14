import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userReducer } from './user.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  users: userReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
