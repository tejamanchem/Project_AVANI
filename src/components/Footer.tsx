import React from 'react';
import { ArrowUp } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { AvaniCircularEmblem } from './AvaniCircularEmblem';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'HOME', href: '#hero' },
    { label: 'COLLECTIONS', href: '#collections' },
    { label: 'OUR STORY', href: '#story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'STORE', href: '#location' },
    { label: 'CONTACT', href: '#location' },
  ];

  return (
    <footer className="bg-[#070707] text-[#F8F4EF] pt-24 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          
          {/* Brand Mark with Official Unified Circular Emblem */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <AvaniCircularEmblem
                size="md"
                interactive={true}
                showSpinningRing={true}
                animateOnLoad={false}
              />
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-light tracking-[0.25em] text-white">
                  AVANI
                </span>
                <p className="text-[9px] font-mono uppercase tracking-[0.35em] text-[#DFCA9E] mt-1">
                  WOMEN'S FASHION DESTINATION
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed mt-6 max-w-sm">
              An evolving curation of royal silks, contemporary silhouettes, celebratory bridal drapes, and nurturing maternity comfort.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B59A6A] mb-6">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs tracking-wider uppercase font-medium">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Physical Store Location & Contact (Section 32) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B59A6A] mb-4">
                STORE LOCATION
              </h4>
              <p className="text-sm text-white/90 font-light">
                {storeConfig.city}, {storeConfig.state}
              </p>
              <p className="text-xs font-mono text-white/50 mt-1">
                PIN — {storeConfig.pinCode}
              </p>
              <p className="text-xs text-white/60 mt-2">
                {storeConfig.addressShort}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#DFCA9E]">
                  DIRECT CONTACT
                </p>
                <a
                  href={storeConfig.phoneTel}
                  className="text-sm font-mono text-white hover:text-[#DFCA9E] transition-colors mt-1 block"
                >
                  {storeConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-[#B59A6A]" />
            </button>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© 2026 AVANI. All Rights Reserved.</p>
          <p className="text-[11px] text-[#DFCA9E]/60 uppercase tracking-widest">
            A WORLD OF WOMEN'S FASHION
          </p>
        </div>
      </div>
    </footer>
  );
};
