import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromLayout from '../core/reducers/layout';
import * as fromRepos from '../home/reducers/repos';

export interface State {
  layout: fromLayout.State;
  repos: fromRepos.State;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  repos: fromRepos.reducer,
  routerReducer: fromRouter.routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getReposState = createFeatureSelector<fromRepos.State>('repos');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
