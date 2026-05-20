import { Invoice } from "../models/invoice";
import { InvoiceItem } from "../models/invoice-item";

import { calculateTax } from "./tax";
import { calculateDiscount } from "./discount";

import {
 InvoiceError,
 ValidationError
} from "./errors";

import {
 isValidEmail
} from "../utils/validators";

let invoiceCounter=1;


function generateInvoiceId():string{

 const date=new Date();

 const yyyy=date.getFullYear();

 const mm=String(
 date.getMonth()+1
 ).padStart(2,'0');

 const dd=String(
 date.getDate()
 ).padStart(2,'0');

 const count=String(
 invoiceCounter++
 ).padStart(6,'0');

 return `INV-${yyyy}${mm}${dd}-${count}`;

}


function validateItems(
 items:InvoiceItem[]
){

 for(const item of items){

   if(item.quantity<=0){

      throw new ValidationError(
       `Invalid quantity for ${item.name}`
      );

   }

   if(item.price<0){

      throw new ValidationError(
      `Invalid price for ${item.name}`
      );

   }

 }

}


export function createInvoice(
 invoice:Invoice
){

 if(
 !invoice.customer.name
 ){

 throw new ValidationError(
 'Customer name required'
 );

 }


 if(
 !isValidEmail(
 invoice.customer.email
 )
 ){

 throw new ValidationError(
 'Invalid email'
 );

 }


 if(
 !invoice.items ||
 invoice.items.length===0
 ){

 throw new InvoiceError(
 'Invoice cannot be empty'
 );

 }

 validateItems(
 invoice.items
 );

 const subtotal=invoice.items.reduce(

 (
 sum:number,
 item:InvoiceItem
 )=>{

 return sum+

 item.price*
 item.quantity;

 },0

 );


 const taxAmount=

 calculateTax(
 subtotal,
 invoice.tax
 );


 const discountAmount=

 calculateDiscount(
 subtotal,
 invoice.discount
 );


 const total=

 subtotal+
 taxAmount-
 discountAmount;


 return{

 ...invoice,

 invoiceId:
 generateInvoiceId(),

 subtotal,

 taxAmount,

 discountAmount,

 total:
 Number(
 total.toFixed(2)
 ),

 generatedDate:
 new Date().toISOString()

 };

}