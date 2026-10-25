export default function robots() {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "Google-Extended",
    "GoogleOther",
    "CCBot",
    "anthropic-ai",
    "Anthropic-AI",
    "ClaudeBot",
    "Claude-Web",
    "Bytespider",
    "PerplexityBot",
    "Perplexity-Bot",
    "Applebot",
    "Applebot-Extended",
    "Cohere-ai",
    "cohere-ai",
    "meta-externalagent",
    "Meta-ExternalAgent",
    "FacebookBot",
    "Amazonbot",
    "Diffbot",
    "DuckAssistBot",
    "YouBot",
    "Timpibot",
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
