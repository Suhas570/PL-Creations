"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { buildWhatsAppUrl } from "@/lib/utils";
import { 
  Briefcase, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  MessageCircle,
  Building2,
  Mail
} from "lucide-react";

const openRoles = [
  {
    id: "full-stack-dev",
    title: "Full-Stack Web Application Developer",
    department: "Engineering",
    location: "Bengaluru (Hybrid / On-site)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    summary: "Build high-performance web applications, customer portals, and internal tools using Next.js 15, React 19, TypeScript, and Tailwind CSS.",
    responsibilities: [
      "Develop responsive, ultra-fast frontend user interfaces with Next.js App Router and React.",
      "Integrate PostgreSQL / Supabase databases, RESTful APIs, and webhook automation.",
      "Optimize web vital performance, sub-second page loads, and accessibility standards.",
    ],
    requirements: [
      "Proficiency in TypeScript, React, Next.js, and modern CSS/Tailwind.",
      "Familiarity with Git, database modeling, and cloud deployment on Vercel/AWS.",
      "Strong problem-solving attitude and attention to pixel-perfect design detail.",
    ],
  },
  {
    id: "digital-marketer",
    title: "Performance Marketing & Digital Ads Specialist",
    department: "Marketing",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "1 - 3 Years",
    summary: "Plan, launch, and optimize high-ROI paid advertising campaigns across Google Ads, Meta (Facebook/Instagram), and LinkedIn.",
    responsibilities: [
      "Manage Google Search, YouTube, Performance Max, and Meta ad campaign budgets.",
      "Conduct continuous A/B split testing of ad creatives, headlines, and audience segments.",
      "Configure server-side conversion tracking, CAPI, Google Tag Manager, and GA4 dashboards.",
    ],
    requirements: [
      "Demonstrated track record of scaling paid campaigns with strong ROAS.",
      "Deep understanding of keyword bidding, audience retargeting, and negative matching.",
      "Analytical mindset with hands-on knowledge of Google Analytics 4 and Tag Manager.",
    ],
  },
  {
    id: "b2b-sales-exec",
    title: "B2B Sales & Business Development Executive",
    department: "Sales",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "1 - 2 Years",
    summary: "Drive outbound business acquisition, identify high-intent prospect accounts, demo PL Creations solutions, and close client retainers.",
    responsibilities: [
      "Conduct targeted outreach to Indian SMBs, schools, healthcare clinics, and retail enterprises.",
      "Lead discovery calls, present tailored solution proposals, and follow up relentlessly.",
      "Maintain disciplined CRM pipelines, lead stages, and deal forecasting.",
    ],
    requirements: [
      "Excellent verbal and written communication in English and Kannada / Hindi.",
      "Previous experience in B2B technology, digital services, or SaaS sales.",
      "High energy, self-motivated, and target-driven mindset.",
    ],
  },
  {
    id: "security-engineer",
    title: "CCTV & Biometric Security Systems Engineer",
    department: "Operations & Hardware",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "1 - 3 Years",
    summary: "Execute on-site installation, configuration, and troubleshooting of HD/IP CCTV cameras, biometric access control terminals, and network cabling.",
    responsibilities: [
      "Install and align IP/HD CCTV cameras, NVR/DVR servers, and PoE network switches.",
      "Configure biometric fingerprint and facial recognition attendance terminals with door locks.",
      "Set up mobile live streaming apps, router port forwarding, and cloud backup systems.",
    ],
    requirements: [
      "Hands-on technical experience with major CCTV brands (Hikvision, CP Plus, Dahua) and biometric hardware (eSSL, ZKTeco).",
      "Valid driver's license and willingness to visit client sites across Bengaluru.",
      "Disciplined approach to clean cabling, customer training, and safety standards.",
    ],
  },
  {
    id: "brand-designer",
    title: "UI/UX & Brand Identity Designer",
    department: "Design",
    location: "Bengaluru / Remote",
    type: "Full-Time / Contract",
    experience: "1 - 2 Years",
    summary: "Craft distinctive corporate brand identities, logo suites, Figma web UI prototypes, pitch decks, and digital marketing graphics.",
    responsibilities: [
      "Design vector logos, color systems, typography guides, and brand collateral in Figma & Adobe Illustrator.",
      "Create high-converting landing page UI layouts and mobile-first design systems.",
      "Collaborate closely with frontend developers to ensure design fidelity.",
    ],
    requirements: [
      "Strong portfolio showcasing brand identity systems and clean web UI design.",
      "Expertise in Figma, Adobe Illustrator, and Photoshop.",
      "Sharp eye for typography, spatial balance, and modern design aesthetics.",
    ],
  },
  {
    id: "seo-specialist",
    title: "SEO & Growth Strategist",
    department: "Digital Growth",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "1 - 3 Years",
    summary: "Lead local and national search engine optimization strategies to rank clients #1 on Google Search and Google Maps Local 3-Packs.",
    responsibilities: [
      "Perform technical SEO audits, Core Web Vitals optimizations, and structured schema implementation.",
      "Optimize Google Business Profiles, citations, and localized keyword targeting.",
      "Track keyword rankings, organic search traffic, and conversion growth.",
    ],
    requirements: [
      "Hands-on experience with Ahrefs, Semrush, Google Search Console, and Screaming Frog.",
      "Proven history of improving Google Maps rankings for local businesses.",
      "Clear understanding of on-page SEO, content structuring, and internal linking.",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono uppercase tracking-wider mb-4 border border-emerald-200/60">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Fast-Track WhatsApp Applications</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading max-w-4xl mx-auto">
              Build Your Career at <span className="text-orange-600">PL Creations</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join a team of driven engineers, marketers, sales professionals, and security experts building next-generation technology for businesses across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100">
                <Zap className="w-4 h-4 text-orange-600" />
                <span>Fast-Track 24h Review</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>High-Ownership Culture</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Bengaluru Hub</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80" id="open-roles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Current Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Explore Available Positions
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Click to apply directly on WhatsApp with your resume or portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle hover:border-emerald-400 hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {role.department}
                      </span>
                      <span className="text-xs font-bold text-slate-500 font-mono">
                        {role.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                      {role.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-4 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-600" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        {role.type}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                      {role.summary}
                    </p>

                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">
                        Key Responsibilities:
                      </span>
                      {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={buildWhatsAppUrl(`Hi PL Creations HR Team, I would like to apply for the "${role.title}" position in Bengaluru. Here is my portfolio / resume link:`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp py-3 px-6 rounded-xl text-xs font-bold inline-flex items-center gap-2 flex-1 justify-center shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Apply via WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:connect@plcreation.in?subject=Job Application - ${encodeURIComponent(role.title)}`}
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-600" />
                      <span>Email CV</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct WhatsApp Hiring Hub Section */}
        <section className="py-16 md:py-20 bg-white" id="apply-fast">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-white shadow-card relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold font-mono uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                <span>Zero Forms &bull; Instant WhatsApp Hiring</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading max-w-2xl mx-auto leading-tight">
                Send Your Resume Directly to Our Recruiting Team
              </h2>

              <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto leading-relaxed">
                We believe in fast communication. Send your CV, GitHub, or portfolio link directly on WhatsApp to get scheduled for an interview within 24 hours.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={buildWhatsAppUrl("Hi PL Creations HR, I want to apply for a role at PL Creations. Here is my resume / portfolio:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-emerald-900 font-extrabold text-sm inline-flex items-center justify-center gap-2.5 shadow-xl hover:bg-emerald-50 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>WhatsApp Your CV (+91 96061 35280)</span>
                </a>

                <a
                  href="mailto:connect@plcreation.in?subject=Application for Employment at PL Creations"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm inline-flex items-center justify-center gap-2 border border-white/25 transition-all backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4 text-emerald-200" />
                  <span>connect@plcreation.in</span>
                </a>
              </div>

              {/* 3-Step Process */}
              <div className="mt-12 pt-8 border-t border-emerald-500/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-900 font-extrabold text-xs flex items-center justify-center mb-2">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Send CV on WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-100 mt-1">
                    Share your PDF resume or LinkedIn profile link.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-900 font-extrabold text-xs flex items-center justify-center mb-2">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    15-Min Screening
                  </h4>
                  <p className="text-xs text-emerald-100 mt-1">
                    Quick discussion with our HR on role fit and expectations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-900 font-extrabold text-xs flex items-center justify-center mb-2">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Technical &amp; Offer
                  </h4>
                  <p className="text-xs text-emerald-100 mt-1">
                    Direct technical round and prompt offer in Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
