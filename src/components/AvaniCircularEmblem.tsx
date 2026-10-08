import React from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';

export interface AvaniCircularEmblemProps {
  size?: 'navbar' | 'sm' | 'md' | 'lg' | 'hero' | 'responsive';
  className?: string;
  animateOnLoad?: boolean;
  interactive?: boolean;
  showSpinningRing?: boolean;
  onClick?: () => void;
}

export const AvaniCircularEmblem: React.FC<AvaniCircularEmblemProps> = ({
  size = 'responsive',
  className = '',
  animateOnLoad = true,
  interactive = true,
  showSpinningRing = false,
  onClick,
}) => {
  // Dimension classes mapped to responsive sizes
  const sizeClasses: Record<string, string> = {
    navbar: 'w-10 h-10 sm:w-11 sm:h-11',
    sm: 'w-14 h-14 sm:w-16 sm:h-16',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36',
    hero: 'w-[clamp(88px,10vw,144px)] h-[clamp(88px,10vw,144px)]',
    responsive: 'w-[clamp(76px,8.5vw,136px)] h-[clamp(76px,8.5vw,136px)]',
  };

  const containerSize = sizeClasses[size] || sizeClasses.responsive;
  const isNavbar = size === 'navbar';

  return (
    <motion.div
      onClick={onClick}
      initial={animateOnLoad ? { opacity: 0, scale: 0.95 } : undefined}
      animate={animateOnLoad ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        interactive
          ? {
              scale: 1.03,
              transition: { duration: 0.35, ease: 'easeOut' },
            }
          : undefined
      }
      className={`relative rounded-full aspect-square flex items-center justify-center select-none group cursor-pointer ${containerSize} ${className}`}
      style={{ aspectRatio: '1 / 1' }}
      aria-label="AVANI Official Brand Logo"
    >
      {/* Ambient Outer Halo / Glow (Luxury Depth) */}
      <div className="absolute inset-0 rounded-full bg-[#DFCA9E]/15 blur-lg opacity-40 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

      {/* Optional Slow Rotating Outer Dashed Accent */}
      {showSpinningRing && !isNavbar && (
        <svg
          className="absolute inset-[-6%] w-[112%] h-[112%] pointer-events-none origin-center animate-[spin_45s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="none"
            stroke="rgba(223, 202, 158, 0.3)"
            strokeWidth="0.8"
            strokeDasharray="3 7"
            className="group-hover:stroke-[rgba(223,202,158,0.65)] transition-colors duration-500"
          />
        </svg>
      )}

      {/* Official New 3D Sculpted Circular Brand Logo */}
      <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center shadow-[0_10px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(181,154,106,0.15)] group-hover:shadow-[0_14px_36px_rgba(0,0,0,0.8),0_0_24px_rgba(223,202,158,0.25)] transition-all duration-500">
        <img
          src={brandConfig.logo}
          alt="AVANI Official Brand Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.01]"
          loading="eager"
        />
      </div>
    </motion.div>
  );
};
