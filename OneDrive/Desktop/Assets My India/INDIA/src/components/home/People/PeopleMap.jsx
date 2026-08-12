import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IndiaMap from '../ExploreIndia/IndiaMap';
import { stateLabelCoordinates } from '../../../data/stateCoordinates';
import { peopleStatesData } from '../../../data/peopleMapData';
import { communityStories } from '../../../data/peopleStories';

export default function PeopleMap() {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

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
      targetId = 'dn'; // Map Daman & Diu to combined DNH & DD details
    }
    const stateData = peopleStatesData[targetId];
    setSelectedState({
      id: targetId,
      name: stateData ? stateData.name : name,
      data: stateData
    });
  };

  const handleClosePanel = () => {
    setSelectedState(null);
  };

  const handleScrollToStory = (storyId) => {
    const el = document.getElementById(storyId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const parentEl = document.getElementById('communities-explore');
      if (parentEl) {
        parentEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Find related story if any
  const relatedStory = selectedState?.data?.relatedStoryId
    ? communityStories.find(s => s.id === selectedState.data.relatedStoryId)
    : null;

  return (
    <section 
      ref={sectionRef}
      id="who-india-is"
      className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 relative overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="flex flex-col space-y-12 md:space-y-16 text-left"
      >
        {/* 1. Header Block */}
        <motion.div variants={fadeUp} className="space-y-4 max-w-3xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            WHO INDIA IS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Woven together by people.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            India is not just a collection of borders. It is a living fabric shaped by hundreds of overlapping communities, regional languages, and unique ways of living. Select a state on the map or use the dropdown to explore.
          </p>
        </motion.div>

        {/* 2. Map & Detail Panel Split Grid */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative"
        >
          {/* Map Container Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 w-full items-center relative">
            {/* Tooltip on Hover */}
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

              {/* Selected State Pin overlay */}
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
                    const name = peopleStatesData[id].name;
                    handleStateSelect(id, name);
                  } else {
                    handleClosePanel();
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
                {Object.entries(peopleStatesData).map(([id, state]) => (
                  <option key={id} value={id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Details Panel Column */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              {selectedState ? (
                <motion.div
                  key={selectedState.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-[#171717]/10 p-6 md:p-8 shadow-md space-y-6 text-left relative"
                >
                  {/* Close button */}
                  <button
                    onClick={handleClosePanel}
                    className="absolute top-4 right-4 text-[#171717]/40 hover:text-[#171717] font-sans text-[10px] font-bold uppercase tracking-widest cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] p-1"
                    aria-label="Clear selected state details"
                  >
                    CLOSE [X]
                  </button>

                  {/* Header Title */}
                  <div className="space-y-1.5 pr-12">
                    <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                      PEOPLE & LIVELIHOODS
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                      {selectedState.name}
                    </h3>
                  </div>

                  {/* State Description */}
                  {selectedState.data?.introduction && (
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {selectedState.data.introduction}
                    </p>
                  )}

                  {/* Detailed lists grid */}
                  {selectedState.data ? (
                    <div className="space-y-5 pt-4 border-t border-[#171717]/5">
                      
                      {/* Communities */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          Key Communities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedState.data.communities.map((c, i) => (
                            <span 
                              key={i} 
                              className="bg-[#F7F4EE] border border-[#171717]/5 text-[#171717]/90 font-sans text-[11px] px-2.5 py-1"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Associated Languages */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                          Regional Languages
                        </span>
                        <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                          {selectedState.data.languages.join(', ')}
                        </p>
                      </div>

                      {/* Ways of Life */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          Ways of Life & Livelihoods
                        </span>
                        <ul className="list-disc list-inside text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed space-y-1">
                          {selectedState.data.waysOfLife.map((w, i) => (
                            <li key={i}>{w}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Connected Visual Story linkage */}
                      {relatedStory && (
                        <div className="pt-4 border-t border-[#171717]/5">
                          <div className="bg-[#F7F4EE]/50 border border-[#E8752A]/15 p-4 space-y-3">
                            <div className="space-y-1">
                              <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                                FEATURED STORY
                              </span>
                              <h4 className="font-serif text-sm font-semibold text-[#171717]">
                                {relatedStory.title} ({relatedStory.location})
                              </h4>
                            </div>
                            <button
                              onClick={() => handleScrollToStory(relatedStory.id)}
                              className="inline-flex items-center gap-1 text-[10px] font-sans font-bold text-[#E8752A] hover:text-[#16734A] uppercase tracking-widest transition-colors cursor-pointer outline-none"
                            >
                              Read visual story ↓
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  ) : (
                    <div className="pt-4 border-t border-[#171717]/5 space-y-2">
                      <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                        DOCUMENTING ARCHIVE
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        Regional records and community profiles are currently being cataloged. Use the interactive map or select a region above to explore.
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full min-h-[320px] flex flex-col items-center justify-center p-8 bg-[#171717]/2.5 border border-dashed border-[#171717]/10 text-center text-[#6B6B6B] font-sans text-xs md:text-sm font-light leading-relaxed">
                  <svg 
                    className="w-8 h-8 text-[#E8752A]/40 mb-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <span>Select any state or territory on the map to explore its communities, associated languages, and unique regional ways of life.</span>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
