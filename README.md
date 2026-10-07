# PL CREATIONS — APPS AND WEB DEVELOPERS
> **BUILD. SECURE. GROW.**  
> High-Velocity Technology, Web Applications, CCTV & Biometric Systems, Sales Acceleration & Digital Marketing  
> **Headquarters**: Bengaluru, Karnataka, India  
> **Contact**: +91 9187535990 • contact@plcreations.com  
> **Theme**: Light Canvas (Pure White `#FFFFFF` + Orange Action `#E55A00` + Blue Trust `#1D4ED8`)  

---

## 🚀 Technology Architecture
- **Framework**: Next.js 15 (App Router with SSG/ISR static generation)
- **UI & Components**: React 19, Tailwind CSS v4, Lucide Icons, Radix UI Primitives, Sonner Notifications
- **Typography**: Dual Typeface System — Google Fonts via `next/font` (Outfit for geometric display headings & branding, Plus Jakarta Sans for clean body/UI)
- **Lead Capture & WhatsApp Routing**:
  - Direct 1-Click WhatsApp Click-to-Chat with pre-formatted inquiry prompts
  - Instant direct call triggers (`tel:+919187535990`)
  - Server Action with Zod schema validation & Resend email forwarding
- **SEO Engine**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata, Schema.org `LocalBusiness` & `ProfessionalService` JSON-LD schemas.

---

## 📦 Getting Started & Local Development

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` or `v24+`
- npm `v9+` or `v10+` or `v11+`

### 2. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://plcreations.com
NEXT_PUBLIC_WHATSAPP_NUMBER=9187535990
NEXT_PUBLIC_COMPANY_NAME="PL Creations"
NEXT_PUBLIC_COMPANY_EMAIL="contact@plcreations.com"
NEXT_PUBLIC_COMPANY_PHONE="+91 9187535990"
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site.

### 4. Build & Production Check
```bash
# Static TypeScript verification
npm run type-check

# Production Build
npm run build
```

---

## 🔒 Verification & Compliance
- **V1 Static**: Zero TypeScript errors (`tsc --noEmit`), strict type safety, zero `any`.
- **V2 Runtime**: Zero server action errors, zero hydration mismatches, sub-second load times.
- **V3 Accessibility**: WCAG AA contrast compliance, keyboard navigability, responsive scaling clamp.
