---
sidebar_position: 3
---

# GetByRoleSID

Using locateSID locator is a little difficult as it is hard to read that why we created getByRoleSID locator. this locator internally uses locateSID locator. it converts sid to role locator whenver sid is of the format `wnd[<number>]/usr/` this uses the prefix mapping given below to convert to this format.

### Examples

```tsx
  await page.getByRoleSID('label', { name: 'FEEDBACK' }).click();
```

### Arguments 

- role: string - Required.
- options:
  -  name?: string;
  -  pos?: number;
  -  wnd?: number; - Default 0

### Examples of conversion

```tsx
sid = wnd[0]/usr/okcd
locator = getByRoleSID('okCode')
```

```tsx
sid = wnd[1]/usr/lblFEEDBACK
locator = getByRoleSID('label', { name: 'FEEDBACK', wnd: 1 })
```

```tsx
sid = wnd[1]/usr/txtCONTACT[0]
locator = getByRoleSID('text', { name: 'CONTACT', pos: 0, wnd: 1 })
```

### SID Suffix Mapping

| SID Suffix | role |
| -------- | -------- |
| box | box |
| btn | button |
| chk | checkBox |
| cntl | customControl |
| wnd | window |
| lbl | label |
| menu | menu |
| okcd | okCode |
| pwd | password |
| rad | radioButton |
| ssub | scrollContainer |
| ses | session |
| sub | simpleContainer |
| sbar | statusBar |
| tabp | tab |
| tbl | table |
| tabs | tabStrip |
| txt | text |
| cmb | comboBox |
| con | connection |
| shellcont | shellContainer |
| ctxt | textField |
| mbar | menuBar |
| shell | shell |
| titl | titleBar |
| tbar | toolbar |