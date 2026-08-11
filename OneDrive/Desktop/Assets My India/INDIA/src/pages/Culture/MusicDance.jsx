import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { musicDance } from '../../data/culture';

export default function MusicDance() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = musicDance[selectedIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            PERFORMANCE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            India moves to many rhythms.
          </h2>
        </div>

        {/* Split Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Prominent Display Panel */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.id}
                  src={selected.image}
                  alt={`${selected.title} dance from ${selected.region}`}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* Display details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  {selected.region}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                  {selected.title}
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-xl">
                  {selected.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-3 w-full">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1 text-left">
              SELECT A DANCE STYLE
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
              {musicDance.map((dance, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={dance.id}
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
                    aria-label={`Select ${dance.title} dance style from ${dance.region}`}
                  >
                    {/* Tiny thumbnail */}
                    <div className="w-12 h-12 overflow-hidden bg-charcoal/10 flex-shrink-0">
                      <img 
                        src={dance.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Metadata */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm md:text-base font-normal leading-tight truncate">
                        {dance.title}
                      </h4>
                      <span className={`text-[10px] font-sans uppercase tracking-wider block mt-0.5 ${
                        isSelected ? "text-white/60" : "text-[#6B6B6B]"
                      }`}>
                        {dance.region}
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
