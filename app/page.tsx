import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesMatrixSection } from "@/components/home/ServicesMatrixSection";
import { IndustryFocusSection } from "@/components/home/IndustryFocusSection";
import { ProcessWorkflowSection } from "@/components/home/ProcessWorkflowSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";
import { LocationMapSection } from "@/components/home/LocationMapSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Services Matrix (Expanded with IT, Security & Marketing) */}
        <ServicesMatrixSection />

        {/* Section 3: Industry Focus Blueprints */}
        <IndustryFocusSection />

        {/* Section 4: Process & Sprint Workflow */}
        <ProcessWorkflowSection />

        {/* Section 5: Engineering Tech Stack */}
        <TechStackSection />

        {/* Section 6: Testimonials & Client Endorsements */}
        <TestimonialsSection />

        {/* Section 7: Frequently Asked Questions */}
        <FaqAccordionSection />

        {/* Section 8: Final Conversion Banner */}
        <CtaBannerSection />

        {/* Section 9: Location & Google Maps Embed */}
        <LocationMapSection />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </>
  );
}
