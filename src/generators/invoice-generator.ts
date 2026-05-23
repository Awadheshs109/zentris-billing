import { CsvExporter } from "../exporters/csv-exporter";
import { HtmlExporter } from "../exporters/html-exporter";
import { JsonExporter } from "../exporters/json-exporter";
import { PdfExporter } from "../exporters/pdf-exporter";

export class InvoiceGenerator {
  static toHTML(
    invoice: any,
    options?: {
      template?: "classic" | "gst";
    },
  ) {
    return HtmlExporter.generate(invoice, options);
  }

  static toCSV(invoice: any) {
    return CsvExporter.generate(invoice);
  }

  static toJSON(invoice: any) {
    return JsonExporter.generate(invoice);
  }

  static async toPDF(
    invoice: any,
    options?: {
      template?: "classic" | "gst";
    },
  ): Promise<Buffer> {
    const html = this.toHTML(invoice, options);

    return await PdfExporter.generate(html);
  }
}
