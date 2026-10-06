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
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: aiBots,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
  };
}
