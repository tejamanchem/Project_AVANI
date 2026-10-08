import React from 'react';
import { Hero } from '../components/Hero';
import { StyleIndex } from '../components/StyleIndex';
import { FashionRunway } from '../components/FashionRunway';
import { EditorialStatement } from '../components/EditorialStatement';
import { DynamicDuality } from '../components/DynamicDuality';
import { EditorialStaff } from '../components/EditorialStaff';
import { EditorialMaternity } from '../components/EditorialMaternity';
import { EditorialExperience } from '../components/EditorialExperience';
import { EditorialGallery } from '../components/EditorialGallery';
import { EditorialLocation } from '../components/EditorialLocation';
import { EditorialFinalCTA } from '../components/EditorialFinalCTA';

interface HomeProps {
  onExploreClick: () => void;
  onVisitClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onExploreClick, onVisitClick }) => {
  return (
    <main>
      {/* 1. Full-Viewport Cinematic Fashion Campaign Hero */}
      <Hero
        onExploreClick={onExploreClick}
        onVisitClick={onVisitClick}
      />

      {/* 2. Vertical Fashion Index with Cursor-Following Image Reveal */}
      <StyleIndex />

      {/* 3. Horizontal Fashion Runway: Curated For Every Moment */}
      <FashionRunway />

      {/* 4. Brand Philosophy: More Than Fashion Overlapping Composition */}
      <EditorialStatement />

      {/* 5. Dynamic Split Screen: Traditional vs Contemporary Duality */}
      <DynamicDuality />

      {/* 6. People & Dedication: Giant Typography Numbers & Staff Narrative */}
      <EditorialStaff />

      {/* 7. Specialized Maternity Line: Comfort Meets Confidence */}
      <EditorialMaternity />

      {/* 8. Showroom Environment: Step Into The AVANI Experience */}
      <EditorialExperience
        onVisitClick={onVisitClick}
      />

      {/* 9. Visual Archive: Overlapping Editorial Fashion Gallery & Lightbox */}
      <EditorialGallery />

      {/* 10. Showroom Destination: Immersive Cartographic Beacon Location */}
      <EditorialLocation />

      {/* 11. Final Dark Fashion Canvas: Your Style. Your Moment. */}
      <EditorialFinalCTA
        onExploreClick={onExploreClick}
      />
    </main>
  );
};
