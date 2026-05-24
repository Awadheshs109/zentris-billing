import { Invoice } from "../models/invoice";

import { CsvExporter } from "../exporters/csv-exporter";

import { HtmlExporter } from "../exporters/html-exporter";

import { JsonExporter } from "../exporters/json-exporter";

import { PdfExporter } from "../exporters/pdf-exporter";

export class InvoiceGenerator {
  static toHTML(
    invoice: Partial<Invoice>,

    options?: {
      template?: "classic" | "gst";
    },
  ): string {
    return HtmlExporter.generate(invoice, options);
  }

  static toCSV(invoice: Invoice): string {
    return CsvExporter.generate(invoice);
  }

  static toJSON(invoice: Invoice): string {
    return JsonExporter.generate(invoice);
  }

  static async toPDF(
    invoice: Partial<Invoice>,

    options?: {
      template?: "classic" | "gst";
    },
  ): Promise<Buffer> {
    const html = this.toHTML(invoice, options);

    return PdfExporter.generate(html);
  }
}
