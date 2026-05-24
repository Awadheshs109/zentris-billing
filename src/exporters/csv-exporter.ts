import { Invoice } from "../models/invoice";

import { InvoiceCalculator }
from "../core/invoice";

export class CsvExporter {
  static generate(
    invoice: Invoice,
  ): string {

    const summary =
      InvoiceCalculator.summary(
        invoice.items,
        invoice.tax || 0,
        invoice.discount || 0,
      );

    const rows = [

      `Invoice No,${invoice.invoiceNo}`,

      `Date,${invoice.date}`,

      `Customer,${invoice.customer.name}`,

      `Payment Status,${invoice.payment?.status || "pending"}`,

      "",

      "Description,Quantity,Rate,Amount",

      ...invoice.items.map(
        (item) =>
          `${item.description},${item.quantity},${item.rate},${item.quantity * item.rate}`,
      ),

      "",

      `Subtotal,,,${summary.subtotal}`,

      `Tax Amount,,,${summary.taxAmount}`,

      `Discount Amount,,,${summary.discountAmount}`,

      `Grand Total,,,${summary.total}`,
    ];

    return rows.join("\n");
  }
}