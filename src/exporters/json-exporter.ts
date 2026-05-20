// exporters/json-exporter.ts

export class JsonExporter{

 static generate(invoice:any){

   return JSON.stringify(
       invoice,
       null,
       2
   );

 }

}