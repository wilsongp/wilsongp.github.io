import { Action } from '@ngrx/store';
import { Todo, NewTodo } from '../models/todo';

export const SEARCH = '[Todo] Search';
export const SEARCH_COMPLETE = '[Todo] Search Complete';
export const SEARCH_ERROR = '[Todo] Search Error';
export const ADD = '[Todo] Add';
export const ADD_COMPLETE = '[Todo] Add Complete';
export const ADD_ERROR = '[Todo] Add Error';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handtodo/advanced-types.html#discriminated-unions
 */
export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Todo[]) {}
}

export class SearchError implements Action {
  readonly type = SEARCH_ERROR;

  constructor(public payload: string) {}
}

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: NewTodo) {}
}

export class AddComplete implements Action {
  readonly type = ADD_COMPLETE;

  constructor(public payload: Todo) {}
}

export class AddError implements Action {
  readonly type = ADD_ERROR;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = Search | SearchComplete | SearchError | Add | AddComplete | AddError;
