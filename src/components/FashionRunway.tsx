import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { images } from '../data/images';

export const FashionRunway: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (dir: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstElementChild?.clientWidth || 320;
      const offset = dir === 'left' ? -cardWidth : cardWidth;
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Track active slide on mobile swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.firstElementChild?.clientWidth || 300;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(images.runway.length - 1, Math.max(0, idx)));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="collections" className="py-20 sm:py-28 lg:py-32 bg-[#0E0E0E] text-[#F8F4EF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B59A6A]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] font-mono text-[#DFCA9E]">
                CREATED FOR EVERY WOMAN
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.05]">
              CURATED<br />
              <span className="italic text-[#DFCA9E]">FOR EVERY</span><br />
              MOMENT.
            </h2>
          </div>

          {/* Runway Navigation & Mobile Swipe Hint (Section 31.6) */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#DFCA9E]/80">
              Swipe to explore →
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="min-h-[44px] min-w-[44px] rounded-full border border-white/20 hover:border-[#DFCA9E] active:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="min-h-[44px] min-w-[44px] rounded-full border border-white/20 hover:border-[#DFCA9E] active:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Touch-Friendly Horizontal Runway Track with Native Snap Points (Section 31.6) */}
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x hide-scrollbar px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto pb-6 select-none"
      >
        {images.runway.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 snap-start w-[80vw] max-w-[300px] sm:w-[320px] md:w-[350px] group flex flex-col"
          >
            {/* Visual Runway Card */}
            <div className="relative aspect-[3/4.2] overflow-hidden rounded-[18px] sm:rounded-lg bg-[#1a1a1a] shadow-2xl border border-white/10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 active:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

              {/* Top Category Tag */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E] bg-black/75 px-2.5 py-1 backdrop-blur-md border border-white/10 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Editorial Details */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 font-light mt-1 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFCA9E]">
                  <span>Explore Edit</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Pagination Dots (Section 31.6) */}
      <div className="md:hidden flex items-center justify-center gap-2 pt-2 pb-4">
        {images.runway.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              if (containerRef.current) {
                const cardWidth = containerRef.current.firstElementChild?.clientWidth || 300;
                containerRef.current.scrollTo({ left: idx * (cardWidth + 16), behavior: 'smooth' });
              }
            }}
            aria-label={`Go to ${item.title}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-6 h-1.5 bg-[#DFCA9E]'
                : 'w-1.5 h-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
