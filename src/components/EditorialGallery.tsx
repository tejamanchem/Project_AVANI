import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../data/images';

export const EditorialGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<typeof images.gallery[0] | null>(null);

  const handleNext = () => {
    if (!activeItem) return;
    const idx = images.gallery.findIndex((i) => i.id === activeItem.id);
    const nextIdx = (idx + 1) % images.gallery.length;
    setActiveItem(images.gallery[nextIdx]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const idx = images.gallery.findIndex((i) => i.id === activeItem.id);
    const prevIdx = (idx - 1 + images.gallery.length) % images.gallery.length;
    setActiveItem(images.gallery[prevIdx]);
  };

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#F8F4EF] text-[#171717] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8A4F5A]" />
              <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#8A4F5A]">
                VISUAL ARCHIVE
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#171717] leading-[1.05]">
              FASHION<br />
              <span className="italic text-[#8A4F5A]">GALLERY.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#171717]/70 font-light leading-relaxed">
            Textures in pure silk, hand-embroidered borders, fluid western lines, and calm showroom light — captured in our ongoing visual journal.
          </p>
        </div>

        {/* Editorial Overlapping Composition (Section 22) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Item 1: Large Tall Portrait (5 cols) */}
          <div
            onClick={() => setActiveItem(images.gallery[0])}
            className="md:col-span-5 relative aspect-[3/4.5] overflow-hidden bg-[#171717] group cursor-pointer shadow-xl"
          >
            <img
              src={images.gallery[0].image}
              alt={images.gallery[0].title}
              className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E] block mb-1">
                {images.gallery[0].category}
              </span>
              <h3 className="font-serif text-xl">{images.gallery[0].title}</h3>
            </div>
          </div>

          {/* Item 2 & 3: Staggered Center Column (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6 sm:gap-8">
            {/* Wide Landscape */}
            <div
              onClick={() => setActiveItem(images.gallery[1])}
              className="relative aspect-[16/10] overflow-hidden bg-[#171717] group cursor-pointer shadow-xl"
            >
              <img
                src={images.gallery[1].image}
                alt={images.gallery[1].title}
                className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E] block mb-1">
                  {images.gallery[1].category}
                </span>
                <h3 className="font-serif text-xl">{images.gallery[1].title}</h3>
              </div>
            </div>

            {/* Two Side-By-Side Editorial Blocks */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div
                onClick={() => setActiveItem(images.gallery[2])}
                className="relative aspect-[3/4] overflow-hidden bg-[#171717] group cursor-pointer shadow-xl"
              >
                <img
                  src={images.gallery[2].image}
                  alt={images.gallery[2].title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-serif text-base">{images.gallery[2].title}</h4>
                </div>
              </div>

              <div
                onClick={() => setActiveItem(images.gallery[4])}
                className="relative aspect-[3/4] overflow-hidden bg-[#171717] group cursor-pointer shadow-xl"
              >
                <img
                  src={images.gallery[4].image}
                  alt={images.gallery[4].title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-serif text-base">{images.gallery[4].title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Section 22) */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Controls */}
            <button
              onClick={() => setActiveItem(null)}
              className="min-h-[44px] min-w-[44px] absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="min-h-[44px] min-w-[44px] absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 sm:bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="min-h-[44px] min-w-[44px] absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 sm:bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-20 max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain shadow-2xl border border-white/20"
              />
              <div className="mt-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E]">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-2xl font-light text-white mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-white/70 font-light mt-1 max-w-md mx-auto">
                  {activeItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
