/**
 * Instant IndexNow submission script for TrustLayerLabs
 * Submits all canonical URLs from the sitemap directly to Bing, Yandex, Seznam, and Naver.
 */

const fs = require('fs');
const path = require('path');

const HOST = 'www.trustlayerlabs.co.in';
const KEY = '8b3f2e1a9c4d5e6f7a8b9c0d1e2f3a4b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  const sitemapPath = path.join(__dirname, '..', '.next', 'server', 'app', 'sitemap.xml.body');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: .next build output for sitemap.xml.body not found. Run "npm run build" first.');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);

  if (!matches || matches.length === 0) {
    console.error('Error: No URLs found in sitemap.');
    process.exit(1);
  }

  const urlList = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
  console.log(`Found ${urlList.length} canonical URLs in sitemap.`);
  console.log(`Submitting to IndexNow for host: ${HOST}...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow API Response Status: ${response.status} ${response.statusText}`);
    if (response.status === 200 || response.status === 202) {
      console.log('✅ Success! All URLs successfully submitted to IndexNow search engines (Bing, Yandex, etc.).');
    } else {
      const responseText = await response.text();
      console.log('Response body:', responseText);
    }
  } catch (err) {
    console.error('Failed to submit to IndexNow:', err.message);
  }
}

main();
