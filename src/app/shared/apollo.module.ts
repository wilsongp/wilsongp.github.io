import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: environment.gatewayApiUrl + 'github'
  }),
});

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
