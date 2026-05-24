import { Company } from "./company";
import { Customer } from "./customer";
import { InvoiceItem } from "./invoice-item";
import { Payment } from "./payment";

export interface InvoiceTheme {
  primaryColor?: string;
  accentColor?: string;
}

export interface InvoiceBranding {
  showSoftwareCredit?: boolean;

  softwareCreditText?: string;

  logoText?: string;

  logoSubText?: string;
}

export interface InvoiceFeatures {
  showSellerGST?: boolean;
  showBuyerGST?: boolean;
  showPAN?: boolean;
  showTransport?: boolean;
  showEWay?: boolean;
  showBankDetails?: boolean;
  showTerms?: boolean;
  showSignature?: boolean;
  showSoftwareCredit?: boolean;
  showBranchDetails?: boolean;
  showPaymentDetails?: boolean;
  showPaymentTransactions?: boolean;
  showAmountWords?: boolean;
}

export interface Invoice {
  invoiceNo: string;

  date: string;

  dueDate?: string;

  company: Company;

  customer: Customer;

  items: InvoiceItem[];

  payment?: Payment;

  features?: InvoiceFeatures;

  branding?: InvoiceBranding;

  theme?: InvoiceTheme;

  tax?: number;

  discount?: number;

  transport?: string;

  eway?: string;

  amountWords?: string;

  notes?: string;

  signature?: string;

  terms?: string[];

  currency?: string;
}
