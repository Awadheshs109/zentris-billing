import { BillingError } from "./errors";

export function calculateDiscount(
 amount:number,
 percent:number
):number{

 if(amount<0 || percent<0){

   throw new BillingError(
      'Invalid discount values'
   );

 }

 return Number(
   ((amount*percent)/100).toFixed(2)
 );

}