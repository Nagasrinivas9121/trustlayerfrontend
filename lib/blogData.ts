export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bola-vulnerability-fintech-saas",
    title: "How We Found a BOLA Vulnerability in a scaling FinTech SaaS",
    excerpt: "A technical breakdown of how insecure object references could have exposed thousands of financial records.",
    date: "May 1, 2024",
    readTime: "5 Min Read",
    category: "API Security"
  },
  {
    slug: "securing-ai-startups-prompt-injection",
    title: "Securing AI Startups: Preventing Prompt Injection Attacks",
    excerpt: "Why traditional firewalls aren't enough to protect your LLM-based product from adversarial inputs.",
    date: "April 25, 2024",
    readTime: "7 Min Read",
    category: "AI Security"
  }
];
