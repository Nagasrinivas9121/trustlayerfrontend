import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, Shield, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <BookOpen size={14} className="text-neutral-900" />
            <span>Offensive Research & Analysis Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Security <span className="text-neutral-900">Engineering Insights</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Expert penetration testing playbooks, API security tutorials, compliance briefs, and vulnerability guides from our research desk.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.slug} 
              className="p-8 bg-white border border-neutral-200/80 rounded-3xl flex flex-col justify-between group hover:border-neutral-300 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-neutral-500">
                  <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 rounded-full font-semibold text-[11px]">
                    {post.category || "Security Guide"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime || "5 Min Read"}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-neutral-950 mb-3 tracking-tight group-hover:text-black transition-colors leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-dashed border-neutral-200 pt-5">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-xs font-semibold text-neutral-950 gap-2 group/btn"
                >
                  <span>Read Full Analysis</span> 
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 bg-white rounded-3xl border border-dashed border-neutral-300 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-semibold">
            <Shield size={14} className="text-neutral-900" />
            <span>Next Step for Engineering Teams</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Ready to Scope Your Security Assessment?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Speak directly with our offensive security practitioners under mutual NDA. We will review your architecture, attack surface, and compliance goals in 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Free Scoping Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
