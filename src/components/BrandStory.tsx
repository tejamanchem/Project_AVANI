import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { storyData, type Milestone } from '../data/storyData';
import { AvaniCircularEmblem } from './AvaniCircularEmblem';

export const BrandStory: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0B0B0B] text-[#F8F4EF] overflow-hidden select-none border-t border-b border-white/5"
    >
      {/* Ambient Radial Gradient Mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B59A6A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-[#8A4F5A]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Section Header with Official Brand Seal (Section 17) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 sm:pb-20 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B59A6A]" />
              <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
                {storyData.sectionTag}
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.0] text-white tracking-tight">
              THE <span className="italic font-serif text-[#DFCA9E]">AVANI</span> STORY.
            </h2>
            <p className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-white/50 mt-3">
              {brandConfig.experience}
            </p>
          </div>

          {/* Official AVANI Circular Emblem Editorial Seal (Section 17) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-5 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md self-start lg:self-end"
          >
            <AvaniCircularEmblem
              size="md"
              showSpinningRing={true}
              animateOnLoad={true}
              interactive={true}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] font-semibold">
                  AUTHENTIC SEAL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] animate-pulse" />
              </div>
              <p className="text-xs text-white/80 font-serif italic mt-0.5">
                Emblem of Heritage & Craft
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">
                Official Brand Identity
              </p>
            </div>
          </motion.div>
        </div>

        {/* Narrative & Storefront Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-16 sm:pt-20">
          
          {/* Left Column: Official Storefront Showroom Imagery */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative group"
            >
              {/* Outer Architectural Picture Frame */}
              <div className="relative aspect-[3/4.2] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
                <img
                  src={brandConfig.storefront}
                  alt="AVANI Flagship Storefront & Illuminated Facade"
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
                  loading="lazy"
                />

                {/* Subtle Night Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/30 pointer-events-none" />

                {/* Floating Official Stamp on Storefront Image */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono uppercase tracking-widest text-white/90">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFCA9E]" />
                  <span>FLAGSHIP STOREFRONT</span>
                </div>

                {/* Bottom Architectural Caption */}
                <div className="absolute bottom-5 inset-x-5 z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] block mb-1">
                    ESTABLISHED DESTINATION
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-light text-white leading-snug">
                    Where Tradition Meets Modern Grandeur
                  </p>
                  <p className="text-xs text-white/70 font-mono mt-1">
                    Multi-level showrooms • Dedicated fashion sections
                  </p>
                </div>
              </div>

              {/* Decorative Geometric Gold Accent Behind Image */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#B59A6A]/20 pointer-events-none -z-10" />
            </motion.div>

            {/* Quick Heritage Stats Matrix */}
            <div className="grid grid-cols-2 gap-4">
              {storyData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#DFCA9E]/40 transition-colors"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#DFCA9E] block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/80 block mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-white/50 block mt-0.5">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Journey Story & Structured Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Story Lead Paragraphs */}
            <div className="space-y-6 text-white/80 leading-relaxed font-light text-base sm:text-lg">
              <p className="text-xl sm:text-2xl text-white font-serif font-light leading-relaxed">
                {storyData.lead}
              </p>

              {storyData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Interactive Milestone Journey (01 -> 04) */}
            <div className="mt-12 sm:mt-16 pt-10 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#DFCA9E]">
                  CHAPTERS OF GROWTH
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  DECIMAL PROGRESSION
                </span>
              </div>

              <div className="space-y-4">
                {storyData.milestones.map((item: Milestone, index: number) => {
                  const isActive = activeMilestone === index;
                  return (
                    <motion.div
                      key={item.number}
                      onClick={() => setActiveMilestone(index)}
                      className={`cursor-pointer rounded-xl p-5 sm:p-6 transition-all duration-300 border ${
                        isActive
                          ? 'bg-white/[0.04] border-[#DFCA9E]/50 shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
                          : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                              isActive ? 'text-[#DFCA9E]' : 'text-white/40'
                            }`}
                          >
                            {item.number}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B59A6A]">
                                {item.phase}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <h3 className="font-serif text-lg sm:text-xl font-normal text-white mt-0.5">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <span
                          className={`text-xs font-mono transition-transform duration-300 hidden sm:block ${
                            isActive ? 'text-[#DFCA9E] rotate-90' : 'text-white/30'
                          }`}
                        >
                          →
                        </span>
                      </div>

                      {/* Expandable or Highlighted Content */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <p className="text-xs font-mono uppercase tracking-widest text-[#DFCA9E] mb-1">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-white/75 font-light leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Section Bottom: The 5 Enduring Pillars (Trust Strip) */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#DFCA9E] block mb-2">
              FOUNDATIONAL COMMITMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              BUILT ON FIVE PILLARS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {storyData.trustKeywords.map((pillar, idx) => (
              <div
                key={pillar.label}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#DFCA9E]/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#B59A6A]">0{idx + 1}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#DFCA9E]/50 group-hover:text-[#DFCA9E] transition-colors" />
                </div>
                <h4 className="font-mono text-sm tracking-[0.25em] uppercase text-white font-semibold mb-2 group-hover:text-[#DFCA9E] transition-colors">
                  {pillar.label}
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
