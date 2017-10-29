import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTodos from './todos';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {}

export const reducers = fromTodos.reducer;

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `todos` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.todosState$ = state$.select(getTodosState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getTodosState = createFeatureSelector<fromTodos.State>('todos');

export const getTodosEntitiesState = createSelector(
  getTodosState,
  state => state.data
);

export const getTodosNewTodoState = createSelector(
  getTodosState,
  state => state.newTodo
);

export const getTodosErrorState = createSelector(
  getTodosState,
  state => state.error
);

export const getTodosPendingState = createSelector(
  getTodosState,
  state => state.pending
);
