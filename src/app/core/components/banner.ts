import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner" fxLayout="row wrap" fxLayoutAlign="start center">
    <div class="banner-content" fxFlex="100" fxFlex.sm="40" fxFlex.md="50" fxFlex.gt-md="65">
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
