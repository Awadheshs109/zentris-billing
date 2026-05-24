import puppeteer from "puppeteer";

export class PdfExporter {
  static async generate(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.setContent(html, { waitUntil: "networkidle0" });
    
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true
    });
    
    await browser.close();
    return Buffer.from(pdfBuffer);
  }
}