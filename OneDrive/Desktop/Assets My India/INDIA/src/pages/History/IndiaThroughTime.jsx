import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import southAsiaOutline from '../../data/south_asia_outline.json';

const historicalPeriods = [
  {
    id: "indus",
    period: "c. 2500 BCE",
    title: "Indus Valley Civilization",
    subtitle: "Bronze Age Urbanization",
    description: "Centred around the Indus and Ghaggar-Hakra river basins, this civilization featured highly planned cities, brick architecture, advanced drainage systems, and extensive trade networks. It represents one of the earliest urban societies in human history, characterized by decentralized authority rather than a single unified empire.",
    note: "Approximate extent of urban settlements. Reconstructed from archaeological sites.",
    labels: [
      { text: "Harappa", x: 169, y: 128 },
      { text: "Mohenjo-daro", x: 107, y: 188 },
      { text: "Lothal", x: 161, y: 271 },
      { text: "Dholavira", x: 135, y: 247 }
    ],
    // Primary highlight over Pakistan, plus adjoining parts of Northwest India
    highlightD: "M 100,240 C 120,180 140,130 170,105 C 190,110 210,120 210,150 C 210,185 195,225 195,265 C 180,295 160,315 145,310 C 130,305 110,285 100,240 Z",
    highlightCountries: ["Pakistan"],
    color: "#E8752A" // Warm Saffron
  },
  {
    id: "vedic",
    period: "c. 1500–600 BCE",
    title: "Vedic / Early Historic Period",
    subtitle: "The Rise of Janapadas",
    description: "Following the decline of the Indus cities, populations migrated east toward the fertile Indo-Gangetic plains. Early tribal kingdoms (Janapadas) emerged, supported by agricultural iron-age settlements. This period laid the structural foundations of early Indian philosophy, literature, and social structures.",
    note: "Primary area of late Vedic settlements and early cultural influence.",
    labels: [
      { text: "Kuru", x: 226, y: 165 },
      { text: "Panchala", x: 255, y: 175 }
    ],
    highlightD: "M 160,130 C 205,100 260,100 310,130 C 360,165 360,200 330,230 C 280,250 230,250 190,240 Z",
    highlightCountries: [],
    color: "#16734A" // Restrained Green
  },
  {
    id: "mahajanapadas",
    period: "c. 600–300 BCE",
    title: "The Sixteen Mahajanapadas",
    subtitle: "Urbanization & Philosophical Ferment",
    description: "Northern India saw the emergence of sixteen major oligarchies and kingdoms (Mahajanapadas). Cities like Vaishali, Varanasi, and Rajgir flourished. This era of intense intellectual ferment saw the rise of Upanishadic thought and the births of Buddhism and Jainism.",
    note: "Approximate locations of major Mahajanapadas and regional republics.",
    labels: [
      { text: "Magadha", x: 331, y: 218 },
      { text: "Kosala", x: 280, y: 180 },
      { text: "Avanti", x: 208, y: 259 },
      { text: "Takshashila", x: 168, y: 69 }
    ],
    highlightD: "M 150,140 Q 250,110 390,200 T 430,265 Q 320,285 180,250 Z",
    highlightCountries: ["Nepal", "Bhutan"],
    color: "#E8752A"
  },
  {
    id: "mauryan",
    period: "c. 322–185 BCE",
    title: "The Mauryan Empire",
    subtitle: "Subcontinental Consolidation",
    description: "Founded by Chandragupta Maurya and expanded by Ashoka, this empire marked the first political consolidation of the majority of the subcontinent. Ashoka's rock and pillar edicts advocating Dhamma (ethics and tolerance) were erected across South Asia.",
    note: "Approximate maximum extent under Ashoka. Excludes deep southern kingdoms (Cholas, Cheras, Pandyas).",
    labels: [
      { text: "Pataliputra", x: 331, y: 218 },
      { text: "Takshashila", x: 168, y: 69 },
      { text: "Ujjain", x: 208, y: 259 },
      { text: "Kalinga", x: 340, y: 309 }
    ],
    highlightD: "",
    highlightCountries: ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan"],
    color: "#16734A"
  },
  {
    id: "gupta",
    period: "c. 320–550 CE",
    title: "The Gupta Period",
    subtitle: "Classical Arts & Sciences",
    description: "Based in Magadha, the Guptas established an empire that fostered a classical golden age of Sanskrit literature, mathematics, astronomy, and stone architecture. Scholars like Aryabhata and Kalidasa made landmark discoveries and creations in this era.",
    note: "Indicative core empire territory. Surrounding regions were linked through tributary or alliances.",
    labels: [
      { text: "Pataliputra", x: 331, y: 218 },
      { text: "Ujjain", x: 208, y: 259 }
    ],
    highlightD: "M 150,210 C 185,160 240,130 300,140 C 360,140 410,165 430,190 C 440,230 430,265 410,290 C 360,325 270,330 220,310 C 170,290 150,260 150,210 Z",
    highlightCountries: ["Nepal", "Bhutan"],
    color: "#E8752A"
  },
  {
    id: "sultanate",
    period: "c. 1200–1500",
    title: "Delhi Sultanate & Regional Kingdoms",
    subtitle: "Plurality of Power",
    description: "The subcontinent featured dynamic regional powers. In the North, successive dynasties of the Delhi Sultanate introduced new architectural styles, languages, and administrative systems, while the Vijayanagara Empire flourished in the Deccan.",
    note: "Indicative spheres of power showing Delhi Sultanate (North) and Vijayanagara Empire (South).",
    labels: [
      { text: "Delhi Sultanate", x: 226, y: 165 },
      { text: "Vijayanagara", x: 217, y: 389 }
    ],
    highlightD: "M 160,160 C 200,120 260,110 320,140 C 370,165 395,195 375,250 C 315,285 240,285 190,250 Z M 200,380 C 240,370 290,375 300,390 C 318,425 305,465 275,480 C 255,505 240,528 234,534 C 228,528 216,505 204,480 C 180,445 180,410 200,380 Z",
    highlightCountries: [],
    color: "#16734A"
  },
  {
    id: "mughal",
    period: "c. 1526–1707",
    title: "The Mughal Empire",
    subtitle: "Imperial Integration",
    description: "Established by Babur and expanded by Akbar and his successors, the Mughals built a highly centralized empire famous for monumental architecture (like the Taj Mahal), administrative reforms, and synthesis of Persian and local Indian traditions.",
    note: "Approximate territorial extent at its peak under Aurangzeb (c. 1707).",
    labels: [
      { text: "Delhi", x: 226, y: 165 },
      { text: "Agra", x: 237, y: 190 }
    ],
    highlightD: "",
    highlightCountries: ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan"],
    color: "#E8752A"
  },
  {
    id: "colonial",
    period: "1700s–1858",
    title: "Regional Powers & Colonial Expansion",
    subtitle: "Transition of Power",
    description: "Following the decline of Mughal central authority, powerful regional states like the Maratha Confederacy, Mysore, and the Sikh Empire arose. In parallel, the British East India Company gradually expanded territory through strategic alliances and military conquest.",
    note: "Indicative geography showing Maratha territories (Central), Sikh Kingdom (Northwest), and early East India Company Presidencies.",
    labels: [
      { text: "Bombay", x: 169, y: 329 },
      { text: "Calcutta", x: 373, y: 270 },
      { text: "Madras", x: 267, y: 425 }
    ],
    highlightD: "M 160,250 C 200,230 240,230 250,250 C 265,280 255,315 230,330 C 215,350 200,370 195,375 C 190,370 180,350 170,330 C 150,300 150,270 160,250 Z",
    highlightCountries: ["Bangladesh"],
    color: "#16734A"
  },
  {
    id: "raj",
    period: "1858–1947",
    title: "The British Raj",
    subtitle: "Imperial Colonial Rule",
    description: "Direct British Crown rule was established after the 1857 Uprising. The map was politically split between 'British India' (provinces administered directly) and hundreds of semi-autonomous 'Princely States' under British suzerainty.",
    note: "Boundaries of British India (provinces) and Princely States (indirect rule). Reconstructed from historical colonial surveys.",
    labels: [
      { text: "Bombay", x: 169, y: 329 },
      { text: "Calcutta", x: 373, y: 270 },
      { text: "Madras", x: 267, y: 425 }
    ],
    highlightD: "",
    highlightCountries: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
    color: "#E8752A"
  },
  {
    id: "partition",
    period: "1947",
    title: "Independence & Partition",
    subtitle: "Creation of Two Nations",
    description: "August 1947 marked the end of British rule and the partition of the subcontinent into the independent dominions of India and Pakistan. The partition led to massive migrations and border changes in Punjab and Bengal.",
    note: "Approximations of new national boundaries showing India and East/West Pakistan in 1947.",
    labels: [
      { text: "West Pakistan", x: 120, y: 140 },
      { text: "East Pakistan", x: 385, y: 240 },
      { text: "New Delhi", x: 226, y: 165 }
    ],
    highlightD: "",
    highlightCountries: ["India", "Pakistan", "Bangladesh"],
    color: "#16734A"
  },
  {
    id: "republic",
    period: "1950–Present",
    title: "Republic of India",
    subtitle: "Modern Democratic Republic",
    description: "The constitution of 1950 established India as a sovereign, democratic republic. Princely states were integrated, and state borders were later reorganized along linguistic lines to form the union of states that exists today.",
    note: "Modern international boundaries of the Republic of India.",
    labels: [
      { text: "New Delhi", x: 226, y: 165 }
    ],
    highlightD: "",
    highlightCountries: ["India"],
    color: "#16734A"
  }
];

export default function IndiaThroughTime() {
  const [activePeriod, setActivePeriod] = useState(0);

  // Handle keyboard arrow keys to move through the timeline
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setActivePeriod((prev) => Math.min(prev + 1, historicalPeriods.length - 1));
    } else if (e.key === 'ArrowLeft') {
      setActivePeriod((prev) => Math.max(prev - 1, 0));
    }
  };

  const period = historicalPeriods[activePeriod];

  return (
    <section 
      className="bg-[#F7F4EE] py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 relative"
      onKeyDown={handleKeyDown}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative">
        
        {/* Left Column: Heading and Period Details */}
        <div className="lg:col-span-5 space-y-8 text-left w-full">
          <div className="space-y-4">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              HISTORICAL ATLAS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
              India Through Time
            </h2>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
              India has never been one fixed shape. Across centuries, kingdoms, empires, regions and political boundaries changed. Explore a few major moments that shaped the historical landscape of the subcontinent.
            </p>
          </div>

          {/* Period Context Card */}
          <div className="bg-white border border-[#171717]/10 p-6 shadow-sm min-h-[280px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                  {period.period}
                </span>
                <h3 className="font-serif text-2xl text-[#171717] font-normal">
                  {period.title}
                </h3>
                <span className="text-xs font-sans font-light italic text-[#6B6B6B]/80 block">
                  {period.subtitle}
                </span>
              </div>

              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed pt-2 border-t border-[#171717]/5">
                {period.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#171717]/5">
              <span className="text-[9px] font-sans text-[#6B6B6B]/60 uppercase tracking-wider block">
                * {period.note}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Historical Map Workspace */}
        <div className="lg:col-span-7 flex flex-col items-center space-y-8 w-full relative">
          
          {/* Subcontinent Map SVG */}
          <div className="relative w-full aspect-[1/1] max-w-[480px] bg-[#FAF8F5] border border-[#171717]/5 rounded-[2px] shadow-inner p-4 flex items-center justify-center">
            
            <svg 
              viewBox="0 0 500 550" 
              className="w-full h-full select-none"
              aria-label={`Subcontinent map for ${period.title}`}
            >
              {/* Base Geographic Layer (Always Geographically Accurate Natural Earth Outlines) */}
              {Object.entries(southAsiaOutline).map(([country, path]) => (
                <path
                  key={country}
                  d={path}
                  fill="#EAE5DA"
                  stroke="#171717"
                  strokeWidth="1.2"
                  strokeOpacity="0.15"
                />
              ))}

              {/* Dynamic Territorial Extent Highlights / Overlay */}
              <AnimatePresence mode="wait">
                <g key={period.id}>
                  {/* Highlight Country Borders from GIS Dataset */}
                  {period.highlightCountries.map((cName) => {
                    const countryPath = southAsiaOutline[cName];
                    if (!countryPath) return null;
                    return (
                      <motion.path
                        key={`${period.id}-${cName}`}
                        d={countryPath}
                        fill={period.color}
                        fillOpacity="0.25"
                        stroke={period.color}
                        strokeWidth="1.8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    );
                  })}

                  {/* Render Custom Empire-specific Extent Boundaries Overlay */}
                  {period.highlightD && (
                    <motion.path
                      d={period.highlightD}
                      fill={period.color}
                      fillOpacity="0.25"
                      stroke={period.color}
                      strokeWidth="1.8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </g>
              </AnimatePresence>

              {/* Dynamic Period Labels placed at actual geographical sites */}
              {period.labels.map((label, idx) => (
                <g key={`${period.id}-label-${idx}`}>
                  <circle
                    cx={label.x}
                    cy={label.y}
                    r="3.5"
                    fill="#171717"
                    stroke="#F7F4EE"
                    strokeWidth="1.2"
                  />
                  <text
                    x={label.x + 8}
                    y={label.y + 4}
                    fill="#171717"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="sans-serif"
                    letterSpacing="0.05em"
                    className="uppercase select-none pointer-events-none"
                  >
                    {label.text}
                  </text>
                </g>
              ))}
            </svg>

            {/* Small Legend Overlay */}
            <div className="absolute bottom-3 left-3 bg-white/85 backdrop-blur-[2px] border border-[#171717]/5 px-2 py-1 text-[9px] font-sans text-[#6B6B6B] uppercase tracking-wider scale-90 origin-bottom-left">
              <span className="inline-block w-2.5 h-1.5 align-middle mr-1.5 rounded-sm" style={{ backgroundColor: period.color + '40', border: `1px solid ${period.color}` }} />
              Indicative historical extent / Approximate boundaries
            </div>
          </div>

          {/* Custom Horizontal Timeline Container */}
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest">
              <span>Timeline: c. 2500 BCE</span>
              <span className="text-[9px] italic text-[#E8752A] animate-pulse">Use arrow keys ← / →</span>
              <span>1950 – Present</span>
            </div>

            {/* Scrollable track containing timelines */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
              <div className="flex items-center space-x-1 min-w-[700px] px-1 relative">
                {/* Horizontal progress bar background */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#171717]/10 -translate-y-1/2 z-0" />
                
                {historicalPeriods.map((item, idx) => {
                  const isActive = idx === activePeriod;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePeriod(idx)}
                      className={`flex-1 flex flex-col items-center space-y-2 py-3 focus:outline-none outline-none group cursor-pointer z-10`}
                      aria-label={`Select ${item.title}`}
                      aria-current={isActive ? "true" : "false"}
                    >
                      {/* Node circle indicator */}
                      <div 
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isActive 
                            ? 'bg-[#E8752A] border-[#E8752A] scale-125 shadow-sm' 
                            : 'bg-white border-[#171717]/25 group-hover:border-[#171717] group-focus-visible:ring-1 group-focus-visible:ring-[#E8752A]'
                        }`}
                      >
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      
                      {/* Year text */}
                      <span 
                        className={`text-[9px] font-sans font-semibold tracking-wider uppercase transition-colors text-center whitespace-nowrap px-1 ${
                          isActive ? 'text-[#171717] font-bold' : 'text-[#6B6B6B]/60 group-hover:text-[#171717]'
                        }`}
                      >
                        {item.period}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
