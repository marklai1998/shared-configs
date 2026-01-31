# Shared Config Commitlint

Shared TypeScript configuration.

## 📦 Installation

> Pre-Requirements: Set up [Commitlint](https://commitlint.js.org/) with [Lefthook](https://lefthook.dev/) commit-msg hooks

```bash
pnpm add -D @marklai1998/shared-config-commitlint @commitlint/cli
```

## 🚀 Quick Start

Create or update your `.commitlintrc.json` file:

```json
{
  "extends": ["@marklai1998/shared-config-commitlint"]
  // Your project-specific overrides
}
```

## ⚙️ Lint commit message in GitHub Actions

Add these 2 steps in your workflow, [Reference](https://commitlint.js.org/#guides-ci-setup)

> Note. Make sure fetch-depth is set to 0

```yml
- name: Validate PR title with commitlint
  if: github.event_name == 'pull_request'
  run: echo "${{ github.event.pull_request.title }}" | pnpm commitlint

- name: Validate current commit (last commit) with commitlint
  if: github.event_name == 'push'
  run: pnpm commitlint --from HEAD~1 --to HEAD --verbose

- name: Validate PR commits with commitlint
  if: github.event_name == 'pull_request'
  run: pnpm commitlint --from ${{ github.event.pull_request.head.sha }}~${{ github.event.pull_request.commits }} --to ${{ github.event.pull_request.head.sha }} --verbose
```
