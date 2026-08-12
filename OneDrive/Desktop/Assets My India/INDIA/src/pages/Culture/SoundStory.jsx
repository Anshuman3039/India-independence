import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const musicCategories = [
  {
    id: "classical",
    title: "CLASSICAL",
    tagline: "Traditions shaped by centuries of listening, learning and improvisation.",
    description: "Built upon the foundational concepts of Raga (melodic framework) and Tala (rhythmic cycle), Indian classical music splits into two grand lineages: the north's Hindustani tradition, with its Persian and regional integrations, and the south's Carnatic tradition, defined by its structured composition and complex ornamentation. Both remain oral traditions passed down through the Guru-Shishya lineage.",
    highlights: ["Hindustani Dhrupad & Khayal", "Carnatic Kriti & Varnam", "Guru-Shishya Parampara"],
    image: "/images/culture/music-classical.jpg"
  },
  {
    id: "folk",
    title: "FOLK",
    tagline: "Music rooted in place, community and everyday life.",
    description: "Across hills, deserts, fields, and coasts, India's folk traditions celebrate harvest, community, and the cycles of life. The Bauls of Bengal sing nomadic spiritual songs of inner truth; the Bihu of Assam celebrates nature's renewal with high-energy drums; Lavani of Maharashtra pairs vibrant poetry with physical storytelling; and the singers of Rajasthan carry epic historical ballads across generations.",
    highlights: ["Bengal Baul Mystic Songs", "Assam Bihu Rhythms", "Maharashtra Lavani Performance", "Rajasthani Folk Ballads"],
    image: "/images/culture/music-folk.jpg"
  },
  {
    id: "devotional",
    title: "DEVOTIONAL",
    tagline: "Across traditions, people have sung what words alone could not express.",
    description: "Focusing on vocal expression, poetry, instruments, and collective gathering, devotional music spans Bhajan, Qawwali, Kirtan, and Abhang. These forms bridge language and community barriers, offering ecstatic gathering spaces where voice, poetry, percussion, and traditional instruments like the harmonium and dholak elevate spoken words into shared devotion.",
    highlights: ["Sufi Qawwali Gatherings", "Bhakti Bhajans & Kirtans", "Deccan Abhang Poetry"],
    image: "/images/culture/music-devotional.jpg"
  },
  {
    id: "regional",
    title: "REGIONAL VOICES",
    tagline: "Different languages. Different landscapes. Many voices.",
    description: "Every region's climate, topography, and native language give rise to a distinct vocal texture and instrumentation. From the high-pitched wind-blown sounds of desert woodwinds to the deep, resonant string-driven epics of the mountains, regional voices reflect the local landscape, transforming native dialects into musical identities.",
    highlights: ["Click dots on the map to explore regional traditions."],
    image: "/images/culture/music-regional.jpg",
    isMap: true
  },
  {
    id: "contemporary",
    title: "CONTEMPORARY SOUNDS",
    tagline: "The traditions continue — but the sound keeps changing.",
    description: "Today's music synthesizes centuries of heritage with modern global genres. Cinematic film music (playback singing) continues to shape popular imagination, while a thriving independent scene blends classical frameworks with electronic, hip-hop, acoustic folk, and rock across regional Indian languages.",
    highlights: ["Modern Indian Playback & Cinema", "Independent Pop & Indie Folk", "Desi Hip-Hop & Electronic Fusion"],
    image: "/images/culture/music-contemporary.jpg"
  }
];

const filmsList = [
  {
    id: "pather_panchali",
    title: "PATHER PANCHALI",
    year: "1955",
    theme: "Everyday life & realism",
    description: "A village, a family, and an India rarely seen on the screen.",
    image: null, // Sourced movie-specific image can be placed here
    bgStyle: "from-[#F2F1ED] to-[#D5D3CB]",
    textColor: "text-[#171717]",
    borderColor: "border-[#171717]/10",
    lineColor: "bg-[#171717]/20",
    subColor: "text-[#6B6B6B]",
    labelText: "MONOCHROME REALISM — WEST BENGAL"
  },
  {
    id: "mother_india",
    title: "MOTHER INDIA",
    year: "1957",
    theme: "Rural India, resilience & nationhood",
    description: "A story of one woman became a larger portrait of a young nation.",
    image: null,
    bgStyle: "from-[#7A281E] to-[#4F1610]",
    textColor: "text-[#F7F4EE]",
    borderColor: "border-[#F7F4EE]/10",
    lineColor: "bg-[#F7F4EE]/20",
    subColor: "text-[#F7F4EE]/60",
    labelText: "CLAY SOIL & NATIONHOOD"
  },
  {
    id: "mughal_e_azam",
    title: "MUGHAL-E-AZAM",
    year: "1960",
    theme: "History, spectacle & popular imagination",
    description: "Cinema became spectacle — and history became imagination.",
    image: null,
    bgStyle: "from-[#9E783B] to-[#604720]",
    textColor: "text-[#FAF6F0]",
    borderColor: "border-[#FAF6F0]/15",
    lineColor: "bg-[#FAF6F0]/25",
    subColor: "text-[#FAF6F0]/70",
    labelText: "IMPERIAL GLASS PALACE SPECTACLE"
  },
  {
    id: "sholay",
    title: "SHOLAY",
    year: "1975",
    theme: "Popular culture & cultural memory",
    description: "Some films become more than films. They become part of how a generation remembers itself.",
    image: null,
    bgStyle: "from-[#A0522D] to-[#5C2E16]",
    textColor: "text-[#F7F4EE]",
    borderColor: "border-[#F7F4EE]/15",
    lineColor: "bg-[#F7F4EE]/25",
    subColor: "text-[#F7F4EE]/75",
    labelText: "ROCKY OUTPOSTS & OUTLAWS"
  },
  {
    id: "manthan",
    title: "MANTHAN",
    year: "1976",
    theme: "Community, cooperation & development",
    description: "A village becomes a place where development, cooperation and power meet.",
    image: null,
    bgStyle: "from-[#E8F5E9] to-[#C8E6C9]",
    textColor: "text-[#16734A]",
    borderColor: "border-[#16734A]/15",
    lineColor: "bg-[#16734A]/25",
    subColor: "text-[#16734A]/70",
    labelText: "WHITE REVOLUTION & DEMOCRACY"
  },
  {
    id: "nayakan",
    title: "NAYAKAN",
    year: "1987",
    theme: "Regional voice & urban transformation",
    description: "A city changes. So does the person trying to survive within it.",
    image: null,
    bgStyle: "from-[#2C3E50] to-[#1A252F]",
    textColor: "text-[#EAEDED]",
    borderColor: "border-[#EAEDED]/10",
    lineColor: "bg-[#EAEDED]/20",
    subColor: "text-[#EAEDED]/65",
    labelText: "RAIN-SLICKED URBAN TRANSFORMATION"
  },
  {
    id: "swades",
    title: "SWADES",
    year: "2004",
    theme: "Belonging, development & civic responsibility",
    description: "What does it mean to return, belong and contribute?",
    image: null,
    bgStyle: "from-[#1B263B] to-[#0D1B2A]",
    textColor: "text-[#E0E1DD]",
    borderColor: "border-[#E8752A]/20",
    lineColor: "bg-[#E8752A]/30",
    subColor: "text-[#E0E1DD]/70",
    labelText: "COSMIC ENERGY & RETURN TO ROOTS"
  },
  {
    id: "kumbalangi_nights",
    title: "KUMBALANGI NIGHTS",
    year: "2019",
    theme: "Contemporary social change",
    description: "Sometimes the story of a changing India is found in the smallest of places.",
    image: null,
    bgStyle: "from-[#4A2E80] to-[#2E1F4E]",
    textColor: "text-[#F1C40F]",
    borderColor: "border-[#F1C40F]/15",
    lineColor: "bg-[#F1C40F]/25",
    subColor: "text-[#F1C40F]/70",
    labelText: "BACKWATER LAGOON & KERALA SHORES"
  }
];

const mapRegions = [
  { id: "north", label: "North", x: 200, y: 90, info: "Hindustani Classical, Sufiana Kalam, Punjabi Bhangra & Jugni" },
  { id: "west", label: "West", x: 125, y: 180, info: "Rajasthani Langa/Manganiyar folk, Gujarati Garba rhythms" },
  { id: "east", label: "East", x: 290, y: 155, info: "Baul spiritual ballads, Assamese Bihu, Odia folk narratives" },
  { id: "central", label: "Central", x: 200, y: 200, info: "Chhattisgarh Pandavani epic singing, Gond tribal ballads" },
  { id: "south", label: "South", x: 200, y: 300, info: "Carnatic Classical kritis, Sopana Sangeetham, Kerala folk pulluvan" }
];

export default function SoundStory() {
  const [activeMusicTab, setActiveMusicTab] = useState(0);
  const [activeMapRegion, setActiveMapRegion] = useState(null);
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const cinemaContainerRef = useRef(null);

  const nextFilm = () => {
    setActiveFilmIndex((prev) => (prev + 1) % filmsList.length);
  };

  const prevFilm = () => {
    setActiveFilmIndex((prev) => (prev - 1 + filmsList.length) % filmsList.length);
  };

  const music = musicCategories[activeMusicTab];
  const activeFilm = filmsList[activeFilmIndex];

  return (
    <div className="bg-[#F7F4EE] w-full relative">
      
      {/* 1. Opening Narrative Segment */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 text-left">
        <div className="max-w-2xl space-y-6">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
            SOUND & STORY
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-tight">
            India sings. India tells stories.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light pt-2 max-w-xl">
            Where movement slows down, expression transforms into sound and storytelling. Across languages and centuries, India's voice continues to travel through collective memory.
          </p>
        </div>
      </section>

      {/* 2. Interactive Music Showcase */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Music Visualizer Panel */}
          <div className="lg:col-span-7 space-y-6 w-full text-left">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={music.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  {/* Map overlay or image */}
                  {music.isMap ? (
                    <div className="w-full h-full bg-[#FAF8F5] flex flex-col items-center justify-center p-6 relative">
                      {/* Stylized vector outline of India */}
                      <svg viewBox="0 0 400 400" className="w-full max-w-[280px] h-auto opacity-75">
                        <path
                          d="M 200,40 L 230,80 L 250,110 L 290,120 L 320,135 L 290,160 L 270,180 L 285,210 L 270,230 L 250,260 L 210,310 L 200,360 L 190,310 L 180,280 L 160,250 L 140,230 L 120,225 L 140,195 L 145,180 L 130,165 L 115,160 L 95,175 L 80,160 L 110,135 L 140,140 L 165,110 L 185,90 Z"
                          fill="none"
                          stroke="#171717"
                          strokeWidth="1.2"
                          strokeDasharray="4,4"
                        />
                        {/* Interactive regional dots */}
                        {mapRegions.map((region) => (
                          <g 
                            key={region.id} 
                            className="cursor-pointer group"
                            onClick={() => setActiveMapRegion(region)}
                          >
                            <circle
                              cx={region.x}
                              cy={region.y}
                              r={activeMapRegion?.id === region.id ? "8" : "5"}
                              fill={activeMapRegion?.id === region.id ? "#E8752A" : "#171717"}
                              className="transition-all duration-300 group-hover:scale-125"
                            />
                            <circle
                              cx={region.x}
                              cy={region.y}
                              r="15"
                              fill="transparent"
                              className="hover:fill-[#E8752A]/10"
                            />
                          </g>
                        ))}
                      </svg>

                      {/* Map Tooltip Box */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-[#171717]/10 p-3 min-h-[64px] flex flex-col justify-center">
                        {activeMapRegion ? (
                          <div className="space-y-0.5">
                            <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                              {activeMapRegion.label} India
                            </span>
                            <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                              {activeMapRegion.info}
                            </p>
                          </div>
                        ) : (
                          <p className="text-xs font-sans font-light italic text-[#6B6B6B]/80 text-center">
                            Select a region on the map to explore traditions
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={music.image}
                      alt={music.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={music.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  {music.title}
                </span>
                <p className="font-serif text-lg md:text-xl text-[#171717] leading-relaxed font-normal">
                  {music.tagline}
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  {music.description}
                </p>
                
                {/* List highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {music.highlights.map((highlight, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] font-sans font-light border border-[#171717]/10 bg-white/50 px-2 py-0.5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Music Tab Selection List */}
          <div className="lg:col-span-5 flex flex-col space-y-3 w-full">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1 text-left">
              EXPLORE SOUNDSCAPES
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
              {musicCategories.map((cat, index) => {
                const isSelected = index === activeMusicTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveMusicTab(index);
                      if (cat.id !== 'regional') {
                        setActiveMapRegion(null);
                      } else {
                        setActiveMapRegion(mapRegions[0]); // default to North
                      }
                    }}
                    className={`p-4 border text-left transition-all duration-300 outline-none w-64 lg:w-full flex-shrink-0 cursor-pointer ${
                      isSelected 
                        ? "bg-[#171717] border-[#171717] text-white" 
                        : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                    } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                  >
                    <span className={`text-[10px] font-sans font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? "text-[#E8752A]" : "text-[#E8752A]/80"
                    }`}>
                      {cat.title}
                    </span>
                    <p className={`font-serif text-sm font-normal truncate ${
                      isSelected ? "text-white" : "text-[#171717]"
                    }`}>
                      {cat.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Quiet Music -> Cinema Story Bridge */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl"
        >
          <div className="flex justify-center items-center gap-2 text-[10px] font-sans font-bold text-[#6B6B6B]/40 uppercase tracking-[0.25em]">
            <span>sound</span>
            <span>→</span>
            <span>voice</span>
            <span>→</span>
            <span>image</span>
            <span>→</span>
            <span>moving image</span>
          </div>
          
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#171717] font-normal leading-relaxed italic">
            "And then India found another way to tell its stories."
          </h3>
        </motion.div>
      </section>

      {/* 4. Immersive Cinema Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5">
        <div className="flex flex-col space-y-12 md:space-y-16">
          
          {/* Cinema Header */}
          <div className="text-left space-y-3 max-w-xl">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              CINEMA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
              India tells stories on screen.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-xs md:text-sm leading-relaxed font-light">
              Eight landmark windows into the evolution of Indian cinema. Researched and curated to represent realism, spectacle, identity, development, and social change.
            </p>
          </div>

          {/* Cinematic Slider Reel */}
          <div ref={cinemaContainerRef} className="space-y-8 w-full">
            
            {/* Film frame display: Image loads only if valid path is set, otherwise typographic slate */}
            <div className="w-full aspect-[2.35/1] md:aspect-[2.35/1] overflow-hidden bg-[#171717] border border-[#171717] relative shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilm.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  {activeFilm.image ? (
                    <img
                      src={activeFilm.image}
                      alt={`${activeFilm.title} (${activeFilm.year}) film scene`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${activeFilm.bgStyle} flex items-center justify-center relative p-6 md:p-12 select-none`}>
                      {/* Elegant classic film slate border */}
                      <div className={`absolute inset-4 border ${activeFilm.borderColor} flex flex-col justify-center items-center text-center space-y-2 md:space-y-3`}>
                        <span className="text-[8px] md:text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] opacity-85 block">
                          {activeFilm.labelText}
                        </span>
                        <h4 className={`font-serif text-xl md:text-4xl ${activeFilm.textColor} font-normal tracking-[0.15em] uppercase px-4 leading-tight`}>
                          {activeFilm.title}
                        </h4>
                        <div className={`w-6 md:w-8 h-[1px] ${activeFilm.lineColor}`} />
                        <span className={`text-[9px] md:text-xs font-sans font-light ${activeFilm.subColor} tracking-wider uppercase`}>
                          {activeFilm.year} • {activeFilm.theme}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Slider overlay controls (Floating on bottom of image for sleek look) */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                <span className="text-[10px] font-sans font-bold text-white/95 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-[2px]">
                  {activeFilmIndex + 1} / {filmsList.length}
                </span>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevFilm}
                    className="bg-black/40 hover:bg-black/75 text-white w-8 h-8 flex items-center justify-center rounded-[2px] transition-colors border border-white/10 outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] cursor-pointer"
                    aria-label="Previous film slide"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextFilm}
                    className="bg-black/40 hover:bg-black/75 text-white w-8 h-8 flex items-center justify-center rounded-[2px] transition-colors border border-white/10 outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] cursor-pointer"
                    aria-label="Next film slide"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Film Meta details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilm.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start text-left"
              >
                <div className="md:col-span-4 space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    {activeFilm.theme}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-semibold leading-none">
                    {activeFilm.title} <span className="font-sans font-light text-base text-[#6B6B6B] ml-1.5">— {activeFilm.year}</span>
                  </h3>
                </div>

                <div className="md:col-span-8">
                  <p className="font-serif text-base text-[#171717] leading-relaxed italic">
                    "{activeFilm.description}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* 5. Closing Transition */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/40 uppercase tracking-[0.25em] block">
            TRANSITION
          </span>
          <p className="font-serif text-lg md:text-xl text-[#6B6B6B] italic">
            The ways India expresses itself keep changing.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
