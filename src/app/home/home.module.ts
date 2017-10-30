import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentsModule } from './components';
import { RepoEffects } from './effects/repo';

import { reducers } from './reducers';
import { ReposComponent } from './containers/repos/repos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ReposComponent },
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('todos', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([
      RepoEffects
    ]),
  ],
  declarations: [
    ReposComponent
  ],
  providers: [],
})
export class TodosModule {}
