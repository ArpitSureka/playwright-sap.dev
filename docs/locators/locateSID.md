---
sidebar_position: 2
---

# locateSID

Locate elements using SID in HTML SAP GUI Type Locators (SID), these kind of locators were commonly used in SAP GUI automation scripts (SAP Scripting) and are highly stable.

SID is the identifier you see in lsdata attribute of html element, for example:

```
wnd[0]/usr/txtS_BUKRS-LOW
```

## Signature

```ts
page.locateSID(sid: string): Locator
```

## Examples

```ts title="Click the Execute button"
await page.locateSID('wnd[0]/tbar[1]/btn[8]').click();
```

```ts title="Fill company code field"
await page.locateSID('wnd[0]/usr/txtS_BUKRS-LOW').fill('1000');
```

## See also

• `getByRoleSID` – human friendly wrapper over SIDs