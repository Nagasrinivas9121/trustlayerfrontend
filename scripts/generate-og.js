const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Read the approved footer logo (dark theme banner with "TrustLayerLabs THE VERIFIED TRUST LAYER")
  // Resize cleanly
  const logoBuf = await sharp(path.resolve('public/trustlayerlabs-vapt-footer-logo.png'))
    .resize({ width: 500, fit: 'contain' })
    .toBuffer();

  const logoMeta = await sharp(logoBuf).metadata();

  const cardWidth = 540;
  const cardHeight = logoMeta.height + 24;
  const cardX = Math.round((width - cardWidth) / 2);
  const cardY = 140;

  const logoX = Math.round((width - logoMeta.width) / 2);
  const logoY = cardY + Math.round((cardHeight - logoMeta.height) / 2);

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background gradient -->
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080C14" />
        <stop offset="50%" stop-color="#0B1120" />
        <stop offset="100%" stop-color="#05080E" />
      </linearGradient>

      <!-- Radial blue glow behind logo -->
      <radialGradient id="centerGlow" cx="50%" cy="30%" r="45%">
        <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.35" />
        <stop offset="60%" stop-color="#1E40AF" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#0B1120" stop-opacity="0" />
      </radialGradient>

      <!-- Grid pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" stroke-width="0.6" stroke-opacity="0.35" />
      </pattern>

      <!-- Badge gradient -->
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#2563EB" stop-opacity="0.10" />
      </linearGradient>

      <!-- Card container gradient -->
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B0F19" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#070A10" stop-opacity="0.98" />
      </linearGradient>
    </defs>

    <!-- Base Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />
    <rect width="${width}" height="${height}" fill="url(#centerGlow)" />

    <!-- Outer frame line -->
    <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#1E293B" stroke-width="1.2" stroke-opacity="0.7" />
    <rect x="28" y="28" width="1144" height="574" rx="12" fill="none" stroke="#2563EB" stroke-width="1" stroke-opacity="0.15" />

    <!-- Top Badge -->
    <g transform="translate(425, 65)">
      <rect width="350" height="34" rx="17" fill="url(#badgeGrad)" stroke="#2563EB" stroke-width="1" stroke-opacity="0.5" />
      <circle cx="20" cy="17" r="4.5" fill="#38BDF8" />
      <text x="34" y="22" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#60A5FA" letter-spacing="2">OFFENSIVE SECURITY &amp; VAPT</text>
    </g>

    <!-- Logo Card Container -->
    <rect x="${cardX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="16" fill="url(#cardGrad)" stroke="#1E293B" stroke-width="1.2" />
    <rect x="${cardX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="16" fill="none" stroke="#2563EB" stroke-width="1" stroke-opacity="0.25" />

    <!-- Subtitle / Value proposition -->
    <text x="600" y="365" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.5">
      Manual API, SaaS &amp; AI Security Testing
    </text>

    <text x="600" y="410" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94A3B8" text-anchor="middle" letter-spacing="0.2">
      Specialized in BOLA / IDOR, Multi-Tenant Isolation &amp; Business Logic Flaws
    </text>

    <!-- Bottom Feature Pills -->
    <g transform="translate(160, 465)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="270" height="42" rx="8" fill="#0B0F19" stroke="#1E293B" stroke-width="1" />
      <text x="135" y="26" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#E2E8F0" text-anchor="middle">
        OWASP API Top 10 Testing
      </text>

      <!-- Pill 2 -->
      <rect x="305" y="0" width="270" height="42" rx="8" fill="#0B0F19" stroke="#1E293B" stroke-width="1" />
      <text x="440" y="26" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#E2E8F0" text-anchor="middle">
        SOC 2 &amp; ISO 27001 Readiness
      </text>

      <!-- Pill 3 -->
      <rect x="610" y="0" width="270" height="42" rx="8" fill="#0B0F19" stroke="#1E293B" stroke-width="1" />
      <text x="745" y="26" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#E2E8F0" text-anchor="middle">
        100% Mutual NDA First
      </text>
    </g>

    <!-- Footer URL -->
    <text x="600" y="555" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#38BDF8" text-anchor="middle" letter-spacing="1">
      www.trustlayerlabs.co.in
    </text>
  </svg>
  `;

  const finalJpg = await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: logoBuf,
        top: logoY,
        left: logoX,
      }
    ])
    .jpeg({ quality: 95, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(path.resolve('public/og-image.jpg'), finalJpg);
  console.log('Successfully wrote 1200x630 public/og-image.jpg');

  // Also write real JPEG version of symbol for public/logo.jpeg
  const symbolJpg = await sharp(path.resolve('public/symbol.png'))
    .flatten({ background: '#FFFFFF' })
    .jpeg({ quality: 95, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(path.resolve('public/logo.jpeg'), symbolJpg);
  console.log('Successfully updated public/logo.jpeg as real JPEG with white background');
}

createOgImage().catch(console.error);
