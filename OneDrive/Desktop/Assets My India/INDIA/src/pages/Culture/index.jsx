import React from 'react';
import CultureIntro from './CultureIntro';
import Festivals from './Festivals';
import MusicDance from './MusicDance';
import Art from './Art';
import Crafts from './Crafts';
import CulturalMap from './CulturalMap';
import CultureClosing from './CultureClosing';
import PageTransition from '../../components/global/PageTransition';

export default function Culture() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE]">
        {/* 1. Introduction Header */}
        <CultureIntro />

        {/* 2. Festivals Feature Gallery */}
        <Festivals />

        {/* 3. Music & Dance Showcase */}
        <MusicDance />

        {/* 4. Visual Art Traditions */}
        <Art />

        {/* 5. Traditional Crafts */}
        <Crafts />

        {/* 6. Regional Cultural Map */}
        <CulturalMap />

        {/* 7. Closing Statement Banner */}
        <CultureClosing />
      </div>
    </PageTransition>
  );
}
