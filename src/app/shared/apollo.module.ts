import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    credentials: 'include',
  }
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}]);

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(provideClient)
  ],
  exports: [
    ApolloModule
  ]
})
export class ApolloClientModule {}
