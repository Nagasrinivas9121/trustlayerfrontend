import { blogPosts } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";
  const now = new Date();

  // Core pages with priorities
  const corePages = [
    { url: "",                         priority: 1.0, frequency: "daily"   }, // Homepage
    { url: "/services",                priority: 0.95, frequency: "weekly"  },
    { url: "/services/web-app-vapt",   priority: 0.9, frequency: "weekly"  },
    { url: "/services/api-security",   priority: 0.9, frequency: "weekly"  },
    { url: "/services/mobile-vapt",    priority: 0.9, frequency: "weekly"  },
    { url: "/services/cloud-security", priority: 0.9, frequency: "weekly"  },
    { url: "/services/network-pentesting", priority: 0.85, frequency: "weekly" },
    { url: "/services/kubernetes-security", priority: 0.85, frequency: "weekly" },
    { url: "/services/ai-security",    priority: 0.9, frequency: "weekly"  },
    { url: "/services/startup-security", priority: 0.9, frequency: "weekly"  },
    // Trust & Lead Magnets
    { url: "/methodology",             priority: 0.85, frequency: "monthly" },
    { url: "/sample-report",           priority: 0.9, frequency: "weekly"  },
    { url: "/api-security-checklist",  priority: 0.85, frequency: "weekly"  },
    { url: "/checklist",               priority: 0.8, frequency: "monthly" },
    { url: "/case-studies",            priority: 0.85, frequency: "weekly"  },
    { url: "/about",                   priority: 0.8, frequency: "monthly" },
    { url: "/blog",                    priority: 0.8, frequency: "daily"   },
    { url: "/contact",                 priority: 0.75, frequency: "monthly" },
    // Local SEO landing pages
    { url: "/vapt-bangalore",          priority: 0.9, frequency: "weekly"  },
    { url: "/vapt-hyderabad",          priority: 0.9, frequency: "weekly"  },
    // Trust & Legal
    { url: "/nda-process",             priority: 0.6, frequency: "monthly" },
    { url: "/responsible-disclosure",  priority: 0.6, frequency: "monthly" },
    { url: "/privacy",                 priority: 0.3, frequency: "yearly"  },
    { url: "/terms",                   priority: 0.3, frequency: "yearly"  },
  ];

  const coreUrls = corePages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  // Blog pages
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...coreUrls, ...blogUrls];
}
