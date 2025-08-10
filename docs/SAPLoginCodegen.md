---
sidebar_position: 6
---

# SAP Login with Codegen

## Overview

Playwright's codegen is a powerful tool that allows you to record browser interactions and automatically generate test scripts. The `--sap-login` flag extends this functionality by automatically handling the SAP login process before starting the recording session, saving you time and ensuring consistent authentication.


## Basic Usage

To use automatic login with codegen, add the `--sap-login` flag followed by your credentials when starting the codegen tool:

```bash
npx playwright codegen "<url>" --sap-login "<username>" "<password>"

# Example
npx playwright codegen "https://sap.example.com" --sap-login "user1" "pass1"
```

## Adding to package.json

For convenience, you can add this command to your `package.json` file under the scripts section:

```json title="package.json"
{
    // Other configs
    "scripts": {
        "codegen": "playwright codegen '<url>' --sap-login '<username>' '<password>'"
    }
    // Other configs
}
```

Then simply run `npm run codegen` to start the recording session with automatic login.

:::info Compatibility
Currently works with **Fiori Launchpad** and **SAP WebGUI** login pages. Under the hood this uses the SAPLogin utility. [Click here to report a bug with SAPLogin](https://github.com/ArpitSureka/playwright-sap/issues/new?template=sapLoginBug.yml)
:::