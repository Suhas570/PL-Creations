import { NavItem } from "@/types";

export const siteConfig = {
  name: "PL CREATIONS",
  brandShort: "PL Creations",
  tagline: "APPS AND WEB DEVELOPERS",
  positioning: "Technology • Sales • Digital Marketing • Web Applications",
  description:
    "We build high-performance web applications, sales engines, digital marketing funnels, CCTV & biometric security systems for modern businesses in Bengaluru and across India.",
  location: "13°00'37.5\"N 77°28'40.7\"E, Bengaluru, Karnataka, India",
  coordinates: {
    lat: 13.010417,
    lng: 77.477972,
    formatted: "13°00'37.5\"N 77°28'40.7\"E",
  },
  phone: "+91 96061 35280",
  phoneRaw: "919606135280",
  email: "sales@plcreation.in",
  careersEmail: "connect@plcreation.in",
  hours: "Monday – Saturday: 9:00 AM – 7:30 PM IST",
  address: "13°00'37.5\"N 77°28'40.7\"E, Bengaluru, Karnataka, India",
  logo: "/logo.png",
  socials: {
    whatsapp: "https://wa.me/919606135280",
    linkedin: "https://linkedin.com/company/pl-creations",
    instagram: "https://instagram.com/plcreations",
    facebook: "https://facebook.com/plcreations",
    twitter: "https://twitter.com/plcreations",
  },
  stats: [
    { label: "Systems & Apps Delivered", value: "150+" },
    { label: "Client Growth Acceleration", value: "4.8x" },
    { label: "Active Enterprise Retainers", value: "45+" },
    { label: "Client Satisfaction", value: "99.4%" },
    { label: "Average Project Launch", value: "14 Days" },
  ],
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Web Application Development",
        description: "Full-stack Next.js web applications, portals and software.",
        href: "/services",
      },
      {
        label: "Sales Acceleration & B2B Outreach",
        description: "Outbound pipelines, CRM configuration and lead routing.",
        href: "/services",
      },
      {
        label: "Digital Marketing & Ads",
        description: "Meta & Google Ads structured for maximum qualified ROI.",
        href: "/services",
      },
      {
        label: "SEO (Search Engine Optimization)",
        description: "Google Maps Local 3-Pack and nationwide organic ranking.",
        href: "/services",
      },
      {
        label: "CCTV Installation & Surveillance",
        description: "Smart HD/IP security cameras and remote mobile monitoring.",
        href: "/services",
      },
      {
        label: "Biometric Systems & Access Control",
        description: "Fingerprint & facial recognition attendance with payroll sync.",
        href: "/services",
      },
      {
        label: "Brand Building & Identity",
        description: "Vector logo kits, brand style guides and visual assets.",
        href: "/services",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
