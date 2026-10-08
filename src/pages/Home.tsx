import React from 'react';
import { Hero } from '../components/Hero';
import { EditorialStatement } from '../components/EditorialStatement';
import { BrandStory } from '../components/BrandStory';
import { StyleIndex } from '../components/StyleIndex';
import { FashionRunway } from '../components/FashionRunway';
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

      {/* 2. Brand Philosophy / Introduction: More Than Fashion */}
      <EditorialStatement />

      {/* 3. The AVANI Story: Heritage, Journey, Official Emblem & Flagship Facade */}
      <BrandStory />

      {/* 4. Fashion Categories: Vertical Style Index */}
      <StyleIndex />

      {/* 5. Horizontal Fashion Runway: Curated For Every Moment */}
      <FashionRunway />

      {/* 6. Dynamic Split Screen: Traditional vs Contemporary Duality */}
      <DynamicDuality />

      {/* 7. People & Scale: 100+ Staff & 10+ Management Leadership */}
      <EditorialStaff />

      {/* 8. Specialized Maternity Line: Comfort Meets Confidence */}
      <EditorialMaternity />

      {/* 9. Showroom Experience: Step Into The AVANI Experience */}
      <EditorialExperience
        onVisitClick={onVisitClick}
      />

      {/* 10. Visual Archive: Overlapping Editorial Fashion Gallery & Lightbox */}
      <EditorialGallery />

      {/* 11. Store Destination: Palakollu Flagship Location & Directions */}
      <EditorialLocation />

      {/* 12. Final Dark Fashion Canvas: Your Style. Your Moment. */}
      <EditorialFinalCTA
        onExploreClick={onExploreClick}
      />
    </main>
  );
};
