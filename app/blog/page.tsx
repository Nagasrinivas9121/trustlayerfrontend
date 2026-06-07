import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Shield } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pt-36 pb-20">
      <div className="section-container">
        
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider mb-6 shadow-sm">
            <Shield size={12} className="text-primary" />
            <span>Cybersecurity Library</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
            Security <span className="text-primary">Insights</span>
          </h1>
          <p className="body-text text-base">
            Expert penetration testing playbooks, API security tutorials, compliance briefs, and vulnerability guides from our research desk.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.slug} 
              className="premium-card p-8 flex flex-col justify-between group hover:border-zinc-400 bg-surface border border-border shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-[10px] font-sans font-semibold text-textSecondary uppercase tracking-wider">
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-md">
                    {post.category || "Security Guide"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime || "5 Min Read"}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-textPrimary mb-4 font-sans tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-xs text-textSecondary leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-border/40 pt-6">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-xs font-sans font-semibold text-textPrimary uppercase tracking-wider hover:text-primary gap-2 group/btn"
                >
                  Read Analysis 
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180 group-hover/btn:translate-x-1.5 transition-transform text-primary" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
