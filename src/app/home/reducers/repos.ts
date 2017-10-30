import { createSelector } from '@ngrx/store';
import { Repo } from '../models/repo';
import * as repo from '../actions/repo';

export function getRepos() {
  return {
    type: repo.SEARCH
  };
}

export interface  State {
  data: Repo[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  data: [],
  loading: false,
  error: null
};

export function reducer( state = initialState, action: repo.Actions ): State {
  switch ( action.type ) {
    case repo.SEARCH:
      return Object.assign({}, state, {loading: true, error: null});
    case repo.SEARCH_COMPLETE:
      return Object.assign({}, state, {loading: false, data: action.payload, error: null});
    case repo.SEARCH_ERROR:
      return Object.assign({}, state, {loading: false, error: action.payload});
    default:
      return state;
  }
}
