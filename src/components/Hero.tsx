import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { images } from '../data/images';

interface HeroProps {
  onExploreClick: () => void;
  onVisitClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onVisitClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle pointer parallax tracking across the desktop hero stage (disabled on mobile & reduced-motion)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full bg-[#0D0D0D] text-[#F8F4EF] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Cinematic Full-Bleed Fashion Imagery with Mobile-Optimized Scrim (Section 31.3 & 35) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.44 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top_20%] filter brightness-[0.85] contrast-[1.1]"
          style={{ backgroundImage: `url(${images.hero.campaign})` }}
        />

        {/* High-Fashion Vignette & Film Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/65 to-[#0D0D0D]/90" />
      </div>

      {/* Graphic Framing Lines (Hidden on Mobile) */}
      <div className="absolute inset-x-8 sm:inset-x-12 top-24 bottom-12 border-x border-white/5 pointer-events-none hidden md:block" />

      {/* Top Metadata Strip */}
      <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#DFCA9E]/85">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <span className="w-5 sm:w-6 h-[1px] bg-[#B59A6A]" />
          <span>AUTUMN / WINTER 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:flex items-center gap-2 text-white/50"
        >
          <span>HAUTE COUTURE & READY-TO-WEAR</span>
        </motion.div>
      </div>

      {/* Main Campaign Canvas: Responsive Typography (Left) + Adaptive Hero Visual (Right/Bottom) */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full my-auto flex-1 flex flex-col justify-center py-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement, Responsive Fluid Typography & Touch CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center z-20">
            
            {/* Brand Tagline Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-3 sm:mb-4"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-mono text-[#DFCA9E] block">
                A WORLD OF WOMEN'S FASHION
              </span>
            </motion.div>

            {/* Giant Campaign Statement Typography with Fluid clamp() for 320px - 1920px+ (Section 31.8) */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(2.75rem,11.5vw,4.5rem)] sm:text-7xl md:text-8xl xl:text-9xl font-light tracking-tight text-white leading-[0.92]"
              >
                STYLE
              </motion.h1>
            </div>

            <div className="overflow-hidden my-0.5 sm:my-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic text-[clamp(2.75rem,11.5vw,4.5rem)] sm:text-7xl md:text-8xl xl:text-9xl text-[#DFCA9E] font-normal leading-[0.92]"
              >
                WITHOUT
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(2.75rem,11.5vw,4.5rem)] sm:text-7xl md:text-8xl xl:text-9xl font-light tracking-tight text-white leading-[0.92]"
              >
                LIMITS.
              </motion.h1>
            </div>

            {/* Supporting Narrative */}
            <div className="mt-5 sm:mt-8 lg:mt-10 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="text-xs sm:text-sm md:text-base text-white/75 font-light leading-relaxed mb-6 sm:mb-8"
              >
                Discover an expansive world of contemporary silhouettes, royal handwoven silks, celebratory drapes and nurturing maternity wear.
              </motion.p>

              {/* Graphical Touch-Friendly CTAs (>= 48px Target - Section 31.9) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
              >
                {/* Primary CTA: VISIT STORE */}
                <button
                  onClick={onVisitClick}
                  className="min-h-[48px] relative group px-6 sm:px-8 py-3.5 overflow-hidden rounded-sm transition-all duration-500 cursor-pointer active:scale-[0.98] flex items-center justify-center"
                >
                  <span className="absolute inset-0 border border-[#B59A6A]/60 group-hover:border-[#DFCA9E] transition-colors" />
                  <span className="absolute inset-0 bg-[#B59A6A]/15 group-hover:bg-[#B59A6A]/25 backdrop-blur-sm transition-colors" />
                  
                  <span className="absolute top-0 left-0 w-3 h-[2px] bg-[#DFCA9E] group-hover:w-full transition-all duration-500" />
                  <span className="absolute bottom-0 right-0 w-3 h-[2px] bg-[#DFCA9E] group-hover:w-full transition-all duration-500" />

                  <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-white group-hover:text-[#DFCA9E] transition-colors">
                    <span>VISIT STORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>

                {/* Secondary CTA: EXPLORE COLLECTION */}
                <button
                  onClick={onExploreClick}
                  className="min-h-[48px] group relative py-2 px-2 text-xs uppercase tracking-[0.25em] font-medium text-white/80 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>EXPLORE COLLECTION</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#DFCA9E]" />
                  <span className="absolute bottom-1 left-2 w-0 h-[1px] bg-[#DFCA9E] transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
                </button>
              </motion.div>
            </div>

            {/* Dedicated Mobile Fashion Mini-Card (Section 31.3 — Never Covers Headline) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="md:hidden mt-6 w-full max-w-sm"
            >
              <div
                onClick={onExploreClick}
                className="relative p-2.5 rounded-[18px] bg-[#141414]/90 backdrop-blur-md border border-white/15 flex items-center gap-3.5 shadow-xl cursor-pointer active:scale-[0.98] transition-transform select-none"
              >
                <div className="relative w-14 h-14 rounded-[12px] overflow-hidden flex-shrink-0 bg-black/60">
                  <img
                    src={images.hero.cards.card2Collection}
                    alt="Autumn / Winter 2026 Campaign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-1 left-1 text-[7px] font-mono uppercase tracking-wider text-[#DFCA9E] bg-black/80 px-1 py-0.5 rounded">
                    AW/26
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#DFCA9E]">
                    <Sparkles className="w-2.5 h-2.5 text-[#B59A6A]" />
                    <span>AUTUMN / WINTER 2026</span>
                  </div>
                  <p className="font-serif text-base text-white font-light truncate mt-0.5">
                    Haute Couture Edit
                  </p>
                  <p className="text-[10px] text-white/50 font-mono tracking-wider">
                    Tap to explore collection →
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#DFCA9E] flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Multi-Card Floating Collage (Tablet & Desktop Experience — Section 32 & 33) */}
          <div className="hidden md:flex lg:col-span-5 justify-center lg:justify-end items-center relative z-10 pt-4 lg:pt-0">
            <div className="relative w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[520px] h-[460px] sm:h-[500px] lg:h-[540px] xl:h-[580px]">
              
              {/* CARD 01 — FASHION PORTRAIT (Back Layer / Top-Right / Subtle Depth) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mouseOffset.x * 4,
                  y: mouseOffset.y * 4,
                }}
                transition={{
                  opacity: { duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                  x: { type: 'spring', damping: 30, stiffness: 120 },
                  y: { type: 'spring', damping: 30, stiffness: 120 },
                }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                onClick={onExploreClick}
                className="absolute top-0 right-2 lg:right-0 w-44 sm:w-48 lg:w-52 aspect-[3/4.2] rounded-[24px] bg-[#141414]/90 backdrop-blur-md border border-white/12 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)] cursor-pointer group z-10 -rotate-[2.5deg]"
              >
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-black/60">
                  <img
                    src={images.hero.cards.card1Portrait}
                    alt="AVANI Women's Haute Couture Portrait"
                    className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] bg-black/70 backdrop-blur-md px-2 py-0.5 border border-white/10 text-[#DFCA9E] rounded-full">
                      AVANI
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#DFCA9E]">
                      EDITORIAL
                    </p>
                    <p className="font-serif text-sm font-light text-white/90">
                      High Fashion
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 04 — EDITORIAL ACCENT (Underlap / Middle-Left / Silhouette - Desktop Only) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: -25 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mouseOffset.x * 6,
                  y: mouseOffset.y * 6,
                }}
                transition={{
                  opacity: { duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
                  x: { type: 'spring', damping: 28, stiffness: 130 },
                  y: { type: 'spring', damping: 28, stiffness: 130 },
                }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                onClick={onExploreClick}
                className="hidden lg:block absolute bottom-16 -left-6 xl:-left-8 w-40 xl:w-44 aspect-[3/3.6] rounded-[22px] bg-[#121212]/85 backdrop-blur-md border border-white/10 p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.6)] cursor-pointer group z-15 rotate-[2.5deg]"
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-black/60">
                  <img
                    src={images.hero.cards.card4Editorial}
                    alt="AVANI Women's Silhouette"
                    className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <p className="text-[8px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E] leading-tight">
                      STYLE WITHOUT LIMITS
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 02 — PRIMARY ANCHOR / COLLECTION (Center / Main Hero Visual) */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mouseOffset.x * 7,
                  y: mouseOffset.y * 7,
                }}
                transition={{
                  opacity: { duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
                  x: { type: 'spring', damping: 26, stiffness: 140 },
                  y: { type: 'spring', damping: 26, stiffness: 140 },
                }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
                onClick={onExploreClick}
                className="absolute top-4 sm:top-10 lg:top-14 left-2 sm:left-6 lg:left-2 w-[270px] sm:w-[290px] lg:w-[310px] xl:w-[330px] aspect-[3/3.9] rounded-[26px] bg-[#161616]/90 backdrop-blur-lg border border-white/15 p-3.5 sm:p-4 shadow-[0_30px_70px_rgba(0,0,0,0.75)] cursor-pointer group z-20 rotate-[1.5deg]"
              >
                <div className="absolute inset-0 rounded-[26px] border border-transparent group-hover:border-[#DFCA9E]/50 transition-colors duration-500 pointer-events-none" />

                <div className="relative w-full h-[75%] rounded-[20px] overflow-hidden bg-black/60">
                  <img
                    src={images.hero.cards.card2Collection}
                    alt="Autumn / Winter 2026 Collection"
                    className="w-full h-full object-cover filter brightness-[0.94] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-[0.25em] bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/15 text-[#DFCA9E] rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-2.5 h-2.5 text-[#B59A6A]" />
                      <span>AW / 26</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                      AUTUMN / WINTER
                    </p>
                    <p className="font-serif text-lg font-light text-white tracking-wide mt-0.5">
                      2026 Campaign
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B59A6A] group-hover:bg-[#B59A6A] group-hover:text-[#121212] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* CARD 03 — TACTILE DETAIL (Front Layer / Bottom-Right Overlap / Texture) */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.93 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mouseOffset.x * 11,
                  y: mouseOffset.y * 11,
                }}
                transition={{
                  opacity: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                  x: { type: 'spring', damping: 24, stiffness: 150 },
                  y: { type: 'spring', damping: 24, stiffness: 150 },
                }}
                whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                onClick={onExploreClick}
                className="absolute bottom-2 sm:bottom-4 lg:bottom-4 right-1 sm:right-4 lg:right-2 w-44 sm:w-48 lg:w-54 aspect-[4/3] rounded-[22px] bg-[#141414]/95 backdrop-blur-md border border-white/16 p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] cursor-pointer group z-30 -rotate-[1.8deg]"
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-black/60">
                  <img
                    src={images.hero.cards.card3Detail}
                    alt="Gold Zari & Silk Detail"
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-2 left-2">
                    <span className="text-[8px] font-mono uppercase tracking-[0.25em] bg-black/75 backdrop-blur-md px-2 py-0.5 border border-white/10 text-[#DFCA9E] rounded-full">
                      COLLECTION 01
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#DFCA9E]">
                      SILK ZARI DETAIL
                    </p>
                    <p className="font-serif text-xs font-light text-white/90">
                      Handwoven Artisan Weave
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Campaign Bar with Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 px-5 sm:px-8 lg:px-12 pb-5 sm:pb-6 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono tracking-widest text-white/60 border-t border-white/10 pt-4"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-[#B59A6A] font-semibold text-[11px] sm:text-xs">COLLECTION / 01</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline uppercase text-[10px] text-white/70">
            TRADITIONAL • CONTEMPORARY • MATERNITY
          </span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-[#DFCA9E] transition-colors text-[10px] sm:text-[11px] uppercase tracking-[0.2em] cursor-pointer min-h-[44px]"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#B59A6A]" />
        </button>
      </motion.div>
    </section>
  );
};
