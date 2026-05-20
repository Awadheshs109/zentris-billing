// exporters/pdf-exporter.ts

import {jsPDF} from 'jspdf';

export class PdfExporter{

 static generate(invoice:any){

   const pdf=new jsPDF();

   pdf.setFontSize(20);

   pdf.text(
      'INVOICE',
      20,
      20
   );

   pdf.text(
     `Invoice: ${invoice.invoiceNo}`,
     20,
     40
   );

   pdf.text(
      `Customer: ${invoice.customer.name}`,
      20,
      50
   );

   let y=70;

   invoice.items.forEach((item:any)=>{

      pdf.text(
       `${item.description}
       ₹${item.rate}`,
       20,
       y
      );

      y+=10;

   });

   return pdf.output('blob');

 }

}