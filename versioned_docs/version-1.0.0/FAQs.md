---
sidebar_position: 8
---

# FAQs

### ❓ What about playwright commands and other playwright integrations?
All the standard Playwright commands and integrations remain the same. Playwright-SAP extends Playwright's functionality without modifying its core behavior, so you can continue to use all Playwright features alongside the SAP-specific locators.

### ❓ Can I use this with programming languages other than JavaScript?
No. Although Playwright supports multiple languages (JavaScript, TypeScript, Python, Java, .NET), currently Playwright-SAP only supports JavaScript and TypeScript. Support for other languages may be considered in future releases based on community demand.

### ❓ Does this work with other SAP web applications like Ariba, Concur, etc.?
No. Currently, Playwright-SAP is specifically designed for SAP GUI for HTML (WebGUI) applications. Other SAP web applications like Ariba, Concur, SuccessFactors, etc., have different underlying architectures and are not supported at this time.

### ❓ When should I use locateSID vs. getByRoleSID?
Use `getByRoleSID` when:
- Working with standard elements in the `usr` path
- You want more readable and maintainable test scripts
- The element fits one of the standard role types

Use `locateSID` when:
- Working with complex structures like nested tables
- Targeting elements outside the `usr` path
- You need maximum stability across SAP versions
- Working with custom or specialized controls

### ❓ How do I find the SID for an element?
You can find the SID by:
1. Right-clicking on the element in SAP WebGUI and selecting "Inspect" in your browser
2. Looking for the `lsdata` attribute in the HTML element
3. The value of this attribute is the SID you can use with `locateSID`

### ❓ Can I use standard Playwright locators with SAP WebGUI?
Yes, you can use standard Playwright locators (like `page.getByRole()`, `page.getByText()`, etc.) with SAP WebGUI. However, these locators may be less stable across SAP versions and updates compared to SID-based locators, as they rely on the HTML structure which can change.


### ❓ I found a bug. Where can I report it?
Playwright-SAP is a relatively new project and there might be some bugs. Thanks for reporting it.

[Click here to report a bug.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=bug.yml)

[Click here to request a feature.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=feature.yml)

[Click here for documentation improvement.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=documentation.yml)