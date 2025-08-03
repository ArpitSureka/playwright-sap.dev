---
sidebar_position: 6
---

# SAP Config

This configuration setting automatically goes to the url and logs in while using codegen and testing. This config setting internally uses SAPLogin function.

:::info

Currently works only with Fiori Lauchpad and Netweaver Login Page.

:::

<br></br>
<br></br>

```tsx title="playwright.config.ts"
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