import React from 'react';
import { Phone, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

export const EditorialLocation: React.FC = () => {
  return (
    <section id="location" className="py-28 sm:py-36 bg-[#101010] text-[#F8F4EF] overflow-hidden relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B59A6A]" />
            <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#DFCA9E]">
              SHOWROOM DESTINATION
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.05]">
            FIND<br />
            <span className="italic text-[#DFCA9E]">AVANI.</span>
          </h2>
        </div>

        {/* Large Immersive Location Composition (Section 24) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Styled Map Graphic with Animated Beacon (Section 25) */}
          <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[520px] bg-[#181818] border border-white/10 p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Architectural Cartographic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* Compass / Radial Rings */}
            <div className="absolute right-12 top-12 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute right-12 top-12 w-52 h-52 rounded-full border border-white/5 pointer-events-none" />

            {/* Top Coordinate Pill */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#DFCA9E]">
              <span>SHOWROOM COORDINATES</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                OPEN TODAY
              </span>
            </div>

            {/* Center: Animated Minimalist Map Marker (Section 25) */}
            <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center text-center">
              <div className="relative flex items-center justify-center w-28 h-28">
                {/* Expanding Outer Ring 2 */}
                <span className="absolute w-28 h-28 rounded-full border border-[#B59A6A]/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                {/* Expanding Outer Ring 1 */}
                <span className="absolute w-20 h-20 rounded-full border border-[#DFCA9E]/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                {/* Center Solid Beacon */}
                <div className="w-6 h-6 rounded-full bg-[#B59A6A] shadow-lg shadow-[#B59A6A]/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#121212]" />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-serif text-2xl font-light text-white">AVANI FLAGSHIP</h4>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#DFCA9E] mt-1">
                  Near yanugula meda • Gandhi bomalla center
                </p>
              </div>
            </div>

            {/* Bottom Google Maps Anchor */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">DIRECT NAVIGATION</span>
              <a
                href={storeConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DFCA9E] hover:text-white transition-colors"
              >
                <span>OPEN GOOGLE MAPS</span>
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Location Typography (Section 26) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#B59A6A] block mb-3">
                PHYSICAL STORE
              </span>

              {/* Large Editorial Location Typography (Section 26) */}
              <h3 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[0.95] tracking-tight">
                {storeConfig.city.toUpperCase()}<br />
                <span className="text-2xl sm:text-4xl text-white/60 font-serif italic block mt-2">
                  {storeConfig.state}
                </span>
              </h3>

              <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
                {/* Address */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                    STREET ADDRESS
                  </p>
                  <p className="text-base sm:text-lg font-light text-white/90 mt-1 leading-relaxed">
                    {storeConfig.address}
                  </p>
                  <p className="text-xs font-mono text-white/50 mt-1">
                    PIN — {storeConfig.pinCode}
                  </p>
                </div>

                {/* Timing */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                    SHOWROOM HOURS
                  </p>
                  <p className="text-base sm:text-lg font-light text-white/90 mt-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B59A6A]" />
                    <span>{storeConfig.storeHours}</span>
                  </p>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    Open 7 days a week including Sundays & festival holidays.
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCA9E]">
                    DIRECT TELEPHONE
                  </p>
                  <a
                    href={storeConfig.phoneTel}
                    className="text-xl sm:text-2xl font-mono text-white hover:text-[#DFCA9E] transition-colors mt-1 inline-flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5 text-[#B59A6A]" />
                    <span>{storeConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive CTAs: Get Directions & Call AVANI (Section 29 & 30) */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
              <a
                href={storeConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3.5 bg-[#B59A6A] hover:bg-[#DFCA9E] text-[#121212] font-semibold text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-3 rounded-sm transition-all shadow-lg active:scale-[0.98]"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={storeConfig.phoneTel}
                className="min-h-[48px] px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white hover:text-[#DFCA9E] text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-3 rounded-sm transition-all active:scale-[0.98]"
              >
                <span>CALL AVANI</span>
                <Phone className="w-4 h-4 text-[#B59A6A]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
