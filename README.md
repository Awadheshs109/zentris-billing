# Zentris Billing

Modern TypeScript billing & invoice generation library for Angular, React, Vue, Node.js and JavaScript applications.

Generate professional invoices in:

- HTML
- PDF
- CSV
- JSON

Supports GST invoices, tax calculation, discounts, payment tracking, invoice templates and multi-framework integration.

---

## Features

- TypeScript-first architecture
- Framework independent
- GST & tax calculation utilities
- Invoice summary calculations
- Professional HTML invoice templates
- PDF invoice generation using Puppeteer
- CSV & JSON export support
- Multi-payment transaction support
- Currency formatting
- Custom branding & themes
- Lightweight API
- ESM + CommonJS support

---

## Installation

```bash
npm install @awadheshs109/billing
```

---

## Quick Example

```ts
import {
  InvoiceGenerator
} from "@awadheshs109/billing";

const invoice = {
  invoiceNo: "INV-1001",

  date: "25-05-2026",

  currency: "INR",

  company: {
    name: "Zentris Pvt Ltd",
    address: "Mumbai, India",
    phone: "+91 9999999999"
  },

  customer: {
    name: "Rahul Verma",
    email: "rahul@example.com"
  },

  items: [
    {
      description: "Angular Dashboard",
      quantity: 2,
      rate: 12000
    }
  ],

  tax: 18,
  discount: 5
};

const html =
  InvoiceGenerator.toHTML(invoice);

console.log(html);
```

---

## Generate PDF

```ts
import fs from "node:fs";

const pdf =
  await InvoiceGenerator.toPDF(invoice);

fs.writeFileSync(
  "invoice.pdf",
  pdf
);
```

---

## Generate GST Invoice Template

```ts
const html =
  InvoiceGenerator.toHTML(
    invoice,
    {
      template: "gst"
    }
  );
```

---

## Export Formats

### HTML

```ts
InvoiceGenerator.toHTML(invoice);
```

### PDF

```ts
await InvoiceGenerator.toPDF(invoice);
```

### CSV

```ts
InvoiceGenerator.toCSV(invoice);
```

### JSON

```ts
InvoiceGenerator.toJSON(invoice);
```

---

## Tax Utilities

```ts
import {
  Billing
} from "@awadheshs109/billing";

const gst =
  Billing.calculateGST(
    1000,
    18
  );

console.log(gst);
```

---

## Currency Formatting

```ts
Billing.formatCurrency(
  15000,
  "INR"
);
```

---

## Supported Frameworks

- Angular
- React
- Vue
- Next.js
- Node.js
- Express
- NestJS
- Vanilla JavaScript

---

## Invoice Templates

### Classic Template

Professional clean invoice layout.

### GST Template

Indian GST-compliant invoice design.

---

## Package Exports

```ts
import {
  InvoiceGenerator,
  Billing,
  TAX_RATES,
  VERSION
} from "@awadheshs109/billing";
```

---

## Version

```ts
console.log(VERSION);
```

---

## Roadmap

- QR payment generation
- Razorpay integration
- UPI invoice QR
- Multi-language invoice support
- Thermal receipt template
- Email invoice sender
- React invoice viewer
- Angular invoice component

---

## License

MIT

---

## Repository

GitHub:
https://github.com/Awadheshs109/zentris-billing

npm:
https://www.npmjs.com/package/@awadheshs109/billing