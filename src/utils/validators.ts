export function isValidEmail(email:string):boolean{

 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

export function isValidPhone(phone:string):boolean{

 return /^[0-9]{10}$/.test(phone);

}

export function isValidGST(gst:string):boolean{

 return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i
 .test(gst);

}