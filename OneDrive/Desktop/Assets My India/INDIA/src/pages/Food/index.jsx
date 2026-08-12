import React from 'react';
import { Link } from 'react-router-dom';
import FoodIntro from './FoodIntro';
import RegionalCuisine from './RegionalCuisine';
import Ingredients from './Ingredients';
import FoodGeography from './FoodGeography';
import EverydayFood from './EverydayFood';
import FoodStories from './FoodStories';
import PageTransition from '../../components/global/PageTransition';

export default function Food() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE]">
        {/* 1. Introduction Header */}
        <FoodIntro />

        {/* 2. Regional Cuisines */}
        <RegionalCuisine />

        {/* 3. Ingredients Interactive */}
        <Ingredients />

        {/* 4. Geography Map Integration */}
        <FoodGeography />

        {/* 5. Everyday India Food */}
        <EverydayFood />

        {/* 6. Historical Chronicles */}
        <FoodStories />

        {/* NEW: Story-driven transition to Nature */}
        <section className="bg-[#F7F4EE] pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 text-center overflow-hidden">
          <div className="pt-20 pb-4 text-center flex flex-col items-center space-y-6 max-w-2xl mx-auto w-full">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              NEXT: NATURE
            </span>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                From what the land grows,<br />to the landscapes that shape it.
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
                India's culinary traditions are shaped by its soils, waters and climates. Step into the protected forests, mountain chains and wetlands that sustain them.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                to="/nature"
                className="group inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
              >
                NEXT → NATURE
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
