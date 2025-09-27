---
sidebar_position: 1
---

# Introduction

**Playwright-SAP** is a specialized node module built on top of Microsoft Playwright that provides **reliable automation for SAP applications** including Fiori Launchpad, SAP WebGUI, and UI5-based applications.


**Playwright-SAP** extends Playwright with SAP‑aware locators and helpers so you can create **stable, maintainable tests** for Fiori Launchpad, UI5 and SAP WebGUI.

No need to pay for Tricentis, Worksoft, or other costly SAP test tools — Playwright-SAP is completly free.

## Why it exists

Standard Playwright works well for most web applications, but SAP applications present unique challenges:

1. **Unstable Selectors**: The standard Playwright code-generator produces CSS/XPath selectors that frequently break with SAP applications
2. **Dynamic IDs**: SAP UI5 & WebGUI inject volatile IDs and deeply nested containers that make traditional DOM-oriented locators unreliable
3. **Complex UI Structure**: SAP's unique UI framework requires specialized knowledge to automate effectively

These challenges make writing and maintaining end-to-end tests for SAP applications slow, frustrating, and prone to failure.


## What it provides
* SAP‑native locators like `getByRoleUI5`, `locateSID`, `getByRoleSID`
* Smarter recording: generates SAP‑aware selectors instead of brittle DOM chains
* Built‑in wait logic aligned with UI5/WebGUI rendering cycles
* Login & environment helpers: `sapConfig`, `SAPLogin`, `sapLoginCodegen`
* Open source, lightweight, Playwright API remains unchanged

## Supported targets
* Fiori Launchpad tiles and embedded apps
* UI5 / OpenUI5 applications
* SAP WebGUI (HTML GUI)

## Quick start
1. Install: see [Installation](./installation.md)
2. Add config: set endpoints/credentials in [`sapConfig`](./sapAutoLogin/sapConfig.md)
3. Write a first step with [`getByRoleUI5`](./locators/getByRoleUI5.md)
4. Automate login via [`SAPLogin`](./sapAutoLogin/sapLogin.md) or generate via [`sapLoginCodegen`](./sapAutoLogin/sapLoginCodegen.md)
5. Use SID helpers where classic WebGUI screens appear: [`locateSID`](./locators/locateSID.md)

## Short example
```ts
import { test, expect } from '@playwright/test';

test('Open a Launchpad app', async ({ page }) => {
    await page.goto(process.env.SAP_BASE_URL);
    await page.SAPLogin(process.env.SAP_USER, process.env.SAP_PASS);
    await expect(page.getByRoleUI5('Tile', { name: 'Sales Orders' })).toBeVisible();
    await page.getByRoleUI5('Tile', { name: 'Sales Orders' }).click();
});
```

## Locator guidance
* Use `getByRoleUI5` for UI5 controls
* Use `locateSID` / `getByRoleSID` for WebGUI screen elements
* Fall back to standard Playwright locators only for plain surrounding HTML
---
Playwright is an open-source project from Microsoft.
Heartfelt thanks to all the developers and teams at Microsoft who made Playwright what it is today.👏

Note that this project is no where associated with SAP, Playwright or Microsoft Corportaion.

