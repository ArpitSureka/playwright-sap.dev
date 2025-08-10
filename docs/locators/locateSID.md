---
sidebar_position: 2
---

# locateSID

## Overview

The `locateSID` locator allows you to target SAP GUI elements using their SID identifiers. These locators are extremely stable and reliable for SAP GUI automation, as they are based on the application's internal structure rather than the HTML DOM, which may change between versions.

SID locators are derived from the `lsdata` attribute in the HTML elements of SAP WebGUI, making them highly resilient to UI changes and updates.

:::note
In this context, "SID" does not refer to System ID. It refers specifically to the string value found in the `lsdata` attribute within the SAP WebGUI HTML DOM.
:::

Example of a SID locator:

```
wnd[0]/usr/txtS_BUKRS-LOW
```

Here's how to interpret this SID:
- `wnd[0]` - Main window (index 0)
- `/usr/` - User area of the window
- `txtS_BUKRS-LOW` - Text field for company code input

## Signature

```ts
page.locateSID(sid: string): Locator
```

## Common Examples

### Basic Actions

```ts title="Click the Execute button"
await page.locateSID('wnd[0]/tbar[1]/btn[8]').click();
```

```ts title="Fill company code field"
await page.locateSID('wnd[0]/usr/txtS_BUKRS-LOW').fill('1000');
```

```ts title="Check a checkbox"
await page.locateSID('wnd[0]/usr/chkSEL_DATE').check();
```

### Working with Multiple Windows

```ts title="Interact with element in second window"
await page.locateSID('wnd[1]/usr/btnSPOP-OPTION1').click(); // Click 'Yes' in a popup
```

## How This Works

![Example locateSID](../../static/img/locateSID_1.jpg)

In this example from the SE16 transaction:

1. The blue highlighted HTML section is for the Table Name input field
2. This HTML element has an attribute `lsdata` containing the SID: `wnd[0]/usr/ctxtDATABROWSE-TABLENAME`
3. Using this SID ensures stable targeting regardless of HTML structure changes

```ts title="Fill 'but000' Table Name field"
// Using direct SID locator
await page.locateSID('wnd[0]/usr/ctxtDATABROWSE-TABLENAME').fill('but000');

// Equivalent using the more readable getByRoleSID
await page.getByRoleSID('textField', { name: 'DATABROWSE-TABLENAME' }).fill('but000');
```

## When to Use locateSID vs. Other Locators

| Scenario | Recommended Locator |
|----------|--------------------|
| Standard SAP GUI elements in `usr` path | `getByRoleSID` for better readability |
| Complex elements (tables, trees, nested controls) | `locateSID` for direct access |
| Elements outside the `usr` path | `locateSID` (only option) |
| UI5/Fiori elements | Consider `GetByRoleUI5` when applicable |
| Need maximum stability across SAP versions | `locateSID` |

## See Also

- [getByRoleSID](./getByRoleSID.md) – Human-friendly wrapper over SIDs
- [GetByRoleUI5](./GetByRoleUI5.md) – For UI5-specific elements