import { Invoice }
from "../models/invoice";

import { InvoiceCalculator }
from "../core/invoice";

export class JsonExporter {

  static generate(
    invoice: Invoice,
  ): string {

    const summary =
      InvoiceCalculator.summary(
        invoice.items,
        invoice.tax || 0,
        invoice.discount || 0,
      );

    return JSON.stringify(
      {
        invoice,
        summary,
        generatedAt:
          new Date().toISOString(),
      },
      null,
      2,
    );
  }
}