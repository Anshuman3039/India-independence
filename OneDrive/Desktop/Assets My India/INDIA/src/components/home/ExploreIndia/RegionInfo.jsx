import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegionInfo({ selectedState, onClose }) {
  // Animation settings for the panel entry
  const panelVariants = {
    hidden: { opacity: 0, x: 20, y: 0 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      x: 20, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  return (
    <div className="w-full lg:max-w-md min-h-[350px] flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {selectedState ? (
          <motion.div
            key={selectedState.id}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full bg-[#F7F4EE] border border-[#171717]/10 p-6 shadow-xl relative flex flex-col space-y-6 text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#171717]/50 hover:text-[#171717] focus-visible:outline-[#E8752A] p-2 transition-colors cursor-pointer"
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

            {/* State Name */}
            <div className="space-y-1.5 pr-8">
              <span className="text-[10px] font-sans font-semibold text-[#E8752A] uppercase tracking-[0.2em] block">
                Selected Region
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal tracking-tight">
                {selectedState.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-[#6B6B6B] font-light leading-relaxed italic border-l-2 border-[#16734A] pl-3 py-1">
              {selectedState.description}
            </p>

            {/* Cultural Categories List */}
            <div className="space-y-4 pt-2">
              {/* Languages */}
              {selectedState.languages && selectedState.languages.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    LANGUAGES
                  </span>
                  <p className="text-xs md:text-sm text-[#171717] font-normal">
                    {selectedState.languages.join(' • ')}
                  </p>
                </div>
              )}

              {/* Culture */}
              {selectedState.culture && selectedState.culture.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                    CULTURE
                  </span>
                  <p className="text-xs md:text-sm text-[#171717] font-normal">
                    {selectedState.culture.join(' • ')}
                  </p>
                </div>
              )}

              {/* Food */}
              {selectedState.food && selectedState.food.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold text-[#243B6B] uppercase tracking-wider block">
                    REGIONAL FOOD
                  </span>
                  <p className="text-xs md:text-sm text-[#171717] font-normal">
                    {selectedState.food.join(' • ')}
                  </p>
                </div>
              )}

              {/* Nature */}
              {selectedState.nature && selectedState.nature.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider block">
                    NATURE & LANDSCAPES
                  </span>
                  <p className="text-xs md:text-sm text-[#171717] font-normal">
                    {selectedState.nature.join(' • ')}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full border border-dashed border-[#171717]/15 rounded-sm p-8 flex flex-col items-center justify-center text-center space-y-4 select-none min-h-[350px]"
          >
            <div className="w-12 h-12 rounded-full border border-[#171717]/10 flex items-center justify-center text-[#171717]/40 bg-[#171717]/2">
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
                Click or tap any state on the map to reveal its languages, food, nature, and cultural heritage.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
