---
sidebar_position: 1
---

# locateUI5

`locateUI5` lets you address SAP UI5 controls using a **short, control‑centric XPath syntax** (no HTML tags, only UI5 control class segments with 1‑based indices).
## Signature

```ts
page.locateUI5(xpath: string): Locator
```


## Short XPath Rules

The mini-grammar you can use:
- Each segment is a UI5 control class name (as rendered, e.g. `BlockLayoutCell`, `Grid`, `Image`, `HorizontalLayout`, `Button`, `IconTabFilter`, `StandardListItem`)
- Optional 1-based index in square brackets: `ControlClass[1]`
- Segments are concatenated with `/`
- No attribute predicates, functions, wildcards, or `..` / `*` / `@attr` allowed

If you need anything more complex (attributes, contains text, etc.), switch to a richer locator (role-based or standard Playwright selectors).

## Examples
```ts
// Image inside first Grid inside first BlockLayoutCell
await page.locateUI5('//BlockLayoutCell[1]/Grid[1]/Image[1]').click();

// First button inside a horizontal layout
await page.locateUI5('//HorizontalLayout[1]/Button[1]').click();

// Third & fourth icon tab filters
await page.locateUI5('//IconTabFilter[3]').click();
await page.locateUI5('//IconTabFilter[4]').click();

// Second item in a standard list
await page.locateUI5('//StandardListItem[2]').click();
```

## Tips
- Keep paths short: target the smallest unique chain.
- Indices matter—UI5 renders collections in stable order, but re-check if layouts change.
- Prefer `getByRoleUI5` for readability and resilience when roles/names are available.

## Limitations
- No text matching or attribute filters.
- Not intended for dynamic index flapping lists (use semantic locators instead).
- Overuse can make tests opaque—balance with higher level locators.

## See Also
- [`getByRoleUI5`](./getByRoleUI5.md) – Role & name based, more readable.
- [`getByRoleSID`](./getByRoleSID.md) – Role-based on SID targets.
- [`locateSID`](./locateSID.md) – Low-level stable SAP SID locator.