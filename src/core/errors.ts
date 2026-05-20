export class BillingError extends Error {

 constructor(message:string){

   super(message);

   this.name='BillingError';

 }

}

export class ValidationError extends Error{

 constructor(message:string){

   super(message);

   this.name='ValidationError';

 }

}

export class InvoiceError extends Error{

 constructor(message:string){

   super(message);

   this.name='InvoiceError';

 }

}