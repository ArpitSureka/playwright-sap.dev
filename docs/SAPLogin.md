---
sidebar_position: 5
---

# SAP Login

Utility that performs the complete **login flow** (username, password, optional URL navigation) for both **SAP Fiori Launchpad** and **SAP NetWeaver login** pages.

## Signature

```ts
page.SAPLogin(username: string,
              password: string,
              url?: string): Promise<void>
```

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `username` | string | ✔ | SAP user ID. |
| `password` | string | ✔ | User password. |
| `url` | string | ✖ | If provided, the browser first navigates to the URL; otherwise it assumes that the login page is already open. |

:::info Compatibility
Currently works only with **Fiori Launchpad** and **Webgui** login pages.[Click here to report a bug with SAPLogin](https://github.com/ArpitSureka/playwright-sap/issues/new?template=sapLoginBug.yml)
:::

## Example

```ts
// Login and stay on the Launchpad
await page.SAPLogin(SAP_USER, SAP_PASS, 'https://sap.example.com');
```


### Arguments

- username : string - Required.
- password : string - Required.
- url : string - Optional.
