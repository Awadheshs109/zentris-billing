export interface InvoiceItem {

  description: string;

  quantity: number;

  rate: number;

  hsn?: string;

  taxRate?: number;
}