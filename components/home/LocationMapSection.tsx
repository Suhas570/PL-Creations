import React from "react";
import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildCallUrl, buildWhatsAppUrl } from "@/lib/utils";

interface LocationMapSectionProps {
  showFullHeading?: boolean;
}

export function LocationMapSection({ showFullHeading = true }: LocationMapSectionProps) {
  return (
    <section className="py-16 bg-slate-50/80 border-t border-slate-200/80" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showFullHeading && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold font-mono uppercase tracking-wider mb-3 border border-orange-200/60">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bengaluru Operations &amp; Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Visit or Connect with PL Creations
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Headquartered in Bengaluru, serving clients across Karnataka and nationwide with cutting-edge technology, security, and digital growth services.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Quick Contact Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-subtle flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    PL Creations Office
                  </h3>
                  <span className="text-xs text-orange-600 font-mono font-bold">
                    13°00&apos;37.5&quot;N 77°28&apos;40.7&quot;E
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:30 PM IST</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>On-Site Visits &amp; Remote Execution</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={buildCallUrl()}
                className="btn-orange-gradient flex-1 py-3 px-4 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us Now</span>
              </a>
              <a
                href={buildWhatsAppUrl("Hi PL Creations, I would like to schedule a consultation at your Bengaluru location.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 py-3 px-4 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200 shadow-subtle min-h-[340px] bg-slate-100 relative">
            <iframe
              title="PL Creations Location 13°00'37.5&quot;N 77°28'40.7&quot;E"
              src="https://maps.google.com/maps?q=13.010417,77.477972&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
