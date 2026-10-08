import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/images';

export const DynamicDuality: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'traditional' | 'contemporary' | null>(null);

  return (
    <section id="duality" className="py-28 sm:py-36 bg-[#0E0E0E] text-[#F8F4EF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B59A6A]" />
          <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
            CURATED CONTRAST
          </span>
          <span className="w-8 h-[1px] bg-[#B59A6A]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.05]">
          TWO WORLDS.<br />
          <span className="italic text-[#DFCA9E]">ONE DESTINATION.</span>
        </h2>
      </div>

      {/* Dynamic Expanding Split Container (Section 21) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="relative flex flex-col md:flex-row h-[600px] sm:h-[650px] w-full overflow-hidden border border-white/10">
          
          {/* Left: Traditional Side */}
          <motion.div
            animate={{
              flex: activeSide === 'traditional' ? 1.4 : activeSide === 'contemporary' ? 0.6 : 1,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            onClick={() => setActiveSide((prev) => (prev === 'traditional' ? null : 'traditional'))}
            onMouseEnter={() => setActiveSide('traditional')}
            onMouseLeave={() => setActiveSide(null)}
            className="relative h-full overflow-hidden group cursor-pointer"
          >
            <img
              src={images.contrast.traditional}
              alt="Traditional Indian Saree and Ethnic Fashion"
              className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-[0.95] transition-all duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] bg-black/60 px-3.5 py-1.5 backdrop-blur-md border border-white/10">
                01 • HERITAGE
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-serif text-3xl sm:text-5xl font-light text-white mb-2">
                TRADITIONAL
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-sm line-clamp-2">
                Pure Kanchipuram weaves, ceremonial Banarasis, regal bridal anarkalis, and timeless South Indian handlooms.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DFCA9E]">
                <span>EXPLORE SILKS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Right: Contemporary Side */}
          <motion.div
            animate={{
              flex: activeSide === 'contemporary' ? 1.4 : activeSide === 'traditional' ? 0.6 : 1,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            onClick={() => setActiveSide((prev) => (prev === 'contemporary' ? null : 'contemporary'))}
            onMouseEnter={() => setActiveSide('contemporary')}
            onMouseLeave={() => setActiveSide(null)}
            className="relative h-full overflow-hidden group cursor-pointer border-t md:border-t-0 md:border-l border-white/10"
          >
            <img
              src={images.contrast.contemporary}
              alt="Contemporary Western Women's Fashion"
              className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-[0.95] transition-all duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] bg-black/60 px-3.5 py-1.5 backdrop-blur-md border border-white/10">
                02 • CONTEMPORARY
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-serif text-3xl sm:text-5xl font-light text-white mb-2">
                CONTEMPORARY
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-sm line-clamp-2">
                Tailored workwear separates, sculpted evening gowns, tiered resort fits, and modern minimalist daywear.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DFCA9E]">
                <span>EXPLORE WESTERN</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Center Brand Monogram Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#0E0E0E]/95 border border-[#B59A6A]/60 shadow-2xl backdrop-blur-md">
            <span className="font-serif text-lg tracking-[0.25em] font-normal text-white">AVANI</span>
            <span className="text-[7px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] mt-0.5">DUALITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
