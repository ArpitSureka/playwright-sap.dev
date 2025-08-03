---
sidebar_position: 1
slug: /
---

# Introduction

**Playwright-SAP** is built on top of Microsoft Playwright and focuses on **reliable automation of SAP Fiori, SAP WebGUI and UI5 applications**. Playwright is a very good testing and automation framework for web applications.

### Why does it exist?

1. The standard Playwright code-generator produces CSS/XPath selectors for SAP apps these locators are often incorrect and breaks easily.
2. SAP UI5 & WebGUI inject volatile IDs and nested containers that break DOM-oriented locators.
3. Writing end-to-end tests becomes slow and frustrating.

Playwright-SAP fixes this by shipping:

• UI5 and SID aware **locators** that don’t break on every deploy.  
• Smart **codegen** that records the right selectors the first time.  
• Convenience functions such as `SAPLogin` and `sapConfig` to remove boilerplate.

Supported SAP front-ends:

works with these websites 
- SAP Fiori Launchpad
- SAP WebGUI
- UI5 applications

### How does it work?

Playwright-SAP plugs into Playwright’s locator engine and code-generator:

1. **UI5 locators** (`getByRoleUI5`, …) talk directly to the UI5 runtime.  
2. **SID locators** (`locateSID`, `getByRoleSID`) translate friendly queries into SAP Screen IDs.  
3. **Codegen patch** records the new locators instead of DOM selectors.

