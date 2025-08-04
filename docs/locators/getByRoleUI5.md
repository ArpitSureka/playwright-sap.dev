---
sidebar_position: 1
---

# getByRoleUI5

Locate UI5 elements via their UI5 DOM and properties 

### Signature

```ts
page.getByRoleUI5(role: string,      // Mandatory control type e.g. 'Button'
                  props?: object,    // property map e.g. { text: 'Save' }
                  options?: {        
                    exact?: boolean  // Default false – use fuzzy match
                  }): Locator
```

Parameter details:

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `role` | string | ✔ | SAP UI5 control type exactly as exposed by the framework (case-insensitive) e.g. `Button`, `Label`, `Dialog`. |
| `properties` | object |  | A map of **control properties** to match. Every key/value pair must match exactly. Example: `{ text: 'Samples' }`. Currently supports only one property (support for multiple properties comming soon.)  |
| `options.exact` | boolean |  | If `true`, properties are matched **case-sensitively** and without partial matches. Defaults to `false` (case-insensitive contains). |

### Examples

```ts title="Click navigation list item"
await page.getByRoleUI5('Item', { text: 'Samples' }).click();
```

```ts title="Open a dialog by its header Text"
await page.getByRoleUI5('Dialog', { title: 'Confirmation' }).press('Enter');
```




## How this works

:::tip
Install UI5 inspector to see UI5 DOM structure and control properties.
https://chromewebstore.google.com/detail/bebecogbafbighhaildooiibipcnbngo?utm_source=item-share-cb
:::

![Example getByRoleUI5](../../static/img/getByRoleUI5_1.png)

Code to click on Documentaion(Header) in the above image. - Highlighted with blue.
Example taken from - https://ui5.sap.com/ 

```ts
// Any of these locators can be used for clicking on Documentaion based on the properties.

await page.getByRoleUI5('IconTabFilter', { icon: 'sap-icon://learning-assistant' }).click();

await page.getByRoleUI5('IconTabFilter', { text: 'Documentation' }).click();

await page.getByRoleUI5('IconTabFilter', { key: 'topic' }).click();

// IconTabFilter is 2nd in UI5 DOM. playwright follows zero-based indexing
await page.getByRoleUI5('IconTabFilter').nth(1).click();
```
