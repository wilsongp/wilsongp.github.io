import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error';
import { LoadingComponent } from './loading';
import { BootstrapModule } from '../../shared/boostrap.module';

export const COMPONENTS = [
  ErrorComponent,
  LoadingComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BootstrapModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
