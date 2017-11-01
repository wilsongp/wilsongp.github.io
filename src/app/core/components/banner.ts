import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner" fxLayout="column wrap" fxLayoutAlign="center center">
    <div class="banner-content" fxFill>
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
