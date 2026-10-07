import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const getSiteUrl = (): URL => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    const formatted = envUrl.startsWith("http://") || envUrl.startsWith("https://")
      ? envUrl
      : `https://${envUrl}`;
    try {
      return new URL(formatted);
    } catch {
      // Ignore invalid URL parse and fallback
    }
  }
  return new URL("https://plcreations.in");
};

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "PL CREATIONS | Apps and Web Developers • Technology • Security • Growth",
    template: "%s | PL Creations",
  },
  description:
    "Empowering Indian SMBs, schools, clinics, and enterprises with cutting-edge web applications, CCTV surveillance, biometric systems, performance marketing, and B2B sales acceleration in Bengaluru.",
  keywords: [
    "PL Creations",
    "Apps and Web Developers",
    "Web Application Development Bengaluru",
    "CCTV Installation Bengaluru",
    "Biometric Systems India",
    "Digital Marketing Bengaluru",
    "Sales Acceleration India",
    "Local SEO Bengaluru",
    "Software Development India",
    "School Portals",
    "Clinic Management Systems",
  ],
  authors: [{ name: "PL Creations", url: "https://plcreations.in" }],
  creator: "PL Creations",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://plcreations.in",
    siteName: "PL Creations",
    title: "PL CREATIONS — BUILD. SECURE. GROW.",
    description: "Technology, Apps, Web Development, CCTV & Security agency for modern businesses in Bengaluru & across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PL Creations — BUILD. SECURE. GROW.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PL CREATIONS — BUILD. SECURE. GROW.",
    description: "Apps and Web Developers, CCTV & Technology agency in Bengaluru, India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-100 selection:text-orange-900 flex flex-col">
        <LocalBusinessJsonLd />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
