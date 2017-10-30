import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRepos from './repos';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {}

export const reducers = fromRepos.reducer;
export const getTodosState = createFeatureSelector<fromRepos.State>('repos');

export const getReposEntitiesState = createSelector(
  getTodosState,
  state => state.data
);

export const getReposErrorState = createSelector(
  getTodosState,
  state => state.error
);

export const getReposLoadingState = createSelector(
  getTodosState,
  state => state.loading
);
