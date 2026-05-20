import {Customer} from './customer';
import {InvoiceItem} from './invoice-item';

export interface Invoice {

 customer:Customer;

 items:InvoiceItem[];

 tax:number;

 discount:number;

 invoiceId?:string;

 subtotal?:number;

 taxAmount?:number;

 discountAmount?:number;

 total?:number;

 generatedDate?:string;

}