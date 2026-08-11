import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { freedomMovement } from '../../data/history';

export default function FreedomMovement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestone = freedomMovement[activeIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            NATIONAL MOVEMENT
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            The road to freedom.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            The struggle for independence comprised diverse regional uprisings, ideological debates, and broad mass mobilizations.
          </p>
        </div>

        {/* Milestone Selector (Horizontal track of years) */}
        <div className="w-full border-b border-[#171717]/10 pb-4 overflow-x-auto scrollbar-hide flex flex-row space-x-6 md:space-x-8">
          {freedomMovement.map((m, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={m.year}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`flex-shrink-0 cursor-pointer outline-none pb-2 border-b-2 text-left transition-all duration-300 ${
                  isActive 
                    ? "border-[#E8752A] text-[#171717] font-semibold" 
                    : "border-transparent text-[#6B6B6B] hover:text-[#171717]"
                } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                aria-label={`Select ${m.year} milestone: ${m.title}`}
              >
                <span className="font-mono text-xs md:text-sm block">
                  {m.year}
                </span>
                <span className="text-[10px] md:text-xs font-sans uppercase tracking-wider block text-[#6B6B6B]">
                  {m.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Milestone Display panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left: Large archival image (cols 7) */}
          <div className="lg:col-span-7 space-y-4 w-full">
            <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={milestone.year}
                  src={milestone.primaryImage}
                  alt={`Archival photography representing the milestone: ${milestone.title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>
            <span className="text-[9px] font-sans text-[#6B6B6B]/60 tracking-wider block">
              Archival Record • Sourced via Wikimedia Commons
            </span>
          </div>

          {/* Right: Description & details (cols 5) */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                    {milestone.year} MILESTONE
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                    {milestone.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  {milestone.description}
                </p>

                <div className="p-4 bg-white border border-[#171717]/5 shadow-sm space-y-1">
                  <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    Historical Context Note
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {milestone.context}
                  </p>
                </div>

                {/* Slideshow Buttons */}
                <div className="flex items-center space-x-3 pt-4 text-xs font-sans font-bold text-[#171717]">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev - 1 + freedomMovement.length) % freedomMovement.length)}
                    className="px-4 py-2 border border-[#171717]/10 hover:border-[#171717]/30 cursor-pointer"
                    aria-label="Previous freedom milestone"
                  >
                    PREVIOUS
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % freedomMovement.length)}
                    className="px-4 py-2 border border-[#171717]/10 hover:border-[#171717]/30 cursor-pointer"
                    aria-label="Next freedom milestone"
                  >
                    NEXT
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
