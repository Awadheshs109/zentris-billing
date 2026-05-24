import fs from "node:fs";

import {
  InvoiceGenerator,
  VERSION,
} from "./dist/index.js";

console.log(
  "Zentris Billing Version:",
  VERSION,
);

const invoice = {
  type: "TAX INVOICE",

  invoiceNo: "INV-2026-1001",

  date: "21-05-2026",

  dueDate: "30-05-2026",

  currency: "INR",

  company: {
    name: "Zentris Pvt Ltd",

    address:
      "Mumbai, Maharashtra, India",

    phone: "+91 9999999999",

    email: "support@zentris.com",

    gstNumber: "27ABCDE1234F1Z5",

    panNumber: "ABCDE1234F",

    website: "https://zentris.com",
  },

  customer: {
    name: "Rahul Verma",

    email: "rahul@example.com",

    company:
      "TechNova Solutions",

    address:
      "HSR Layout, Bangalore, Karnataka",

    phone: "+91 8888888888",

    gstNumber:
      "29ABCDE1234F1Z8",
  },

  payment: {
    mode: "mixed",

    paidAmount: 50000,

    dueAmount: 25000,

    status: "partial",

    udhar: true,

    transactions: [
      {
        mode: "upi",

        amount: 30000,

        reference: "UPI123456",
      },

      {
        mode: "bank",

        amount: 20000,

        reference: "BANK9988",
      },
    ],
  },

  items: [
    {
      description:
        "Angular Dashboard Development",

      hsn: "998314",

      quantity: 2,

      rate: 12000,
    },

    {
      description:
        "React Admin Panel Setup",

      hsn: "998314",

      quantity: 1,

      rate: 18000,
    },

    {
      description:
        "Node.js Backend APIs",

      hsn: "998314",

      quantity: 4,

      rate: 8000,
    },
  ],

  tax: 18,

  discount: 5,

  transport: "Blue Dart",

  eway: "78456378",

  amountWords:
    "Two lakh ninety thousand only",

  notes:
    "Payment due within 15 days.",

  signature: "Awadhesh Sharma",

  features: {
    showSellerGST: true,
    showBuyerGST: true,
    showPAN: true,
    showTransport: true,
    showEWay: true,
    showBankDetails: true,
    showTerms: true,
    showSignature: true,
    showSoftwareCredit: true,
    showBranchDetails: true,
    showPaymentDetails: true,
    showPaymentTransactions: true,
    showAmountWords: true,
  },

  branding: {
    showSoftwareCredit: true,

    softwareCreditText:
      "Generated using Zentris Billing",

    logoText: "ZENTRIS",

    logoSubText:
      "Billing Engine",
  },

  theme: {
    primaryColor: "#221b67",

    accentColor: "#009688",
  },
};

async function main() {

  if (!fs.existsSync("output")) {

    fs.mkdirSync("output");
  }

  const selectedTemplate: | "classic" | "gst" = "classic";

  const html =
    InvoiceGenerator.toHTML(
      invoice,
      {
        template:
          selectedTemplate,
      },
    );

  const pdf =
    await InvoiceGenerator.toPDF(
      invoice,
      {
        template:
          selectedTemplate,
      },
    );

  const csv =
    InvoiceGenerator.toCSV(
      invoice,
    );

  const json =
    InvoiceGenerator.toJSON(
      invoice,
    );

  fs.writeFileSync(
    "output/invoice.html",
    html,
  );

  /**
   * Temporary placeholder PDF.
   *
   * Opens correctly in browser if renamed to .html.
   */

  fs.writeFileSync(
    "output/invoice.pdf",
    pdf,
  );

  fs.writeFileSync(
    "output/invoice.csv",
    csv,
  );

  fs.writeFileSync(
    "output/invoice.json",
    json,
  );

  console.log(
    "Invoice files generated successfully",
  );

  console.log(
    "Temporary PDF generated at output/invoice.pdf",
  );
}

main().catch(console.error);