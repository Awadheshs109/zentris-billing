# Zentris Billing

Framework-independent TypeScript billing and invoice generation library for Angular, React, Vue, Node.js and JavaScript applications.

Supports:

✅ GST / Tax calculations  
✅ Discount calculations  
✅ Currency formatting  
✅ Invoice generation  
✅ PDF export  
✅ CSV export  
✅ JSON export  
✅ HTML invoice templates  
✅ Browser + Node support  
✅ GitHub Actions CI/CD publishing  
✅ npm Trusted Publisher + Provenance

---

## Installation

```bash
npm install @awadheshs109/billing
```

---

## Quick Start

```ts
import { Billing } from "@awadheshs109/billing";

const gst = Billing.calculateGST(1000, 18);

console.log(gst);

// 180
```

---

## Invoice Example

```ts
import { InvoiceGenerator } from "@awadheshs109/billing";

const invoice = {
  invoiceNo: "INV-1001",

  date: "21-05-2026",

  company: {
    name: "Zentris Pvt Ltd",

    address: "Mumbai",

    phone: "+91 999999999",
  },

  customer: {
    name: "Awadhesh Sharma",

    company: "Client Company",

    address: "Bangalore",
  },

  items: [
    {
      description: "Angular Development",

      quantity: 5,

      rate: 75,
    },

    {
      description: "Invoice Setup",

      quantity: 2,

      rate: 100,
    },
  ],

  tax: 18,

  discount: 5,
};
```

---

## Generate HTML

```ts
const html = InvoiceGenerator.toHTML(invoice);
```

---

## Generate CSV

```ts
const csv = InvoiceGenerator.toCSV(invoice);
```

---

## Generate JSON

```ts
const json = InvoiceGenerator.toJSON(invoice);
```

---

## Generate PDF

```ts
const pdf = InvoiceGenerator.toPDF(invoice);
```

---

## Save PDF in Node.js

```ts
import fs from "fs";

async function save() {
  const pdf = InvoiceGenerator.toPDF(invoice);

  const buffer = Buffer.from(await pdf.arrayBuffer());

  fs.writeFileSync("invoice.pdf", buffer);
}

save();
```

---

## Available APIs

### Billing

| Method                             | Description        |
| ---------------------------------- | ------------------ |
| calculateGST(amount,tax)           | Calculate GST      |
| calculateDiscount(amount,discount) | Calculate discount |
| formatCurrency(amount,currency)    | Currency formatter |

---

### InvoiceGenerator

| Method   | Description           |
| -------- | --------------------- |
| toHTML() | Generate invoice HTML |
| toCSV()  | Export CSV            |
| toJSON() | Export JSON           |
| toPDF()  | Export PDF            |

---

## Local Development

Build package:

```bash
npm run build
```

Run tests:

```bash
npm run test:run
```

Validate end-to-end from dist:

```bash
npx tsx test-invoice.ts
```

---

## Release Process

Update package version:

```bash
npm version patch --no-git-tag-version
```

Commit:

```bash
git add .
git commit -m "feat: add invoice feature"
```

Create release tag:

```bash
git tag v1.0.31
git push
git push --tags
```

GitHub Actions automatically:

```txt
build
→ test
→ publish npm
```

---

## Changelog

See:

```txt
CHANGELOG.md
```

---

## Upcoming Features

- Company logo support
- QR / UPI payment support
- GST invoice templates
- Invoice print support
- Multiple invoice themes
- Invoice numbering system
- Multi-currency support

---

## License

MIT

---

## Repository

:contentReference[oaicite:0]{index=0}

## Package

:contentReference[oaicite:1]{index=1}
