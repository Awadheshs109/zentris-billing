import { Billing } from "../core/billing";

import { Invoice }
from "../models/invoice";

import { BillingSummary }
from "../models/billing-summary";

export function classicInvoiceTemplate(
  invoice: Invoice,
  summary: BillingSummary,
): string {

  const currency =
    invoice.currency || "INR";

  const primaryColor =
    invoice.theme?.primaryColor ||
    "#221b67";

  const accentColor =
    invoice.theme?.accentColor ||
    "#009688";

  const items = invoice.items
    .map(
      (item, index) => `
<tr>
<td>${index + 1}</td>
<td>${item.description}</td>
<td>${item.quantity}</td>
<td>
${Billing.formatCurrency(
  item.rate,
  currency,
)}
</td>
<td>
${Billing.formatCurrency(
  item.quantity * item.rate,
  currency,
)}
</td>
</tr>
`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>

<style>

body{
  font-family:Arial;
  padding:20px;
}

.company-name{
  color:${primaryColor};
}

.invoice-title{
  background:${accentColor};
  color:white;
  padding:10px;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,td{
  border:1px solid #ccc;
  padding:10px;
}

</style>

</head>

<body>

<h1 class="company-name">
${invoice.branding?.logoText || invoice.company.name}
</h1>

<p>
${invoice.branding?.logoSubText || ""}
</p>

<div class="invoice-title">
Invoice # ${invoice.invoiceNo}
</div>

${
  invoice.features?.showSellerGST
    ? `
<p>
GST:
${invoice.company.gstNumber || "-"}
</p>
`
    : ""
}

${
  invoice.features?.showPAN
    ? `
<p>
PAN:
${invoice.company.panNumber || "-"}
</p>
`
    : ""
}

<table>

<thead>

<tr>
<th>#</th>
<th>Description</th>
<th>Qty</th>
<th>Rate</th>
<th>Total</th>
</tr>

</thead>

<tbody>

${items}

</tbody>

</table>

<h3>
Grand Total:
${Billing.formatCurrency(
  summary.total,
  currency,
)}
</h3>

${
  invoice.features?.showPaymentDetails
    ? `
<h4>
Payment Status:
${invoice.payment?.status || "pending"}
</h4>
`
    : ""
}

${
  invoice.features?.showSoftwareCredit
    ? `
<footer>
${invoice.branding?.softwareCreditText}
</footer>
`
    : ""
}

</body>
</html>
`;
}