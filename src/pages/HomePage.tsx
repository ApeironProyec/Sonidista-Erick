import { HeroSection } from "../components/sections/HeroSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SocialEventsSection } from "../components/sections/SocialEventsSection";
import { NationalCoverageSection } from "../components/sections/NationalCoverageSection";
import { B2BSection } from "../components/sections/B2BSection";
import { AddonsSection } from "../components/sections/AddonsSection";
import { RidersSection } from "../components/sections/RidersSection";
import { Footer } from "../components/sections/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full animate-blob-warm"
          style={{
            background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-blob-cool"
          style={{
            background: "radial-gradient(circle, #334155 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-blob-accent"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="w-full max-w-[390px] md:max-w-[768px] lg:max-w-[1024px] mx-auto relative z-10">
        <HeroSection />
        <ContactSection />
        <SocialEventsSection />
        <NationalCoverageSection />
        <B2BSection />
        <AddonsSection />
        <RidersSection />
        <Footer />
      </div>
    </div>
  );
}
