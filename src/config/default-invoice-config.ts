import { Invoice } from "../models/invoice";

export const defaultInvoiceConfig: Partial<Invoice> = {
  currency: "INR",

  tax: 0,

  discount: 0,

  company: {
    name: "",
    address: "",
    phone: "",
  },

  customer: {
    name: "",
    email: "",
  },

  features: {
    showSellerGST: true,
    showBuyerGST: true,
    showPAN: true,
    showTransport: true,
    showEWay: true,
    showBankDetails: true,
    showTerms: true,
    showSignature: true,
    showSoftwareCredit: true,
    showBranchDetails: true,
    showPaymentDetails: true,
    showPaymentTransactions: true,
    showAmountWords: true,
  },

  branding: {
    showSoftwareCredit: true,
    softwareCreditText:
      "Generated using Zentris Billing",
    logoText: "ZENTRIS",
    logoSubText: "Billing Engine",
  },

  theme: {
    primaryColor: "#221b67",
    accentColor: "#009688",
  },
};