Bookshelf app

### Development

```bash
yarn install

// build layout
cd ./packages/layout
yarn build

// back to root
cd ../../

// start frontend
cd ./packages/bookshelf
yarn codegen
yarn start

```

### Technical notes

It's a monorepo based on [`beer_guru`](https://github.com/desfero/beer_guru)
repository.

####`layout` Package with a pattern library of reusable react components with
storybook integration build on top of `styled-components`.

####`bookshelf` Frontend app based on `CRA` with typescript and apollo graphql
integration. Typings and hooks are generated automatically from graphql schema,
this allows us to have full type safety and in general makes any kind of
refactoring (either frontend or backend) easier.

We have unit tests for mission critical components (see
`./packages/bookshelf/components/Money.spec.tsx`) and almost full e2e coverage
(see `./package/bookshelf/cypress`).

To make some abstractions with the way errors are handles we overwrite apollo
hooks with own implementation (see `./packages/bookshelf/lib/apollo.ts`) so then
we either handle error on the root level (log to sentry and display fallback UI)
or if needed they can be caught sooner in the components tree).

### Next steps

Of course, it's not production-ready yet:

- We need to compile graphql to AST to speed up frontend
- Find a better way to connect `fragment`s with `query`ies and right now they
  too loosely coupled.
- We need some watcher scripts to auto-generate typings/hooks on change
- Code generate contains a lot of `Maybe` in type definitions, therefore, we
  need to have a ton of non-null assertions.
- We need to remove `data-test-id` from production build
- Add unit tests or/and e2e tests for custom `useQuery` and `useMutation`
  implementations
- `yup` is used for forms validation so would be good to auto-generate yup
  schema for graphql schema.
- We need to move page title to translations, but before we need to generate
  plain string from translations ids (see how it's done in
  https://github.com/Neufund/platform-frontend/blob/master/app/utils/withMetaTags.unsafe.tsx#L10)
