const fs = require('fs');
const path = require('path');

const logoBannerBase64 = fs.readFileSync(path.resolve('public/trustlayerlabs-api-security-logo.png')).toString('base64');
const logoIconBase64 = fs.readFileSync(path.resolve('public/logo-icon.png')).toString('base64');
const logoFooterBase64 = fs.readFileSync(path.resolve('public/trustlayerlabs-vapt-footer-logo.png')).toString('base64');

const TOTAL_PAGES = 46;

function pageHeader(pageNum, sectionTitle) {
  return `
    <div class="page-header">
      <div class="header-left">
        <img class="header-logo" src="data:image/png;base64,${logoBannerBase64}" alt="TrustLayerLabs" />
        <span class="header-doc-id">TTL-SAMPLE-VAPT-2026</span>
      </div>
      <div class="header-right">
        <span class="header-section-title">${sectionTitle}</span>
        <span class="header-tag">TLP:AMBER / SAMPLE</span>
      </div>
    </div>
  `;
}

function pageFooter(pageNum) {
  return `
    <div class="page-footer">
      <div class="footer-left">
        <span>TrustLayerLabs • API, SaaS & AI Security Assessment • Illustrative Sample Deliverable</span>
      </div>
      <div class="footer-center">
        <span>Doc Ref: TTL-VAPT-2026-SAMPLE • www.trustlayerlabs.co.in</span>
      </div>
      <div class="footer-right">
        <span>Page ${pageNum} of ${TOTAL_PAGES}</span>
      </div>
    </div>
  `;
}

function severityBadge(severity, score) {
  const s = severity.toLowerCase();
  let cls = 'badge-info';
  if (s === 'critical') cls = 'badge-critical';
  else if (s === 'high') cls = 'badge-high';
  else if (s === 'medium') cls = 'badge-medium';
  else if (s === 'low') cls = 'badge-low';
  else if (s === 'verified' || s === 'patched') cls = 'badge-verified';

  return `<span class="badge ${cls}">${severity.toUpperCase()} ${score ? `(CVSS ${score})` : ''}</span>`;
}

module.exports = {
  logoBannerBase64,
  logoIconBase64,
  logoFooterBase64,
  TOTAL_PAGES,
  pageHeader,
  pageFooter,
  severityBadge
};
