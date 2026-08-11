import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CULTURAL_HOTSPOTS = [
  { id: "jaipur", name: "Jaipur, Rajasthan", craft: "Blue Pottery & Palace Architecture", coord: { x: "32%", y: "42%" } },
  { id: "kutch", name: "Rann of Kutch, Gujarat", craft: "Rabari Mirror Embroidery & Salt Landscape", coord: { x: "18%", y: "55%" } },
  { id: "varanasi", name: "Varanasi, Uttar Pradesh", craft: "Ganga Ghats, Classical Music & Weaving", coord: { x: "53%", y: "48%" } },
  { id: "sarnath", name: "Sarnath, Uttar Pradesh", craft: "Lion Capital of Ashoka & Buddhist Art", coord: { x: "55%", y: "46%" } },
  { id: "assam", name: "Nagaon, Assam", craft: "Bihu Dance & Tea Garden Livelihoods", coord: { x: "85%", y: "42%" } },
  { id: "odisha", name: "Bhubaneswar, Odisha", craft: "Odissi Classical Dance & Pattachitra Scrolls", coord: { x: "61%", y: "62%" } },
  { id: "madurai", name: "Madurai, Tamil Nadu", craft: "Meenakshi Temple & Bharatanatyam Dance", coord: { x: "42%", y: "90%" } },
  { id: "kerala", name: "Kochi, Kerala", craft: "Kathakali Performance & Onam Festivals", coord: { x: "38%", y: "86%" } }
];

export default function CultureMap() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Column: Headings */}
        <div className="lg:col-span-2 space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              REGIONAL GEOGRAPHY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
              Culture changes with the landscape.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
              Explore how traditions, languages, food, music and craft change from one region of India to another.
            </p>
          </div>

          <div className="p-4 bg-charcoal/5 border-l border-[#E8752A] text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
            Hover or tap any highlight marker on the map to discover the key artistic and festival practices centered in that geographic region.
          </div>
        </div>

        {/* Right Column: Interactive Map Placeholder */}
        <div className="lg:col-span-3 flex justify-center relative w-full aspect-[4/5] md:aspect-square max-w-md md:max-w-xl bg-white/20 border border-charcoal/5 p-6 shadow-sm">
          
          {/* Main India map outline vector wrapper */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Minimal SVG Outline Map Representation */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full stroke-charcoal/15 fill-[#F7F4EE]/30 stroke-[0.3]"
              aria-hidden="true"
            >
              {/* Simplified geographic shape representing India borders */}
              <path d="M 45 5 L 47 7 L 50 12 L 49 15 L 43 14 L 41 18 L 44 24 L 38 28 L 35 34 L 28 32 L 25 38 L 19 40 L 22 46 L 25 45 L 24 50 L 15 54 L 14 62 L 20 66 L 24 64 L 26 56 L 31 54 L 33 58 L 36 65 L 39 72 L 40 82 L 41 90 L 42 95 L 44 91 L 45 83 L 47 76 L 50 68 L 54 65 L 59 62 L 64 56 L 68 50 L 61 48 L 57 42 L 65 37 L 72 38 L 78 35 L 84 37 L 88 33 L 90 28 L 84 25 L 81 29 L 75 30 L 71 27 L 74 24 L 67 22 L 63 15 L 59 18 L 54 13 L 53 8 Z" />
            </svg>

            {/* Cultural hotspots overlay markers */}
            {CULTURAL_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onMouseEnter={() => setActiveHotspot(spot)}
                onMouseLeave={() => setActiveHotspot(null)}
                onFocus={() => setActiveHotspot(spot)}
                onBlur={() => setActiveHotspot(null)}
                style={{ left: spot.coord.x, top: spot.coord.y }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center cursor-pointer outline-none focus-visible:outline-[#E8752A] group`}
                aria-label={`Highlight for ${spot.name}`}
              >
                {/* Outer pulsing halo */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8752A]/30 opacity-75 group-hover:scale-150 transition-transform duration-300" />
                {/* Core indicator dot */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8752A] group-hover:bg-[#16734A] transition-colors duration-300" />
              </button>
            ))}

            {/* Factual Tooltip Layer */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    left: activeHotspot.coord.x, 
                    top: `calc(${activeHotspot.coord.y} - 25px)` 
                  }}
                  className="absolute -translate-x-1/2 -translate-y-full bg-[#171717]/95 backdrop-blur-sm border border-white/10 px-4 py-3 shadow-xl text-left max-w-[220px] pointer-events-none z-10"
                >
                  <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    {activeHotspot.name}
                  </span>
                  <p className="text-[11px] font-sans font-light text-white leading-relaxed mt-1">
                    {activeHotspot.craft}
                  </p>
                  
                  {/* Tooltip triangle tail */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#171717]" />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
