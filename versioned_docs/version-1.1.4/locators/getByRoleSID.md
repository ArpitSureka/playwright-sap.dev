---
sidebar_position: 4
---

# getByRoleSID

This is a WEBGUI Locator.

The `getByRoleSID` locator provides a more human-readable and maintainable alternative to the `locateSID` locator. While SID locators are powerful and stable for SAP GUI automation, they can be difficult to read and understand at a glance. The `getByRoleSID` locator solves this problem by translating role-based syntax into the corresponding SID format internally.

**Important**: This locator can only be used when the SID is of the format `wnd[<x>]/<sub>/<role>` which covers most common SAP GUI elements.

## Signature

```ts
page.getByRoleSID(role: string,
                  options?: {
                     name?: string;  // The name identifier of the element
                     pos?:  number;  // Position index when multiple elements share the same role/name
                     sub?:  string;  // Refers to sub-section of the screen. Default sub = 'usr'
                     wnd?:  number;  // Window index, defaults to 0 (main window)
                  }): Locator
```

## Basic Example

```tsx
// Click on a label with name 'FEEDBACK'
await page.getByRoleSID('label', { name: 'FEEDBACK' }).click();
```


## How It Works

The `getByRoleSID` locator converts a role-based syntax into the corresponding SID format whenever the SID follows the pattern `wnd[<x>]/usr/`. It uses the prefix mapping (shown in the table below) to translate between formats.

### Conversion Examples

#### Example 1: Simple Element
```tsx
sid = wnd[0]/usr/okcd

locator = getByRoleSID('okCode')
```

#### Example 2: Element with Name in Different Window
```tsx
sid = wnd[1]/usr/lblFEEDBACK

locator = getByRoleSID('label', { name: 'FEEDBACK', wnd: 1 })
```

#### Example 3: Element with Position Index
```tsx
sid = wnd[1]/usr/txtCONTACT[0]

locator = getByRoleSID('text', { name: 'CONTACT', pos: 0, wnd: 1 })
```

#### Example 4: Form Field Input
```tsx
sid = wnd[0]/usr/ctxtYEAR

locator = getByRoleSID('textField', { name: 'YEAR' })
```

#### Example 4: Button in Menu bar.
```tsx
sid = wnd[0]/mbar/btn[0]

locator = getByRoleSID('button', { pos: 0, sub: 'mbar' })
```

#### Example 6: Table Interaction
```tsx for a table cell
sid = wnd[0]/usr/tblSAPMVA/txtVBAP[0]/ele[0]

// Note: Complex table structures may still require locateSID
locator = page.locateSID('wnd[0]/usr/tblSAPMVA/txtVBAP[0]/ele[0]')
```

## SID Role Mapping

The table below shows how SID suffixes map to role names in the `getByRoleSID` locator:

| SID Suffix | Role |
| -------- | -------- |
| box | box |
| btn | button |
| chk | checkBox |
| cntl | customControl |
| wnd | window |
| lbl | label |
| menu | menu |
| okcd | okCode |
| pwd | password |
| rad | radioButton |
| ssub | scrollContainer |
| ses | session |
| sub | simpleContainer |
| sbar | statusBar |
| tabp | tab |
| tbl | table |
| tabs | tabStrip |
| txt | text |
| cmb | comboBox |
| con | connection |
| shellcont | shellContainer |
| ctxt | textField |
| mbar | menuBar |
| shell | shell |
| titl | titleBar |
| tbar | toolbar |

## See Also

- [locateSID](./locateSID.md) - For more complex SID-based locators
- [getByRoleUI5](./getByRoleUI5.md) - For UI5-specific role locators