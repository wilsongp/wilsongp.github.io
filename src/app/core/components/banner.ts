import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <mat-card  fxLayout="column" fxLayoutAlign="center center"  fxLayoutGap="1em">
    <mat-card-content>
      <p>Greg Wilson</p>
    </mat-card-content>
  </mat-card>
  `,
  styleUrls: ['./banner.scss']
})
export class BannerComponent {
  @Input() open = false;
}
