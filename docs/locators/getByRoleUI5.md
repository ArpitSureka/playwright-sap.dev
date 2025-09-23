---
sidebar_position: 2
---

# getByRoleUI5
`getByRoleUI5` finds UI5 controls by control type (role) plus optional control property filters. It talks to the UI5 runtime (not raw DOM) making it far more stable than defauly playwright locators.

## Signature
```ts
page.getByRoleUI5(
  role: string, // UI5 control type (e.g., 'Button', 'Table')
  properties?: Record<string, string>,  // Control properties to match (e.g., { text: 'Save' })
  options?: { exact?: boolean }
): Locator
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | ✅ | The UI5 control type as exposed by the framework (case-insensitive)<br/>Examples: `Button`, `Input`, `Table`, `Dialog`, `IconTabFilter` |
| `properties` | object | ❌ | A map of control properties to match<br/>Example: `{ text: 'Save' }`, `{ icon: 'sap-icon://search' }`|
| `options.exact` | boolean | ❌ | When `true`, property matching is case-sensitive and requires exact matches<br/>When `false` (default), matching is case-insensitive and allows partial matches |

## Quick Examples
```ts
// Click a button by its text
await page.getByRoleUI5('Button', { text: 'Save' }).click();

// Fill an input by its label property
await page.getByRoleUI5('Input', { label: 'First Name' }).fill('John');

// Select a list item inside a ComboBox popup
await page.getByRoleUI5('ComboBox', { name: 'Country' }).click();
await page.getByRoleUI5('Item', { text: 'Germany' }).click();
```

## How It Works

`getByRoleUI5` works by injecting JavaScript into the page that communicates directly with the UI5 framework. Instead of relying on the DOM structure, it uses UI5's own APIs to find controls based on their type and properties.

:::tip Using UI5 Inspector
To identify the correct control types and properties, install the UI5 Inspector browser extension:

[UI5 Inspector for Chrome](https://chromewebstore.google.com/detail/bebecogbafbighhaildooiibipcnbngo)

This tool shows you the UI5 control hierarchy and all available properties for each control.
:::

### Example with UI5 Inspector

![Example getByRoleUI5](../../static/img/getByRoleUI5_1.png)

In this example from [ui5.sap.com](https://ui5.sap.com/), we want to click on the "Documentation" tab (highlighted in blue). Using UI5 Inspector, we can see it's an `IconTabFilter` control with various properties.

Any of these locators will work:

```ts
// Find by icon property
await page.getByRoleUI5('IconTabFilter', { icon: 'sap-icon://learning-assistant' }).click();

// Find by text property
await page.getByRoleUI5('IconTabFilter', { text: 'Documentation' }).click();

// Find by key property
await page.getByRoleUI5('IconTabFilter', { key: 'topic' }).click();

// Find by index (if it's the second IconTabFilter)
await page.getByRoleUI5('IconTabFilter').nth(1).click();
```

## Why Use getByRoleUI5?

- Stable: Ignores volatile generated DOM IDs
- Readable: Intent expressed via control type & business-facing properties
- Precise: Filters on multiple properties
- Composable: Chain with Playwright (`.nth()`, `.first()`, assertions, etc.)

## Comparison with Standard Playwright

#### Standard Playwright (Brittle)

```ts
// Using standard Playwright locators - likely to break when UI changes
await page.locator('.sapMITBContent > .sapMITBTab:nth-child(2)').click();
// or
await page.locator('[id$="-documentationTab"]').click();
```

#### Playwright-SAP (Robust)

```ts
// Using getByRoleUI5 - stable across UI changes
await page.getByRoleUI5('IconTabFilter', { text: 'Documentation' }).click();
```

## Best Practices
- Prefer semantic properties (`text`, `label`, `title`, `icon`, `name`) over index-based `.nth()`.
- Add one property at a time while debugging; over‑constraining can yield zero results.
- Use `exact: true` only when partial matches cause ambiguity.
- Inspect with the UI5 Inspector extension to discover real property names.

## See Also
- [`locateUI5`](./locateUI5.md) – Short hierarchical control paths.
- [`getByRoleSID`](./getByRoleSID.md) – Role-based lookup for SAP WebGUI SIDs.
- [`locateSID`](./locateSID.md) – Lowest-level SID access.
