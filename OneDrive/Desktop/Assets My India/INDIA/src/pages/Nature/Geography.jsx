import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { geography } from '../../data/nature';

export default function Geography() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = geography[activeIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            PHYSICAL LANDSCAPES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            A country shaped by extremes.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            India's geography spans extreme altitudes, dry sands, and wet evergreen forests. Click below to explore each terrain.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Large Featured Landscape (cols 7) */}
          <div className="lg:col-span-7 space-y-6 text-left w-full">
            <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={`${activeItem.name} landscape`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* Description Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-2.5"
              >
                <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                  {activeItem.context}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                  {activeItem.name}
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-xl">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Environments list selector (cols 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5 w-full">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1 text-left">
              SELECT AN ENVIRONMENT
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2.5 scrollbar-hide">
              {geography.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                    className={`flex items-center justify-between p-4 border text-left transition-all duration-300 outline-none w-64 lg:w-full flex-shrink-0 cursor-pointer ${
                      isActive 
                        ? "bg-[#171717] border-[#171717] text-white" 
                        : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                    } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                    aria-label={`Select ${item.name} environment`}
                  >
                    <div>
                      <h4 className="font-serif text-sm md:text-base font-normal leading-tight">
                        {item.name}
                      </h4>
                      <span className={`text-[9px] font-sans uppercase tracking-wider block mt-0.5 ${
                        isActive ? "text-white/60" : "text-[#6B6B6B]"
                      }`}>
                        {item.context}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-light hidden lg:block ${
                      isActive ? "text-[#E8752A]" : "text-[#6B6B6B]/40"
                    }`}>
                      {`0${index + 1}`}
                    </span>
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
