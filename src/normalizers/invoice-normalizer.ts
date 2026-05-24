import { defaultInvoiceConfig }
from "../config/default-invoice-config";

import { Invoice }
from "../models/invoice";

export class InvoiceNormalizer {

  static normalize(
    invoice: Partial<Invoice>,
  ): Invoice {

    return {

      ...defaultInvoiceConfig,

      ...invoice,

      items: invoice.items || [],

      company: {
        name:
          invoice.company?.name ||

          defaultInvoiceConfig.company?.name ||

          "",

        address:
          invoice.company?.address ||

          defaultInvoiceConfig.company?.address ||

          "",

        phone:
          invoice.company?.phone ||

          defaultInvoiceConfig.company?.phone ||

          "",

        email:
          invoice.company?.email,

        gstNumber:
          invoice.company?.gstNumber,

        panNumber:
          invoice.company?.panNumber,

        website:
          invoice.company?.website,

        bankDetails:
          invoice.company?.bankDetails,

        branches:
          invoice.company?.branches || [],
      },

      customer: {
        name:
          invoice.customer?.name ||

          defaultInvoiceConfig.customer?.name ||

          "",

        email:
          invoice.customer?.email ||

          defaultInvoiceConfig.customer?.email ||

          "",

        phone:
          invoice.customer?.phone,

        gstNumber:
          invoice.customer?.gstNumber,

        address:
          invoice.customer?.address,
      },

      features: {
        ...defaultInvoiceConfig.features,
        ...invoice.features,
      },

      branding: {
        ...defaultInvoiceConfig.branding,
        ...invoice.branding,
      },

      theme: {
        ...defaultInvoiceConfig.theme,
        ...invoice.theme,
      },

      payment: invoice.payment
        ? {
            ...invoice.payment,

            transactions:
              invoice.payment.transactions || [],
          }
        : undefined,

      terms: invoice.terms || [],
    } as Invoice;
  }
}