import { Invoice }
from "../models/invoice";

import { BillingSummary }
from "../models/billing-summary";

export type InvoiceTemplate = (
  invoice: Invoice,
  summary: BillingSummary
) => string;

export class InvoiceRenderer {

  static renderHTML(
    invoice: Invoice,
    summary: BillingSummary,
    template: InvoiceTemplate,
  ): string {

    return template(
      invoice,
      summary,
    );
  }
}