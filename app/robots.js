export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
  };
}
