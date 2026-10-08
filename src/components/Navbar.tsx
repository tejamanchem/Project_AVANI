import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Navigation } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

interface NavbarProps {
  onVisitClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onVisitClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisitHovered, setIsVisitHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exact mobile-first navigation links as specified in Section 31.2
  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'COLLECTIONS', href: '#collections' },
    { label: 'ABOUT', href: '#editorial' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'STORE', href: '#location' },
    { label: 'CONTACT', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'py-3.5 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-2xl text-white'
            : 'py-5 sm:py-6 bg-gradient-to-b from-black/85 via-black/35 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left Brand Identity */}
          <a
            href="#hero"
            className="group flex items-baseline gap-2.5 sm:gap-3 tracking-widest cursor-pointer py-1"
            aria-label="AVANI Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.25em] sm:tracking-[0.3em] text-white group-hover:text-[#DFCA9E] transition-colors">
              AVANI
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] font-mono text-[#B59A6A] hidden sm:inline">
              WOMEN'S FASHION
            </span>
          </a>

          {/* Desktop Floating Menu Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.25em] font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-white transition-colors group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#B59A6A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Desktop Animated Circular "VISIT" Control */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onVisitClick}
              onMouseEnter={() => setIsVisitHovered(true)}
              onMouseLeave={() => setIsVisitHovered(false)}
              className="relative group flex items-center cursor-pointer select-none"
              aria-label="Visit AVANI Store"
            >
              <motion.div
                layout
                className="relative flex items-center justify-center rounded-full bg-white/5 border border-white/20 backdrop-blur-md group-hover:border-[#B59A6A] group-hover:bg-[#B59A6A] text-white group-hover:text-[#121212] transition-colors duration-500 overflow-hidden min-h-[44px]"
                style={{
                  height: 44,
                  minWidth: 44,
                  paddingLeft: isVisitHovered ? 18 : 14,
                  paddingRight: isVisitHovered ? 18 : 14,
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(181, 154, 106, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    className="origin-center animate-[spin_12s_linear_infinite]"
                  />
                </svg>

                <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] group-hover:bg-[#121212] transition-all" />
                  
                  <AnimatePresence mode="wait">
                    {isVisitHovered ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        className="flex items-center gap-1.5 font-sans font-semibold tracking-[0.2em]"
                      >
                        <span>VISIT AVANI</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.div>
                    ) : (
                      <motion.span
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        VISIT
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </button>
          </div>

          {/* Dedicated Mobile Controls (Section 31.2 & 31.9) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Quick Call Action Button on Mobile */}
            <a
              href={storeConfig.phoneTel}
              aria-label="Call AVANI Store"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-white/10 hover:bg-[#B59A6A] hover:text-[#121212] text-[#DFCA9E] border border-white/15 flex items-center justify-center transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button (>= 44px Touch Target) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="min-h-[44px] min-w-[44px] px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-2 transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFCA9E] hidden sm:inline">
                MENU
              </span>
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Mobile Fullscreen Animated Navigation (Section 31.2) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#0E0E0E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden text-white overflow-y-auto"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="font-serif text-3xl font-normal tracking-[0.25em] text-white">
                  AVANI
                </span>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFCA9E] mt-1">
                  Women's Fashion Destination
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] min-w-[48px] p-3 rounded-full border border-white/20 text-white hover:text-[#DFCA9E] hover:border-[#DFCA9E] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col space-y-4 my-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.05, duration: 0.4 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="min-h-[48px] text-left font-serif text-3xl sm:text-4xl text-white/90 hover:text-[#DFCA9E] transition-colors flex items-center justify-between py-2 border-b border-white/5 cursor-pointer group"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#B59A6A]">0{idx + 1}</span>
                    <span className="tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#DFCA9E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.button>
              ))}
            </nav>

            {/* Bottom Actions Panel for Mobile Direct Access (Section 31.9 & 31.10) */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                <span>SHOWROOM HOURS</span>
                <span className="text-[#DFCA9E]">{storeConfig.storeHours}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={storeConfig.phoneTel}
                  className="min-h-[48px] px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-sm text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFCA9E]" />
                  <span>CALL AVANI</span>
                </a>

                <a
                  href={storeConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-4 py-3 bg-[#B59A6A] hover:bg-[#DFCA9E] text-[#121212] font-semibold rounded-sm text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>DIRECTIONS</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
