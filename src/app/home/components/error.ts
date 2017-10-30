import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-error',
  template: `
  <div fxLayout="row wrap" fxLayoutAlign="space-around center">
    {{error}}
  </div>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  @Input() error = '';

  constructor() {}

  ngOnInit() {
  }

}
