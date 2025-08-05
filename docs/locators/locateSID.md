---
sidebar_position: 2
---

# locateSID

Locate elements using SID in HTML SAP GUI Type Locators (SID), these kind of locators were commonly used in SAP GUI automation scripts (SAP Scripting) and are highly stable.

SID is the identifier you see in lsdata attribute of html element, for example:

```
wnd[0]/usr/txtS_BUKRS-LOW
```

:::note
Here sid does not refer to System ID. sid refers to the string that comes in lsdata attribute in WebGUI HTML DOM. 
:::

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

## How this works


![Example locateSID](../../static/img/locateSID_1.jpg)

Example taken from SE16 T-code.

Blue Highlighted HTML section is for Table Name Input field. That HTML element has an attribute lsdata which contains sid equals `wnd[0]/usr/ctxtDATABROWSE-TABLENAME`. This image example is a very basic one and the orignal playwright also gives correct code for this but it often gives unstable locators based on changing IDs for more complex elements.

```ts title="Fill 'but000' Table Name field"
await page.locateSID('wnd[0]/usr/ctxtDATABROWSE-TABLENAME').fill('but000');

// This will also work. Read getByRoleSID to understand how.
await page.getByRoleSID('textField', { name: 'DATABROWSE-TABLENAME' }).fill('but000');
```


## See also

• `getByRoleSID` – human friendly wrapper over SIDs