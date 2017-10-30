import { Action } from '@ngrx/store';
import { Repo } from '../models/repo';

import { RepositorySearchFields } from '../../core/services/github.service';

export const SEARCH = '[Repo] Search';
export const SEARCH_COMPLETE = '[Repo] Search Complete';
export const SEARCH_ERROR = '[Repo] Search Error';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: RepositorySearchFields) {}
}

export class SearchComplete implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Repo[]) {}
}

export class SearchError implements Action {
  readonly type = SEARCH_ERROR;

  constructor(public payload: string) {}
}

export type Actions = Search | SearchComplete | SearchError;
