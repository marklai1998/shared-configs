# Shared Config Biome

Shared Biome configuration.

## 📦 Installation

> Pre-Requirements: Set up [Biome](https://biomejs.dev/) with [Lefthook](https://lefthook.dev/) commit-msg hooks

```bash
pnpm add -D @marklai/shared-config-biome @biomejs/biome
```

## 🚀 Quick Start

Create or update your `biome.json` file:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@marklai/shared-config-biome"]
  // Your project-specific overrides
}
```
