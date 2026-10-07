"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Star,
  MapPin
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-200/30 via-blue-200/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800 mb-6 hover:border-orange-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-orange-600 font-bold">PL CREATIONS</span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-3 h-3 text-blue-600" /> Bengaluru, India
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-heading">
            BUILD<span className="text-orange-600">.</span> SECURE<span className="text-blue-600">.</span> GROW<span className="text-orange-600">.</span>
            <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              High-Velocity Web Apps, Sales &amp; Security Systems
            </span>
          </h1>

          {/* Subtitle / Positioning */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
            We build ultra-fast web applications, automate outbound sales pipelines, run ROI-driven digital marketing, and install enterprise CCTV &amp; biometric systems across Bengaluru and India.
          </p>

          {/* Core Feature Checklist */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sub-Second Load Speed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct WhatsApp Lead Routing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Source Code &amp; System Ownership</span>
            </div>
          </div>

          {/* Primary CTA Button Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-orange-gradient px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2 shadow-orangeGlow"
            >
              <Sparkles className="w-5 h-5 text-orange-100" />
              <span>Claim Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={buildWhatsAppUrl("Hi PL Creations, I would like to discuss our business requirements and get an estimate.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue-outline px-7 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>WhatsApp Strategy Chat</span>
            </a>
          </div>

          {/* Direct Phone Dial Sub-Text */}
          <div className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-2">
            <span>Prefer a direct phone conversation?</span>
            <a 
              href={buildCallUrl()} 
              className="font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>+91 96061 35280</span>
            </a>
          </div>

          {/* Social Proof Star Rating */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800 font-mono">
              4.9/5 Rating
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-600">
              150+ Projects Shipped Across Bengaluru &amp; India
            </span>
          </div>
        </div>

        {/* Metric Stats Bar (No price or currency markers) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              150+
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Systems &amp; Apps Delivered
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-heading">
              4.8x
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Average Client Growth Lift
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-heading">
              99.4%
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Client Satisfaction
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              14 Days
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Average Project Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
