<div align="center">

# Shard Config Renovate

This repository contains the configuration for Renovate.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![npm type definitions](https://img.shields.io/npm/types/typescript.svg)](https://www.typescriptlang.org/)

</div>

# 🚀 Quick Start

Renovate is opted in at the moment

1. Update `config.js` and add your repositories.

```diff
module.exports = {
  // Rest of the config
  repositories: [
+   "my-repo"
  ],
};
```

2. Renovate will create an onboarding PR in your rep in the next scheduled run with a default config. Merge that, and you are good to go!

## Presets

To use a preset, add it to the extent list of your Renovate config in your repository. You can modify the default config or use one of the shared configs.

- `default` - pins all dependencies
- `lib` - only pins dev dependencies

Example
```diff
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
-    "github>marklai1998/shared-configs//packages/renovate/presets/default.json"
+    "github>marklai1998/shared-configs//packages/renovate/presets/lib.json",
   ]
}
```

## Auto Merge

The `autoMerge` preset automatically merges dependency updates for minor, patch, pin, and digest updates. This helps keep dependencies up to date without manual intervention.

> [!WARNING]
> Before enabling auto merge, ensure your codebase has sufficient code coverage and type safety. Auto merge will automatically merge dependency updates without manual review, so it's important that your tests and type checking catch potential issues.

To enable auto merge, add the preset to your `extends` array:

```diff
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>marklai1998/shared-configs//packages/renovate/presets/default.json",
+   "github>marklai1998/shared-configs//packages/renovate/presets/autoMerge.json"
  ]
}
```

### GitHub Ruleset Setup

For auto merge to work, you need to configure your GitHub repository rulesets to allow the `renovate` bot to bypass certain rules. Follow these steps:

1. Go to your repository settings → **Rulesets**

2. Split your ruleset into two separate rulesets:
    - **Ruleset 1:** Dedicated for requiring reviewers (PR approval restrictions)
    - **Ruleset 2:** For code quality checks, type checking, and unit tests

3. In **Ruleset 1**, add `renovate` to the **Bypass list** and set it to **Exempt from rules**

This configuration allows the Renovate bot to automatically merge PRs while still maintaining code quality standards through automated checks.

## 🤝 Contributing

### Development

```bash
pnpm i
```
