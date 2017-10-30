import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { CoreModule } from './core/core.module';

import { routes } from './routes';
import { reducers, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';

import { AppComponent } from './core/containers/app';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    CoreModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
