---
sidebar_position: 7
---

# FAQs

### Do standard Playwright commands still work?
Yes. Playwright-SAP only adds SAP-specific locators; all native Playwright APIs and integrations behave normally.

### Which languages are supported?
Although Playwright supports multiple languages (JavaScript, TypeScript, Python, Java, .NET), currently Playwright-SAP only supports JavaScript and TypeScript.### Does this support Ariba / Concur / SuccessFactors, etc.?
No. Only SAP GUI for HTML (WebGUI) is supported currently.

### When to use `getByRoleSID` vs `locateSID`?
Use `getByRoleSID` for: standard elements in the `usr` path, readability, common role types.
Use `locateSID` for: complex/nested tables, anything outside `usr`, max stability across versions, custom controls.

### How do I get an SID?
Inspect the element → find the `lsdata` attribute → its value is the SID (pass it to `locateSID`).

### Can I use standard Playwright locators with SAP WebGUI?
Yes, you can use standard Playwright locators (like `page.getByRole()`, `page.getByText()`, etc.) with SAP WebGUI. However, these locators may be less stable across SAP versions and updates compared to SID-based locators, as they rely on the HTML structure which can change.


### I found a bug. Where can I report it?
Playwright-SAP is a relatively new project and there might be some bugs. Thanks for reporting it.

[Click here to report a bug.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=bug.yml)

[Click here to request a feature.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=feature.yml)

[Click here for documentation improvement.](https://github.com/ArpitSureka/playwright-sap/issues/new?template=documentation.yml)