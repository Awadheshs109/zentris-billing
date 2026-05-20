export function formatDate(
 date: Date = new Date(),
 locale='en-IN'
):string{

 return new Intl.DateTimeFormat(locale,{
   year:'numeric',
   month:'2-digit',
   day:'2-digit'
 }).format(date);

}

export function getCurrentTimestamp():number{

 return Date.now();

}