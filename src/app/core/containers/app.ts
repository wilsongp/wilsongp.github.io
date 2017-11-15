import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as toolbar from '../actions/toolbar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout fxLayout="column" fxFill>
      <app-toolbar (toggleMenu)="toggleNav()" [isCollapsed]="showNav$ | async" >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </app-toolbar>
      <app-banner></app-banner>
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppComponent {
  showNav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showNav$ = this.store.select(fromRoot.getShowNav);
  }

  toggleNav() {
    this.store.dispatch(new toolbar.ToggleNav());
  }
}
