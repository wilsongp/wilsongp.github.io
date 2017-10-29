import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { TodosService } from '../../core/services/todos.service';
import * as todo from '../actions/todo';
import { Todo, NewTodo } from '../models/todo';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class TodoEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType<todo.Search>(todo.SEARCH)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(action => action.payload)
    .switchMap(query => {
      // if (query === '') {
      //   return of(new todo.SearchComplete([]));
      // }
      const nextSearch$ = this.actions$.ofType(todo.SEARCH).skip(1);
      return this.todoService
        .searchTodos(query)
        .takeUntil(nextSearch$)
        .map((todos: Todo[]) => new todo.SearchComplete(todos))
        .catch(err => of(new todo.SearchError(err)));
    });

    @Effect()
    add$: Observable<Action> = this.actions$
      .ofType<todo.Add>(todo.ADD)
      .debounceTime(this.debounce, this.scheduler || async)
      .map(action => action.payload)
      .switchMap(newTodo => {
        const nextAdd$ = this.actions$.ofType(todo.ADD).skip(1);

        return this.todoService
          .postTodo(newTodo)
          .takeUntil(nextAdd$)
          .map((added: Todo) => new todo.AddComplete(added))
          .catch(err => of(new todo.AddError(err)));
      });

  constructor(
    private actions$: Actions,
    private todoService: TodosService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number = 300,
    /**
       * You inject an optional Scheduler that will be undefined
       * in normal application usage, but its injected here so that you can mock out
       * during testing using the RxJS TestScheduler for simulating passages of time.
       */
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
