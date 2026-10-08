import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { images } from '../data/images';

export const StyleIndex: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeTapIdx, setActiveTapIdx] = useState<number | null>(0); // Default open 1st on mobile
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleRowClick = (idx: number) => {
    // On mobile and tablet, tap toggles or reveals the category image
    setActiveTapIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="style-index"
      onMouseMove={handleMouseMove}
      className="relative py-20 sm:py-28 lg:py-32 bg-[#111111] text-[#F8F4EF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B59A6A]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] font-mono text-[#DFCA9E]">
              DEPARTMENT CATALOGUE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.05]">
              FIND<br />
              <span className="italic text-[#DFCA9E]">YOUR</span><br />
              STYLE.
            </h2>

            <p className="max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Explore our specialized collections in pure silk weaves, tailored contemporary silhouettes, celebratory bridal drapes, and nurturing maternity comfort.
            </p>
          </div>
        </div>

        {/* Touch-Friendly Vertical Fashion Index (Section 31.5) */}
        <div className="border-t border-white/10">
          {images.indexCategories.map((cat, idx) => {
            const isTapActive = activeTapIdx === idx;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="border-b border-white/10 transition-colors select-none"
              >
                {/* Main Interactive Row (Min 48px Touch Target) */}
                <div
                  onClick={() => handleRowClick(idx)}
                  className="group relative py-4 sm:py-5 flex items-center justify-between gap-3 cursor-pointer min-h-[52px]"
                >
                  <div className="flex items-center gap-3 sm:gap-8 flex-1 min-w-0">
                    <span className="font-mono text-xs sm:text-sm text-[#B59A6A] font-light tracking-widest transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
                      {cat.number} —
                    </span>

                    <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-normal text-white group-hover:text-[#DFCA9E] transition-all duration-300 truncate">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Subtitle & Arrow / Expand Indicator */}
                  <div className="flex items-center gap-3 sm:gap-8 flex-shrink-0">
                    <span className="hidden sm:inline text-xs sm:text-sm text-white/50 font-light group-hover:text-white/80 transition-colors">
                      {cat.tagline}
                    </span>

                    {/* Desktop Icon: Rotates on Hover */}
                    <div className="hidden lg:flex w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B59A6A] group-hover:bg-[#B59A6A] group-hover:text-[#121212] items-center justify-center transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-[#121212]" />
                    </div>

                    {/* Mobile/Tablet Touch Indicator: Rotates on Tap */}
                    <div className="lg:hidden w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isTapActive ? 'rotate-180 text-[#DFCA9E]' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Desktop Underline Glow */}
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B59A6A] transition-all duration-500 ease-out group-hover:w-full hidden lg:block" />
                </div>

                {/* Mobile / Tablet Tap-To-Reveal Fashion Image Accordion (Section 31.5) */}
                <AnimatePresence>
                  {isTapActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="lg:hidden overflow-hidden pb-4"
                    >
                      <div className="relative rounded-xl overflow-hidden bg-black/60 border border-white/10 aspect-[16/10] sm:aspect-[21/9] shadow-xl">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover filter brightness-[0.92]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between gap-3 text-white">
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E] block mb-0.5">
                              {cat.count}
                            </span>
                            <p className="font-serif text-lg sm:text-xl font-normal">
                              {cat.name}
                            </p>
                            <p className="text-xs text-white/70 font-light mt-0.5 line-clamp-1">
                              {cat.tagline}
                            </p>
                          </div>

                          <a
                            href="#collections"
                            className="min-h-[40px] px-3.5 py-1.5 rounded-sm bg-[#B59A6A] hover:bg-[#DFCA9E] text-[#121212] text-[10px] font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0"
                          >
                            <span>VIEW</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Image Following Mouse on Desktop (Section 17 & 33) */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 30,
              y: mousePos.y - 120,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
              mass: 0.5,
            }}
            className="pointer-events-none fixed z-40 hidden lg:block w-64 h-84 overflow-hidden rounded-lg shadow-2xl border border-white/20 bg-black"
          >
            <motion.img
              key={images.indexCategories[hoveredIdx].image}
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={images.indexCategories[hoveredIdx].image}
              alt={images.indexCategories[hoveredIdx].name}
              className="w-full h-full object-cover filter brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                {images.indexCategories[hoveredIdx].count}
              </span>
              <p className="font-serif text-base font-medium">
                {images.indexCategories[hoveredIdx].name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
