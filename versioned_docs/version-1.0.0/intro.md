---
sidebar_position: 1
slug: /
---

# Introduction

**Playwright-SAP** is a specialized node module built on top of Microsoft Playwright that provides **reliable automation for SAP applications** including Fiori Launchpad, SAP WebGUI, and UI5-based applications.

## Why Playwright-SAP?

Standard Playwright works well for most web applications, but SAP applications present unique challenges:

1. **Unstable Selectors**: The standard Playwright code-generator produces CSS/XPath selectors that frequently break with SAP applications
2. **Dynamic IDs**: SAP UI5 & WebGUI inject volatile IDs and deeply nested containers that make traditional DOM-oriented locators unreliable
3. **Complex UI Structure**: SAP's unique UI framework requires specialized knowledge to automate effectively

These challenges make writing and maintaining end-to-end tests for SAP applications slow, frustrating, and prone to failure.

## Key Features

Playwright-SAP addresses these challenges with three core innovations:

| Feature | Description |
|---------|-------------|
| **Specialized Locators** | UI5 and SID-aware locators that understand SAP's UI structure. Stable tests that don't break on every deployment |
| **Smart Code Generation** | Enhanced recorder that captures the right selectors the first time. Faster test creation with fewer manual fixes |
| **Convenience Functions** | Ready-made solutions for common tasks like `SAPLogin` and `sapConfig`. Less boilerplate code resulting in faster development |

## Supported SAP Applications

Playwright-SAP works seamlessly with:

- **SAP Fiori Launchpad** - Modern SAP interface for accessing applications
- **SAP WebGUI** - Browser-based SAP GUI for traditional SAP applications
- **UI5 Applications** - Any application built with the SAPUI5/OpenUI5 framework

## How It Works

Playwright-SAP integrates directly with Playwright's architecture:

1. **UI5 Locators** (`getByRoleUI5`) - Communicate directly with the UI5 runtime to find elements based on their UI5 properties
2. **SID Locators** (`locateSID`, `getByRoleSID`) - Translate friendly queries into SAP Screen IDs for reliable element selection
3. **Enhanced Code Generator** - Records specialized SAP-aware locators instead of brittle DOM selectors

## Getting Started

Ready to start automating your SAP applications? Follow these steps:

1. [Install Playwright-SAP](./Installation.md) in your project
2. Learn about the [specialized locators](./locators/getByRoleUI5.md) for SAP applications
3. Set up [automatic login](./SAPConfig.md) for your tests

---------------------------------------------------------------------------------------------------------------
Playwright, built by Microsoft, is an outstanding open-source project.

Heartfelt thanks to all the developers and teams at Microsoft who made Playwright what it is today.👏

---------------------------------------------------------------------------------------------------------------
Note that this project is no where associated with SAP, Playwright or Microsoft Corportaion.

