import { describe, expect, test } from "vitest";

import { Billing } from "../src";

describe("Billing", () => {
  test("GST calculation", () => {
    expect(Billing.calculateGST(1000, 18)).toBe(180);
  });

  test("Discount calculation", () => {
    expect(Billing.calculateDiscount(1000, 10)).toBe(100);
  });

  test("Tax calculation", () => {
    expect(Billing.calculateTax(1000, 18)).toBe(180);
  });

  test("Invoice generation", () => {
    const invoice = Billing.createInvoice({
      customer: {
        name: "Awadhesh",

        email: "test@gmail.com",
      },

      items: [
        {
          name: "Laptop",

          quantity: 1,

          price: 1000,
        },
      ],

      tax: 18,

      discount: 10,
    });

    expect(invoice.total).toBe(1080);

    expect(invoice.invoiceId).toContain("INV");
  });
});
