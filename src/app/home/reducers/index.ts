import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRepos from './repos';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {}

export const reducers = fromRepos.reducer;
export const getReposState = createFeatureSelector<fromRepos.State>('repos');

export const getReposEntitiesState = createSelector(
  getReposState,
  state => state.data
);

export const getReposErrorState = createSelector(
  getReposState,
  state => state.error
);

export const getReposLoadingState = createSelector(
  getReposState,
  state => state.loading
);

export const getSelectedRepoId = createSelector(
  getReposState,
  fromRepos.getSelectedId
);

export const getSelectedRepo = createSelector(
  getReposEntitiesState,
  getSelectedRepoId,
  (entities, selectedId) => {
    return selectedId && entities.find(entity => entity.id === selectedId);
  }
);
