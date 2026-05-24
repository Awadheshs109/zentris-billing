// src/templates/classic.template.ts

import { Billing } from "../core/billing";

export function classicInvoiceTemplate(invoice: any, summary: any) {
  const currency = invoice.currency || "INR";

  const items = invoice.items
    .map(
      (item: any, index: number) => `
    <tr>
      <td>
        ${index + 1}
      </td>
      <td>
        ${item.description}
      </td>
      <td>
        ${item.quantity}
      </td>
      <td>
        ${Billing.formatCurrency(item.rate, currency)}
      </td>
      <td>
        ${Billing.formatCurrency(item.quantity * item.rate, currency)}
      </td>
    </tr>
  `,
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>
<title>
${invoice.type || "INVOICE"}
</title>
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  padding: 0;
  margin: 0;
  color: #222222;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.receipt-container {
  width: 100%;
  max-width: 100%;
  margin: auto;
  background: #ffffff;
  padding: 40px;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 35px;
}
.company-name {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}
.company-address {
  font-size: 13px;
  line-height: 1.5;
}
.invoice-title {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 1px;
}
.address-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-bottom: 30px;
}
.address-box h3 {
  font-size: 16px;
  margin-bottom: 8px;
}
.address-box p {
  font-size: 13px;
  line-height: 1.5;
}
.invoice-details td {
  padding: 4px 0;
  font-size: 13px;
}
.invoice-details td:first-child {
  font-weight: 700;
  padding-right: 10px;
}
.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}
.items-table th {
  background: #f3f3f3;
  padding: 10px;
  border: 1px solid #cccccc;
  font-size: 13px;
  text-align: center;
}
.items-table td {
  border: 1px solid #cccccc;
  padding: 9px;
  font-size: 12px;
  line-height: 1.4;
  word-break: break-word;
}
.items-table td:nth-child(1),
.items-table td:nth-child(3) {
  text-align: center;
  width: 60px;
}
.items-table td:nth-child(4),
.items-table td:nth-child(5) {
  text-align: right;
  width: 120px;
}
.total-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}
.total-box {
  width: 320px;
}
.total-table td {
  padding: 10px;
  font-size: 14px;
}
.total-table td:last-child {
  text-align: right;
}
.total-table tr:last-child td {
  border: 1px solid #cccccc;
  font-size: 24px;
  font-weight: 700;
}
.notes {
  margin-top: 35px;
}
.notes h3 {
  margin-bottom: 10px;
  font-size: 15px;
}
.notes p {
  font-size: 12px;
  line-height: 1.6;
}
.signature-section {
  margin-top: 45px;
  display: flex;
  justify-content: flex-end;
}
.signature {
  font-size: 34px;
  font-family: cursive;
  margin-bottom: 5px;
}
.signature-label {
  border-top: 1px solid #222222;
  padding-top: 5px;
  font-size: 11px;
}
.footer {
  margin-top: 40px;
  text-align: center;
  color: #777777;
  font-size: 11px;
}
</style>
</head>
<body>
<div class="receipt-container">
<div class="top-header">
<div>
<div class="company-name">
${invoice.company?.name || "Zentris Pvt Ltd"}
</div>
<div class="company-address">
<p>
${invoice.company?.address || "Mumbai, India"}
</p>
<p>
${invoice.company?.phone || "+91 9999999999"}
</p>
<p>
${invoice.company?.email || "support@zentris.com"}
</p>
<p>
GSTIN:
${invoice.company?.gstNumber || "27ABCDE1234F1Z5"}
</p>
</div>
</div>
<div class="invoice-title">
${invoice.type || "INVOICE"}
</div>
</div>
<div class="address-section">
<div class="address-box">
<h3>Seller</h3>
<p>
${invoice.company?.name || "Zentris Pvt Ltd"}
</p>
<p>
${invoice.company?.address || "Mumbai"}
</p>
</div>
<div class="address-box">
<h3>Buyer</h3>
<p>
${invoice.customer?.name || "Customer Name"}
</p>
<p>
${invoice.customer?.company || ""}
</p>
<p>
${invoice.customer?.address || "Customer Address"}
</p>
<p>
${invoice.customer?.phone || ""}
</p>
</div>
<div class="invoice-details">
<table>
<tr>
<td>Invoice Number</td>
<td>${invoice.invoiceNo || "INV-001"}</td>
</tr>
<tr>
<td>Date</td>
<td>${invoice.date || new Date().toLocaleDateString()}</td>
</tr>
<tr>
<td>Due Date</td>
<td>${invoice.dueDate || ""}</td>
</tr>
<tr>
<td>Payment Mode</td>
<td>${invoice.payment?.mode || "Bank Transfer"}</td>
</tr>
<tr>
<td>Status</td>
<td>${invoice.payment?.status || "Pending"}</td>
</tr>
</table>
</div>
</div>
<table class="items-table">
<thead>
<tr>
<th>Number</th>
<th>Description</th>
<th>Qty</th>
<th>Rate</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
${items}
</tbody>
</table>
<div class="total-wrapper">
<div class="total-box">
<table class="total-table">
<tr>
<td>Subtotal</td>
<td>
${Billing.formatCurrency(summary.subtotal, currency)}
</td>
</tr>
<tr>
<td>Tax</td>
<td>
${Billing.formatCurrency(summary.taxAmount, currency)}
</td>
</tr>
<tr>
<td>Discount</td>
<td>
${Billing.formatCurrency(summary.discountAmount, currency)}
</td>
</tr>
<tr>
<td>Total</td>
<td>
${Billing.formatCurrency(summary.total, currency)}
</td>
</tr>
</table>
</div>
</div>
<div class="notes">
<h3>Terms and Conditions</h3>
<p>
${invoice.notes || "Payment due within 15 days. Thank you for your business."}
</p>
</div>
${
  invoice.signature
    ? `
<div class="signature-section">
<div class="signature-box">
<div class="signature">
${invoice.signature}
</div>
<div class="signature-label">
Authorized Signature
</div>
</div>
</div>
`
    : ""
}
<div class="footer">
Generated using Zentris Billing
</div>
</div>
</body>
</html>
`;
}