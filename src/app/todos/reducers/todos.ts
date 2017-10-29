import { createSelector } from '@ngrx/store';
// import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo, NewTodo } from '../models/todo';
import * as todo from '../actions/todo';

export function getTodos() {
  return {
    type: todo.SEARCH
  };
}

export interface  State {
  data: Todo[];
  newTodo: NewTodo;
  pending: boolean;
  error: string;
}

const getNewTodo = (): NewTodo => ({ title: '', body: ''});

const initialState = {
  data: [],
  newTodo: getNewTodo(),
  pending: false,
  error: null
};

export function reducer( state = initialState, action: todo.Actions ): State {
  switch ( action.type ) {
    case todo.SEARCH:
      return Object.assign({}, state, {pending: true, error: null});
    case todo.SEARCH_COMPLETE:
      return Object.assign({}, state, {data: action.payload, pending: false});
    case todo.SEARCH_ERROR:
      return Object.assign({}, state, {pending: false, error: action.payload});
    case todo.ADD:
      return Object.assign({}, state, {pending: true, error: null});
    case todo.ADD_COMPLETE:
      return Object.assign({}, state, {
        pending: false,
        data: [].concat(state.data, [action.payload]),
        newTodo: getNewTodo()
      });
    case todo.ADD_ERROR:
      return Object.assign({}, state, {pending: false, error: action.payload});
    default:
      return state;
  }
}
