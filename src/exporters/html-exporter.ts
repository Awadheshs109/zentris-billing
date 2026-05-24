import { Invoice }
from "../models/invoice";

import { InvoiceNormalizer }
from "../normalizers/invoice-normalizer";

import { InvoiceCalculator }
from "../core/invoice";

import { InvoiceRenderer }
from "../renderers/invoice-renderer";

import { classicInvoiceTemplate }
from "../templates/classic.template";

import { classicInvoiceTemplate2 }
from "../templates/classic.template2";

export class HtmlExporter {

  static generate(
    invoice: Partial<Invoice>,

    options?: {
      template?: "classic" | "gst";
    },
  ): string {

    const normalizedInvoice =
      InvoiceNormalizer.normalize(invoice);

    const summary =
      InvoiceCalculator.summary(
        normalizedInvoice.items,
        normalizedInvoice.tax || 0,
        normalizedInvoice.discount || 0,
      );

    const template =
      options?.template === "gst"
        ? classicInvoiceTemplate2
        : classicInvoiceTemplate;

    return InvoiceRenderer.renderHTML(
      normalizedInvoice,
      summary,
      template,
    );
  }
}