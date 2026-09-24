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

        {/* Bottom CTA */}
        <div className="mt-20 p-8 md:p-12 bg-surface rounded-2xl border border-primary/30 text-center space-y-6 relative overflow-hidden shadow-sm">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
            <span>Next Step for Engineering Teams</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight font-sans">
            Ready to Scope Your Security Assessment?
          </h3>
          <p className="text-xs sm:text-sm text-textSecondary max-w-xl mx-auto leading-relaxed font-sans">
            Speak directly with our offensive security practitioners under mutual NDA. We will review your architecture, attack surface, and compliance goals in 20 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendly.com/nagasrinivasaraoeevuri/30min"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl shadow-md w-full sm:w-auto text-center transition-all active:scale-[0.98]"
            >
              Book a 20-Min Security Review
            </Link>
            <Link
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-textPrimary hover:text-primary text-xs uppercase font-sans font-semibold tracking-wider rounded-xl w-full sm:w-auto text-center shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
