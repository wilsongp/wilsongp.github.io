import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container-fluid layout" fxFill>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .layout {
      padding: 0;
    }
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `,
  ],
})
export class LayoutComponent {}
