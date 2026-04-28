import { AfterAudit } from "@/components/AfterAudit";
import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Measure } from "@/components/Measure";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Report } from "@/components/Report";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { Sectors } from "@/components/Sectors";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export default function HomePage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Measure />
        <Demo />
        <Pricing />
        <Report />
        <Sectors />
        <AfterAudit />
        <ResourcesPreview />
        <TestimonialsCarousel />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
