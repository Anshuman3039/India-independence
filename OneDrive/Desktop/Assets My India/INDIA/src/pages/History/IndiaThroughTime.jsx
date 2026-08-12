import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const historicalPeriods = [
  {
    id: "indus",
    period: "c. 2500 BCE",
    title: "Indus Valley Civilization",
    subtitle: "Bronze Age Urbanization",
    description: "Centred around the Indus and Ghaggar-Hakra river basins, this civilization featured highly planned cities, brick architecture, advanced drainage systems, and extensive trade networks. It represents one of the earliest urban societies in human history, characterized by decentralized authority rather than a single unified empire.",
    note: "Approximate extent of urban settlements. Reconstructed from archaeological sites.",
    labels: [
      { text: "Harappa", x: 125, y: 140 },
      { text: "Mohenjo-daro", x: 75, y: 220 },
      { text: "Lothal", x: 115, y: 310 }
    ],
    // Highlighting Balochistan, Indus Valley, Punjab, Gujarat
    highlightD: "M 50,240 C 65,180 90,130 120,105 C 150,110 180,120 180,150 C 180,185 160,225 160,265 C 145,295 125,315 110,310 C 90,305 70,285 50,240 Z",
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
      { text: "Kuru", x: 170, y: 140 },
      { text: "Panchala", x: 215, y: 160 }
    ],
    highlightD: "M 120,110 C 155,90 200,90 240,115 C 280,140 280,165 260,190 C 220,210 180,210 150,200 C 130,170 120,140 120,110 Z",
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
      { text: "Magadha", x: 280, y: 190 },
      { text: "Kosala", x: 230, y: 155 },
      { text: "Avanti", x: 170, y: 230 },
      { text: "Takshashila", x: 120, y: 80 }
    ],
    highlightD: "M 110,120 Q 200,95 320,170 T 360,225 Q 260,245 140,210 Z",
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
      { text: "Pataliputra", x: 290, y: 180 },
      { text: "Takshashila", x: 120, y: 80 },
      { text: "Ujjain", x: 170, y: 240 },
      { text: "Kalinga", x: 280, y: 290 }
    ],
    highlightD: "M 60,210 C 80,130 110,100 170,60 C 200,45 250,55 320,95 C 360,110 380,125 410,150 C 415,200 405,250 365,280 C 330,320 280,390 260,420 C 240,410 220,380 205,350 C 185,325 155,290 120,290 C 105,280 80,270 60,210 Z",
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
      { text: "Pataliputra", x: 290, y: 180 },
      { text: "Ujjain", x: 170, y: 240 }
    ],
    highlightD: "M 115,190 C 145,150 190,120 240,130 C 290,130 330,150 350,170 C 360,200 350,230 335,250 C 295,280 220,285 180,265 C 140,250 120,225 115,190 Z",
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
      { text: "Delhi Sultanate", x: 180, y: 140 },
      { text: "Vijayanagara", x: 210, y: 390 },
      { text: "Gajapatis", x: 280, y: 270 }
    ],
    highlightD: "M 130,140 C 160,110 210,100 260,120 C 300,140 330,165 315,210 C 265,240 200,240 160,210 Z M 160,370 C 200,360 240,365 250,380 C 265,410 255,445 230,460 C 215,480 200,500 195,505 C 190,500 180,480 170,460 C 150,430 150,400 160,370 Z",
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
      { text: "Delhi", x: 188, y: 150 },
      { text: "Agra", x: 205, y: 165 },
      { text: "Fatehpur Sikri", x: 195, y: 175 }
    ],
    highlightD: "M 50,240 C 80,160 110,120 170,60 C 210,50 250,55 330,95 C 370,110 395,120 415,145 C 415,200 390,245 365,280 C 320,335 285,395 260,420 C 240,410 210,385 190,325 C 160,290 115,290 100,285 C 80,270 70,260 50,240 Z",
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
      { text: "Maratha Confederacy", x: 160, y: 280 },
      { text: "Sikh Kingdom", x: 140, y: 100 },
      { text: "Bengal Presidency", x: 340, y: 200 }
    ],
    highlightD: "M 135,320 C 140,290 180,270 210,270 C 235,280 250,310 255,335 C 240,365 210,390 195,385 C 170,380 150,350 135,320 Z M 130,100 C 145,85 170,70 175,80 C 180,100 170,120 160,130 C 150,135 140,125 130,100 Z M 310,230 C 330,210 360,210 375,230 C 375,260 360,280 340,280 C 325,280 310,260 310,230 Z",
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
      { text: "Bombay", x: 145, y: 310 },
      { text: "Calcutta", x: 335, y: 205 },
      { text: "Madras", x: 235, y: 410 }
    ],
    highlightD: "M 50,240 C 80,160 110,120 170,60 C 210,50 250,55 330,95 C 370,110 395,120 415,145 C 415,200 390,245 365,280 C 320,335 285,395 260,420 C 240,410 210,385 190,325 C 160,290 115,290 100,285 C 80,270 70,260 50,240 Z",
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
      { text: "West Pakistan", x: 90, y: 160 },
      { text: "East Pakistan", x: 350, y: 210 },
      { text: "New Delhi", x: 188, y: 150 }
    ],
    highlightD: "M 148,110 L 250,55 L 410,120 L 370,220 L 290,480 L 230,410 L 160,290 Z",
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
      { text: "Republic of India", x: 220, y: 260 }
    ],
    highlightD: "M 148,110 L 250,55 L 410,120 L 370,170 L 320,180 L 320,220 L 370,220 L 330,230 L 290,480 L 230,410 L 160,290 Z",
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
              {/* Base Subcontinent Landmass */}
              <path
                d="M 50,240 C 60,250 70,250 80,255 C 95,260 110,270 110,280 C 105,290 95,295 95,300 C 95,305 115,315 125,310 C 130,325 135,340 135,350 C 135,370 140,390 140,410 C 140,430 150,450 160,460 C 170,480 185,500 200,520 C 205,520 210,500 215,480 C 220,460 225,445 230,440 C 240,410 255,395 265,380 C 280,360 300,340 320,320 C 330,305 335,295 340,290 C 350,290 365,295 375,290 C 385,285 400,280 410,270 C 415,250 420,200 420,150 C 410,140 380,145 340,160 C 320,165 290,150 240,130 C 210,120 200,90 190,40 C 180,40 170,50 170,60 C 150,70 130,80 130,100 C 110,125 90,135 90,150 C 70,180 50,210 50,240 Z"
                fill="#EAE5DA"
                stroke="#171717"
                strokeWidth="1.2"
                strokeOpacity="0.1"
              />

              {/* Sri Lanka Landmass */}
              <path
                d="M 235,510 C 240,500 255,500 260,515 C 265,530 255,550 245,550 C 235,550 230,530 235,510 Z"
                fill="#EAE5DA"
                stroke="#171717"
                strokeWidth="1"
                strokeOpacity="0.1"
              />

              {/* Rivers (Soft Natural Slate Green/Blue) */}
              {/* Indus River */}
              <path
                d="M 190,40 Q 150,80 140,110 T 110,200 T 80,255"
                fill="none"
                stroke="#A9BCA6"
                strokeWidth="1.2"
                strokeOpacity="0.7"
              />
              {/* Ganga River */}
              <path
                d="M 205,105 Q 240,140 280,160 T 340,290"
                fill="none"
                stroke="#A9BCA6"
                strokeWidth="1.2"
                strokeOpacity="0.7"
              />
              {/* Brahmaputra River */}
              <path
                d="M 380,140 Q 400,165 375,185 T 340,290"
                fill="none"
                stroke="#A9BCA6"
                strokeWidth="1"
                strokeOpacity="0.7"
              />
              {/* Narmada River */}
              <path
                d="M 240,265 Q 180,265 125,310"
                fill="none"
                stroke="#A9BCA6"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              {/* Krishna River */}
              <path
                d="M 152,410 Q 200,410 240,430"
                fill="none"
                stroke="#A9BCA6"
                strokeWidth="1"
                strokeOpacity="0.5"
              />

              {/* Dynamic Territorial Extent Highlights */}
              <AnimatePresence mode="wait">
                <motion.path
                  key={period.id}
                  d={period.highlightD}
                  fill={period.color}
                  fillOpacity="0.25"
                  stroke={period.color}
                  strokeWidth="1.8"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Dynamic Period Labels */}
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
              Indicative extent / Approximate boundaries
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
