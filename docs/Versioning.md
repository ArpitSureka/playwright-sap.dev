---
sidebar_position: 9
---

# Versioning

## Version Compatibility

This table shows the compatibility between Playwright-SAP and Playwright versions. 

| Playwright-SAP Version | Playwright Version |
| -------- | -------- |
| v1.1.0 | v1.53.0 |

<!-- ## Release Notes

### v1.1.0

**New Features:**
- Added `getByRoleSID` locator for improved readability
- Added `SAPLogin` utility for Fiori and WebGUI authentication
- Added `--sap-login` flag for codegen
- Improved stability for WebGUI element detection

**Bug Fixes:**
- Fixed issue with table cell selection in complex tables
- Resolved timing issues with dialog popups
- Improved error handling for failed login attempts -->

## Feature Roadmap

The following features and improvements are planned for upcoming releases. This roadmap is subject to change based on community feedback and development priorities.

#### Bug Fixes

- [ ] Fix error message appearing even when tests pass: `1 error was not a part of any test, see above for details`
- [ ] Fix issue where SID doesn't appear when hovering over elements directly above SID elements

#### UI5 Improvements

- [ ] Enable UI5 inspector installation in Chrome during codegen and testRunner
- [ ] Implement automatic handling of text locators during UI5 text assertions
- [ ] Create UI5Xpath locator to construct XPaths using UI5 DOM
- [ ] Support multiple properties (key/value pairs) for getByRoleUI5 locator
- [ ] Improve UI5 processing to reduce dependency on global sap.ui module

#### SAP WebGUI Enhancements

- [ ] Extend getByRoleSID to support paths like `wnd[0]/tbar/btn[2]`
- [ ] Develop specialized WebGUI table locators for easier table interaction
- [ ] Create locators based on the type information in lsdata attribute

#### Performance Optimizations

- [ ] Implement improved caching of locators
- [ ] Optimize selector resolution for complex SAP structures

<!-- ## Version Policy

Playwright-SAP follows semantic versioning (SemVer):

- **Major version** (x.0.0): Includes breaking changes
- **Minor version** (1.x.0): Adds new features in a backward-compatible manner
- **Patch version** (1.0.x): Includes backward-compatible bug fixes -->

## Contribution

If you have an idea or feature that you would like to see implemented, please raise an issue at:

[GitHub Issues](https://github.com/ArpitSureka/playwright-sap/issues/new/choose)

Select the appropriate issue template:
- Bug report
- Feature request
- Documentation improvement