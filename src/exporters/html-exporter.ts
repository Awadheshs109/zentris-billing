// src/exporters/html-exporter.ts

import { Billing }
from "../core/billing";

import {
  classicInvoiceTemplate
}
from "../templates/classic.template";

import {
  classicInvoiceTemplate2
}
from "../templates/classic.template2";


export class HtmlExporter{

  static generate(
    invoice:any,
    options?:{
      template?:
      'classic' |
      'gst'
    }
  ){

    const subtotal =
    invoice.items.reduce(
    (
      sum:number,
      item:any
    )=>

      sum +
      (
        item.quantity *
        item.rate
      ),

      0
    );

    const taxAmount =
    Billing.calculateGST(
      subtotal,
      invoice.tax || 0
    );

    const discountAmount =
    Billing.calculateDiscount(
      subtotal,
      invoice.discount || 0
    );

    const total =
    subtotal +
    taxAmount -
    discountAmount;

    const summary = {

      subtotal,

      taxAmount,

      discountAmount,

      total

    };


    const template =
    options?.template ||
    'classic';


    if(
      template === 'gst'
    ){

      return classicInvoiceTemplate2(
        invoice,
        summary
      );

    }


    return classicInvoiceTemplate(
      invoice,
      summary
    );

  }

}