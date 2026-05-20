// src/exporters/html-exporter.ts

import { classicInvoiceTemplate } from "../templates/classic.template";

import { InvoiceCalculator } from "../core/invoice";

export class HtmlExporter {
  static generate(invoice: any) {
    const summary = InvoiceCalculator.summary(
      invoice.items,
      invoice.tax,
      invoice.discount,
    );

    return classicInvoiceTemplate(invoice, summary);
  }
}
