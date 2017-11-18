import { ApolloClient } from 'apollo-client';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

const uri = environment.gatewayApiUrl + 'github';


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
  onstructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache()
    });
  }
}
