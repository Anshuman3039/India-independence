import React from 'react';
import FoodIntro from './FoodIntro';
import RegionalCuisine from './RegionalCuisine';
import Ingredients from './Ingredients';
import FoodGeography from './FoodGeography';
import EverydayFood from './EverydayFood';
import FoodStories from './FoodStories';
import FoodClosing from './FoodClosing';
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

        {/* 7. Closing Statement Banner */}
        <FoodClosing />
      </div>
    </PageTransition>
  );
}
