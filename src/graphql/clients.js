import ApolloClient from "apollo-boost";

export const gatewayClient = new ApolloClient({
  uri: "http://api.gwilson.info"
});
