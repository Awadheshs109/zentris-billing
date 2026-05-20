import { BillingError } from "./errors";

export function calculateGST(
  amount:number,
  percent:number
):number{

 if(amount<0 || percent<0){

   throw new BillingError(
      'Amount and GST percentage cannot be negative'
   );

 }

 return Number(
   ((amount*percent)/100).toFixed(2)
 );

}


export function calculateTax(
 amount:number,
 taxRate:number
):number{

 if(amount<0 || taxRate<0){

   throw new BillingError(
      'Amount and tax cannot be negative'
   );

 }

 return Number(
   ((amount*taxRate)/100).toFixed(2)
 );

}