import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from './components';
import { RepoEffects } from './effects/repo';
import { reducers } from './reducers';

import { ReposComponent } from './containers/repos/repos.component';
import { HomeComponent } from './containers/home';
import { HobbiesComponent } from './containers/hobbies/hobbies.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgbModule,
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
    ReposComponent,
    HobbiesComponent
  ],
  providers: [],
})
export class HomeModule {}
