import {
 calculateGST,
 calculateTax
} from './tax';

import {
 calculateDiscount
} from './discount';

import {
 formatCurrency
} from './currency';

import {
 createInvoice
} from './invoice';


export class Billing{

 static calculateGST=calculateGST;

 static calculateTax=calculateTax;

 static calculateDiscount=calculateDiscount;

 static formatCurrency=formatCurrency;

 static createInvoice=createInvoice;

}