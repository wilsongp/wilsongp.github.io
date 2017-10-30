import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromHome from '../../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
    <div>Home Component</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromHome.State>) {}

  ngOnInit() {
  }

}
