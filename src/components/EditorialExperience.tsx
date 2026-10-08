import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { images } from '../data/images';
import { storeConfig } from '../data/storeConfig';

interface EditorialExperienceProps {
  onVisitClick: () => void;
}

export const EditorialExperience: React.FC<EditorialExperienceProps> = ({ onVisitClick }) => {
  return (
    <section className="relative min-h-[90vh] py-28 sm:py-36 bg-[#0B0B0B] text-white flex flex-col justify-between overflow-hidden">
      {/* Full-Bleed Showroom Photography Background with Subtle Scale (Section 23) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-cover bg-center filter brightness-[0.55] contrast-[1.1]"
          style={{ backgroundImage: `url(${images.store.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/80" />
      </div>

      {/* Thin Animated Architectural Lines (Section 23) */}
      <div className="absolute inset-10 sm:inset-16 border border-white/10 pointer-events-none hidden md:block" />

      {/* Top Section Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#B59A6A]" />
          <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
            THE SHOWROOM ENVIRONMENT
          </span>
        </div>
      </div>

      {/* Central Oversized Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full my-auto py-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-[clamp(2.5rem,9vw,5.5rem)] sm:text-6xl md:text-8xl font-light text-white leading-[0.98] mb-6 sm:mb-8">
            STEP INTO<br />
            <span className="italic text-[#DFCA9E]">THE AVANI</span><br />
            EXPERIENCE.
          </h2>

          <p className="text-sm sm:text-lg text-white/80 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
            Multi-floor architecture designed for serene browsing, spacious private fitting lounges, authentic fabric examination, and unhurried family hospitality.
          </p>

          <button
            onClick={onVisitClick}
            className="min-h-[48px] group px-8 py-4 bg-[#B59A6A] hover:bg-[#C8AC7C] text-[#121212] text-xs uppercase tracking-[0.25em] font-semibold transition-colors flex items-center justify-center gap-3 cursor-pointer rounded-sm active:scale-[0.98]"
          >
            <span>Plan In-Person Visit</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Feature Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-widest text-white/60">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#DFCA9E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEDICATED FLOORS</span>
          </div>
          <span className="text-white/20">•</span>
          <span>{storeConfig.staffCount} ADVISORY STYLISTS</span>
          <span className="text-white/20">•</span>
          <span>{storeConfig.storeHours}</span>
        </div>

        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#B59A6A]" />
          <span className="text-white/80 uppercase">PHYSICAL SHOWROOM</span>
        </div>
      </div>
    </section>
  );
};
