import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="text-center max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-subtle">
        <span className="text-5xl sm:text-6xl font-extrabold text-orange-600 font-heading block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold text-slate-900 font-heading mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Connect with us on WhatsApp if you need immediate assistance.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-orange-gradient py-3 px-5 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <a
            href={buildWhatsAppUrl("Hi PL Creations, I am looking for help navigating your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-3 px-5 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
