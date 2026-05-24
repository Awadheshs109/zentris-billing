import { BillingSummary } from "../models/billing-summary";
import { InvoiceItem } from "../models/invoice-item";

export class InvoiceCalculator {
  static summary(
    items: InvoiceItem[],
    tax = 0,
    discount = 0,
  ): BillingSummary {
    const subtotal = items.reduce(
      (sum, item) =>
        sum + item.quantity * item.rate,
      0,
    );

    const discountAmount =
      subtotal * (discount / 100);

    const taxableAmount =
      subtotal - discountAmount;

    const taxAmount =
      taxableAmount * (tax / 100);

    const total =
      taxableAmount + taxAmount;

    return {
      subtotal: Number(
        subtotal.toFixed(2),
      ),

      taxAmount: Number(
        taxAmount.toFixed(2),
      ),

      discountAmount: Number(
        discountAmount.toFixed(2),
      ),

      total: Number(
        total.toFixed(2),
      ),
    };
  }
}