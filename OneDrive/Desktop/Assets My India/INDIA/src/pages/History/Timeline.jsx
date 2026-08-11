import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eras } from '../../data/history';

export default function Timeline() {
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const activeEra = eras[activeEraIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            CHRONOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Through time.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            An overview of broad historical eras shaping the subcontinent, from early urbanism to a modern republic.
          </p>
        </div>

        {/* Timeline Navigation Headers */}
        <div className="w-full border-b border-[#171717]/10 pb-4 overflow-x-auto scrollbar-hide flex flex-row space-x-6 md:space-x-8">
          {eras.map((era, index) => {
            const isActive = index === activeEraIndex;
            return (
              <button
                key={era.id}
                onClick={() => setActiveEraIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveEraIndex(index);
                  }
                }}
                className={`flex-shrink-0 text-left cursor-pointer outline-none pb-2 border-b-2 transition-all duration-300 ${
                  isActive 
                    ? "border-[#E8752A] text-[#171717] font-semibold" 
                    : "border-transparent text-[#6B6B6B] hover:text-[#171717]"
                } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                aria-label={`Select ${era.title} timeline era`}
              >
                <span className="font-mono text-[10px] md:text-xs block text-[#E8752A]/80 tracking-wider">
                  {`0${index + 1}`}
                </span>
                <span className="font-serif text-sm md:text-base tracking-tight block">
                  {era.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Era Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left: Images Showcase (cols 6) */}
          <div className="lg:col-span-6 space-y-4 w-full">
            <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeEra.id}
                  src={activeEra.primaryImage}
                  alt={`${activeEra.title} primary historical visual`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* Supporting Images Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {activeEra.supportingImages.map((src, sIdx) => (
                <div key={sIdx} className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 shadow-sm">
                  <img
                    src={src}
                    alt={`${activeEra.title} supporting artifact or site`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text and Milestones (cols 6) */}
          <div className="lg:col-span-6 space-y-6 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEra.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Era Title & Period */}
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                    {activeEra.period}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                    {activeEra.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  {activeEra.description}
                </p>

                {/* Milestones / Events timeline list */}
                <div className="pt-4 border-t border-[#171717]/10 space-y-4">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    Key Historical Events
                  </span>
                  <div className="space-y-3">
                    {activeEra.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="flex gap-4 items-start text-xs font-sans leading-relaxed">
                        <span className="font-mono font-semibold text-[#171717] w-20 flex-shrink-0">
                          {m.year}
                        </span>
                        <p className="text-[#6B6B6B] font-light flex-1">
                          {m.event}
                        </p>
                      </div>
                    ))}
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
