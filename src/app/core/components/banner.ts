import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="card" fxLayout="column" fxLayoutAlign="center center">
    <div class="card-content">
      <p>Greg Wilson</p>
      <span>Software Engineer</span>
    </div>
  </div>
  `,
  styleUrls: ['./banner.scss']
})
export class BannerComponent {
  @Input() open = false;
}
