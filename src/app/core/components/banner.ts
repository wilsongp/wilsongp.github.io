import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner" fxLayout="row" fxLayoutAlign="center center">
    <div class="banner-content" fxLayout="column" fxLayoutAlign="center center">
      <h1>Greg Wilson</h1>
      <small>Software Engineer</small>
    </div>
    <img src="https://wilsongp.github.io/assets/images/header_lg.jpg" fxFlexFill fxHide.lt-md="true"/>
  </div>
  `,
  styleUrls: ['./banner.scss']
})
export class BannerComponent {
  @Input() open = false;
}
