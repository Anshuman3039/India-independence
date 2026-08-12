import React from 'react';
import { Link } from 'react-router-dom';
import CultureIntro from './CultureIntro';
import Festivals from './Festivals';
import MusicDance from './MusicDance';
import SoundStory from './SoundStory';
import Art from './Art';
import Crafts from './Crafts';
import CulturalMap from './CulturalMap';
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

        {/* 4. Sound & Story Integration */}
        <SoundStory />

        {/* 5. Visual Art Traditions */}
        <Art />

        {/* 5. Traditional Crafts */}
        <Crafts />

        {/* 6. Regional Cultural Map */}
        <CulturalMap />

        {/* NEW: Story-driven transition to Food */}
        <section className="bg-[#F7F4EE] pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 text-center overflow-hidden">
          <div className="pt-20 pb-4 text-center flex flex-col items-center space-y-6 max-w-2xl mx-auto w-full">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              NEXT: FOOD
            </span>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                Culture is also served at the table.
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
                Across India, traditions travel through kitchens, markets and shared meals. What people cook and eat carries geography, memory, migration and generations of knowledge.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                to="/food"
                className="group inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
              >
                EXPLORE FOOD 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
