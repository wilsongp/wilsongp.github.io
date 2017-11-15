import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as toolbar from '../actions/toolbar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    img {
      max-height: 2rem;
    }
  `],
  template: `
    <app-layout fxLayout="column" fxFill>
      <app-toolbar (toggleMenu)="toggleNav()" [isCollapsed]="showNav$ | async" >
        <ul class="navbar-nav mr-auto mt-lg-0">
          <li class="nav-item" fxLayoutAlign="start center">
            <a class="nav-link" href="https://github.com/wilsongp" target="_blank">
              <img class="banner-img" alt="LinkedIn" title="LinkedIn"
                src="assets/images/linkedin.ico.png">
            </a>
          </li>
          <li class="nav-item" fxLayoutAlign="start center">
            <a ng-href="https://github.com/wilsongp" target="_blank" href="https://github.com/wilsongp">
              <img class="banner-img" alt="GitHub" title="GitHub"
                src="assets/images/github.ico.png">
            </a>
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
