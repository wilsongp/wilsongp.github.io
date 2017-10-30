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
  pending$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromHome.State>) {
    this.repos$ = store.select(fromHome.getReposEntitiesState);
    this.pending$ = store.select(fromHome.getReposLoadingState);
    this.error$ = store.select(fromHome.getReposErrorState);
    this.store.dispatch(new repos.Search({
      first: 5,
      orderBy: { field: 'PUSHED_AT', direction: 'DESC' }
    }));
  }

  ngOnInit() {
  }

}
