import { blogPosts } from "@/lib/blogData";
import { SERVICES } from "@/lib/constants";

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";
  const now = new Date();

  // Core static pages (excluding individual service pages)
  const coreStaticPages = [
    { url: "",                         priority: 1.0, frequency: "daily"   }, // Homepage
    { url: "/services",                priority: 0.95, frequency: "weekly"  },
    { url: "/tools/jwt-decoder",        priority: 0.9, frequency: "daily"   }, // JWT Decoder Tool
    { url: "/free-assessment",         priority: 0.95, frequency: "weekly" },
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

  const coreUrls = coreStaticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  // Dynamic Service pages from constants.ts
  const serviceUrls = SERVICES.map((service) => {
    const priority = service.severity === "critical" ? 0.9 : 0.85;
    return {
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: priority,
    };
  });

  // Blog pages
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...coreUrls, ...serviceUrls, ...blogUrls];
}
