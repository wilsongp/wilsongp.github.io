import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loading',
  template: `
  <div fxLayout="row wrap" fxLayoutAlign="space-around center">
    <h2>{{message}}</h2>
  </div>
  `,
  styles: []
})
export class LoadingComponent implements OnInit {
  @Input() message = '';

  constructor() {}

  ngOnInit() {
  }

}
