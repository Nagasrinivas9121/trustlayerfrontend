import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Script from "next/script";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).replace(/\s+/g, '-').toLowerCase();
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug || p.slug === decodedSlug);
  if (!post) return { title: "Post Not Found | TrustLayerLabs Blog" };

  const url = `https://www.trustlayerlabs.co.in/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author || "TrustLayerLabs Security Team" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "TrustLayerLabs Security Team"],
      tags: ["cybersecurity", "VAPT", "API security", "penetration testing", "India"],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).replace(/\s+/g, '-').toLowerCase();
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug || p.slug === decodedSlug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://www.trustlayerlabs.co.in/blog/${post.slug}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "inLanguage": "en-IN",
    "author": {
      "@type": "Person",
      "name": post.author || "TrustLayerLabs Security Team",
      "url": "https://www.trustlayerlabs.co.in/about",
      "jobTitle": "Security Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "TrustLayerLabs",
        "url": "https://www.trustlayerlabs.co.in"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "TrustLayerLabs",
      "url": "https://www.trustlayerlabs.co.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trustlayerlabs.co.in/logo.jpeg",
        "width": 200,
        "height": 200
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trustlayerlabs.co.in/blog/${post.slug}`
    },
    "isPartOf": {
      "@type": "Blog",
      "name": "TrustLayerLabs Security Blog",
      "url": "https://www.trustlayerlabs.co.in/blog"
    }
  };

  return (
    <div className="pt-36 pb-24 bg-background min-h-screen text-textPrimary">
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <div className="max-w-[800px] mx-auto px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to Blog
        </Link>

        <div className="flex items-center space-x-6 text-[10px] font-sans font-semibold text-textSecondary mb-6 uppercase tracking-wider border-b border-border/20 pb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
          <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-md">
            {post.category || "Security Analysis"}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-textPrimary mb-10 leading-tight font-sans tracking-tight">
          {post.title}
        </h1>

        {/* Markdown Content styling for light mode */}
        <div className="prose prose-zinc max-w-none text-sm md:text-base text-textSecondary leading-relaxed space-y-6 font-sans
          prose-headings:font-bold prose-headings:text-textPrimary prose-headings:font-sans prose-headings:tracking-tight
          prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
          prose-strong:text-textPrimary prose-code:text-primary prose-code:bg-zinc-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-border
          prose-pre:bg-zinc-50 prose-pre:border prose-pre:border-border prose-pre:p-4 prose-pre:rounded-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 md:p-12 bg-surface rounded-2xl border border-border text-center space-y-6 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
          <h3 className="text-lg font-bold text-textPrimary tracking-tight font-sans">Secure Your SaaS Assets Today</h3>
          <p className="text-xs text-textSecondary mb-8 max-w-lg mx-auto leading-relaxed">
            Ready to perform a deep-dive manual logical security audit? Schedule a scoping review with our lead architects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-semibold tracking-wider rounded-full shadow-lg w-full sm:w-auto text-center transition-all active:scale-[0.98]"
            >
              Book Scoping Call
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-textPrimary hover:bg-zinc-50 text-xs uppercase font-sans font-semibold tracking-wider rounded-full w-full sm:w-auto text-center shadow-sm transition-all"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

