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

import { GithubService, RepositorySearchFields } from '../../core/services/github.service';
import * as repo from '../actions/repo';
import { Repo } from '../models/repo';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>('Search Scheduler');

@Injectable()
export class RepoEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType<repo.Search>(repo.SEARCH)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(action => action.payload)
    .switchMap((query: RepositorySearchFields) => {
      const nextSearch$ = this.actions$.ofType(repo.SEARCH).skip(1);
      return this.GithubService
        .searchRepos(query)
        .takeUntil(nextSearch$)
        .map(response => response.repositories.nodes)
        .map((repos: Repo[]) => new repo.SearchComplete(repos))
        .catch(err => of(new repo.SearchError(err)));
    });

  constructor(
    private actions$: Actions,
    private GithubService: GithubService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number = 300,
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
