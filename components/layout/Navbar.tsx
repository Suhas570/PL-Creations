"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/content/site";
import { buildCallUrl, buildWhatsAppUrl, cn } from "@/lib/utils";
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Briefcase
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 text-center font-medium border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wide">
              Bengaluru
            </span>
            <span>📍 Serving businesses with Web Apps, Sales Acceleration, CCTV &amp; Biometric Solutions</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={buildCallUrl()} 
              className="hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>+91 96061 35280</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={buildWhatsAppUrl("Hi PL Creations, I would like to consult on my project requirements.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "glass-nav shadow-subtle py-3"
            : "bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-orange-500/30 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-white flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PL Creations Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                PL CREATIONS<span className="text-orange-600">.</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-orange-600 font-mono mt-0.5">
                APPS AND WEB DEVELOPERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesDropdownOpen}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200",
                        isActive || servicesDropdownOpen
                          ? "text-blue-700 bg-blue-50"
                          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                        )}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 lg:w-96 p-3 bg-white rounded-2xl shadow-elevated border border-slate-100 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                          Technology &amp; Security Services
                        </div>
                        <div className="space-y-1 mt-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 group/sub transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/sub:bg-orange-50 group-hover/sub:text-orange-600 shrink-0 mt-0.5 transition-colors">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover/sub:text-orange-600 transition-colors">
                                  {sub.label}
                                </div>
                                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {sub.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 bg-slate-50/70 rounded-xl flex items-center justify-between">
                          <span className="text-[11px] text-slate-500 font-medium">
                            Need a custom requirement?
                          </span>
                          <Link
                            href="/contact"
                            className="text-[11px] font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                          >
                            <span>Contact Us</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildCallUrl()}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>+91 96061 35280</span>
            </a>

            <a
              href={buildWhatsAppUrl("Hi PL Creations, I would like to get a consultation on our business requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>

            <Link
              href="/contact"
              className="btn-orange-gradient px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname.startsWith("/services") ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                All Services
              </Link>
              <Link
                href="/industries"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/industries" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Industries We Serve
              </Link>
              <Link
                href="/careers"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/careers" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Careers (We&apos;re Hiring)
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/about" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold",
                  pathname === "/contact" ? "bg-orange-50 text-orange-600" : "text-slate-800 hover:bg-slate-50"
                )}
              >
                Contact &amp; Free Quote
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={buildWhatsAppUrl("Hi PL Creations, I would like to consult with your team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp py-2.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={buildCallUrl()}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Direct Call (+91 96061 35280)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
