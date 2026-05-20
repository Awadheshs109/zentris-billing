// core/invoice.ts

export class InvoiceCalculator {
  static summary(items: any[], tax = 0, discount = 0) {
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0,
    );

    const discountAmount = subtotal * (discount / 100);

    const taxable = subtotal - discountAmount;

    const taxAmount = taxable * (tax / 100);

    return {
      subtotal,
      discount: discountAmount,
      tax: taxAmount,
      total: taxable + taxAmount,
    };
  }
}
