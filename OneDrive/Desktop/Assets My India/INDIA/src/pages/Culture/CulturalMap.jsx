import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IndiaMap from '../../components/home/ExploreIndia/IndiaMap';
import { stateLabelCoordinates } from '../../data/stateCoordinates';
import { regions } from '../../data/culture';

export default function CulturalMap() {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleStateHover = (e, id, name) => {
    if (!sectionRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = sectionRef.current.getBoundingClientRect();
    setTooltipPos({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 8
    });
    setHoveredState({ id, name });
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const handleStateSelect = (id, name) => {
    let targetId = id;
    if (id === 'dd') {
      targetId = 'dn';
    }
    const data = regions[targetId] || null;
    setSelectedState({ id: targetId, name: data ? data.name : name, data });
  };

  const handleClose = () => {
    setSelectedState(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative">
        
        {/* Left Column: Heading and Info Panel */}
        <div className="lg:col-span-5 space-y-8 text-left w-full">
          <div className="space-y-4">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              REGIONAL GEOGRAPHY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
              Culture changes with the landscape.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
              Explore how traditions, languages, food, music and craft change from one region of India to another. Click on the map to explore.
            </p>
          </div>

          {/* Selection details card */}
          <div className="min-h-[280px] w-full">
            <AnimatePresence mode="wait">
              {selectedState ? (
                <motion.div
                  key={selectedState.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#171717]/10 p-6 shadow-md space-y-5 text-left relative"
                >
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-[#171717]/40 hover:text-[#171717] font-sans text-xs uppercase tracking-widest cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] p-1"
                    aria-label="Clear selected state details"
                  >
                    CLOSE [X]
                  </button>

                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                      SELECTED REGION
                    </span>
                    <h3 className="font-serif text-2xl text-[#171717] font-normal">
                      {selectedState.name}
                    </h3>
                  </div>

                  {selectedState.data ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#171717]/5">
                      
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          Language
                        </span>
                        <p className="text-xs md:text-sm font-sans font-medium text-[#171717]">
                          {selectedState.data.language}
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          Dance Style
                        </span>
                        <p className="text-xs md:text-sm font-sans font-medium text-[#171717]">
                          {selectedState.data.dance}
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                          Art Tradition
                        </span>
                        <p className="text-xs md:text-sm font-sans font-medium text-[#171717]">
                          {selectedState.data.art}
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                          Craft Tradition
                        </span>
                        <p className="text-xs md:text-sm font-sans font-medium text-[#171717]">
                          {selectedState.data.craft}
                        </p>
                      </div>

                      <div className="space-y-0.5 md:col-span-2">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          Major Festival
                        </span>
                        <p className="text-xs md:text-sm font-sans font-medium text-[#171717]">
                          {selectedState.data.festival}
                        </p>
                      </div>

                    </div>
                  ) : (
                    <div className="pt-4 border-t border-[#171717]/5 space-y-2">
                      <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                        DOCUMENTING ARCHIVE
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        Cultural records for this state are currently being researched and cataloged by the museum curators. Featured examples initially include Odisha, Kerala, and West Bengal.
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center p-6 bg-charcoal/5 border border-dashed border-[#171717]/10 text-center text-[#6B6B6B] font-sans text-xs md:text-sm font-light leading-relaxed">
                  Select any state or region on the map to explore details about its language, classical dance, art traditions, handicrafts, and signature festivals.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: India Map Workspace */}
        <div className="lg:col-span-7 flex flex-col space-y-6 w-full items-center relative">
          
          {/* Tooltip on hover containing state name */}
          {hoveredState && (
            <div 
              className="absolute z-20 pointer-events-none bg-[#171717] text-[#F7F4EE] px-3 py-1.5 shadow-xl text-[10px] md:text-xs font-sans font-semibold tracking-widest uppercase rounded-sm border border-white/10 transform -translate-x-1/2 -translate-y-full transition-all duration-75"
              style={{ 
                left: `${tooltipPos.x}px`, 
                top: `${tooltipPos.y}px` 
              }}
            >
              {hoveredState.name}
            </div>
          )}

          <div className="relative w-full flex items-center justify-center max-w-[480px] mx-auto">
            <IndiaMap 
              selectedStateId={selectedState?.id || null}
              onStateHover={handleStateHover}
              onStateLeave={handleStateLeave}
              onStateSelect={handleStateSelect}
            />

            {/* Selected State Floating Label Pointer */}
            {selectedState && stateLabelCoordinates[selectedState.id] && (
              <>
                <div 
                  className="absolute z-10 bg-[#171717] text-[#F7F4EE] px-2.5 py-1 shadow-md text-[10px] md:text-xs font-sans font-semibold tracking-widest uppercase rounded-[3px] border border-white/10 -translate-x-1/2 -translate-y-full select-none pointer-events-none"
                  style={{ 
                    left: `${Math.max(18, Math.min(82, stateLabelCoordinates[selectedState.id].x))}%`, 
                    top: `calc(${stateLabelCoordinates[selectedState.id].y}% - 15px)`
                  }}
                >
                  {selectedState.name}
                </div>

                <div 
                  className="absolute w-[1px] h-3.5 bg-[#171717] -translate-x-1/2 pointer-events-none z-10"
                  style={{ 
                    left: `${stateLabelCoordinates[selectedState.id].x}%`, 
                    top: `calc(${stateLabelCoordinates[selectedState.id].y}% - 15px)` 
                  }}
                />

                <div 
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#E8752A] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                  style={{ 
                    left: `${stateLabelCoordinates[selectedState.id].x}%`, 
                    top: `${stateLabelCoordinates[selectedState.id].y}%` 
                  }}
                />
              </>
            )}
          </div>

          {/* Selector Dropdown for Mobile accessibility and selecting smaller regions */}
          <div className="w-full max-w-xs pt-4">
            <label htmlFor="state-selector" className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block mb-1.5 text-center lg:text-left">
              Jump to State / Territory
            </label>
            <select
              id="state-selector"
              value={selectedState?.id || ""}
              onChange={(e) => {
                const id = e.target.value;
                if (id) {
                  const name = regions[id].name;
                  handleStateSelect(id, name);
                } else {
                  handleClose();
                }
              }}
              className="w-full bg-white border border-[#171717]/15 px-3 py-2 text-xs text-[#171717] font-sans rounded-none focus:border-[#E8752A] outline-none transition-colors appearance-none cursor-pointer text-center lg:text-left"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23171717' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
                backgroundRepeat: 'no-repeat',
                paddingRight: '2rem'
              }}
            >
              <option value="">Select Region...</option>
              {Object.entries(regions).map(([id, state]) => (
                <option key={id} value={id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-6 text-[10px] font-sans font-semibold tracking-wider text-[#6B6B6B]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-[#E8752A]/10 border border-[#E8752A] rounded-sm" />
              <span>SELECTED REGION</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-charcoal/5 border border-charcoal/20 rounded-sm" />
              <span>REGIONAL ARCHIVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
