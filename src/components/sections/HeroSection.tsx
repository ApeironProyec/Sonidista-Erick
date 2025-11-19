import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import consoleImage from '../../assets/background.webp';

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={consoleImage}
          alt="Professional audio mixing console"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/70 to-[#0A0A0A]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-10 lg:p-16 pb-12 md:pb-16 pt-24 md:pt-32">
        <div className="space-y-3 md:space-y-4">
          <motion.p 
            className="text-[#B8964F]/80 tracking-wider uppercase text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jossue Erick Perez Blanco
          </motion.p>
          <motion.h1 
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Operador de Sonido
          </motion.h1>
          <motion.p 
            className="text-[#B8964F] tracking-wide opacity-90 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ingeniería en Vivo & Producción Técnica
          </motion.p>
        </div>
      </div>
    </section>
  );
}
