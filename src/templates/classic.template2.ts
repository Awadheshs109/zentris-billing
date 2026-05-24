// src/templates/classic.template.ts

import { Billing } from "../core/billing";

export function classicInvoiceTemplate2(invoice: any, summary: any) {
  const currency = invoice.currency || "INR";

  const items = invoice.items
    .map(
      (item: any, index: number) => `

  <tr>

    <td class="center">
      ${index + 1}
    </td>

    <td>
      <b>${item.description}</b>
    </td>

    <td class="center">
      ${item.hsn || "8302"}
    </td>

    <td class="center">
      ${item.quantity}
    </td>

    <td class="right">
      ${Billing.formatCurrency(item.rate, currency)}
    </td>

    <td class="right">
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

<meta charset="UTF-8"/>

<meta
 name="viewport"
 content="width=device-width, initial-scale=1.0"
/>

<title>
${invoice.type || "TAX INVOICE"}
</title>

<style>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial, Helvetica, sans-serif;
}

body{
  background:#efefef;
  padding:10px;
}

.invoice{
  width:100%;
  max-width:1000px;
  margin:auto;
  background:#fff;
  border:2px solid #333;
  color:#111;
}

table{
  width:100%;
  border-collapse:collapse;
}

td,th{
  border:1px solid #333;
  padding:4px 6px;
  vertical-align:top;
  font-size:12px;
}

.header{
  padding:15px;
  border-bottom:2px solid #333;
}

.top-flex{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}

.company-name{
  font-size:32px;
  font-weight:900;
  color:#221b67;
  line-height:1;
}

.green-strip{
  background:#009688;
  color:#fff;
  font-size:13px;
  font-weight:bold;
  padding:6px 10px;
  margin-top:8px;
  display:inline-block;
}

.address{
  margin-top:10px;
  font-size:13px;
  line-height:1.5;
}

.right-top{
  text-align:right;
  font-size:12px;
  line-height:1.5;
}

.logo{
  margin-top:10px;
  font-size:28px;
  font-weight:900;
  color:#2a2a75;
}

.logo-sub{
  font-size:10px;
  letter-spacing:2px;
  color:#999;
}

.invoice-title{
  text-align:center;
  font-size:18px;
  font-weight:900;
}

.bold{
  font-weight:bold;
}

.center{
  text-align:center;
}

.right{
  text-align:right;
}

.product-table th{
  background:#f5f5f5;
  font-size:11px;
}

.product-table td{
  height:28px;
  font-size:11px;
}

.total-row td{
  font-size:15px;
  font-weight:bold;
}

.amount-words{
  padding:8px 12px;
  font-size:12px;
  line-height:1.6;
  border-top:1px solid #333;
  border-bottom:1px solid #333;
}

.tax-table th{
  background:#f5f5f5;
}

.bank-details{
  padding:8px;
  line-height:1.7;
  font-size:12px;
}

.qr{
  width:100px;
  height:100px;
  border:3px solid #000;
  margin:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:12px;
  font-weight:bold;
}

.certified{
  text-align:center;
  padding-top:10px;
  font-size:11px;
  font-weight:bold;
}

.company-sign{
  text-align:center;
  font-size:16px;
  font-weight:bold;
  padding:15px 0;
}

.computer-note{
  text-align:center;
  margin-top:60px;
  transform:rotate(-10deg);
  font-size:11px;
  color:#333;
}

.terms{
  padding:10px;
  line-height:1.5;
  font-size:11px;
}

.signature{
  height:70px;
  padding:10px;
  font-weight:bold;
}

.footer{
  padding:10px 0;
  font-size:14px;
  text-align:center;
}

@media print{

  body{
    background:#fff;
    padding:0;
  }

  .invoice{
    border:none;
    max-width:100%;
  }

}

</style>

</head>

<body>

<div class="invoice">

<div class="header">

<div class="top-flex">

<div>

<div class="company-name">
${invoice.company?.name || "Zentris Pvt Ltd"}
</div>

<div class="green-strip">
Manufacturing & Software Billing Solutions
</div>

<div class="address">

${invoice.company?.address || "Mumbai, India"}
<br>

Phone:
${invoice.company?.phone || "+91 9999999999"}

<br>

Email:
${invoice.company?.email || "support@zentris.com"}

<br>

GSTIN:
${invoice.company?.gstNumber || "27ABCDE1234F1Z5"}

</div>

</div>

<div class="right-top">

Invoice:
${invoice.invoiceNo}

<br>

Date:
${invoice.date}

<br>

Due:
${invoice.dueDate || "-"}

<div class="logo">
ZENTRIS
<div class="logo-sub">
BILLING ENGINE
</div>
</div>

</div>

</div>

</div>

<table>

<tr>

<td width="35%">
<span class="bold">
PAN :
</span>

${invoice.company?.panNumber || "ABCDE1234F"}
</td>

<td width="40%" class="invoice-title">
${invoice.type || "TAX INVOICE"}
</td>

<td width="25%" class="right bold">
ORIGINAL FOR RECIPIENT
</td>

</tr>

</table>


<table>

<tr>

<td width="40%" class="center bold">
Customer Detail
</td>

<td colspan="2"></td>

</tr>

<tr>

<td>

<b>M/S:</b>
${invoice.customer?.name}

<br><br>

<b>Company:</b>
${invoice.customer?.company || "-"}

<br><br>

<b>Address:</b>
${invoice.customer?.address}

<br><br>

<b>Phone:</b>
${invoice.customer?.phone || "-"}

<br><br>

<b>GSTIN:</b>
${invoice.customer?.gst || "-"}

</td>

<td width="30%">

<b>Payment Mode:</b>
${invoice.paymentMode || "UPI"}

<br><br>

<b>Transport:</b>
${invoice.transport || "Blue Dart"}

<br><br>

<b>E-Way Bill:</b>
${invoice.eway || "78456378"}

</td>

<td width="30%">

<b>Status:</b>
${invoice.payment?.status || "Pending"}

<br><br>

<b>Place of Supply:</b>
${invoice.place || "Maharashtra"}

</td>

</tr>

</table>


<table class="product-table">

<tr>

<th width="5%">
Sr
</th>

<th width="40%">
Description
</th>

<th width="13%">
HSN
</th>

<th width="13%">
Qty
</th>

<th width="14%">
Rate
</th>

<th width="15%">
Amount
</th>

</tr>

${items}

<tr class="total-row">

<td colspan="2" class="right">
TOTAL
</td>

<td></td>

<td class="center">
${invoice.items.length}
</td>

<td></td>

<td class="right">

${Billing.formatCurrency(summary.total, currency)}

</td>

</tr>

</table>


<div class="amount-words">

<b>Total in words:</b>

${invoice.amountWords || "Amount payable as per invoice"}

</div>


<table class="tax-table">

<tr>

<th>
Taxable
</th>

<th>
Tax %
</th>

<th>
Tax Amount
</th>

<th>
Discount
</th>

<th>
Grand Total
</th>

</tr>

<tr>

<td class="right">
${summary.subtotal.toFixed(2)}
</td>

<td class="center">
${invoice.tax}%
</td>

<td class="right">
${summary.taxAmount.toFixed(2)}
</td>

<td class="right">
${summary.discountAmount.toFixed(2)}
</td>

<td class="right bold">
${summary.total.toFixed(2)}
</td>

</tr>

</table>


<table>

<tr>

<td width="60%">

<div class="bank-details">

<b>Bank:</b>
ICICI BANK

<br>

<b>Account:</b>
2715500356

<br>

<b>IFSC:</b>
ICIC000045

<br>

<b>UPI:</b>
zentris@icici

</div>

</td>

<td width="40%" class="center">

<div class="qr">
QR CODE
</div>

<div style="margin-top:8px;">
Pay using UPI
</div>

</td>

</tr>

</table>


<div class="terms">

<b>Terms & Conditions</b>

<br><br>

Payment due within 15 days.

<br>

Goods once sold will not be taken back.

<br>

Subject to Mumbai jurisdiction.

</div>


<div class="company-sign">

For
${invoice.company?.name || "Zentris Pvt Ltd"}

<br><br>

${invoice.signature || "Authorised Signatory"}

</div>

</div>

<div class="footer">

Generated using Zentris Billing

</div>

</body>

</html>

`;
}
