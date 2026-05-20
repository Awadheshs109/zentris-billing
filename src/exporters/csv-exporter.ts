// exporters/csv-exporter.ts

export class CsvExporter {
  static generate(invoice: any) {
    return [
      "Description,Quantity,Rate",

      ...invoice.items.map(
        (item) =>
          `${item.description},
${item.quantity},
${item.rate}`,
      ),
    ].join("\n");
  }
}
