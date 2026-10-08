import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart, Sparkles } from 'lucide-react';
import { images } from '../data/images';

export const EditorialMaternity: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#F3EDE2] text-[#171717] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Arch Mask Imagery (Section 11 & 20) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative max-w-md mx-auto"
            >
              {/* Arch Shaped Container (Section 11) */}
              <div
                className="relative aspect-[3/4.2] overflow-hidden shadow-2xl bg-[#E8E2D5] rounded-t-[140px] border border-[#171717]/10"
              >
                <img
                  src={images.maternity.main}
                  alt="AVANI Women's Maternity Fashion"
                  className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E]">
                    DEDICATED WING
                  </span>
                  <p className="font-serif text-xl font-normal mt-0.5">
                    Nurturing Motherhood
                  </p>
                </div>
              </div>

              {/* Overlapping Detail Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 shadow-xl border border-[#E8E2D5] flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#8A4F5A]" />
                <div>
                  <p className="font-serif text-sm font-semibold text-[#171717]">Pure Organic Fibers</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/60">Breathable & Adaptive</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Message */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#8A4F5A]" />
                <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#8A4F5A]">
                  SPECIALIZED LINE
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2.5rem,9vw,5rem)] sm:text-6xl md:text-7xl font-light text-[#171717] leading-[1.05] mb-6">
                COMFORT<br />
                <span className="italic text-[#8A4F5A]">MEETS</span><br />
                CONFIDENCE.
              </h2>

              <p className="text-lg sm:text-xl text-[#171717]/85 font-light leading-relaxed mb-6">
                "Thoughtfully selected styles designed around comfort, movement and confidence — because feeling good is always in style."
              </p>

              <p className="text-sm text-[#171717]/70 font-light leading-relaxed mb-8 max-w-lg">
                Explore an extensive collection of maternity dresses, bump-friendly celebratory kurtis, expandable nursing essentials, and whisper-soft organic lounging sets created specifically for expecting mothers.
              </p>

              {/* Key Fabric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E8E2D5]">
                <div className="flex items-start gap-3">
                  <Feather className="w-4 h-4 text-[#8A4F5A] mt-1" />
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#171717]">Hypoallergenic Drapes</h4>
                    <p className="text-xs text-[#171717]/60 mt-0.5">Gentle bamboo-modal and mulmul cottons.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#8A4F5A] mt-1" />
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#171717]">Celebration Ready</h4>
                    <p className="text-xs text-[#171717]/60 mt-0.5">Special occasion suits & baby shower maxis.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
