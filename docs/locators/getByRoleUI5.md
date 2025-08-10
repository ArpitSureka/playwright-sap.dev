---
sidebar_position: 1
---

# getByRoleUI5

`getByRoleUI5` is a powerful locator that finds UI5 elements based on their control type and properties. Unlike standard Playwright locators that rely on the DOM structure, `getByRoleUI5` communicates directly with the UI5 framework to find elements reliably.

## Signature

```ts
page.getByRoleUI5(
  role: string,       // UI5 control type (e.g., 'Button', 'Table')
  properties?: object, // Control properties to match (e.g., { text: 'Save' })
  options?: {
    exact?: boolean   // Whether to use exact or partial matching
  }
): Locator
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | ✅ | The UI5 control type as exposed by the framework (case-insensitive)<br/>Examples: `Button`, `Input`, `Table`, `Dialog`, `IconTabFilter` |
| `properties` | object | ❌ | A map of control properties to match<br/>Example: `{ text: 'Save' }`, `{ icon: 'sap-icon://search' }`<br/>*Note: Currently supports matching on a single property; multiple property support coming soon* |
| `options.exact` | boolean | ❌ | When `true`, property matching is case-sensitive and requires exact matches<br/>When `false` (default), matching is case-insensitive and allows partial matches |

## Basic Examples

```ts title="Click a button by its text"
await page.getByRoleUI5('Button', { text: 'Save' }).click();
```

```ts title="Fill an input field by its label"
await page.getByRoleUI5('Input', { label: 'First Name' }).fill('John');
```

```ts title="Select a specific item from a dropdown"
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

| Standard Playwright | Playwright-SAP with getByRoleUI5 |
|--------------------|----------------------------------|
| ❌ Relies on DOM structure that changes frequently in UI5 apps | ✅ Uses stable UI5 control types and properties |
| ❌ Breaks when UI5 generates new IDs | ✅ Works regardless of generated IDs |
| ❌ Requires complex CSS/XPath selectors | ✅ Uses simple, readable control types and properties |
| ❌ Difficult to maintain as app evolves | ✅ Remains stable across app updates |

## Comparison with Standard Playwright

### Standard Playwright (Brittle)

```ts
// Using standard Playwright locators - likely to break when UI changes
await page.locator('.sapMITBContent > .sapMITBTab:nth-child(2)').click();
// or
await page.locator('[id$="-documentationTab"]').click();
```

### Playwright-SAP (Robust)

```ts
// Using getByRoleUI5 - stable across UI changes
await page.getByRoleUI5('IconTabFilter', { text: 'Documentation' }).click();
```

## Best Practices

1. **Prefer properties over indexes**: Using `.nth()` should be a last resort as the order of elements might change
2. **Use meaningful properties**: Text, label, and title are usually more stable than technical IDs
3. **Start with less specific matching**: Begin with `exact: false` (default) and only use `exact: true` when necessary
4. **Chain locators for complex UIs**: Use the parent-child relationship to narrow down your search
5. **Use UI5 Inspector**: Always verify the control type and available properties with UI5 Inspector

## See Also

- [getByRoleSID](./getByRoleSID.md) - For WebGUI applications using Screen IDs
- [locateSID](./locateSID.md) - For direct access to SAP Screen IDs
