// tests/billing.test.ts

import { describe, it, expect } from "vitest";

import { Billing, InvoiceGenerator } from "../src";

const mockInvoice = {
  invoiceNo: "INV-1001",

  date: "21-05-2026",

  company: {
    name: "Zentris Pvt Ltd",
    address: "Mumbai",
    phone: "9999999999",
  },

  customer: {
    name: "Awadhesh Sharma",
    company: "Client Inc",
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

  notes: "Thank you",
};

describe("Zentris Billing Library", () => {
  it("should calculate GST correctly", () => {
    const gst = Billing.calculateGST(1000, 18);

    expect(gst).toBe(180);
  });

  it("should calculate discount correctly", () => {
    const discount = Billing.calculateDiscount(1000, 10);

    expect(discount).toBe(100);
  });

  it("should format INR currency", () => {
    const currency = Billing.formatCurrency(100000, "INR");

    expect(currency).toContain("₹");
  });

  it("should generate HTML invoice", () => {
    const html = InvoiceGenerator.toHTML(mockInvoice);

    expect(html).toContain("INVOICE");

    expect(html).toContain("INV-1001");

    expect(html).toContain("Awadhesh Sharma");
  });

  it("should generate CSV invoice", () => {
    const csv = InvoiceGenerator.toCSV(mockInvoice);

    expect(csv).toContain("Angular Development");

    expect(csv).toContain("Quantity");
  });

  it("should generate JSON invoice", () => {
    const json = InvoiceGenerator.toJSON(mockInvoice);

    expect(json).toContain("INV-1001");

    expect(json).toContain("Awadhesh Sharma");
  });

  it("should generate PDF invoice", () => {
    const pdf = InvoiceGenerator.toPDF(mockInvoice);

    expect(pdf).toBeDefined();
  });
});
