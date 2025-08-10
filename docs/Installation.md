---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

This guide will walk you through installing and setting up Playwright-SAP for your project.

## Installation Methods

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

| Option | Description | Default |
|--------|-------------|--------|
| **Language** | Choose between TypeScript or JavaScript | TypeScript |
| **Tests Folder** | Directory where test files will be stored | `tests` (or `e2e` if `tests` already exists) |
| **GitHub Actions** | Add workflow for CI integration | Yes |
| **Install Browsers** | Download browsers required for testing | Yes |

## Understanding Package Aliasing

Playwright-SAP uses a technique called **package aliasing** to seamlessly integrate with the standard Playwright API. This means:

1. You'll import from `@playwright/test` in your code (the standard Playwright import)
2. Behind the scenes, npm redirects this to the Playwright-SAP package
3. This allows Playwright-SAP to extend Playwright without changing your imports

Your `package.json` will contain an entry like this:

```json title="package.json"
"devDependencies": {
    "@playwright/test": "npm:@playwright-sap/test@^1.0.2",
    "@types/node": "^24.2.0"
}
```

The `npm:@playwright-sap/test@^1.0.2` syntax tells npm to use the `@playwright-sap/test` package whenever code imports from `@playwright/test`.

### Getting Help

If you encounter issues during installation:

1. Check the [FAQs](./FAQs.md) for common problems and solutions
2. [Open an issue](https://github.com/ArpitSureka/playwright-sap/issues/new) on GitHub

## Next Steps

After installation, you're ready to:

1. [Configure automatic SAP login](./SAPConfig.md) for your tests
2. Learn about [specialized SAP locators](./locators/getByRoleUI5.md)
3. Create your first test script