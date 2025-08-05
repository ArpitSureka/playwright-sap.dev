---
sidebar_position: 7
---

# SAP Config

Optional block that you can add to `playwright.config.ts` to **automatically perform SAP login** during every test run.  
Under the hood it calls `SAPLogin` before the first test in a worker starts.

:::tip Why use SAP Config?
• Stop repeating the same login boilerplate in every test.  
• Keep credentials in a single place (CI secrets).  
:::

```ts title="playwright.config.ts"
export default defineConfig({
    // Other playwright configration.
    sapConfig: {
        url: '<sap_login_url>',
        username: '<username>',
        password: '<password>'
    },
  // Other playwright configration.
});
```

:::info Compatibility
Currently works only with **Fiori Launchpad** and **NetWeaver** login pages. Under the hood this uses SAPLogin. [Click here to report a bug with SAPLogin](https://github.com/ArpitSureka/Playwright-SAP/issues/new?template=sapLoginBug.yml)
:::