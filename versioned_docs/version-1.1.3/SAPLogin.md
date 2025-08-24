---
sidebar_position: 4
description: Learn how to use the SAPLogin utility in Playwright-SAP to simplify authentication and automate the login process for SAP Fiori Launchpad and SAP NetWeaver applications.
---

# SAP Login

## Overview

The `SAPLogin` utility simplifies authentication by handling the complete **login flow** (username, password, optional URL navigation) for both **SAP Fiori Launchpad** and **SAP NetWeaver login** pages. This utility saves you from having to write repetitive login code and handles the various SAP login page formats automatically.

## Signature

```ts
page.SAPLogin(username: string,
              password: string,
              url?: string): Promise<void>
```

| Parameter | Type | Required | Description |
|------|------|----------|-------------|
| `username` | string | ✔ | SAP user ID. |
| `password` | string | ✔ | User password. |
| `url` | string | ✖ | If provided, the browser first navigates to the URL; otherwise it assumes that the login page is already open. |

:::info Compatibility
Currently works with **Fiori Launchpad** and **SAP WebGUI** login pages. Other SAP interfaces may not be supported. [Click here to report a bug with SAPLogin](https://github.com/ArpitSureka/playwright-sap/issues/new?template=sapLoginBug.yml)
:::

## Examples

#### Basic Login

```ts
// Login with URL navigation
await page.SAPLogin(SAP_USER, SAP_PASS, 'https://sap.example.com');
```

#### Login to an Already Open Page

```ts
// Navigate to the login page first
await page.goto('https://sap.example.com');

// Then login (no URL parameter needed)
await page.SAPLogin(SAP_USER, SAP_PASS);
```

#### Login with Environment Variables

```ts
// Using environment variables for credentials (recommended for security)
await page.SAPLogin(
  process.env.SAP_USERNAME,
  process.env.SAP_PASSWORD,
  'https://sap.example.com'
);
```

## How It Works

The `SAPLogin` utility performs the following steps:

1. If a URL is provided, it navigates to that URL first
2. Automatically detects the type of SAP login page (Fiori Launchpad or WebGUI)
3. Locates the appropriate username and password fields
4. Enters the provided credentials
5. Submits the login form
6. Handles any additional screens (like client selection if needed)
