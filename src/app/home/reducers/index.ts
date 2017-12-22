import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRepos from './repos';
import * as fromHobbies from './hobbies';

import * as fromRoot from '../../reducers';
import { combineReducers } from '@ngrx/store/src/utils';
import { select } from 'async';

export interface State extends fromRoot.State {
  'repos': fromRepos.State;
  'hobbies': fromHobbies.State;
}

export const reducers = {
  repos: fromRepos.reducer,
  hobbies: fromHobbies.reducer
};

export const getReposState = createFeatureSelector<fromRepos.State>('repos');
export const getHobbiesState = createFeatureSelector<fromHobbies.State>('hobbies');

/** REPOS */
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

/** Hobbies */
export const getHobbiesEntitiesState = createSelector(
  getHobbiesState,
  state => state.data
);

export const getSelectedHobbyId = createSelector(
  getHobbiesState,
  fromHobbies.getSelectedId
);

export const getSelectedHobby = createSelector(
  getHobbiesEntitiesState,
  getSelectedHobbyId,
  (entities, selectedId) => {
    return selectedId && entities.find(entity => entity.id === selectedId);
  }
);
