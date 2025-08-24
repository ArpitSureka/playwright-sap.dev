---
sidebar_position: 6
---

# SAP Config

`sapConfig` is a configuration option that you can add to your Playwright configuration file to **automatically handle SAP authentication** for all your tests. It eliminates the need to manually code login steps in each test file.

## Benefits of Using SAP Config

:::tip Why use SAP Config?
- **Reduce Redundancy**: Eliminate repetitive login code in every test file
- **Centralized Credentials**: Store authentication details in a single, secure location
- **CI/CD Integration**: Easily inject credentials from environment variables or CI secrets
- **Automatic Handling**: Login happens automatically before your tests run
:::

## Configuration Options

```ts title="playwright.config.ts"
import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Standard Playwright configuration
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  
  // SAP-specific configuration
  sapConfig: {
    url: 'https://your-sap-system.example.com', // URL of your SAP system login page.
    username: 'YOUR_USERNAME', // Your SAP username.
    password: 'YOUR_PASSWORD', // Your SAP password.
  },
});
```

## How It Works

When you include `sapConfig` in your configuration:

1. Before the first test in each worker process starts, Playwright-SAP automatically calls `page.SAPLogin()`
2. The login process completes before your test code begins executing
3. Your tests start with an authenticated SAP session

:::info Execution Order
The SAP login process runs after Playwright's `beforeAll` and `beforeEach` hooks. If you need to perform actions before login, use these hooks.
:::

:::info Supported Login Pages
Currently works with **Fiori Launchpad** and **SAP WebGUI** login pages. Under the hood, this uses the [SAPLogin](./SAPLogin.md) utility.

[Report a bug with SAP login](https://github.com/ArpitSureka/playwright-sap/issues/new?template=sapLoginBug.yml)
:::

## Security Best Practices

Avoid hardcoding credentials in your configuration file. Instead, use environment variables:

```ts title="playwright.config.ts"
export default defineConfig({
  // Other configuration
  sapConfig: {
    url: process.env.SAP_URL,
    username: process.env.SAP_USERNAME,
    password: process.env.SAP_PASSWORD,
  },
});
```

Then set these variables in your environment or CI/CD system:

```bash title=".env (do not commit this file)"
SAP_URL=https://your-sap-system.example.com
SAP_USERNAME=your_username
SAP_PASSWORD=your_password
```
