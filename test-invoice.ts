import fs from "node:fs";

import { InvoiceGenerator, VERSION } from "./dist/index.js";

async function main() {
  console.log("Zentris Billing Version:", VERSION);

  const invoice: any = {
    type: "TAX INVOICE",

    invoiceNo: "INV-2026-1001",

    date: "21-05-2026",

    dueDate: "30-05-2026",

    paymentMode: "UPI / Bank Transfer",

    status: "Pending",

    currency: "INR",

   

    customer: {
      name: "Rahul Verma",

      company: "TechNova Solutions",

      address: "HSR Layout, Bangalore, Karnataka",

      phone: "+91 8888888888",

      gst: "29ABCDE1234F1Z8",
    },

    items: [
      {
        description: "Angular Dashboard Development",

        hsn: "998314",

        quantity: 2,

        rate: 12000,
      },

      {
        description: "React Admin Panel Setup",

        hsn: "998314",

        quantity: 1,

        rate: 18000,
      },

      {
        description: "Node.js Backend APIs",

        hsn: "998314",

        quantity: 4,

        rate: 8000,
      },

      {
        description: "Authentication Integration",

        hsn: "998314",

        quantity: 2,

        rate: 5000,
      },

      {
        description: "JWT Security Setup",

        hsn: "998314",

        quantity: 1,

        rate: 4000,
      },

      {
        description: "Invoice PDF Generation Module",

        hsn: "998314",

        quantity: 3,

        rate: 6000,
      },

      {
        description: "MongoDB Optimization",

        hsn: "998314",

        quantity: 2,

        rate: 4500,
      },

      {
        description: "Payment Gateway Integration",

        hsn: "998314",

        quantity: 1,

        rate: 9000,
      },

      {
        description: "GST Billing Logic",

        hsn: "998314",

        quantity: 5,

        rate: 2500,
      },

      {
        description: "Responsive UI Enhancement",

        hsn: "998314",

        quantity: 6,

        rate: 1500,
      },

      {
        description: "Dark Theme Support",

        hsn: "998314",

        quantity: 2,

        rate: 2200,
      }
    ],

    tax: 18,

    discount: 5,

    transport: "Blue Dart",

    eway: "78456378",

    place: "Maharashtra",

    amountWords: "Two lakh ninety thousand only",

    notes:
      "Payment due within 15 days. Thank you for choosing Zentris Billing.",

    signature: "Awadhesh Sharma",
  };

  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }

  const selectedTemplate: "classic" | "gst" = "gst";

  const html = InvoiceGenerator.toHTML(invoice, {
    template: selectedTemplate,
  });

  const pdf = await InvoiceGenerator.toPDF(invoice, {
    template: selectedTemplate,
  });

  const csv = InvoiceGenerator.toCSV(invoice);

  const json = InvoiceGenerator.toJSON(invoice);

  fs.writeFileSync("output/invoice.html", html);

  fs.writeFileSync("output/invoice.csv", csv);

  fs.writeFileSync("output/invoice.json", json);

  fs.writeFileSync("output/invoice.pdf", pdf);

  console.log("All invoice files generated successfully");
}

main().catch(console.error);
