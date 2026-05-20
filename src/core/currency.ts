export type CurrencyType=

'INR'
|'USD'
|'EUR'
|'GBP';


const locales={

 INR:'en-IN',

 USD:'en-US',

 EUR:'de-DE',

 GBP:'en-GB'

};


export function formatCurrency(

 amount:number,

 currency:CurrencyType='INR'

){

 return new Intl.NumberFormat(

 locales[currency],

 {

 style:'currency',

 currency

 }

 ).format(amount);

}