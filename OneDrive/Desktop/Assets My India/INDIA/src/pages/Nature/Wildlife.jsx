import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wildlife } from '../../data/nature';

export default function Wildlife() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = wildlife[selectedIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            SPECIES PROFILE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Life in the wild.
          </h2>
        </div>

        {/* Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Focal Display Panel (cols 7) */}
          <div className="lg:col-span-7 space-y-6 text-left w-full">
            <div className="w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.id}
                  src={selected.image}
                  alt={`${selected.name} (${selected.scientificName}) in its natural habitat`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* Species description and conservation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                      {selected.name}
                    </h3>
                    <span className="text-xs md:text-sm font-sans italic text-[#6B6B6B]">
                      {selected.scientificNameReal || selected.scientificName}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                    {selected.region}
                  </span>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-xl">
                  {selected.description}
                </p>

                {/* Habitat and Conservation grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#171717]/5">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                      Natural Habitat
                    </span>
                    <p className="text-xs font-sans font-medium text-[#171717]">
                      {selected.habitat}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                      Conservation Context
                    </span>
                    <p className="text-xs font-sans font-medium text-[#171717]">
                      {selected.conservation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Selector List (cols 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-3 w-full">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1 text-left">
              SELECT A SPECIES
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
              {wildlife.map((animal, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={animal.id}
                    onClick={() => setSelectedIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedIndex(index);
                      }
                    }}
                    className={`flex items-center space-x-4 p-3 border text-left transition-all duration-300 outline-none w-72 lg:w-full flex-shrink-0 cursor-pointer ${
                      isSelected 
                        ? "bg-[#171717] border-[#171717] text-white" 
                        : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                    } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                    aria-label={`Select ${animal.name}`}
                  >
                    {/* Small thumbnail crop */}
                    <div className="w-12 h-12 overflow-hidden bg-charcoal/10 flex-shrink-0">
                      <img 
                        src={animal.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Species label metadata */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm md:text-base font-normal leading-tight truncate">
                        {animal.name}
                      </h4>
                      <span className={`text-[10px] font-sans uppercase tracking-wider block mt-0.5 ${
                        isSelected ? "text-white/60" : "text-[#6B6B6B]"
                      }`}>
                        {animal.region.split(',')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
