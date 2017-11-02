import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromHome from '../../reducers';
import * as repos from '../../actions/repo';
import { Observable } from 'rxjs/Observable';
import { Repo } from '../../models/repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos$: Observable<Repo[]>;
  selectedRepo$: Observable<Repo>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  _selected: Repo;

  constructor(private store: Store<fromHome.State>) {
    this.repos$ = store.select(fromHome.getReposEntitiesState);
    this.loading$ = store.select(fromHome.getReposLoadingState);
    this.error$ = store.select(fromHome.getReposErrorState);
    this.selectedRepo$ = store.select(fromHome.getSelectedRepo);
  }

  ngOnInit() {
    this.selectedRepo$.subscribe(repo => {
      console.log(repo)
      this._selected = repo;
    });
    this.repos$.subscribe(data => {
      if (data.length > 0) {
        this.store.dispatch(new repos.SelectRepo(data[0].id));
      }
    });
  }

  selectRepo(id: string) {
    this.store.dispatch(new repos.SelectRepo(id));
  }

}
