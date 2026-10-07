import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-app",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDescription: "High-performance Next.js 15 & React 19 web applications, SaaS dashboards, customer portals, and e-commerce platforms engineered for sub-second speeds.",
    fullDescription: "We build ultra-fast, modern web applications and custom software platforms that power your business workflows. Using modern React, Next.js, and scalable cloud architectures, our web solutions are designed for seamless mobile experiences, airtight security, and effortless scaling across India.",
    iconName: "Code2",
    category: "Technology",
    featured: true,
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Average Load Speed", value: "0.7s" },
      { label: "Conversion Lift", value: "+45%" },
    ],
    deliverables: [
      {
        title: "Full-Stack Custom Architecture",
        description: "Bespoke frontend and backend architecture tailored to your unique business operations and data flows.",
        timeline: "Week 1-2",
      },
      {
        title: "Interactive Dashboards & Workflows",
        description: "Role-based authentication, admin dashboards, real-time data sync, and API integrations.",
        timeline: "Week 2-3",
      },
      {
        title: "Mobile Optimization & Core Web Vitals",
        description: "Engineered to deliver instantaneous page loads across all smartphones and network conditions.",
        timeline: "Week 3",
      },
      {
        title: "Production Deployment & Handover",
        description: "Zero-downtime deployment with complete source code ownership, documentation, and training.",
        timeline: "Week 4",
      },
    ],
    faqs: [
      {
        question: "How long does a custom web application take to develop?",
        answer: "Standard business web apps launch within 10 to 14 days, while complex multi-role SaaS portals take 3 to 5 weeks.",
      },
      {
        question: "Do I get full ownership of the source code?",
        answer: "Yes, 100% of the intellectual property and code repository is handed over directly to your team upon launch.",
      },
    ],
  },
  {
    id: "sales-growth",
    slug: "sales-acceleration-outreach",
    title: "Sales Acceleration & Outbound Pipelines",
    shortDescription: "End-to-end B2B outbound lead prospecting, automated cold outreach, WhatsApp sales funnels, and CRM configurations that fill your calendar with qualified buyers.",
    fullDescription: "We build your predictable outbound revenue engine. From verified prospect list curation to automated multi-channel touchpoints and CRM pipeline setups, PL Creations helps your sales team close deals faster with minimal friction.",
    iconName: "Target",
    category: "Sales",
    featured: true,
    techStack: ["HubSpot", "Apollo.io", "Instantly.ai", "Zoho CRM", "WhatsApp Cloud API", "Zapier"],
    metrics: [
      { label: "Qualified Meeting Rate", value: "8.8%" },
      { label: "Pipeline Value Velocity", value: "+65%" },
      { label: "Lead Response Time", value: "<5 min" },
    ],
    deliverables: [
      {
        title: "ICP & High-Intent Prospect Mining",
        description: "Curated lists of verified decision-makers matching your industry, revenue, and geography criteria.",
        timeline: "Week 1",
      },
      {
        title: "Multi-Channel Outreach Sequences",
        description: "Personalized cold email, LinkedIn messaging, and WhatsApp automated sequences with high inbox delivery.",
        timeline: "Week 2",
      },
      {
        title: "CRM & Instant Lead Notification Setup",
        description: "Automated deal pipeline stages, instant WhatsApp alerts for sales reps, and weekly KPI dashboards.",
        timeline: "Week 3",
      },
    ],
    faqs: [
      {
        question: "Do you supply verified decision-maker databases?",
        answer: "Yes, we curate clean, verified B2B lists with zero bounce rate guarantees targeted to your exact buyer personas.",
      },
    ],
  },
  {
    id: "cctv-surveillance",
    slug: "cctv-installation-surveillance",
    title: "CCTV Installation & Surveillance Solutions",
    shortDescription: "Enterprise HD & IP CCTV surveillance system design, high-resolution night-vision cameras, cloud recording, and remote mobile viewing for offices, schools, and facilities.",
    fullDescription: "Protect your physical premises, assets, and staff with professional CCTV installation and surveillance engineering. From site assessment and cabling to NVR/DVR setup and mobile live-streaming configuration, PL Creations delivers 24/7 crystal-clear security monitoring.",
    iconName: "ShieldCheck",
    category: "Security & Infrastructure",
    featured: true,
    techStack: ["Hikvision", "CP Plus", "Dahua", "PoE IP Cameras", "NVR/DVR Systems", "Cloud Remote View"],
    metrics: [
      { label: "Coverage Angle", value: "360°" },
      { label: "Video Clarity", value: "4K / 1080p" },
      { label: "Uptime Reliability", value: "99.9%" },
    ],
    deliverables: [
      {
        title: "Site Security Assessment & Blueprint",
        description: "Physical premise walkthrough to identify blind spots, optimal camera positions, and cabling pathways.",
        timeline: "Day 1-2",
      },
      {
        title: "Hardware Installation & Concealed Cabling",
        description: "Mounting dome/bullet cameras, PoE switch wiring, and central NVR rack configuration.",
        timeline: "Day 3-5",
      },
      {
        title: "Mobile App Remote View Setup",
        description: "Configuring secure smartphone live view, motion alert notifications, and local storage backup.",
        timeline: "Day 6",
      },
      {
        title: "Testing, Training & Maintenance Support",
        description: "Night vision calibration, admin training on playback/export, and ongoing AMC coverage.",
        timeline: "Day 7",
      },
    ],
    faqs: [
      {
        question: "Can I view my CCTV cameras remotely on my mobile phone when I travel?",
        answer: "Yes, we configure secure mobile streaming apps so you can check live feeds and past footage from anywhere in the world.",
      },
      {
        question: "Do you offer Annual Maintenance Contracts (AMC)?",
        answer: "Yes, we provide comprehensive AMC plans covering regular camera servicing, lens cleaning, cable checks, and instant troubleshooting.",
      },
    ],
  },
  {
    id: "biometric-systems",
    slug: "biometric-access-attendance",
    title: "Biometric Attendance & Access Control",
    shortDescription: "Touchless facial recognition, biometric fingerprint scanners, RFID smart cards, and electromagnetic door locks integrated with HR payroll software.",
    fullDescription: "Eliminate buddy punching and modernize attendance tracking with state-of-the-art biometric systems and access control solutions. We implement standalone and networked biometric terminals that sync seamlessly with your HR, payroll, and shift management software.",
    iconName: "Cpu",
    category: "Security & Infrastructure",
    featured: true,
    techStack: ["eSSL", "Realtime", "ZKTeco", "Face Recognition AI", "RFID / NFC", "Payroll API Sync"],
    metrics: [
      { label: "Verification Speed", value: "<0.3s" },
      { label: "Buddy Punching", value: "0%" },
      { label: "Attendance Accuracy", value: "100%" },
    ],
    deliverables: [
      {
        title: "Terminal Selection & Placement Design",
        description: "Selecting appropriate optical, capacitive, or touchless face recognition terminals for entry/exit gates.",
        timeline: "Day 1-2",
      },
      {
        title: "Installation & EM Lock Integration",
        description: "Mounting biometric hardware, power backup backup batteries, and electromagnetic door access relays.",
        timeline: "Day 3-4",
      },
      {
        title: "Employee Enrollment & Cloud Sync",
        description: "Staff fingerprint/facial profile registration and shift timing policy configuration.",
        timeline: "Day 5",
      },
      {
        title: "Automated Monthly Payroll Reports",
        description: "Configuring 1-click Excel/PDF attendance exports and automated WhatsApp late-in alerts.",
        timeline: "Day 6",
      },
    ],
    faqs: [
      {
        question: "Does the biometric system work if the internet goes down?",
        answer: "Yes, all our biometric terminals store thousands of punch logs locally in internal memory and automatically sync when internet connection restores.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing-performance-ads",
    title: "Digital Marketing & Performance Ads",
    shortDescription: "High-ROI Google Ads, Meta (Facebook/Instagram) ad funnels, and LinkedIn campaigns tailored to generate qualified buyer leads and scale conversions.",
    fullDescription: "Stop wasting money on empty clicks. PL Creations designs and manages ROI-driven paid advertising campaigns on Google (Search, Performance Max, YouTube) and Meta (Facebook, Instagram) focused on generating verified customer inquiries.",
    iconName: "TrendingUp",
    category: "Marketing",
    featured: true,
    techStack: ["Google Ads", "Meta Business Manager", "Google Analytics 4", "Google Tag Manager", "Hotjar", "Looker Studio"],
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "CPL Reduction", value: "-40%" },
      { label: "Ad Spend Managed", value: "High ROI" },
    ],
    deliverables: [
      {
        title: "Audience & Competitor Intelligence",
        description: "Researching high-intent search keywords, local buying triggers, and rival campaign gaps.",
        timeline: "Day 1-3",
      },
      {
        title: "Creative Banner & Video Production",
        description: "High-converting ad graphics, Reels video scripts, and persuasive copy in English and local languages.",
        timeline: "Day 4-6",
      },
      {
        title: "Pixel, CAPI & Conversion Tracking",
        description: "Server-side event tracking, lead form automation, and WhatsApp instant lead routing.",
        timeline: "Day 7",
      },
      {
        title: "Weekly A/B Split Testing & Bid Tuning",
        description: "Continuous audience optimization and budget reallocation to maximize qualified sales inquiries.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "How quickly do digital marketing campaigns generate results?",
        answer: "Lead generation campaigns typically begin delivering qualified inquiries within 48 to 72 hours of campaign launch.",
      },
    ],
  },
  {
    id: "brand-building",
    slug: "brand-building-visual-identity",
    title: "Brand Building & Creative Identity",
    shortDescription: "Modern corporate identity, vector logo design suites, brand style guides, sales pitch decks, and digital collateral that build instant marketplace authority.",
    fullDescription: "Stand out in crowded competitive markets with premium visual branding. PL Creations crafts distinctive brand identities, logo systems, typography palettes, pitch decks, and social media creative toolkits that command customer trust from the first glance.",
    iconName: "Palette",
    category: "Marketing",
    featured: true,
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Canva Pro"],
    metrics: [
      { label: "Brand Recall Lift", value: "3.8x" },
      { label: "Design Turnaround", value: "5 Days" },
      { label: "Vector Assets", value: "100% Vector" },
    ],
    deliverables: [
      {
        title: "Logo System & Vector Master Files",
        description: "Primary, secondary, and badge logo variations in AI, SVG, PNG, EPS, and PDF vector formats.",
        timeline: "Day 1-4",
      },
      {
        title: "Brand Style Guide & Design Rules",
        description: "Typography pairings, color palette codes (HEX, RGB, CMYK), and minimum clear space guidelines.",
        timeline: "Day 5-6",
      },
      {
        title: "Corporate Stationery & Social Kit",
        description: "Business cards, letterheads, invoice templates, and reusable social media banner templates.",
        timeline: "Day 7",
      },
    ],
    faqs: [
      {
        question: "Do I get full vector files and commercial copyright?",
        answer: "Yes, you receive all editable AI, SVG, PNG, and PDF source files with 100% commercial ownership rights.",
      },
    ],
  },
  {
    id: "seo-growth",
    slug: "search-engine-optimization-seo",
    title: "SEO (Search Engine Optimization)",
    shortDescription: "Dominate Google search results and Google Maps Local 3-Pack in Bengaluru and across India with white-hat technical, on-page, and local SEO.",
    fullDescription: "Capture continuous organic traffic without paying for every click. We optimize your website architecture, Google Business Profile (GBP), local citations, and keyword-targeted content to rank at the top of Google search results for high-intent search terms.",
    iconName: "Search",
    category: "Digital Growth",
    featured: true,
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "Schema.org", "Google Maps Platform"],
    metrics: [
      { label: "Organic Search Growth", value: "+220%" },
      { label: "Google Maps Calls Lift", value: "+190%" },
      { label: "Top 3 Keyword Rankings", value: "88%" },
    ],
    deliverables: [
      {
        title: "Technical SEO Audit & Speed Fixes",
        description: "Resolving crawl issues, schema markup, mobile Core Web Vitals, and indexation blockers.",
        timeline: "Week 1",
      },
      {
        title: "Google Business Profile (GBP) Dominance",
        description: "Local 3-Pack optimization, geotagged photos, primary category tuning, and review strategy.",
        timeline: "Week 2",
      },
      {
        title: "High-Intent Keyword Content Strategy",
        description: "Localized landing pages and service articles engineered to rank for local buying queries.",
        timeline: "Week 3-4",
      },
      {
        title: "High-Authority Local Citations",
        description: "Building consistent NAP listings across 50+ authoritative Indian business directories.",
        timeline: "Monthly",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to produce measurable rank improvements?",
        answer: "Google Maps and local search ranking improvements typically appear within 30 to 45 days, with broader search ranking compounding over 3 to 6 months.",
      },
    ],
  },
  {
    id: "clinic-growth",
    slug: "clinic-management-growth",
    title: "Clinic & Hospital Digital Portals",
    shortDescription: "Automated OPD patient appointment booking, WhatsApp reminders, and localized doctor reputation systems that drive patient footfall.",
    fullDescription: "Custom-built for medical clinics, dental practices, diagnostic centers, and healthcare providers. Streamline patient appointments, reduce no-shows with automated WhatsApp reminders, and dominate local medical searches.",
    iconName: "Stethoscope",
    category: "Technology",
    featured: false,
    techStack: ["Next.js", "WhatsApp Cloud API", "Razorpay", "Twilio", "Google Health Schema", "PostgreSQL"],
    metrics: [
      { label: "Patient No-Show Drop", value: "-65%" },
      { label: "Monthly New Bookings", value: "+140" },
      { label: "Google Clinic Rating", value: "4.9/5" },
    ],
    deliverables: [
      {
        title: "Online Patient Booking Portal",
        description: "Doctor slot booking, specialist directory, and online consultation fee collection.",
        timeline: "Week 1-2",
      },
      {
        title: "WhatsApp Appointment Bot",
        description: "Automated booking confirmations, calendar invites, and 24-hour reminder messages.",
        timeline: "Week 2-3",
      },
      {
        title: "Doctor Local SEO Package",
        description: "Google Maps optimization for clinic keywords like 'best pediatrician near me'.",
        timeline: "Week 3",
      },
    ],
    faqs: [
      {
        question: "Can patients book without downloading an app?",
        answer: "Yes, everything works inside mobile browsers and directly via WhatsApp.",
      },
    ],
  },
  {
    id: "school-erp",
    slug: "school-erp-admissions",
    title: "School & Institution Portals",
    shortDescription: "Complete student admission funnels, digital fee collection, parent communication apps, and institutional portal configurations.",
    fullDescription: "Empower educational institutions with digital admission funnels, automated fee collection reminders, attendance tracking, and parent communication dashboards.",
    iconName: "GraduationCap",
    category: "Technology",
    featured: false,
    techStack: ["Next.js", "React", "PostgreSQL", "Razorpay / Easebuzz", "AWS S3", "SMS & WhatsApp API"],
    metrics: [
      { label: "Admissions Inquiries", value: "+80%" },
      { label: "On-Time Fee Collection", value: "96%" },
      { label: "Parent Engagement", value: "98%" },
    ],
    deliverables: [
      {
        title: "Digital Admission Funnel",
        description: "Interactive application forms, document uploads, and automated entrance interview scheduling.",
        timeline: "Week 1-2",
      },
      {
        title: "Fee Management & Gateway Integration",
        description: "Instant UPI and netbanking payments with automated PDF receipt generation.",
        timeline: "Week 3-4",
      },
      {
        title: "Parent & Teacher Portal",
        description: "Timetable, notice board, circulars, and student performance dashboard.",
        timeline: "Week 4-5",
      },
    ],
    faqs: [
      {
        question: "Can we integrate UPI payments directly without high transaction fees?",
        answer: "Yes, we integrate official Razorpay and Easebuzz gateways configured for educational zero or low MDR tiers.",
      },
    ],
  },
];
