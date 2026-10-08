import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface EditorialFinalCTAProps {
  onExploreClick: () => void;
}

export const EditorialFinalCTA: React.FC<EditorialFinalCTAProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[75vh] py-28 sm:py-36 bg-[#080808] text-[#F8F4EF] flex flex-col justify-center items-center text-center overflow-hidden select-none">
      {/* Subtle Ambient Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B59A6A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B59A6A]" />
            <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
              AN INVITATION TO ELEGANCE
            </span>
            <span className="w-8 h-[1px] bg-[#B59A6A]" />
          </div>

          {/* Heading (Section 31) */}
          <h2 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[0.95] tracking-tight mb-8 sm:mb-12">
            YOUR STYLE.<br />
            <span className="italic text-[#DFCA9E]">YOUR MOMENT.</span>
          </h2>

          {/* CTA Action (Section 31) */}
          <button
            onClick={onExploreClick}
            className="group px-10 py-5 bg-[#B59A6A] hover:bg-[#C8AC7C] text-[#121212] font-semibold text-xs sm:text-sm uppercase tracking-[0.3em] transition-all duration-300 inline-flex items-center gap-4 cursor-pointer shadow-2xl shadow-[#B59A6A]/20"
          >
            <span>EXPLORE AVANI</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
