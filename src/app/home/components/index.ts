import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error';
import { LoadingComponent } from './loading';
import { BootstrapModule } from '../../shared/boostrap.module';
import { RepoListComponent } from './repo-list';
import { RepoDetailsComponent } from './repo-details';

import { FlexLayoutModule } from '@angular/flex-layout';

export const COMPONENTS = [
  ErrorComponent,
  LoadingComponent,
  RepoListComponent,
  RepoDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BootstrapModule,
    FlexLayoutModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
