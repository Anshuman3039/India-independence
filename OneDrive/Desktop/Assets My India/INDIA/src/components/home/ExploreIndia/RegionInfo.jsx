import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getUpcomingEventsForState } from '../../../data/upcomingEvents';

export default function RegionInfo({ selectedState, onClose }) {
  // Animation settings for the panel entry
  const panelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      x: 20, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  // Retrieve upcoming events dynamically
  const upcomingEvents = selectedState ? getUpcomingEventsForState(selectedState.id) : [];

  // Helper to safely render lists as comma separated or bulleted lists
  const renderList = (arr) => {
    if (!arr || arr.length === 0) return "Not available";
    return arr.join(" • ");
  };

  return (
    <div className="w-full lg:max-w-md min-h-[450px] flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {selectedState ? (
          <motion.div
            key={selectedState.id}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full bg-[#F7F4EE] border border-[#171717]/10 p-5 md:p-6 shadow-xl relative flex flex-col space-y-6 text-left max-h-[75vh] lg:max-h-[640px] overflow-y-auto scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#171717]/50 hover:text-[#171717] focus-visible:outline-[#E8752A] p-2 transition-colors cursor-pointer z-10 bg-[#F7F4EE]/90 rounded-full"
              aria-label="Close region details panel"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header info */}
            <div className="space-y-1 pr-8">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                {selectedState.type === 'ut' ? 'Union Territory' : 'State'} Discover Story
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal tracking-tight leading-tight">
                {selectedState.name}
              </h3>
              <div className="flex gap-4 text-xs font-sans font-medium text-[#6B6B6B]">
                <span>Capital: <strong className="text-[#171717]">{selectedState.capital}</strong></span>
                <span>Region: <strong className="text-[#171717]">{selectedState.region}</strong></span>
              </div>
            </div>

            {/* State/UT Image (Section 3: Authentic Visuals) */}
            <div className="space-y-1">
              <div className="overflow-hidden border border-[#171717]/10 relative group h-48 w-full bg-[#171717]/5">
                <img 
                  src={selectedState.images?.hero?.src || selectedState.image} 
                  alt={selectedState.images?.hero?.alt || `Scenic view of ${selectedState.name}`}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between text-[9px] font-sans text-[#6B6B6B]/80 italic px-1">
                <span>{selectedState.images?.hero?.alt || `${selectedState.name} Heritage`}</span>
                <span className="text-right">Credit: {selectedState.images?.hero?.credit || selectedState.imageCredit || 'Creative Commons'}</span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-sm text-[#545454] font-serif leading-relaxed italic border-l-2 border-[#16734A] pl-3 py-1 bg-[#16734A]/2">
              {selectedState.introduction || selectedState.description}
            </p>

            {/* Scrollable Content Body */}
            <div className="space-y-6 pt-2 divide-y divide-[#171717]/5">
              
              {/* 01 — THE LAND & CLIMATE */}
              <div className="space-y-3 pt-4 first:pt-0 border-none">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">01</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    THE LAND & CLIMATE
                  </h4>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#171717] font-light leading-relaxed">
                  <p><strong className="font-semibold text-charcoal">Geography:</strong> {selectedState.geography?.location}</p>
                  <p><strong className="font-semibold text-charcoal">Terrain Features:</strong> {renderList(selectedState.geography?.features)}</p>
                  <p><strong className="font-semibold text-charcoal">Climate:</strong> {selectedState.geography?.climate}</p>
                </div>
              </div>

              {/* 02 — PEOPLE & CULTURE */}
              <div className="space-y-3 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">02</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    PEOPLE & CULTURE
                  </h4>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#171717] font-light leading-relaxed">
                  <p><strong className="font-semibold text-charcoal">Languages Spoken:</strong> {renderList(selectedState.culture?.languages)}</p>
                  <p><strong className="font-semibold text-charcoal">Major Traditions:</strong> {renderList(selectedState.culture?.traditions)}</p>
                  <p><strong className="font-semibold text-charcoal">Festivals:</strong> {renderList(selectedState.culture?.festivals)}</p>
                </div>
              </div>

              {/* 03 — REGIONAL FLAVOURS */}
              <div className="space-y-3 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">03</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    REGIONAL FLAVOURS
                  </h4>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#171717] font-light leading-relaxed">
                  <p><strong className="font-semibold text-charcoal">Signature Dishes:</strong> {renderList(selectedState.food?.cuisine)}</p>
                  <p><strong className="font-semibold text-charcoal">Key Ingredients:</strong> {renderList(selectedState.food?.ingredients)}</p>
                  <p><strong className="font-semibold text-charcoal">Food Tradition:</strong> {selectedState.food?.traditions}</p>
                </div>
              </div>

              {/* 04 — NATURE */}
              <div className="space-y-3 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">04</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    NATURE & WILDLIFE
                  </h4>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#171717] font-light leading-relaxed">
                  <p><strong className="font-semibold text-charcoal">Ecosystems:</strong> {renderList(selectedState.nature?.ecosystems)}</p>
                  <p><strong className="font-semibold text-charcoal">Wildlife Species:</strong> {renderList(selectedState.nature?.wildlife)}</p>
                  <p><strong className="font-semibold text-charcoal">Protected Sanctuaries:</strong> {renderList(selectedState.nature?.areas)}</p>
                </div>
              </div>

              {/* 05 — HISTORY & HERITAGE */}
              <div className="space-y-3 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">05</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    HISTORY & HERITAGE
                  </h4>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#171717] font-light leading-relaxed">
                  <p><strong className="font-semibold text-charcoal">Heritage Sites:</strong> {renderList(selectedState.heritage?.sites)}</p>
                  <p><strong className="font-semibold text-charcoal">Architecture style:</strong> {selectedState.heritage?.architecture}</p>
                </div>
              </div>

              {/* 06 — UPCOMING FESTIVALS */}
              <div className="space-y-4 pt-4 pb-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-[#E8752A]/80 font-bold tracking-wider">06</span>
                  <h4 className="font-serif text-xs text-[#171717] font-bold uppercase tracking-wider">
                    UPCOMING FESTIVALS
                  </h4>
                </div>
                
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingEvents.map((evt, idx) => (
                      <div 
                        key={idx} 
                        className="bg-stone-100/60 border border-[#171717]/5 p-3 rounded-sm flex flex-col space-y-1 text-xs"
                      >
                        <div className="flex justify-between items-baseline gap-2">
                          <h5 className="font-sans font-bold text-charcoal text-[11px] uppercase tracking-wide">
                            {evt.name}
                          </h5>
                          <span className="text-[9px] font-sans font-bold text-[#E8752A] whitespace-nowrap">
                            {evt.dateLabel}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#6B6B6B] font-sans font-semibold">
                          Location: {evt.location}
                        </div>
                        <p className="text-[11px] text-[#545454] leading-relaxed font-light mt-1">
                          {evt.description}
                        </p>
                      </div>
                    ))}
                    <div className="text-[9px] text-[#6B6B6B] font-sans text-center mt-1">
                      * Dates are computed dynamically based on the current calendar year.
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#6B6B6B] italic">No upcoming events cataloged for this region.</p>
                )}
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full border border-dashed border-[#171717]/15 rounded-sm p-8 flex flex-col items-center justify-center text-center space-y-4 select-none min-h-[450px]"
          >
            <div className="w-12 h-12 rounded-full border border-[#171717]/10 flex items-center justify-center text-[#171717]/40 bg-[#171717]/2 animate-pulse">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="space-y-1 max-w-xs">
              <h4 className="font-serif text-lg text-[#171717] font-normal">
                Discover a Story
              </h4>
              <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                Click or tap any state or Union Territory on the map to reveal its geography, cultural heritage, cuisine, nature, and upcoming festivals.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
