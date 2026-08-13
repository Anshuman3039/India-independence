import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Data Structures
const motionSlides = [
  {
    id: "space",
    category: "SPACE",
    title: "INDIA'S REACH BEYOND EARTH",
    desc: "India's space programme has advanced from early experimental platforms toward Chandrayaan-3 lunar soft-landings, Aditya-L1 solar observation, and commercial satellite launch infrastructure.",
    stat: "ISRO Lunar soft-landing accomplished",
    image: "/images/stories/story6-launch.jpg",
    context: "Satish Dhawan Space Centre, Sriharikota",
    assetStatus: "AVAILABLE"
  },
  {
    id: "digital",
    category: "DIGITAL INDIA",
    title: "BILLION-SCALE DIGITAL INFRASTRUCTURE",
    desc: "Aadhaar digital identity networks and instant smartphone banking through UPI handle billions of micro-transactions across small merchants and city centers.",
    stat: "10 Billion+ monthly UPI transactions",
    image: "/images/stories/digital-upi-payment.jpg",
    context: "Smartphone e-UPI Payment Confirmation",
    assetStatus: "AVAILABLE"
  },
  {
    id: "metro",
    category: "METRO / URBAN TRANSPORT",
    title: "CITIES ON THE MOVE",
    desc: "Elevated and underground rapid transit metro systems now operate across 20+ metropolitan areas, transforming daily urban commutes and connecting suburbs to city centers.",
    stat: "850+ Kilometers of active metro lines",
    image: "/images/stories/delhi-metro-train.jpg",
    context: "Delhi Metro Kashmere Gate Station Platform",
    assetStatus: "AVAILABLE"
  },
  {
    id: "railways",
    category: "RAILWAYS",
    title: "A COUNTRY CONNECTED BY RAIL",
    desc: "The Indian Railways network connects hundreds of cities, carrying over 20 million passengers daily while expanding full network electrification and high-speed Vande Bharat corridors.",
    stat: "68,000+ Route Kilometers of Rail",
    image: "/images/stories/vande-bharat-express.jpg",
    context: "Vande Bharat Express Semi-High-Speed Rail Corridor",
    assetStatus: "AVAILABLE"
  },
  {
    id: "expressways",
    category: "EXPRESSWAYS",
    title: "BUILDING AT SCALE",
    desc: "Multi-lane concrete expressways, elevated bypass flyovers, and sea links streamline industrial freight distribution and intercity passenger travel across major economic corridors.",
    stat: "10,000+ Km of express highways built annually",
    image: "/images/stories/expressway-infrastructure.jpg",
    context: "Access-Controlled Expressway Corridor",
    assetStatus: "AVAILABLE"
  },
  {
    id: "airports",
    category: "AIRPORTS",
    title: "CONTEMPORARY AVIATION INFRASTRUCTURE",
    desc: "Construction of regional terminals and cheap air connectivity plans facilitate rapid travel options for citizens across tier-2 and tier-3 aviation hubs.",
    stat: "150+ Operational airports nationally",
    image: "/images/stories/airport-terminal.jpg",
    context: "Bengaluru Kempegowda Airport Terminal 2",
    assetStatus: "AVAILABLE"
  },
  {
    id: "renewable",
    category: "RENEWABLE ENERGY",
    title: "POWERING THE FUTURE",
    desc: "Vast solar parks in Rajasthan and wind turbine installations across southern coastal belts drive India's energy transition, supporting agricultural irrigation and zero-emission goals.",
    stat: "180 GW+ installed renewable energy capacity",
    image: "/images/stories/solar-renewable-energy.jpg",
    context: "Solar-Powered Agricultural Irrigation Grid",
    assetStatus: "AVAILABLE"
  },
  {
    id: "semiconductor",
    category: "SEMICONDUCTOR / TECHNOLOGY",
    title: "DOMESTIC MICRO-FABRICATION AMBITIONS",
    desc: "Heavy state subsidies are aimed at setting up logic design silicon fabrications, assembly facilities, and industrial microchip testing cleanrooms.",
    stat: "$10 Billion national subsidy pool",
    image: "/images/stories/semiconductor-microchip.jpg",
    context: "Silicon Microchip Wafer Fabricated Die",
    assetStatus: "AVAILABLE"
  },
  {
    id: "cities",
    category: "CITIES",
    title: "THE CITY CHANGES",
    desc: "Metropolitan hubs evolve under rapid urbanization, balancing dense traditional commercial zones with modern transit infrastructure and residential corridors.",
    stat: "450 Million+ urban population",
    image: "/images/stories/mumbai-cityscape.jpg",
    context: "Mumbai Metropolitan Coastal Skyline",
    assetStatus: "AVAILABLE"
  }
];

const promiseGapCards = [
  {
    id: "economy",
    title: "ECONOMIC GROWTH & WEALTH DISTRIBUTION",
    promise: "Fastest-growing major economy expanding at 7%–8% annually, scaling middle-class consumer demand.",
    gap: "Wealth concentration persists; informal sector workers navigate daily wage fluctuations without social nets.",
    promiseImg: "/images/stories/maharashtra-citylife.jpg",
    gapImg: "/images/stories/story1-window.jpg",
    metric: "GDP Growth: 7.2% | Source: MoSPI"
  },
  {
    id: "education",
    title: "EDUCATIONAL ACCESS & UNIVERSITY RESOURCES",
    promise: "Massive scale-up in secondary school enrollment and polytechnics to support rural vocational training.",
    gap: "Imbalances in resources between state universities and private colleges create early skill disparities.",
    promiseImg: "/images/stories/stories-intro-7.jpg",
    gapImg: "/images/stories/story4-prep.jpg",
    metric: "Secondary GER: 79.6% | Source: UDISE"
  },
  {
    id: "digital",
    title: "DIGITAL SERVICES & INTERNET PENETRATION",
    promise: "Unified registry networks, cheap data plans, and open finance pipelines reaching distant villages.",
    gap: "Significant differences in stable household broadband access and rural female smartphone ownership.",
    promiseImg: "/images/stories/story4-stall.jpg",
    gapImg: "/images/stories/story1-train.jpg",
    metric: "Active Mobile Users: 820M+ | Source: TRAI"
  }
];

const youthProfiles = [
  {
    id: "tech-innovator",
    role: "The Tech Innovator",
    context: "Bengaluru Tech Hub",
    desc: "Building systems for international software markets while navigating workspace automation shifts and cost-of-living index increases.",
    quote: "We are writing global logic from desks in Bengaluru, balancing vast industry potential with intense market shifts.",
    image: "/images/stories/story6-lab.jpg"
  },
  {
    id: "exam-aspirant",
    role: "The Exam Aspirant",
    context: "Kota / Patna Coaching Grids",
    desc: "Spending years preparing for recruitment tests (railways, public services), seeking family safety and local social status under heavy pressure.",
    quote: "Securing a government position is how we lift an entire family. It is a long, high-stakes wait, but we persist.",
    image: "/images/stories/stories-intro-7.jpg"
  },
  {
    id: "urban-migrant",
    role: "The Migrant Builder",
    context: "Agrarian-Urban Corridor",
    desc: "Leaving farming to operate gig networks, retail counters, and infrastructure construction in major metropolitan areas.",
    quote: "Working in metropolitan logistics grants me direct independence. I support my home farm's inputs.",
    image: "/images/stories/story4-prep.jpg"
  }
];

const cjpCaseTimeline = [
  {
    date: "MAY 2026",
    title: "Satirical Origins & Online Emergence",
    desc: "CJP (Cockroach Janta Party) emerges as a satirical online movement associated with student organizer Abhijeet Dipke. The movement traces its origin to a Supreme Court hearing on May 15, 2026, regarding state examination systems and the viral responses of candidates calling for systemic safeguards.",
    source: "Indian Express / Media Archives",
    type: "Digital Origins",
    image: "/images/stories/stories-intro-6.jpg",
    why: "Satire served as a vehicle to engage candidates who felt standard bureaucratic letters went unanswered."
  },
  {
    date: "JUNE 6, 2026",
    title: "First Jantar Mantar Assembly",
    desc: "Hundreds of examination aspirants, students, and coordinators mobilize physically at Jantar Mantar, New Delhi. A formal demands document calls for the resignation of Union Education Minister Dharmendra Pradhan, citing NEET irregularities.",
    source: "Indian Express / Commission Records",
    type: "Public Assembly",
    image: "/images/stories/stories-intro-2.jpg",
    why: "Shifted the online campaign into a physical public assembly in the national capital."
  },
  {
    date: "JUNE – JULY 2026",
    title: "Sustained Mobilisation",
    desc: "The assemblies persist through prolonged summer weeks. Coordinating teams organize local clean-up guilds and request meetings with commission authorities.",
    source: "Delhi Police Logs / Representative Register",
    type: "Sustained Protests",
    image: "/images/stories/stories-intro-1.jpg",
    why: "Demonstrated organizational endurance through changing weather conditions and prolonged waits."
  },
  {
    date: "JULY 20, 2026",
    title: "Chalo Sansad: The Parliament March",
    desc: "CJP supporters attempted to march from Jantar Mantar toward Parliament. Authorities had denied permission and deployed security barricades. Clashes followed, with documented use of tear gas and lathi/baton charges by police to stop the march.",
    source: "Reuters / Indian Express / Amnesty International / PTI",
    type: "Confrontation",
    image: "/images/stories/stories-intro-2.jpg",
    why: "A major point of confrontation leading to injuries on both sides and concerns over excessive police force."
  },
  {
    date: "JULY 25, 2026",
    title: "Cabinet Resignation & Protest End",
    desc: "Dharmendra Pradhan resigns as Union Education Minister. Following cabinet negotiations regarding entrance audits, CJP coordinators announce the formal withdrawal of the physical assemblies. Note: while the resignation followed the period of student mobilisation, a direct causal link has not been independently established.",
    source: "Government Gazette / Press Trust of India (PTI)",
    type: "Resignation & Resolution",
    image: "/images/stories/stories-intro-7.jpg",
    why: "Brought the physical assemblies to an end while central examination restructuring processes remain open."
  }
];

const wordsWeaponsData = [
  {
    word: "Mobilise",
    desc: "Unifies scattered public groups behind an idea, turning passive frustration into collective democratic representation."
  },
  {
    word: "Divide",
    desc: "Simplifies complex public policy choices into binary us-versus-them battles, splitting communities."
  },
  {
    word: "Dehumanise",
    desc: "Uses targeted profiling vocabulary on digital forums, reducing individuals to labels and fueling physical hostility."
  },
  {
    word: "Simplify",
    desc: "Replaces evidence and investigative context with short visual feeds, minimizing public comprehension."
  },
  {
    word: "Provoke",
    desc: "Leverages algorithms to maximize negative emotional triggers, ensuring hostility spreads quickly."
  },
  {
    word: "Polarise",
    desc: "Fosters ideological echo chambers, separating citizens until they share no common factual basis."
  }
];

export default function IndiaToday() {
  const [motionIndex, setMotionIndex] = useState(0);
  const [promiseId, setPromiseId] = useState("economy");
  const [youthIndex, setYouthIndex] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [hoveredWord, setHoveredWord] = useState(null);

  const activePromiseObj = promiseGapCards.find(c => c.id === promiseId) || promiseGapCards[0];
  const activeSlide = motionSlides[motionIndex];
  const activeYouth = youthProfiles[youthIndex];
  const activeTimelineObj = cjpCaseTimeline[timelineIndex];

  return (
    <PageTransition>
      <div className="w-full bg-[#F7F4EE] text-[#171717] min-h-screen relative font-sans">
        
        {/* 01 — HERO / OPENING */}
        <section id="hero" className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#171717] px-6 md:px-12 py-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/stories/story6-launch.jpg" 
              alt="ISRO GSLV Mk III rocket launching into the sky carrying Chandrayaan-2 spacecraft from Sriharikota, India" 
              className="w-full h-full object-cover opacity-75 scale-102 transition-transform duration-10000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/30 to-transparent" />
          </div>

          {/* Top Hero Info */}
          <div className="relative z-10 flex justify-between items-start pt-12">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FAF8F5] bg-[#E8752A] px-3 py-1 rounded-sm">
              INDIA TODAY
            </span>
            <div className="text-right text-[9px] font-mono text-[#FAF8F5]/70 tracking-widest uppercase">
              A PRESENT-DAY PORTRAIT
            </div>
          </div>

          {/* Middle/Bottom Main Title Block */}
          <div className="relative z-10 max-w-3xl space-y-6 my-auto pt-16 pb-12">
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-[#FAF8F5] leading-none font-normal tracking-tight">
              THE INDIA<br/>WE LIVE IN
            </h1>
            <h2 className="font-serif text-lg md:text-2xl lg:text-3xl text-[#16734A] font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] bg-[#0a0a0a]/60 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10 border-l-2 border-l-[#16734A] inline-block shadow-xs">
              A country moving forward, carrying its contradictions with it.
            </h2>
            <div className="h-[1px] w-24 bg-[#E8752A]"></div>
            <p className="font-sans font-light text-sm md:text-base text-[#FAF8F5]/90 max-w-xl leading-relaxed">
              India today is a country of extraordinary change — ambitious, connected and increasingly confident, while still negotiating inequality, opportunity, identity and democracy.
            </p>
          </div>

          {/* Bottom details */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/15 pt-4 text-[9px] font-mono text-[#FAF8F5]/60 tracking-widest uppercase gap-2 pb-2">
            <span>INDIA TODAY · 2026</span>
            <span>A PRESENT-DAY PORTRAIT</span>
          </div>
        </section>

        {/* 02 — INDIA IN MOTION (Visual Showcase Carousel) */}
        <section id="motion" className="w-full py-28 px-6 md:px-12 bg-white border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                02 — TRANSFORMATION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                INDIA IN MOTION
              </h2>
              <h3 className="font-serif text-lg md:text-2xl text-[#E8752A] italic font-light">
                "An India being rebuilt at extraordinary speed."
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl leading-relaxed">
                From space missions and digital payments to expanding railways, highways and renewable energy, the physical and technological landscape of India is changing rapidly.
              </p>
            </div>

            {/* Immersive Slide Component */}
            <div className="bg-[#F7F4EE] border border-[#171717]/10 p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-8 items-stretch shadow-md rounded-sm">
              
              {/* Photo Area */}
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 shadow-sm bg-[#171717]/10 flex items-center justify-center">
                {activeSlide.image ? (
                  <img 
                    src={activeSlide.image} 
                    alt={activeSlide.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#171717]/95 text-[#FAF8F5] p-8 text-center space-y-3">
                    <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-[0.25em] bg-[#E8752A]/10 border border-[#E8752A]/30 px-3 py-1.5 rounded-sm font-semibold">
                      ASSET REQUIRED · {activeSlide.category}
                    </span>
                    <p className="text-xs md:text-sm font-sans font-light text-[#FAF8F5]/85 max-w-md leading-relaxed">
                      {activeSlide.missingDescription}
                    </p>
                    <span className="text-[9px] font-mono text-[#FAF8F5]/40 tracking-widest uppercase pt-2">
                      No unrelated placeholder substituted
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                  {activeSlide.context}
                </div>
                <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
              </div>

              {/* Text / Selector Area */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-6 pl-0 md:pl-4">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                      {activeSlide.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold leading-tight uppercase">
                      {activeSlide.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {activeSlide.desc}
                  </p>
                  {activeSlide.disclaimer && (
                    <div className="pt-2 text-[11px] font-sans font-light italic text-[#E8752A] border-t border-[#171717]/5">
                      {activeSlide.disclaimer}
                    </div>
                  )}
                </div>

                <div className="space-y-6 pt-4 border-t border-[#171717]/5">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                      FACTUAL KEY MEASURE
                    </span>
                    <span className="font-serif text-sm md:text-base font-semibold text-[#171717] block">
                      {activeSlide.stat}
                    </span>
                  </div>

                  {/* Manual buttons */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setMotionIndex((prev) => (prev - 1 + motionSlides.length) % motionSlides.length)}
                      className="w-9 h-9 rounded-full border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors duration-200 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
                    >
                      ←
                    </button>
                    <span className="text-xs font-mono text-[#6B6B6B]">
                      {motionIndex + 1} / {motionSlides.length}
                    </span>
                    <button 
                      onClick={() => setMotionIndex((prev) => (prev + 1) % motionSlides.length)}
                      className="w-9 h-9 rounded-full border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors duration-200 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
                    >
                      →
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Micro category selector links */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {motionSlides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setMotionIndex(idx)}
                  className={`px-3 py-1.5 border rounded-sm text-[8px] font-mono uppercase tracking-widest transition-all duration-300 ${
                    idx === motionIndex 
                      ? "bg-[#171717] border-[#171717] text-white" 
                      : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]/30"
                  }`}
                >
                  {s.category}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Quiet Editorial Transition Section */}
        <section className="w-full py-20 bg-[#FAF8F5] border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            TRANSITION
          </span>
          <h3 className="font-serif text-2xl md:text-4xl text-[#171717] font-normal uppercase max-w-3xl mx-auto leading-snug">
            "BUT THE EXPERIENCE OF THIS NEW INDIA IS NOT THE SAME FOR EVERYONE."
          </h3>
          <div className="max-w-2xl mx-auto space-y-2 text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
            <p>A new railway line can shorten a journey.</p>
            <p>A digital payment can make a transaction effortless.</p>
            <p>A new highway can connect a market.</p>
            <p>A satellite can expand what a country can see.</p>
            <p className="pt-2 font-medium text-[#171717]">
              But access to opportunity, wealth, education, healthcare and security remains uneven.
            </p>
          </div>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
          <p className="font-serif text-base md:text-xl text-[#16734A] italic font-semibold pt-2">
            "How evenly is the new India being shared?"
          </p>
        </section>

        {/* 03 — THE PROMISE & THE GAP (Split Screen Contrast) */}
        <section id="promise-gap" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-3">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                03 — THE CONTRADICTION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                THE PROMISE & THE GAP
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl leading-relaxed">
                Growth does not automatically distribute opportunity equally. We examine structural contrasts across economic variables.
              </p>
            </div>

            {/* Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-3 border-b border-[#171717]/5 pb-6">
              {promiseGapCards.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPromiseId(item.id)}
                  className={`px-4 py-2 border rounded-sm text-[9px] font-sans font-semibold tracking-wider transition-all duration-300 cursor-pointer outline-none ${
                    item.id === promiseId
                      ? "bg-[#171717] border-[#171717] text-white scale-102"
                      : "bg-white border-[#171717]/10 text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]/30"
                  }`}
                >
                  {item.title.split(" & ")[0]}
                </button>
              ))}
            </div>

            {/* Symmetrical split layout with full color images */}
            <div className="bg-white border border-[#171717]/10 p-6 md:p-8 rounded-sm shadow-sm space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-[#171717]/5">
                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-[#171717]">
                  {activePromiseObj.title}
                </h3>
                <span className="text-[9px] font-mono text-[#6B6B6B] bg-[#F7F4EE] px-2 py-0.5 rounded-sm">
                  {activePromiseObj.metric}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
                
                {/* Left Split: The Promise */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-wider uppercase block">
                      THE PROMISE
                    </span>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {activePromiseObj.promise}
                    </p>
                  </div>
                  <div className="aspect-[16/10] border border-[#171717]/10 overflow-hidden relative rounded-sm shadow-sm">
                    <img 
                      src={activePromiseObj.promiseImg} 
                      alt="The Promise context visual" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Split: The Gap */}
                <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#171717]/5 pt-6 md:pt-0 pl-0 md:pl-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-wider uppercase block">
                      THE GAP
                    </span>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {activePromiseObj.gap}
                    </p>
                  </div>
                  <div className="aspect-[16/10] border border-[#171717]/10 overflow-hidden relative rounded-sm shadow-sm">
                    <img 
                      src={activePromiseObj.gapImg} 
                      alt="The Gap context visual" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Section Divider statement */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "But progress does not reach everyone equally."
          </p>
        </div>

        {/* 04 — A YOUNG COUNTRY (3 Narrative moments) */}
        <section id="young-country" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                  04 — DEMOGRAPHY
                </span>
                <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                  A YOUNG COUNTRY
                </h2>
                <h3 className="font-serif text-lg md:text-xl text-[#E8752A] italic leading-relaxed">
                  "India's future is being lived by a generation that is still waiting for its opportunity."
                </h3>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  India is young not merely because of demographics. It is young because millions of people are negotiating an uncertain future.
                </p>

                {/* Progress links */}
                <div className="space-y-2 pt-4">
                  <span className="text-[9px] font-sans font-bold text-[#171717]/70 uppercase block">
                    ASPIRATIONAL STAGES
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                    <span>EDUCATION</span>
                    <span>→</span>
                    <span>SKILLS</span>
                    <span>→</span>
                    <span>EMPLOYMENT</span>
                    <span>→</span>
                    <span>MOBILITY</span>
                    <span>→</span>
                    <span>FUTURE</span>
                  </div>
                </div>
              </div>

              {/* Large Portrait Moment */}
              <div className="lg:col-span-7 bg-[#F7F4EE] border border-[#171717]/10 p-4 shadow-md rounded-sm relative overflow-hidden group">
                <div className="aspect-[16/9] relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src={activeYouth.image} 
                    alt={activeYouth.role} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    YOUTH ARCHIVE FOCUS · {activeYouth.role}
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Location: {activeYouth.context}</span>
                  <span>Documentary Grid</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 05 — VOICE OF A GENERATION (Three Profiles) */}
        <section id="generation-voice" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-3 text-center">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                05 — PARTICIPATION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                VOICE OF A GENERATION
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
                Young Indians are not politically or ideologically uniform. We present multiple profiles reflecting varying perspectives and career choices.
              </p>
            </div>

            {/* Profile cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {youthProfiles.map((p, idx) => {
                const isSelected = idx === youthIndex;
                return (
                  <div
                    key={p.id}
                    onClick={() => setYouthIndex(idx)}
                    className={`bg-white border p-6 flex flex-col justify-between space-y-6 shadow-sm rounded-sm transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? "border-[#16734A] scale-102 ring-1 ring-[#16734A]" 
                        : "border-[#171717]/10 hover:border-[#16734A]/50"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/5 bg-[#171717]/5">
                        <img 
                          src={p.image} 
                          alt={p.role} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                          {p.context}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[#171717]">
                          {p.role}
                        </h4>
                      </div>
                      <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="bg-[#F7F4EE] border-l-2 border-[#16734A] p-3 text-[11px] font-serif text-[#171717] italic">
                      "{p.quote}"
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Section Divider statement */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "And sometimes, that demand becomes a public voice."
          </p>
        </div>

        {/* 06 — DEMOCRACY UNDER PRESSURE */}
        <section id="democracy-pressure" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-16">
            
            <div className="max-w-3xl space-y-6">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                06 — THE INSTITUTIONS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                DEMOCRACY UNDER PRESSURE
              </h2>
              <h3 className="font-serif text-lg md:text-xl text-[#E8752A] italic leading-relaxed">
                "When political disagreement becomes identity, what happens to democratic conversation?"
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The health of a democracy is tested by how its institutions balance disagreement, civic expression, and state authority. We ask questions rather than declare static political conclusions.
              </p>
            </div>

            {/* Symmetrical split panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
              
              <div className="p-6 bg-[#F7F4EE] border border-[#171717]/10 rounded-sm shadow-sm space-y-3">
                <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                  DEMOCRATIC REPRESENTATION
                </span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Supporters point to rising voter turnout, digital grievances registry channels, and deep regional legislative representation across federal assemblies.
                </p>
              </div>

              <div className="p-6 bg-[#F7F4EE] border border-[#171717]/10 rounded-sm shadow-sm space-y-3">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                  CIVIC SPACE QUESTIONS
                </span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Critics raise concerns over regulatory pressure on independent media outlets, political speech restrictions, and police deployments during capital protests.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 07 — MEDIA POLARISATION (Floating News Headline Ecosystem) */}
        <section id="media-polarisation" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-3 text-center">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                07 — INFORMATION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                WHO TELLS THE STORY?
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
                People increasingly encounter the same country through very different information environments. We map the fragmented news and television ecosystem.
              </p>
            </div>

            {/* Overlapping box elements */}
            <div className="bg-[#FAF8F5] border border-[#171717]/10 p-8 rounded-sm max-w-4xl mx-auto space-y-8 relative overflow-hidden">
              <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block text-center">
                CONFLATING PUBLIC NEWS HEADLINES · CASE EXAMPLE
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 border-t border-[#171717]/5">
                
                <div className="p-5 bg-white border-l-2 border-[#16734A] space-y-2 shadow-xs">
                  <span className="text-[8px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">OUTLET A BROADCAST</span>
                  <h4 className="font-serif text-sm font-semibold text-[#171717] leading-snug">
                    "EXAM SAFETY SECURED: REGULATORY BILL PENALIZES INTERFERENCE METICULOUSLY"
                  </h4>
                  <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Emphasizes official updates regarding security bills, technological audits, and state safeguard measures.
                  </p>
                </div>

                <div className="p-5 bg-white border-l-2 border-[#E8752A] space-y-2 shadow-xs">
                  <span className="text-[8px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">OUTLET B BROADCAST</span>
                  <h4 className="font-serif text-sm font-semibold text-[#171717] leading-snug">
                    "ASPIRANTS REGISTER ALLEGATIONS: STRUCTURAL DELAYS REMAIN IN CENTRAL SCHEDULING"
                  </h4>
                  <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Focuses on candidate narratives, prolonged waiting queues, and civil calls for administrative decentralisation.
                  </p>
                </div>

              </div>

              <div className="text-center pt-6 border-t border-[#171717]/5 text-xs font-serif text-[#171717] italic">
                "Partisan media echo chambers and digital feed filters amplify engagement over consensus, segmenting public debate."
              </div>
            </div>

          </div>
        </section>

        {/* 08 — WORDS AS WEAPONS (Interactive Typographic Board) */}
        <section id="words-weapons" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                08 — PUBLIC SPEECH
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                WHEN DISAGREEMENT BECOMES HOSTILITY
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
                Hover over a typographic node to analyze how language can simplify, mobilize, and polarize public discourse within algorithmic grids.
              </p>
            </div>

            {/* Typographic Visual Treatment */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-[#171717]/5">
              
              {/* Left word list */}
              <div className="md:col-span-6 flex flex-wrap gap-3 justify-center md:justify-start">
                {wordsWeaponsData.map((item, idx) => {
                  const isHovered = hoveredWord === idx;
                  return (
                    <button
                      key={idx}
                      onMouseEnter={() => setHoveredWord(idx)}
                      onMouseLeave={() => setHoveredWord(null)}
                      className={`px-4 py-2 border rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer ${
                        isHovered 
                          ? "bg-[#171717] border-[#171717] text-white scale-105" 
                          : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]/30"
                      }`}
                    >
                      {item.word}
                    </button>
                  );
                })}
              </div>

              {/* Right description container */}
              <div className="md:col-span-6 min-h-[140px] bg-[#FAF8F5] border border-[#171717]/10 p-6 rounded-sm flex items-center justify-center shadow-xs">
                {hoveredWord !== null ? (
                  <div className="text-left w-full space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                      SPEECH PROFILE: {wordsWeaponsData[hoveredWord].word}
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {wordsWeaponsData[hoveredWord].desc}
                    </p>
                  </div>
                ) : (
                  <span className="text-xs font-sans font-light text-[#6B6B6B]/60 italic text-center">
                    Hover over a word to view its semantic sociological description.
                  </span>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* Section Divider statement */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "Democracy is not only what happens at the ballot box."
          </p>
        </div>

        {/* 09 — CJP CASE STUDY (Interactive Chronological Timeline) */}
        <section id="cjp-case-study" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                09 — CASE STUDY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                A CASE STUDY IN DEMOCRATIC DISSENT
              </h2>
              <h3 className="font-serif text-lg md:text-xl text-[#16734A] italic leading-normal">
                The CJP Jantar Mantar Protests
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
                A chronological, document-backed case study tracing the physical mobilization at New Delhi's Jantar Mantar. It represents approximately 10–15% of the overall India Today visual index.
              </p>
            </div>

            {/* Desktop horizontal chronological timeline node line */}
            <div className="hidden md:flex flex-col space-y-8 bg-white border border-[#171717]/10 p-8 rounded-sm shadow-sm max-w-5xl mx-auto">
              <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block text-center">
                CLICK A TIMELINE NODE TO VIEW DETAILS
              </span>
              
              {/* Chronology Line */}
              <div className="relative flex justify-between items-center py-6">
                <div className="absolute left-0 right-0 h-[2px] bg-[#171717]/10 z-0" />
                
                {cjpCaseTimeline.map((item, idx) => {
                  const isActive = timelineIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setTimelineIndex(idx)}
                      className={`relative z-10 w-32 flex flex-col items-center cursor-pointer outline-none transition-all duration-300 focus-visible:scale-105`}
                    >
                      <div 
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isActive 
                            ? "bg-[#FAF8F5] border-[#E8752A] scale-125" 
                            : "bg-[#171717]/40 border-transparent hover:bg-[#E8752A]"
                        }`}
                      />
                      <span className="text-[10px] font-mono font-bold text-[#E8752A] pt-2">
                        {item.date}
                      </span>
                      <span className="text-[9px] font-sans text-[#6B6B6B] pt-0.5 truncate w-full text-center">
                        {item.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Node Information Box underneath */}
              <div className="bg-[#F7F4EE] border border-[#171717]/5 p-6 rounded-sm grid grid-cols-12 gap-8 items-start min-h-[300px]">
                
                {/* Left Side Visual */}
                <div className="col-span-4 aspect-[4/3] overflow-hidden rounded-sm relative border border-[#171717]/10 bg-[#171717]/5 shadow-sm">
                  <img 
                    src={activeTimelineObj.image} 
                    alt={activeTimelineObj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 z-10 bg-[#171717] text-[#FAF8F5] px-1.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    {activeTimelineObj.type}
                  </div>
                </div>

                {/* Right Side detailed text */}
                <div className="col-span-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#E8752A] uppercase block font-bold">
                      {activeTimelineObj.date}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#171717] leading-snug">
                      {activeTimelineObj.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {activeTimelineObj.desc}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                      WHY IT MATTERED
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {activeTimelineObj.why}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest">
                    Source: {activeTimelineObj.source}
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile layout: converts to standard stacked timeline */}
            <div className="flex md:hidden flex-col space-y-8 max-w-md mx-auto">
              {cjpCaseTimeline.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white border border-[#171717]/10 rounded-sm shadow-sm space-y-4"
                >
                  <div className="flex justify-between items-center border-b border-[#171717]/5 pb-3">
                    <span className="font-serif text-lg font-bold text-[#E8752A]">
                      {item.date}
                    </span>
                    <span className="text-[8px] font-mono text-[#16734A] bg-[#FAF8F5] px-2 py-0.5 rounded-sm uppercase tracking-widest">
                      {item.type}
                    </span>
                  </div>

                  <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/5">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#171717] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-[#171717]/5 text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest">
                    Source: {item.source}
                  </div>
                </div>
              ))}
            </div>

            {/* JULY 20 CONFRONTATION DETAIL CARD */}
            <div className="bg-[#F7F4EE] border border-[#171717]/10 p-8 rounded-sm max-w-4xl mx-auto shadow-sm space-y-6">
              <div className="text-center space-y-2 border-b border-[#171717]/5 pb-4">
                <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                  SPECIAL DETAILED TIMELINE NODE
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal uppercase">
                  JULY 20, 2026 — CHALO SANSAD CONFRONTATION
                </h3>
              </div>

              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto text-center">
                A planned march from Jantar Mantar to Parliament collided with security restrictions. Police blocked routes using barricades. Clashes followed, with documented use of tear gas and baton/lathi charges.
              </p>

              {/* Protesters vs State split panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                  <span className="text-[9px] font-sans font-bold text-[#16734A] tracking-wider uppercase block mb-2">
                    PROTESTERS' POSITION
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Asserted their democratic right to peaceful assembly and speech, demanding direct cabinet dialogue regarding NEET calendar reforms and exam corruption accountability.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                  <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-wider uppercase block mb-2">
                    POLICE / STATE POSITION
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Stated that permission for the march toward Parliament had been denied due to security zones, and barricades were deployed to regulate movement and maintain public order.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#171717]/5 text-center">
                <div>
                  <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">INJURIES</span>
                  <p className="text-xs font-sans font-semibold text-[#171717] pt-1">
                    60+ Protesters & 100+ Police Personnel Reported Injured
                  </p>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">HUMAN RIGHTS RECORD</span>
                  <p className="text-xs font-sans font-semibold text-[#171717] pt-1">
                    Amnesty International raised serious concerns over unnecessary force
                  </p>
                </div>
              </div>

              <div className="text-right text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest pt-2">
                Source Log: India Today · Reuters · ThePrint · Amnesty International
              </div>
            </div>

            {/* Cabinet Resignation Note */}
            <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 rounded-sm max-w-4xl mx-auto shadow-xs text-center space-y-4">
              <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                CHRONOLOGICAL RESOLUTION METADATA
              </span>
              <h4 className="font-serif text-lg md:text-xl font-bold text-[#171717] uppercase tracking-wider">
                Resignation of Education Minister Dharmendra Pradhan
              </h4>
              <p className="text-xs font-sans font-light text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                Union Education Minister Dharmendra Pradhan resigned on July 25, 2026. Following cabinet negotiations, physical protests were formally called off. Note: while the resignation followed the period of student mobilisation, a direct causal link has not been independently established.
              </p>
            </div>

            {/* AFTERMATH MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block mb-2">ACHIEVED</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Ministerial resignation meeting a key demand, establishing cabinet level accountability.
                </p>
              </div>
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block mb-2">ACCEPTED</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Criminal code revisions for examination fraud and structural audit teams for entrance boards.
                </p>
              </div>
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase block mb-2">REMAINS</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Resource inequalities in rural schools and coaching delays for provincial recruitment boards.
                </p>
              </div>
            </div>

            {/* Sources section */}
            <div className="max-w-4xl mx-auto pt-6 border-t border-[#171717]/10 text-right">
              <span className="text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest block mb-2">
                VERIFIABLE INQUIRY SOURCES
              </span>
              <div className="flex justify-end items-center gap-4 text-[9px] font-mono text-[#E8752A] uppercase tracking-wider">
                <a href="https://indianexpress.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Indian Express</a>
                <span>·</span>
                <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Reuters</a>
                <span>·</span>
                <a href="https://theprint.in" target="_blank" rel="noopener noreferrer" className="hover:underline">ThePrint</a>
                <span>·</span>
                <a href="https://www.amnesty.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Amnesty</a>
              </div>
            </div>

          </div>
        </section>

        {/* 10 — HISTORICAL CONTINUITY */}
        <section id="historical-continuity" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                10 — DEMOCRATIC ROOTS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                HISTORICAL CONTINUITY
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Today's India did not appear from nowhere. We trace how present-day democratic conventions connect to older civic traditions, public meetings, and constitutional developments.
              </p>
            </div>

            {/* Symmetrical Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-[#FAF8F5] border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block mb-1">Democratic Spaces</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Designated spaces like Jantar Mantar have served for generations as central platforms where civic complaints are formally registered.
                </p>
              </div>
              <div className="p-6 bg-[#FAF8F5] border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase block mb-1">Mobilisation Traditions</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Student assemblies, labor movements, and civil rights mobilisations continue to shape political discourse, inheriting constitutional procedures.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Section Divider statement */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "It is also what happens when citizens disagree."
          </p>
        </div>

        {/* 10 — DEMOCRACY SPEAKS */}
        <section id="democracy-speaks" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                10 — CIVIC LIFE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                DEMOCRACY SPEAKS
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Democracy is not only what happens on election day. It also lives in daily disagreement, public debate, judicial reviews, local assemblies, and peaceful demonstrations.
              </p>
            </div>

            {/* Symmetrical components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-5 bg-[#FAF8F5] border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block mb-1">Elections & Courts</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Constitutional check and balance through active high courts and voting schedules that cycle power.
                </p>
              </div>
              <div className="p-5 bg-[#FAF8F5] border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block mb-1">Public Debate</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Academic platforms and public seminars discussing central codes, agrarian support, and labor rules.
                </p>
              </div>
              <div className="p-5 bg-[#FAF8F5] border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase block mb-1">Local Assemblies</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Panchayat groups and student unions articulating local resources directly to state authorities.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 11 — LIVING TOGETHER ( Plural India ) */}
        <section id="living-together" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                  11 — COEXISTENCE
                </span>
                <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                  LIVING TOGETHER
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  The republic is experienced in the trains, markets, workspaces, and neighborhoods shared by millions of people daily. We explore this ability to coexist despite regional and cultural differences.
                </p>
                <div className="h-[1px] w-12 bg-[#16734A]"></div>
                <span className="text-xs font-serif text-[#16734A] italic block">
                  "Everyday interactions in shared public spaces form the structural fabric of our democracy."
                </span>
              </div>

              {/* Spliced Colour photo of General Train coach */}
              <div className="lg:col-span-7 bg-white border border-[#171717]/10 p-4 shadow-md rounded-sm relative overflow-hidden group">
                <div className="aspect-[16/10] relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/story1-train.jpg" 
                    alt="Full-colour view inside a general class compartment of the Indian Railways with passengers" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    COEXISTENCE GRID: GENERAL RAILWAY COACH
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Subject: The Shared Railway Passenger Coach</span>
                  <span>Documentary Log</span>
                </div>
              </div>

            </div>

            {/* Grid of regional pluralistic slates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#171717]/5">
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] block mb-1">LANGUAGES</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Dozens of regional tongues and dialects interacting within metropolitan logistics networks daily.
                </p>
              </div>
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#16734A] block mb-1">NEIGHBORHOODS</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Mixed quarters balancing shared local grids, water pipes, and public lanes.
                </p>
              </div>
              <div className="p-5 bg-white border border-[#171717]/10 rounded-sm">
                <span className="text-[9px] font-sans font-bold text-[#E8752A] block mb-1">SHARED SPACES</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Markets, platforms, and workspace blocks where commercial logic overrides socio-ideological polarization.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 12 — THE INDIA WE ARE BUILDING */}
        <section id="building" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                12 — THE WORKPLACE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                THE INDIA WE ARE BUILDING
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                India is being built simultaneously through technology, labor, institutions, culture and everyday choices of its people.
              </p>
            </div>

            {/* Dynamic visual montage collage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {[
                { src: "/images/stories/story6-launch.jpg", title: "SPACE", desc: "Scientific progress" },
                { src: "/images/stories/story4-prep.jpg", title: "UPI", desc: "Digital public payments" },
                { src: "/images/stories/story1-station.jpg", title: "METRO", desc: "Transport grids" },
                { src: "/images/stories/story6-lab.jpg", title: "STARTUPS", desc: "Technology sectors" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAF8F5] border border-[#171717]/10 p-4 rounded-sm shadow-xs hover:border-[#16734A]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm relative border border-[#171717]/5">
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-3 space-y-0.5">
                    <span className="text-[9px] font-mono text-[#E8752A] uppercase block font-bold">{item.title}</span>
                    <span className="text-[10px] font-sans font-light text-[#6B6B6B] block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 13 — THE UNFINISHED REPUBLIC */}
        <section id="unfinished-republic" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                13 — THE INHERITANCE
              </span>
              <h2 className="font-serif text-3xl md:text-6xl uppercase tracking-wider text-[#171717]">
                THE UNFINISHED REPUBLIC
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The constitutional promises of Freedom, Equality, Democracy, and Pluralism are not static benchmarks. They remain active points of contestation.
              </p>
            </div>

            {/* Tripartite Grid: Progress vs Pressure vs Possibility */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              
              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm shadow-sm space-y-3">
                <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-wider uppercase block">
                  PROGRESS
                </span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Significant reductions in structural poverty, digital infrastructure connectivity, and world-class space technology programs.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm shadow-sm space-y-3">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-wider uppercase block">
                  PRESSURE
                </span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Intensifying media polarization, youth recruitment irregularities, and constraints on peaceful assembly.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm shadow-sm space-y-3">
                <span className="text-[10px] font-sans font-bold text-[#171717]/60 tracking-wider uppercase block">
                  POSSIBILITY
                </span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  A large young workforce pushing for administrative safeguards, educational reform, and structural opportunity.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 14 — FINAL STATEMENT */}
        <section id="final-statement" className="w-full py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-12">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            THE CONCLUSION
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
            "India is not a finished idea."
          </h2>
          
          <div className="space-y-2 max-w-lg mx-auto">
            <p className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
              Every generation inherits it.
            </p>
            <p className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
              Every generation changes it.
            </p>
          </div>

          <div className="h-[1px] w-12 bg-[#171717]/15 mx-auto"></div>

          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#16734A] tracking-wider uppercase font-semibold leading-tight">
            ITS FUTURE<br/>IS NOT WRITTEN YET.
          </h3>

          <div className="pb-12 text-[9px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest">
            THE STORY CONTINUES
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
