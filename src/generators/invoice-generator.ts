
import {PdfExporter} from '../exporters/pdf-exporter';
import {CsvExporter} from '../exporters/csv-exporter';
import {JsonExporter} from '../exporters/json-exporter';
import { HtmlExporter } from '../exporters/html-exporter';

export class InvoiceGenerator{

   static toPDF(invoice:any){
      return PdfExporter.generate(invoice);
   }

   static toCSV(invoice:any){
      return CsvExporter.generate(invoice);
   }

   static toJSON(invoice:any){
      return JsonExporter.generate(invoice);
   }

   static toHTML(invoice:any){
      return HtmlExporter.generate(invoice);
   }

}