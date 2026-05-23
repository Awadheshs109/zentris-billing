export class PdfExporter{

  static async generate(
    html:string
  ):Promise<Buffer>{

    return Buffer.from(
      html,
      "utf-8"
    );

  }

}