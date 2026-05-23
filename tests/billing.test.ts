import { describe, it, expect } from "vitest";

import {
  Billing,
  InvoiceGenerator,
  VERSION
} from "../src";

const invoice = {

  invoiceNo:"INV-1001",

  date:"21-05-2026",

  company:{
    name:"Zentris Pvt Ltd",
    address:"Mumbai"
  },

  customer:{
    name:"Awadhesh Sharma",
    address:"Bangalore"
  },

  items:[
    {
      description:"Angular Development",
      quantity:5,
      rate:75
    }
  ],

  tax:18,
  discount:5
};

describe(
"Zentris Billing",
()=>{

  it(
  "should calculate GST",
  ()=>{

    expect(
      Billing.calculateGST(
        1000,
        18
      )
    ).toBe(180);

  });

  it(
  "should calculate discount",
  ()=>{

    expect(
      Billing.calculateDiscount(
        1000,
        10
      )
    ).toBe(100);

  });

  it(
  "should generate HTML",
  ()=>{

    const html =
    InvoiceGenerator.toHTML(
      invoice
    );

    expect(html)
    .toContain(
      "INV-1001"
    );

  });

  it(
  "should generate CSV",
  ()=>{

    const csv =
    InvoiceGenerator.toCSV(
      invoice
    );

    expect(csv)
    .toContain(
      "Angular Development"
    );

  });

  it(
  "should generate JSON",
  ()=>{

    const json =
    InvoiceGenerator.toJSON(
      invoice
    );

    expect(json)
    .toContain(
      "Awadhesh Sharma"
    );

  });

  it(
  "should generate PDF blob",
  ()=>{

    const pdf =
    InvoiceGenerator.toPDF(
      invoice
    );

    expect(pdf)
    .toBeDefined();

  });

  it(
  "should expose package version",
  ()=>{

    expect(VERSION)
    .toBeDefined();

  });

});