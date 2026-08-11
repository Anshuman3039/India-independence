import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IndiaMap from './IndiaMap';
import RegionInfo from './RegionInfo';
import MapLegend from './MapLegend';
import { exploreStates } from '../../../data/exploreStates';
import { stateLabelCoordinates } from '../../../data/stateCoordinates';

export default function ExploreIndia() {
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

    // Position the tooltip above the center of the hovered path relative to the container
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
    const stateInfo = exploreStates.find(state => state.id === id);
    setSelectedState(stateInfo || {
      id,
      name,
      introduction: "Cultural themes, regional delicacies, and wildlife details for this state are being compiled.",
      images: {
        hero: { src: "/images/culture/dance-kuchipudi.jpg", alt: name, credit: "State Archive" }
      }
    });
  };

  const handleClosePanel = () => {
    setSelectedState(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#F7F4EE] py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 relative overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="flex flex-col space-y-12 md:space-y-16"
      >
        {/* 1. Section Header Intro */}
        <motion.div 
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] block">
            EXPLORE INDIA
          </span>
          <div className="space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
              Many places. <br className="md:hidden" /> One India.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
              From the Himalayas to the Indian Ocean, discover the regions, cultures and landscapes that shape the country.
            </p>
          </div>
        </motion.div>

        {/* 2. Interactive Workspace Map + Detail Info Panel */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative"
        >
          {/* Map Column (cols 1 to 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 w-full items-center relative">
            
            {/* Tooltip containing ONLY the State Name in all-caps */}
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

            <div className="relative w-full flex items-center justify-center max-w-[500px] mx-auto">
              <IndiaMap 
                selectedStateId={selectedState?.id || null}
                onStateHover={handleStateHover}
                onStateLeave={handleStateLeave}
                onStateSelect={handleStateSelect}
              />
              
              {/* Selected State Floating Label */}
              {selectedState && stateLabelCoordinates[selectedState.id] && (
                <>
                  {/* Floating Label overlay */}
                  <div 
                    className="absolute z-10 bg-[#171717] text-[#F7F4EE] px-2.5 py-1 shadow-md text-[10px] md:text-xs font-sans font-semibold tracking-widest uppercase rounded-[3px] border border-white/10 -translate-x-1/2 -translate-y-full select-none pointer-events-none"
                    style={{ 
                      left: `${Math.max(18, Math.min(82, stateLabelCoordinates[selectedState.id].x))}%`, 
                      top: `calc(${stateLabelCoordinates[selectedState.id].y}% - 15px)`
                    }}
                  >
                    {selectedState.name}
                  </div>

                  {/* Vertical connector line */}
                  <div 
                    className="absolute w-[1px] h-3.5 bg-[#171717] -translate-x-1/2 pointer-events-none z-10"
                    style={{ 
                      left: `${stateLabelCoordinates[selectedState.id].x}%`, 
                      top: `calc(${stateLabelCoordinates[selectedState.id].y}% - 15px)` 
                    }}
                  />

                  {/* Pin Dot on the state */}
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
            
            <MapLegend />
          </div>

          {/* Info Details Panel Column (cols 8 to 12) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <RegionInfo 
              selectedState={selectedState} 
              onClose={handleClosePanel} 
            />
          </div>
        </motion.div>

        {/* 3. Section CTA Footer */}
        <motion.div 
          variants={fadeUp}
          className="w-full flex justify-center pt-4"
        >
          <Link 
            to="/explore"
            className="group inline-flex items-center gap-3 font-sans text-sm md:text-base font-semibold tracking-wider text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
            aria-label="Explore the full interactive map portal"
          >
            Explore the full map
            <motion.span 
              className="inline-block text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
