import { motion } from 'framer-motion';
import { HeroSection } from './components/sections/HeroSection';
import { ContactSection } from './components/sections/ContactSection';
import { SocialEventsSection } from './components/sections/SocialEventsSection';
import { NationalCoverageSection } from './components/sections/NationalCoverageSection';
import { B2BSection } from './components/sections/B2BSection';
import { AddonsSection } from './components/sections/AddonsSection';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white overflow-x-hidden relative">
      {/* Ambient Stage Light Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top-Right Warm Glow */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.95, 1],
            opacity: [0.25, 0.35, 0.22, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Bottom-Left Cool Shadow */}
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #334155 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.9, 1.15, 1],
            opacity: [0.18, 0.28, 0.15, 0.18]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Additional Accent Light - Purple/Blue */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Responsive Container - Mobile: 390px, Tablet: 768px, Desktop: 1024px max */}
      <div className="w-full max-w-[390px] md:max-w-[768px] lg:max-w-[1024px] mx-auto relative z-10">
        <HeroSection />
        <ContactSection />
        <SocialEventsSection />
        <NationalCoverageSection />
        <B2BSection />
        <AddonsSection />
        <Footer />
      </div>
    </div>
  );
}