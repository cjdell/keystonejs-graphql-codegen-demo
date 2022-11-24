# KeystoneJS Demo with Code Generated GraphQL Client in TypeScript

This shows how to get the most out of a GraphQL API using code generation. We are using KeystoneJS as the backend and a simple terminal app as a frontend. The default DB is SQLite which is zero configuration.

## Backend

The backend is a minimal KeystoneJS starter project with very little changed. Most of the interesting stuff is in `schema.ts`. This is probably the only file you'll need to change. For larger projects you may want to consider breaking out each entity into a separate file.

You will be asked to create a user account when starting Keystone for the first time. I suggest you also add some sample posts.

The backend must be running in a terminal somewhere. To start the backend:

    yarn
    yarn dev

## Frontend

Frontend is actually a terminal app for sake of simplicity, but it could be a React app, NextJS app or whatever.

### How it works

One need only write GQL queries in `queries.gql` i.e.:

```
query GetPosts($ord: OrderDirection!) {
  posts(orderBy: { id: $ord }) {
    id
    title
    content {
      document
    }
  }
}
```

Then you can consume them like this (see `index.ts`):

```
// Fully types parameters and return!
const posts = await Api.GetPosts(Anonymous, { ord: OrderDirection.Asc });
```

After you start consuming your fully typed GraphQL API's you won't ever want to go back to anything else.

### Running

In another terminal run the frontend with:

    yarn
    yarn start

If you make changes to the `schema.ts` in the backend and/or change the queries in `queries.gql` in frontend, you will want to regenerate the GraphQL client:

    yarn codegen
