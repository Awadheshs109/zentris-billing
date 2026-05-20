// test-invoice.ts

import fs from "fs";
import { InvoiceGenerator } from "./dist/index.js";

async function main() {

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
        description: "Invoice Generator Setup",
        quantity: 2,
        rate: 100,
      },
    ],

    tax: 18,
    discount: 5,

    notes: "Thank you",
  };

  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }

  const html = InvoiceGenerator.toHTML(invoice);
  const csv = InvoiceGenerator.toCSV(invoice);
  const json = InvoiceGenerator.toJSON(invoice);
  const pdf = InvoiceGenerator.toPDF(invoice);

  fs.writeFileSync(
    "output/invoice.html",
    html
  );

  fs.writeFileSync(
    "output/invoice.csv",
    csv
  );

  fs.writeFileSync(
    "output/invoice.json",
    json
  );

  const buffer = Buffer.from(
      await pdf.arrayBuffer()
  );

  fs.writeFileSync(
      "output/invoice.pdf",
      buffer
  );

  console.log(
      "All invoice files generated"
  );

}

main().catch(console.error);