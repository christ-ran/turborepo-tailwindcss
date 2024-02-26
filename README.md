# Turborepo with TailwindCSS

A Turborepo boilerplate setups with TailwindCSS, dedicates for not setting up TailwindCSS anymore.

## Using this boilerplate

1. Clone to your local machine:

```sh
git clone https://github.com/christ-ran/turborepo-tailwind.git
```

2. Install the dependencies with `npm`, `pnpm` or whatever package manager you like (note: install from the project root directory):

```sh
pnpm install
```

3. Start the development by using:

```sh
pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library, styled with TailwindCSS and used by `web` application.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
