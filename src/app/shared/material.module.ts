import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule } from '@angular/material';

export const COMPONENTS = [];
export const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
