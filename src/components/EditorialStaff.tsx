import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Users, Award } from 'lucide-react';
import { images } from '../data/images';
import { storeConfig } from '../data/storeConfig';

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 25;
    const steps = duration / step;
    const inc = target / steps;

    const timer = setInterval(() => {
      start += inc;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-serif font-light text-[clamp(3.5rem,14vw,7rem)] sm:text-8xl md:text-9xl text-white tracking-tight leading-none">
      {val}
      <span className="text-[#B59A6A] font-serif">{suffix}</span>
    </span>
  );
};

export const EditorialStaff: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#121212] text-[#F8F4EF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Giant Visual Statement (Section 18) */}
        <div className="border-b border-white/10 pb-20 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B59A6A]" />
            <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
              PEOPLE & DEDICATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-baseline">
            {/* Stat 1: 100+ Staff */}
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-4 mb-4">
                <AnimatedCounter target={100} suffix="+" />
                <span className="font-mono text-sm sm:text-base uppercase tracking-[0.3em] text-[#DFCA9E]">
                  STAFF
                </span>
              </div>
              <p className="font-serif italic text-2xl sm:text-3xl text-white/90 font-light max-w-xl">
                "An experienced team dedicated to making every shopping experience personal."
              </p>
            </div>

            {/* Stat 2: 10+ Management */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
              <div className="flex items-baseline gap-4 mb-4">
                <AnimatedCounter target={10} suffix="+" />
                <span className="font-mono text-sm sm:text-base uppercase tracking-[0.3em] text-[#DFCA9E]">
                  MANAGEMENT
                </span>
              </div>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Overseeing seamless styling advisory, impeccable quality standards, and personalized hospitality across every department.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Story: The People Behind The Experience (Section 19) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Prose */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.08] mb-6">
                THE PEOPLE<br />
                <span className="italic text-[#DFCA9E]">BEHIND THE</span><br />
                EXPERIENCE.
              </h3>

              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
                With 100+ dedicated professionals and 10+ management members, AVANI brings together fashion expertise, personal attention and a welcoming shopping experience.
              </p>

              <p className="text-sm text-white/60 font-light leading-relaxed mb-8">
                From assisting with intricate bridal drape trials to finding the exact breathable maternity silhouette or matching border lace, our associates ensure your time here is joyful, unhurried, and genuinely cared for.
              </p>

              <div className="flex items-center gap-6 pt-4 text-xs font-mono tracking-widest text-[#DFCA9E]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#B59A6A]" />
                  <span>{storeConfig.staffCount} STYLISTS</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B59A6A]" />
                  <span>{storeConfig.managementCount} LEADERS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stylist Team Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-[4/4.5] overflow-hidden shadow-2xl bg-[#1c1c1c] border border-white/10"
            >
              <img
                src={images.store.staffTeam}
                alt="AVANI Fashion Advisory Team"
                className="w-full h-full object-cover filter brightness-[0.92] hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#121212]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg font-normal">Personal In-Store Styling</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DFCA9E] mt-0.5">
                    Attentive guidance for every celebration
                  </p>
                </div>
                <Sparkles className="w-4 h-4 text-[#B59A6A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
