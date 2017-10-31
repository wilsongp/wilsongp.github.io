import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache, NormalizedCache } from 'apollo-cache-inmemory';
import { ApolloModule } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

const httpLink = createHttpLink({
  uri: environment.githubApiUrl,
});

// return the headers to the context so httpLink can read them
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    cacheResolvers: {}
  })
});

export function provideClient(): ApolloClient<NormalizedCache> {
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
