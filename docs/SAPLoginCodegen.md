---
sidebar_position: 6
---

# SAP Login with Codegen

To use automatic login with codegen use this command when starting codegen,

```bash
npx playwright codegen "<url>" --sap-login <username> <password>

// Example
npx playwright codegen "https://sap.example.com" --sap-login user1 pass1
```

You can also add this command in package.json file under scripts section to make it easier to use.

```json title="package.json"
{
    // Other configs
    "scripts": {
        "codegen": "playwright codegen '<url>' --sap-login <username> <password>"
    }
    // Other configs
}
```

then run `npm run codegen` to directly run the codegen script written above.