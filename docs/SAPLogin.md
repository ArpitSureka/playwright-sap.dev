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
| `username` | string | ✔ | Your SAP user ID. |
| `password` | string | ✔ | User password. |
| `url` | string | ✖ | If provided, the browser first navigates to the URL; otherwise it assumes that the login page is already open. |

:::info Compatibility
Currently works only with **Fiori Launchpad** and **NetWeaver** classic login pages.
:::

## Example

```ts
// Login and stay on the Launchpad
await page.SAPLogin(process.env.SAP_USER!, process.env.SAP_PASS!, 'https://sap.example.com');
```


### Arguments

- username : string - Required.
- password : string - Required.
- url : string - Optional.
