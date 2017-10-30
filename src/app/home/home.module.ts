import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from './components';
import { RepoEffects } from './effects/repo';
import { reducers } from './reducers';

import { ReposComponent } from './containers/repos/repos.component';
import { HomeComponent } from './containers/home';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ]),
    StoreModule.forFeature('repos', reducers),
    EffectsModule.forFeature([
      RepoEffects
    ]),
  ],
  declarations: [
    HomeComponent,
    ReposComponent
  ],
  providers: [],
})
export class HomeModule {}
