import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { images } from '../data/images';

export const EditorialStatement: React.FC = () => {
  return (
    <section id="editorial" className="py-24 sm:py-32 bg-[#F8F4EF] text-[#171717] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oversized Editorial Statement */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#8A4F5A]" />
                <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#8A4F5A]">
                  BRAND PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2.25rem,8.5vw,4.5rem)] sm:text-5xl md:text-6xl font-light text-[#171717] leading-[1.02] mb-6">
                MORE<br />
                <span className="italic text-[#8A4F5A]">THAN</span><br />
                FASHION.
              </h2>

              <p className="text-base sm:text-lg text-[#171717]/85 font-light leading-relaxed mb-5 max-w-xl">
                An evolving expression of style, bringing together timeless elegance, contemporary silhouettes and effortless everyday fashion.
              </p>

              <p className="text-xs sm:text-sm text-[#171717]/70 font-light leading-relaxed mb-8 max-w-lg">
                Crafted to honor the multifaceted lives of women today, AVANI unites heirloom handlooms with crisp tailoring, fluid eveningwear, and thoughtful maternity grace across a spacious multi-level fashion showroom.
              </p>

              {/* Editorial Line Accent & Craft Pill */}
              <div className="pt-6 border-t border-[#E8E2D5] flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8A4F5A]">
                  <Sparkles className="w-4 h-4 text-[#B59A6A]" />
                  <span>CRAFT • HERITAGE • POISE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Overlapping Imagery with Pure Women's Fashion & Silk Details */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              {/* Main Tall Vertical Editorial Image */}
              <div className="relative aspect-[3/4.2] w-[85%] ml-auto overflow-hidden rounded-sm shadow-2xl bg-[#171717]">
                <img
                  src={images.editorial.tall}
                  alt="AVANI Women's Editorial Saree Silhouette"
                  className="w-full h-full object-cover filter brightness-[0.95] hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 text-right text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                    HEIRLOOM SILKS
                  </span>
                </div>
              </div>

              {/* Overlapping Circular Image Mask — Pure Zari / Fabric Weave Detail */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 left-0 sm:-left-4 w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-[#F8F4EF] bg-[#171717]"
              >
                <img
                  src={images.editorial.detailTexture}
                  alt="Zari Silk Texture Detail"
                  className="w-full h-full object-cover filter brightness-[0.95] hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Connecting Graphic Line & Floating Label */}
              <div className="absolute top-1/4 -left-4 hidden sm:flex items-center gap-3">
                <span className="w-10 h-[1px] bg-[#B59A6A]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A4F5A]">
                  SIGNATURE WEAVES
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
