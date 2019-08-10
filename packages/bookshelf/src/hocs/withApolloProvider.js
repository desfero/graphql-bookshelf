import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BOOKSHELF_GRAPHQL,
});

const withApolloProvider = () => Wrapper => props => (
  <ApolloProvider client={client}>
    <Wrapper {...props} />
  </ApolloProvider>
);

export { withApolloProvider };
