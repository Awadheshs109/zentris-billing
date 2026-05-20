export function classicInvoiceTemplate(invoice: any, summary: any) {
  return `
<html>

<body>

<div class="invoice">

<h1>INVOICE</h1>

<div>
Invoice #: ${invoice.invoiceNo}
Date:${invoice.date}
</div>

<h3>BILL TO</h3>

<p>
${invoice.customer.name}
<br/>
${invoice.customer.address}
</p>

<table>

<tr>
<th>Description</th>
<th>Amount</th>
</tr>

${invoice.items
  .map(
    (item) => `
<tr>
<td>${item.description}</td>
<td>
₹${item.quantity * item.rate}
</td>
</tr>
`,
  )
  .join("")}

</table>

<div>
Subtotal:
₹${summary.subtotal}
</div>

<div>
Tax:
₹${summary.tax}
</div>

<div>
Total:
₹${summary.total}
</div>

</div>

</body>
</html>
`;
}
