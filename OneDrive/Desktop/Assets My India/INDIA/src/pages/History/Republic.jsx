import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { republic } from '../../data/history';

export default function Republic() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeComparison = republic[selectedIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            POST-INDEPENDENCE TRANSFORMATION
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            What came after independence?
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Tracing infrastructural and scientific transitions across decades of republic building. Click below to view comparisons.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 border-b border-[#171717]/10 pb-4 justify-start">
          {republic.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIndex(index);
                  }
                }}
                className={`px-4 py-2 border text-xs font-sans font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 outline-none ${
                  isActive 
                    ? "bg-[#171717] border-[#171717] text-white" 
                    : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white"
                } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                aria-label={`Show ${item.title} comparison`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Then & Now Comparison Cards (Side-by-side layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          <AnimatePresence mode="wait">
            
            {/* Left Column: Then */}
            <motion.div
              key={`${activeComparison.id}-then`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  HISTORICAL ORIGINS
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-tight">
                  Then
                </h3>
              </div>

              {/* Photo Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                <img
                  src={activeComparison.thenImage}
                  alt={`${activeComparison.title} in the early post-independence era`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
              </div>

              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                {activeComparison.thenDesc}
              </p>
            </motion.div>

            {/* Right Column: Now */}
            <motion.div
              key={`${activeComparison.id}-now`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                  CONTEMPORARY LANDSCAPE
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-tight">
                  Now
                </h3>
              </div>

              {/* Photo Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                <img
                  src={activeComparison.nowImage}
                  alt={`${activeComparison.title} in contemporary India`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
              </div>

              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                {activeComparison.nowDesc}
              </p>
            </motion.div>

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
