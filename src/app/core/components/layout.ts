import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    mat-sidenav-container {
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
