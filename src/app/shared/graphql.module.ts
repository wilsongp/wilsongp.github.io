import { ApolloClient } from 'apollo-client';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

/**
 * Docs @ https://www.apollographql.com/docs/angular/basics/queries.html#queryref
 */
@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpLinkModule
  ],
  exports: [
    ApolloModule
  ]
})
export class GraphQlClientModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create(
      { link: httpLink.create({ uri: environment.gatewayApiUrl + 'github' }), cache: new InMemoryCache() },
      'github'
    );
  }
}
