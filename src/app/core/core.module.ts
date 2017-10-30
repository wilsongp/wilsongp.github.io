import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app';
import { PageNotFoundComponent } from './containers/page-not-found';
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { ToolbarComponent } from './components/toolbar';

import { MaterialModule } from '../shared/material.module';
import { BannerComponent } from './components/banner';

export const COMPONENTS = [
  AppComponent,
  PageNotFoundComponent,
  LayoutComponent,
  NavItemComponent,
  ToolbarComponent,
  BannerComponent
];

export const IMPORTS = [
  CommonModule,
  RouterModule
];

@NgModule({
  imports: IMPORTS,
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
