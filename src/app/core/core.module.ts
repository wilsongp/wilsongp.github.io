import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './containers/app';
import { PageNotFoundComponent } from './containers/page-not-found';
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { ToolbarComponent } from './components/toolbar';
import { BannerComponent } from './components/banner';

import { GithubService } from './services/github.service';
import { BootstrapModule } from '../shared/boostrap.module';

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
  RouterModule,
  BootstrapModule
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
      providers: [
        GithubService
      ],
    };
  }
}
