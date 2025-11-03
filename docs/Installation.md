---
sidebar_position: 2
description: Step-by-step guide to installing and setting up Playwright-SAP in your project using npm, yarn, or pnpm. Get started with automated testing for SAP applications.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

Fast setup for Playwright-SAP.

## Using npm, yarn or pnpm

You can install Playwright-SAP using your preferred JavaScript package manager. The installation process will either initialize a new project or add Playwright-SAP to your existing project.

<Tabs groupId="js-package-manager" defaultValue="npm" values={[ {label: 'npm', value: 'npm'}, {label: 'yarn', value: 'yarn'}, {label: 'pnpm', value: 'pnpm'} ] }>

<TabItem value="npm">

```bash
npm init playwright-sap@latest
```

</TabItem>

<TabItem value="yarn">

```bash
yarn create playwright-sap
```

</TabItem>

<TabItem value="pnpm">

```bash
pnpm create playwright-sap
```

</TabItem>

</Tabs>

## Installation Options

During installation, you'll be prompted to configure your project with the following options:


| Prompt | What It Does | Default |
|--------|--------------|---------|
| Language | TS or JS project | TypeScript |
| Tests folder | Where tests go | `tests` (or `e2e` fallback) |
| GitHub Actions | Adds CI workflow | Yes |
| Install browsers | Downloads Playwright browsers | Yes |

## Understanding Package Aliasing

Playwright-SAP uses a technique called **package aliasing** to seamlessly integrate with the standard Playwright API. This means:

1. You'll import from `@playwright/test` in your code (the standard Playwright import)
2. Behind the scenes, npm redirects this to the Playwright-SAP package
3. This allows Playwright-SAP to extend Playwright without changing your imports

Your `package.json` will contain an entry like this:

```json title="package.json"
"devDependencies": {
    "@playwright/test": "npm:@playwright-sap/test@^1.1.6",
    "@types/node": "^24.2.0"
}
```

The `npm:@playwright-sap/test@^1.0.2` syntax tells npm to use the `@playwright-sap/test` package whenever code imports from `@playwright/test`.

### [Read more about package aliasing](https://medium.com/@mahesh.jsdev/demystifying-npm-package-name-aliasing-a-comprehensive-guide-5a0a59519de9)

## Add to an Existing Playwright Project

Already have a Playwright test suite? You can drop Playwright-SAP in without rewriting any tests. Your existing imports like:

```ts
import { test, expect } from '@playwright/test';
```

continue to work exactly the same because we use npm package aliasing to substitute the underlying implementation. All core Playwright APIs keep their behavior; Playwright-SAP only augments them with SAP-aware locators/utilities.

### 1. Manually Edit `package.json`

Open your `package.json` and in `devDependencies` (or `dependencies` if you put them there) replace any of these if present:

- `@playwright/test`
- `playwright`
- `playwright-core`

with alias lines pointing to Playwright-SAP, e.g.:

```json title="package.json"
"dependencies": {
    "@playwright/test": "npm:@playwright-sap/test@^1.1.6",
    "playwright": "npm:playwright-sap@^1.1.6",
    "playwright-core": "npm:playwright-sap-core@^1.1.6"
    // other deps...
}
```

(If you only had one or two of them, just change only those.)

### 2. Remove Lock File & Reinstall

Delete the lock file so the alias is resolved cleanly, then install:

```bash
rm -f package-lock.json yarn.lock pnpm-lock.yaml
npm install
```

(Use `yarn install` or `pnpm install` if you prefer those.)

Now every import like `import { test } from '@playwright/test'` transparently uses Playwright-SAP—no code changes needed.

### 2. (Optional) Verify

Run your current test suite—everything should pass as before:

```bash
npx playwright test
```


## Getting Help

If you encounter issues during installation:

1. Check the [FAQs](./FAQs.md) for common problems and solutions
2. [Open an issue](https://github.com/ArpitSureka/playwright-sap/issues/new) on GitHub

## Next Steps

After installation, you're ready to:

1. [Configure automatic SAP login](./sapAutoLogin/sapConfig.md) for your tests
2. Learn about [specialized SAP locators](./locators/getByRoleUI5.md)
3. Create your first test script