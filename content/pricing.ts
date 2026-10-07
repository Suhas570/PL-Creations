import { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "starter-launch",
    name: "Growth Starter",
    tagline: "Ideal for local clinics, retail shops, PGs, and early-stage Indian SMBs.",
    priceMonthly: 0,
    priceOneTime: 0,
    popular: false,
    badge: "Tailored Solution",
    features: [
      "Custom High-Speed Next.js 15 Landing Page / Website",
      "Instant WhatsApp & Direct Call 1-Click Lead Routing",
      "Local Google Business Profile (GBP) & Maps Setup",
      "Mobile-First Design (<1s Load Speed on 4G)",
      "SSL Certificate & Cloudflare Edge Hosting Setup",
      "Basic SEO Metadata & Google Indexation",
      "30 Days of Free Maintenance & Support",
    ],
    ctaLabel: "Get Custom Consultation",
    whatsappMessage: "Hi PL Creations, I want to discuss a tailored solution for my business.",
  },
];
