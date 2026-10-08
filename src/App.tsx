import React, { useCallback } from 'react';
import { LaserTrail } from './components/LaserTrail';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  const scrollToSection = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleExploreClick = () => scrollToSection('#style-index');
  const handleVisitClick = () => scrollToSection('#location');

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#F8F4EF] antialiased selection:bg-[#B59A6A]/30 selection:text-white pb-14 lg:pb-0 overflow-x-hidden">
      {/* Fashion Editorial Laser-Pointer Light-Trail (Desktop only, automatically disabled on mobile) */}
      <LaserTrail />

      {/* Gold Hairline Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Modern Navigation with Dedicated Mobile Fullscreen Menu */}
      <Navbar onVisitClick={handleVisitClick} />

      {/* Main Fashion Editorial Journey */}
      <div className="flex-grow">
        <Home
          onExploreClick={handleExploreClick}
          onVisitClick={handleVisitClick}
        />
      </div>

      {/* Minimalist Editorial Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (CALL, DIRECTIONS, VISIT STORE) */}
      <MobileStickyBar onVisitClick={handleVisitClick} />
    </div>
  );
};

export default App;
