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
 InvoiceCalculator
} from './invoice';


export class Billing{

 static calculateGST=calculateGST;

 static calculateTax=calculateTax;

 static calculateDiscount=calculateDiscount;

 static formatCurrency=formatCurrency;

 static InvoiceCalculator=InvoiceCalculator;
 static getVersion(): string {
   return "2.0.1";
}

}