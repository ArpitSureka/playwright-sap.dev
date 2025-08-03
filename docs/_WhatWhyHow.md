---
sidebar_position: 2
---

# What, Why and How

### What is Playwright-SAP?

A lightweight npm package that **augments Playwright** with SAP-specific locators, helpers and code-generation presets.

### Why should I care?

• Out-of-the-box Playwright selectors are DOM-based and therefore brittle in SAP apps.  
• SAP UI5 embeds randomly generated IDs that break traditional CSS/XPath selectors.  
• Manual maintenance of selectors slows down delivery.

### How does it work?

Playwright-SAP plugs into Playwright’s locator engine and code-generator:

1. **UI5 locators** (`getByRoleUI5`, …) talk directly to the UI5 runtime.  
2. **SID locators** (`locateSID`, `getByRoleSID`) translate friendly queries into SAP Screen IDs.  
3. **Codegen patch** records the new locators instead of DOM selectors.

SAP Applications are primarily of 2 types: 

1. SAP Web GUI
2. SAP Fiori

Playwright SAP provides new locators for both types of SAP applications.