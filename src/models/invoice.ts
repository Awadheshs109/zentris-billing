import { InvoiceItem } from "./invoice-item";

// src/models/invoice.ts
export interface Invoice {
  invoiceNo: string;
  date: string;

  company: {
    name: string;
    address: string;
    phone: string;
    email?: string;
  };

  customer: {
    name: string;
    company?: string;
    address: string;
    email?: string;
  };

  items: InvoiceItem[];

  discount?: number;
  tax?: number;
  notes?: string;
}