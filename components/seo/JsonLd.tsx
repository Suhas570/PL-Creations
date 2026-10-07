import React from "react";
import { siteConfig } from "@/content/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    legalName: "PL Creations",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://plcreations.in",
    logo: "https://plcreations.in/logo.png",
    image: "https://plcreations.in/og-image.jpg",
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "13°00'37.5\"N 77°28'40.7\"E",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.010417,
      longitude: 77.477972,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
