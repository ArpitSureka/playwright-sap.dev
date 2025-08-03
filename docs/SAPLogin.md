---
sidebar_position: 5
---

# SAP Login

Easyily login to SAP Page.

:::info

Currently works only with Fiori Lauchpad and Netweaver Login Page.

:::

<br></br>
<br></br>

```tsx
await page.SAPLogin('username', 'password', 'url');
```


### Arguments

- username : string - Required.
- password : string - Required.
- url : string - Optional.
