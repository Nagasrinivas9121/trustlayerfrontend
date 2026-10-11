module.exports = `
@page {
  size: 210mm 297mm;
  margin: 0;
}
* {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
html, body {
  margin: 0;
  padding: 0;
  background-color: #f1f5f9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}
.page {
  width: 210mm;
  height: 297mm;
  max-height: 297mm;
  page-break-after: always;
  page-break-inside: avoid;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  padding: 13mm 15mm 12mm 15mm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 8pt;
  line-height: 1.4;
  box-sizing: border-box;
}

/* Page Header */
.page-header {
  height: 11mm;
  min-height: 11mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2mm;
  margin-bottom: 3mm;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-logo {
  height: 20px;
  width: auto;
  object-fit: contain;
}
.header-doc-id {
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 7pt;
  font-weight: 700;
  color: #1e40af;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 1px 6px;
  border-radius: 3px;
  letter-spacing: 0.5px;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-section-title {
  font-size: 7.5pt;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.header-tag {
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 6.5pt;
  font-weight: 700;
  color: #b45309;
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 1px 6px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Page Footer */
.page-footer {
  height: 8mm;
  min-height: 8mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e2e8f0;
  padding-top: 2mm;
  font-size: 6.8pt;
  color: #64748b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.footer-left {
  display: flex;
  align-items: center;
  gap: 6px;
}
.footer-center {
  font-family: "JetBrains Mono", Consolas, monospace;
  color: #475569;
}
.footer-right {
  font-family: "JetBrains Mono", Consolas, monospace;
  font-weight: 700;
  color: #0f172a;
}

/* Page Content Body */
.page-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 2.5mm;
}

/* Headings */
.section-badge {
  display: inline-block;
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 6.8pt;
  font-weight: 700;
  color: #1d4ed8;
  background: #eff6ff;
  border: 1px solid #dbeafe;
  padding: 1.5px 7px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 1.5mm;
}
.section-heading {
  font-size: 13.5pt;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 1.5mm 0;
  line-height: 1.2;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section-subheading {
  font-size: 8pt;
  color: #475569;
  margin: 0 0 2mm 0;
  line-height: 1.4;
}

/* Severity Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 6.8pt;
  font-weight: 700;
  padding: 1.5px 6px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.badge-critical {
  color: #991b1b;
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.badge-high {
  color: #c2410c;
  background: #fff7ed;
  border: 1px solid #fed7aa;
}
.badge-medium {
  color: #b45309;
  background: #fffbeb;
  border: 1px solid #fde68a;
}
.badge-low {
  color: #1d4ed8;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
}
.badge-info {
  color: #475569;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}
.badge-verified {
  color: #15803d;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

/* Tables */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 7.2pt;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}
.data-table th {
  background: #f8fafc;
  color: #334155;
  font-weight: 700;
  text-align: left;
  padding: 4px 7px;
  border-bottom: 1px solid #cbd5e1;
  border-right: 1px solid #e2e8f0;
  font-size: 7pt;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.data-table th:last-child {
  border-right: none;
}
.data-table td {
  padding: 3.5px 7px;
  border-bottom: 1px solid #f1f5f9;
  border-right: 1px solid #f1f5f9;
  color: #334155;
  vertical-align: top;
}
.data-table td:last-child {
  border-right: none;
}
.data-table tr:nth-child(even) td {
  background: #fafafa;
}
.data-table tr:last-child td {
  border-bottom: none;
}

/* Code Boxes */
.code-box {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 4px;
  padding: 5px 8px;
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 6.6pt;
  line-height: 1.35;
  color: #e2e8f0;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-all;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111827;
  border: 1px solid #1e293b;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  padding: 3px 8px;
  font-family: "JetBrains Mono", Consolas, monospace;
  font-size: 6.5pt;
  font-weight: 700;
  color: #93c5fd;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.code-header + .code-box {
  border-radius: 0 0 4px 4px;
}
.code-keyword { color: #f43f5e; font-weight: 700; }
.code-string { color: #34d399; }
.code-param { color: #fbbf24; }
.code-comment { color: #64748b; font-style: italic; }
.code-fn { color: #60a5fa; }
.code-num { color: #c084fc; }

/* Callout Cards */
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 6px 9px;
  font-size: 7.8pt;
}
.card-soft {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 6px 9px;
}
.card-blue {
  background: #f8fafc;
  border: 1px solid #dbeafe;
  border-left: 3.5px solid #2563eb;
  border-radius: 4px;
  padding: 6px 9px;
}
.card-amber {
  background: #fffbeb;
  border: 1px solid #fef08a;
  border-left: 3.5px solid #d97706;
  border-radius: 4px;
  padding: 6px 9px;
}
.card-red {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-left: 3.5px solid #dc2626;
  border-radius: 4px;
  padding: 6px 9px;
}
.card-green {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-left: 3.5px solid #16a34a;
  border-radius: 4px;
  padding: 6px 9px;
}

/* Grid Layouts */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 7px;
}
.grid-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 6px;
}
.grid-1-2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 7px;
}
.grid-2-1 {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 7px;
}

/* Typography Helpers */
.text-xs { font-size: 7pt; }
.text-sm { font-size: 7.6pt; }
.text-base { font-size: 8pt; }
.font-mono { font-family: "JetBrains Mono", Consolas, monospace; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.text-slate-500 { color: #64748b; }
.text-slate-600 { color: #475569; }
.text-slate-700 { color: #334155; }
.text-slate-900 { color: #0f172a; }
.text-blue-700 { color: #1d4ed8; }
.text-red-700 { color: #b91c1c; }
.text-amber-700 { color: #b45309; }
.text-green-700 { color: #15803d; }
.leading-tight { line-height: 1.25; }
.leading-normal { line-height: 1.4; }

/* SVG Diagrams */
.diagram-wrap {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
