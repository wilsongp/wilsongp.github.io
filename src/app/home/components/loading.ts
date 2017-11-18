import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loading',
  template: `
  <div class="loading-container" fxLayout="column" fxLayoutAlign="space-around center">
    <div class="app-loading" >
    </div>
    {{message}}
  </div>
  `,
  styles: [`
    .loading-container {

    }
    .app-loading {
      border: .5rem solid #d7dfed;
      border-radius: 50%;
      border-top: .5rem solid #3498db;
      width: 3rem;
      height: 3rem;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingComponent implements OnInit {
  @Input() message = '';

  constructor() {}

  ngOnInit() {
  }

}
