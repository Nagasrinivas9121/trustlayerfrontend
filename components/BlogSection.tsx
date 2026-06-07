"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogSection() {
  // Take the first 3 blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-background border-t border-border relative" id="blog-section">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <span>Security Library</span>
            </div>
            <h2 className="heading-2 mb-6 font-sans">
              Expert Insights & <span className="text-primary">Penetration Playbooks</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Remediation guides, API vulnerability write-ups, and GRC compliance playbooks from our security desk.
            </p>
          </div>
          
          <Link 
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold uppercase tracking-wider text-textPrimary hover:text-primary transition-colors group"
          >
            View All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div 
              key={post.slug}
              className="premium-card p-6 bg-surface border border-border/80 hover:border-zinc-400 rounded-xl flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5 text-xs font-sans font-bold uppercase tracking-wider text-textSecondary">
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded">
                    {post.category || "Security Guide"}
                  </span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>

                <h3 className="text-base font-bold text-textPrimary mb-3 tracking-tight font-sans hover:text-primary transition-colors leading-snug line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-textSecondary leading-relaxed mb-6 line-clamp-3 font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-border/60 pt-4 font-sans text-sm font-semibold uppercase tracking-wider">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-textPrimary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Read Analysis <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
