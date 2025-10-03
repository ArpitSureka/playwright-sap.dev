---
sidebar_position: 8
description: Find the latest version compatibility information between Playwright-SAP and Playwright. Ensure your test automation setup is up-to-date.
---

# Versioning

## Feature Roadmap

The following features and improvements are planned for upcoming releases. This roadmap is subject to change based on community feedback and development priorities.

#### Bug Fixes
None
<!-- Check if text is working in partial matching of checkAndMakeSelectorTokens and createPropertyValueMatcher -->
<!-- Xpath Locators are not proper. -->

#### UI5 Improvements

- [ ] Create UI5Xpath locator to construct XPaths using UI5 DOM
- [ ] Support multiple properties (key/value pairs) for getByRoleUI5 locator
- [ ] Improve UI5 processing to reduce dependency on global sap.ui module
- [ ] Check if it is possible to bring ui5 inspector automatically when opening dev tools. 
- [ ] Change priority order of codegen when generating UI5 locators - Increase UI5 Xpath Priority.
- [ ] Add regex support in getByRoleUI5 propertyValue part.
<!-- Give UI5 XPath higher priority that getByRole locator but less than getByText. Also Check if it should be done or not as well. Do only when there is UI5 XPath at a lower priority than getByRole-->

#### SAP WebGUI Enhancements

- [ ] Develop specialized WebGUI table locators for easier table interaction
- [ ] Create locators based on the type information in lsdata attribute

#### Performance Optimizations
<!-- Can be done via using full Xpath -->
- [ ] Improve UI5 Caching.



## Version Compatibility

This table shows the compatibility between Playwright-SAP and Playwright versions. 

| Playwright-SAP Version | Playwright Version |
| -------- | -------- |
| v1.1.3 (Stable) | v1.53.0 |
| v1.1.0 (Stable) | v1.53.0 |

<!-- ## Version Policy

Playwright-SAP follows semantic versioning (SemVer):

- **Major version** (x.0.0): Includes breaking changes
- **Minor version** (1.x.0): Adds new features in a backward-compatible manner
- **Patch version** (1.0.x): Includes backward-compatible bug fixes -->

## Release Notes

### v1.1.1

##### **New Features:**
- Added UI5 Inspector Extension in Chrome during codegen and testRunner.
- Added basic caching of UI5 Tree. Can be improved further.
- Added automatic handling of text locators during UI5 text assertions.
- Extended getByRoleSID to support paths like `wnd[0]/tbar/btn[2]`

##### **Bug Fixes:**
- Fixed error message appearing even when tests pass: `1 error was not a part of any test, see above for details`
- Fix issue where SID doesn't appear when hovering over elements directly above SID elements
- Fixed exact match in SID part. previous it was matching in some edge cases of partial match.


### v1.1.0
- Fixed a few issues with 1.0.0 version.



## Contribution

If you have an idea or feature that you would like to see implemented, please raise an issue at:

[GitHub Issues](https://github.com/ArpitSureka/playwright-sap/issues/new/choose)

Select the appropriate issue template:
- Bug report
- Feature request
- Documentation improvement