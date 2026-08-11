import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cities } from '../../data/history';

export default function EarlyCities() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeCity = cities[selectedIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            BRONZE AGE URBANISM
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Where cities began.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Excavating India's earliest urban planning, water engineering, and merchant docks along ancient river systems.
          </p>
        </div>

        {/* City Explorer split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive list selector (cols 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-3 w-full text-left">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1">
              SELECT AN ANCIENT CITY
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
              {cities.map((city, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedIndex(index);
                      }
                    }}
                    className={`flex flex-col p-4 border text-left transition-all duration-300 outline-none w-64 lg:w-full flex-shrink-0 cursor-pointer h-24 justify-between ${
                      isActive 
                        ? "bg-[#171717] border-[#171717] text-white" 
                        : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                    } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                    aria-label={`Select ${city.name} details`}
                  >
                    <h3 className="font-serif text-base md:text-lg font-normal leading-tight">
                      {city.name}
                    </h3>
                    <span className={`text-[9px] font-sans uppercase tracking-wider block mt-1 truncate ${
                      isActive ? "text-white/60" : "text-[#6B6B6B]"
                    }`}>
                      {city.location.split('(')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Canvas & Details (cols 8) */}
          <div className="lg:col-span-8 space-y-6 text-left w-full">
            
            {/* Primary ruins photo */}
            <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCity.id}
                  src={activeCity.primaryImage}
                  alt={`Archaeological remains of the ancient city ${activeCity.name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* City details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h4 className="font-serif text-2xl text-[#171717] font-normal leading-tight">
                      {activeCity.name}
                    </h4>
                    <span className="text-xs font-sans font-semibold text-[#16734A]">
                      {activeCity.period}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-[#6B6B6B] block uppercase tracking-wider">
                    Location: {activeCity.location}
                  </span>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl">
                  {activeCity.significance}
                </p>

                {/* Archaeological metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#171717]/10">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Urban Planning
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B]">
                      {activeCity.urbanPlanning}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Water Systems
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B]">
                      {activeCity.waterManagement}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Trade & Crafts
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B]">
                      {activeCity.tradeCraft}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
