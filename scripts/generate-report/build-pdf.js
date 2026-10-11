const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const styles = require('./styles');
const getPages1to15 = require('./pages-1-to-15');
const getPages16to28 = require('./pages-16-to-28');
const getPages29to37 = require('./pages-29-to-37');
const getPages38to46 = require('./pages-38-to-46');

async function buildPdf() {
  console.log('=== TrustLayerLabs 46-Page Sample VAPT Report Generator ===');

  const p1 = getPages1to15();
  const p2 = getPages16to28();
  const p3 = getPages29to37();
  const p4 = getPages38to46();

  const allPages = [...p1, ...p2, ...p3, ...p4];
  console.log(`Total pages assembled: ${allPages.length}`);

  if (allPages.length !== 46) {
    throw new Error(`Expected exactly 46 pages, but found ${allPages.length}!`);
  }

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>API, SaaS & AI Security Assessment — Illustrative Sample Report | TrustLayerLabs</title>
  <style>
    ${styles}
  </style>
</head>
<body>
  ${allPages.join('\n')}
</body>
</html>`;

  const htmlPath = path.join(__dirname, 'full-report.html');
  const tempPdfPath = path.join(__dirname, 'temp-output.pdf');
  const finalPdfPath = path.resolve('public/trustlayerlabs-sample-vapt-report.pdf');

  console.log(`Writing HTML to: ${htmlPath}`);
  fs.writeFileSync(htmlPath, fullHtml, 'utf8');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  if (!fs.existsSync(chromePath)) {
    throw new Error(`Chrome not found at: ${chromePath}`);
  }

  console.log('Running Chrome Headless PDF generation...');
  const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${tempPdfPath}" "${htmlPath}"`;
  execSync(cmd, { stdio: 'inherit' });

  if (!fs.existsSync(tempPdfPath)) {
    throw new Error('Chrome failed to generate temporary PDF file!');
  }

  console.log(`Raw PDF generated. Size: ${fs.statSync(tempPdfPath).size} bytes`);

  // Load with pdf-lib to verify and inject metadata
  const pdfBytes = fs.readFileSync(tempPdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const actualPageCount = pdfDoc.getPageCount();
  console.log(`\n========================================`);
  console.log(`PROGRAMMATIC PDF VERIFICATION:`);
  console.log(`Actual PDF Page Count: ${actualPageCount}`);
  console.log(`Target Page Count:     46`);
  console.log(`========================================\n`);

  if (actualPageCount !== 46) {
    throw new Error(`Actual PDF page count (${actualPageCount}) does not match expected 46!`);
  }

  // Set document metadata
  pdfDoc.setTitle('API, SaaS & AI Application Security Assessment — Illustrative Sample Report');
  pdfDoc.setAuthor('TrustLayerLabs (Lead Security Architect: Nagasrinivasa Rao)');
  pdfDoc.setSubject('Illustrative Vulnerability Assessment and Penetration Testing (VAPT) Deliverable');
  pdfDoc.setKeywords([
    'TrustLayerLabs',
    'VAPT',
    'API Security',
    'BOLA',
    'IDOR',
    'Multi-Tenant Isolation',
    'AI Security',
    'RAG Security',
    'Penetration Testing Sample Report',
    'SOC 2 Penetration Testing',
    'ISO 27001 Readiness'
  ]);
  pdfDoc.setProducer('TrustLayerLabs Security Advisory Engine');
  pdfDoc.setCreator('TrustLayerLabs Practitioner Platform');
  pdfDoc.setCreationDate(new Date('2026-06-12T00:00:00Z'));
  pdfDoc.setModificationDate(new Date('2026-06-28T00:00:00Z'));

  const finalPdfBytes = await pdfDoc.save();
  fs.writeFileSync(finalPdfPath, finalPdfBytes);

  console.log(`Final verified PDF written to: ${finalPdfPath}`);
  console.log(`Final PDF file size: ${fs.statSync(finalPdfPath).size} bytes`);

  // Cleanup temp files
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  if (fs.existsSync(tempPdfPath)) fs.unlinkSync(tempPdfPath);

  // Final verification check
  const recheckBytes = fs.readFileSync(finalPdfPath);
  const recheckDoc = await PDFDocument.load(recheckBytes);
  console.log(`Final Recheck Page Count: ${recheckDoc.getPageCount()} pages`);
  console.log('SUCCESS! Report generation complete and verified.');
}

buildPdf().catch((err) => {
  console.error('Fatal Error during build:', err);
  process.exit(1);
});
