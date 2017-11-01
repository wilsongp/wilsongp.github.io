import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loading',
  template: `
  <div class="app-loading" fxLayout="row wrap" fxLayoutAlign="space-around center">
    <ngb-progressbar value="100" type="info" striped="true" animated="true">{{message}}</ngb-progressbar>
  </div>
  `,
  styles: [`
    .app-loading{
      width: 100%;
      padding: 1rem;
    }
  `]
})
export class LoadingComponent implements OnInit {
  @Input() message = '';

  constructor() {}

  ngOnInit() {
  }

}
