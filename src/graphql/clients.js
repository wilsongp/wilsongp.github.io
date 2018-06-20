import ApolloClient from "apollo-boost";

export const gatewayClient = new ApolloClient({
  uri: "https://gateway-proxy-api.herokuapp.com/v1/"
});
