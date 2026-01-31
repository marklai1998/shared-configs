<div align="center">

# Shared Packages

A monorepo containing shared configs for personal projects.

![GitHub CI](https://github.com/marklai1998/shared-config/actions/workflows/codeQualityChecks.yml/badge.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![npm type definitions](https://img.shields.io/npm/types/typescript.svg)](https://www.typescriptlang.org/)

[Packages](#-packages) | [Contributing](#-contributing)

</div>

## 📦 Packages

- [@marklai/shared-config-biome](packages/biome/README.md)
- [@marklai/shared-config-commitlint](packages/commitlint/README.md)
- [@marklai/shared-config-graphql-codegen](./packages/sharedConfigGraphqlCodegen/README.md)
- [@marklai/shared-config-typescript](packages/typescript/README.md)

## 🤝 Contributing

### Development

```bash
pnpm i
```

#### Build

```bash
pnpm build
```

#### Test

```bash
pnpm test
```

### Release

This repo uses [Release Please](https://github.com/google-github-actions/release-please-action) to release.

#### To release a new version

1. Merge your changes into the `main` branch.
2. An automated GitHub Action will run, triggering the creation of a Release PR.
3. Merge the release PR.
4. Wait for the second GitHub Action to run automatically.
5. Congratulations, you're all set!
