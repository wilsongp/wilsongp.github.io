import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbModule, NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [],
  exports: [
    NgbModule
  ]
})
export class BootstrapModule {}
