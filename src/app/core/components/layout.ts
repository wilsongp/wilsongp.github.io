import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container-fluid layout">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .layout {
      padding: 0;
      background: rgba(0, 0, 0, 0.03);
    }
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `,
  ],
})
export class LayoutComponent {}
