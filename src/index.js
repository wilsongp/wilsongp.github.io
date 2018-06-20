import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

import { gatewayClient } from "./graphql";
import { App } from "./components/App";
import { ScrollProvider, ViewportProvider } from "./common";

import "bootstrap/dist/css/bootstrap.min.css";

render(
  <ApolloProvider client={gatewayClient}>
    <ViewportProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ViewportProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
