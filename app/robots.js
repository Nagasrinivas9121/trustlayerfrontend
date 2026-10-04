export default function robots() {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "CCBot",
    "anthropic-ai",
    "Anthropic-AI",
    "ClaudeBot",
    "Bytespider",
    "PerplexityBot",
    "Applebot-Extended",
    "Cohere-ai",
    "Diffbot",
    "Googlebot",
    "Bingbot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
    host: "https://www.trustlayerlabs.co.in",
  };
}
