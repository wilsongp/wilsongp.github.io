import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromHome from '../../reducers';
import * as repos from '../actions/repo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
  <section class="fixed-height">
    <app-repos></app-repos>
  </section>
  <section>
    <app-hobbies></app-hobbies>
  </section>
  `,
  styleUrls: ['./home.styles.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromHome.State>) {

    this.store.dispatch(new repos.Search({
      first: 5,
      orderBy: { field: 'PUSHED_AT', direction: 'DESC' }
    }));
  }

  ngOnInit() {
  }

}
