import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app';
import { PageNotFoundComponent } from './containers/page-not-found';
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';

import { TodosService } from './services/todos.service';
import { MaterialModule } from '../shared/material.module';
import { BannerComponent } from './components/banner';

export const COMPONENTS = [
  AppComponent,
  PageNotFoundComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  BannerComponent
];

export const IMPORTS = [
  CommonModule,
  RouterModule,
  MaterialModule
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
      providers: [TodosService],
    };
  }
}
