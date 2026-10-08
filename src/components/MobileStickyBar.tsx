import React from 'react';
import { Phone, Navigation, MapPin } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

interface MobileStickyBarProps {
  onVisitClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onVisitClick }) => {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. Direct Call Action */}
        <a
          href={storeConfig.phoneTel}
          aria-label="Call AVANI Store"
          className="min-h-[46px] flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer select-none"
        >
          <Phone className="w-4 h-4 text-[#DFCA9E]" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium text-white/90">
            CALL
          </span>
        </a>

        {/* 2. Google Maps Navigation */}
        <a
          href={storeConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Directions to AVANI Store"
          className="min-h-[46px] flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer select-none"
        >
          <Navigation className="w-4 h-4 text-[#B59A6A]" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider font-medium text-white/90">
            DIRECTIONS
          </span>
        </a>

        {/* 3. Visit Store In-Page Action */}
        <button
          onClick={onVisitClick}
          aria-label="View Store Details & Location"
          className="min-h-[46px] flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 py-1.5 rounded-sm bg-[#B59A6A] hover:bg-[#DFCA9E] active:bg-[#C5A880] text-[#121212] transition-colors cursor-pointer select-none font-semibold"
        >
          <MapPin className="w-4 h-4 text-[#121212]" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">
            VISIT STORE
          </span>
        </button>
      </div>
    </aside>
  );
};
