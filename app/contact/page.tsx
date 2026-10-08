import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { LocationMapSection } from "@/components/home/LocationMapSection";
import { siteConfig } from "@/content/site";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact PL Creations | Instant WhatsApp & Call Consultation Bengaluru",
  description:
    "Connect directly with technical leadership at PL Creations for web application development, CCTV installation, biometric systems, and marketing solutions in Bengaluru.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | PL Creations Bengaluru",
    description:
      "Connect directly with technical leadership at PL Creations for web development, CCTV installation, biometric systems, and growth solutions.",
    url: "/contact",
  },
};
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck,
  ArrowRight,
  Code2,
  TrendingUp,
  Camera,
  Fingerprint,
  Megaphone,
  Search,
  Palette,
  CheckCircle2
} from "lucide-react";

const quickServices = [
  {
    title: "Web App Development",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    msg: "Hi PL Creations, I would like to discuss a Custom Web Application project.",
  },
  {
    title: "B2B Sales & Growth",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-600",
    msg: "Hi PL Creations, I want to inquire about B2B Sales & Pipeline Growth services.",
  },
  {
    title: "CCTV Camera Installation",
    icon: Camera,
    color: "from-emerald-500 to-teal-600",
    msg: "Hi PL Creations, I need an on-site consultation and quote for CCTV Installation in Bengaluru.",
  },
  {
    title: "Biometric Access Control",
    icon: Fingerprint,
    color: "from-purple-500 to-pink-600",
    msg: "Hi PL Creations, I would like to inquire about Biometric Attendance and Access Control systems.",
  },
  {
    title: "Digital Marketing & Ads",
    icon: Megaphone,
    color: "from-rose-500 to-red-600",
    msg: "Hi PL Creations, I want to discuss Digital Marketing, Meta/Google Ads, and ROAS growth.",
  },
  {
    title: "SEO & Google Local Ranking",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    msg: "Hi PL Creations, I would like an SEO consultation to rank #1 on Google Search and Maps.",
  },
  {
    title: "Brand Identity & UI/UX",
    icon: Palette,
    color: "from-amber-500 to-orange-600",
    msg: "Hi PL Creations, I am looking for Brand Identity, Logo, and UI/UX Design services.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-emerald-200/60">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant WhatsApp Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Connect Directly with <span className="text-emerald-600">PL Creations</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Skip lengthy forms. Connect directly with our technical leadership on WhatsApp for instantaneous project scope estimation, pricing quotes, and site visits in Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Info & Fast Response Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Hero Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-200">
                      Primary Channel
                    </span>
                    <h2 className="text-lg font-bold font-heading text-white">
                      Official WhatsApp Business
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-emerald-50 leading-relaxed mb-6">
                  Chat directly with our solutions architects. Send voice notes, floor plans, requirement PDFs, or project briefs with zero wait time.
                </p>

                <a
                  href={buildWhatsAppUrl("Hi PL Creations, I would like to discuss a new project with your team.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-white text-emerald-800 font-extrabold text-sm text-center inline-flex items-center justify-center gap-2.5 shadow-lg hover:bg-emerald-50 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Start WhatsApp Chat (+91 96061 35280)</span>
                </a>

                <div className="mt-4 pt-4 border-t border-emerald-500/40 flex items-center justify-between text-xs text-emerald-100 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    Online &amp; Active Now
                  </span>
                  <span>Avg reply: &lt; 5 mins</span>
                </div>
              </div>

              {/* Office Details Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Bengaluru Head Office
                </h3>

                <div className="space-y-3.5 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                    <span>{siteConfig.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <a href={buildCallUrl()} className="font-bold text-slate-900 hover:text-orange-600">
                      +91 96061 35280
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-600 font-semibold">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{siteConfig.hours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={buildCallUrl()}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold text-center hover:bg-slate-200 transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold text-center hover:bg-slate-200 transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
                <p className="text-xs text-blue-900 leading-relaxed font-medium">
                  <strong>Confidentiality Guaranteed:</strong> All client project requirements, architectural diagrams, and discussions remain strictly private under NDA.
                </p>
              </div>
            </div>

            {/* Right Column: 1-Click WhatsApp Service Trigger Hub */}
            <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-subtle">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-2 border border-orange-200/60">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Click Inquiries</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                  What would you like to build or install?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Click any service below to open a pre-formatted WhatsApp chat with the dedicated domain specialist:
                </p>
              </div>

              <div className="space-y-3">
                {quickServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <a
                      key={index}
                      href={buildWhatsAppUrl(service.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/90 hover:border-emerald-300 transition-all flex items-center justify-between gap-4 block"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading group-hover:text-emerald-800 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs text-slate-500 truncate group-hover:text-emerald-700">
                            {service.msg}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-flex text-xs font-bold text-emerald-700 group-hover:underline">
                          WhatsApp
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-emerald-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* What happens next banner */}
              <div className="mt-8 p-5 rounded-2xl bg-slate-100/80 border border-slate-200">
                <span className="text-xs font-bold text-slate-800 font-mono uppercase tracking-wider block mb-2">
                  What happens when you WhatsApp us:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant greeting &amp; requirement gathering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Technical scope &amp; price estimate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>On-site visit or demo scheduled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Location Section */}
      <LocationMapSection showFullHeading={true} />

      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
