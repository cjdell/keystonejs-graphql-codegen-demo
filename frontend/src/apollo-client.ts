import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core/index.js';
import { setContext } from '@apollo/client/link/context';
import { assert } from 'ts-essentials';

export const GraphQLServerBase = 'http://localhost:3000';
export const GraphQLServer = `${GraphQLServerBase}/api/graphql`;

const httpLink = new HttpLink({
  uri: GraphQLServer,
});

export const Anonymous = Symbol('Anonymous');
export type Anonymous = typeof Anonymous;

export function getApolloClient(token: string | Anonymous) {
  assert(token === Anonymous || typeof token === 'string', 'Invalid token!');

  const cache = new InMemoryCache({
    addTypename: true,
  });

  const authLink = setContext((_, prev) => {
    // return the headers to the context so httpLink can read them
    return {
      headers:
        typeof token === 'string'
          ? {
              ...prev.headers,
              authorization: token ? `Bearer ${token}` : '',
            }
          : prev.headers,
    };
  });

  return new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    ssrMode: true,
  });
}
