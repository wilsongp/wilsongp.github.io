import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>Hey! It looks like this page doesn't exist yet.</div>
    <button mat-raised-button color="primary" routerLink="/">Take Me Home</button>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
  `,
  ],
})
export class PageNotFoundComponent {}
