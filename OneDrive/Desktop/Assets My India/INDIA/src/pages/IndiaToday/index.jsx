import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Minimal Chapter Indicator Pill
const chapters = [
  { id: "hero", label: "01 OPENING" },
  { id: "motion", label: "02 MOTION" },
  { id: "promise-gap", label: "03 PROMISE & GAP" },
  { id: "young-country", label: "04 YOUTH" },
  { id: "generation-voice", label: "05 VOICES" },
  { id: "democracy-pressure", label: "06 PRESSURE" },
  { id: "media-polarisation", label: "07 MEDIA" },
  { id: "words-weapons", label: "08 HOSTILITY" },
  { id: "cjp-case-study", label: "09 CASE STUDY" },
  { id: "democracy-speaks", label: "10 DISSENT" },
  { id: "living-together", label: "11 LIVING TOGETHER" },
  { id: "building", label: "12 COLLAGE" },
  { id: "unfinished-republic", label: "13 REPUBLIC" },
  { id: "final-statement", label: "14 FUTURE" }
];

// 2. Data Arrays
const motionSlides = [
  {
    title: "SPACE EXPLORATION",
    desc: "From launching early capability satellites to soft-landing Chandrayaan-3 near the lunar south pole and studying solar dynamics with Aditya-L1.",
    stat: "ISRO Lunar soft-landing accomplished",
    image: "/images/stories/story6-launch.jpg",
    context: "Sriharikota Launch Grid"
  },
  {
    title: "DIGITAL PUBLIC INFRASTRUCTURE",
    desc: "A baseline digital network layer providing unified identity registers, open APIs, and mobile connectivity across rural and urban districts.",
    stat: "820 Million+ active internet users",
    image: "/images/stories/story4-prep.jpg",
    context: "Urban Internet Grid"
  },
  {
    title: "DIGITAL PAYMENTS (UPI)",
    desc: "The Unified Payments Interface enables instant mobile banking transfers down to street-vendor stalls, bypassing standard card transaction charges.",
    stat: "10 Billion+ monthly payments processed",
    image: "/images/stories/story4-stall.jpg",
    context: "Local Vendor Terminal"
  },
  {
    title: "METRO RAIL MODERNISATION",
    desc: "Rapid expansion of modern rapid transit corridors across dozens of cities, reducing intercity commutes and reshaping metropolitan labor lines.",
    stat: "850+ Kilometers of active metro lines",
    image: "/images/stories/story1-station.jpg",
    context: "New Delhi Metro Terminus"
  },
  {
    title: "EXPRESSWAY GRID",
    desc: "Heavy investments in concrete highways, elevated corridors, and bypass loops connecting major manufacturing hubs with port exits.",
    stat: "10,000+ Kilometers added annually",
    image: "/images/stories/maharashtra-citylife.jpg",
    context: "Western Express Corridor"
  },
  {
    title: "AIRPORT SYSTEMS",
    desc: "Expansion of domestic terminal infrastructures and regional connectivity schedules to facilitate cheap flights for tier-2 city residents.",
    stat: "150+ Operational airports nationally",
    image: "/images/stories/maharashtra-citylife.jpg",
    context: "Bengaluru Kempegowda Terminal"
  },
  {
    title: "SEMICONDUCTOR AMBITIONS",
    desc: "State backed capital subsidy schemes aimed at establishing local silicon fabrications, assembly plants, and logic design centers.",
    stat: "$10 Billion national subsidy pool",
    image: "/images/stories/story6-lab.jpg",
    context: "Bengaluru Micro-Fab Lab"
  },
  {
    title: "RENEWABLE GRID INFRASTRUCTURE",
    desc: "Scaling massive solar parks in dryland corridors and wind networks to meet emission targets and support agrarian electrification.",
    stat: "180 GW+ total renewable power capacity",
    image: "/images/stories/punjab-agriculture.jpg",
    context: "Rajasthan Solar Corridor"
  },
  {
    title: "CITIES IN TRANSFORMATION",
    desc: "Unprecedented urban migration rates shaping skylines and service sectors, alongside challenges of solid waste, water networks, and air metrics.",
    stat: "450 Million+ urban population",
    image: "/images/stories/maharashtra-citylife.jpg",
    context: "Mumbai Skyline at sunset"
  },
  {
    title: "STARTUP ECOSYSTEM",
    desc: "Venture capital backing dynamic solutions in logistics, digital trade platforms, biotechnology, and localized AI models.",
    stat: "115,000+ certified startups scaling",
    image: "/images/stories/story6-lab.jpg",
    context: "HSR Layout Tech Hub"
  }
];

const promiseGapCards = [
  {
    id: "growth",
    title: "ECONOMIC ENVIRONMENT",
    promise: "Fastest-growing major economy expanding at 7%–8% annually, scaling middle-class consumer demand.",
    gap: "Wealth concentration persists; informal sector workers navigate daily wage fluctuations without social nets.",
    promiseImg: "/images/stories/maharashtra-citylife.jpg",
    gapImg: "/images/stories/story1-window.jpg",
    metric: "GDP Growth: 7.2% | Source: MoSPI"
  },
  {
    id: "education",
    title: "EDUCATIONAL CHANNELS",
    promise: "Massive scale-up in secondary school enrollment and polytechnics to support rural vocational training.",
    gap: "Imbalances in resources between state universities and private colleges create early skill disparities.",
    promiseImg: "/images/stories/stories-intro-7.jpg",
    gapImg: "/images/stories/story4-prep.jpg",
    metric: "Secondary GER: 79.6% | Source: UDISE"
  },
  {
    id: "digital",
    title: "DIGITAL CONNECTIVITY",
    promise: "billions of monthly digital payments and unified registry access across distant villages.",
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
    image: "/images/stories/stories-intro-6.jpg"
  },
  {
    date: "JUNE 6, 2026",
    title: "First Jantar Mantar Assembly",
    desc: "Hundreds of examination aspirants, students, and coordinators mobilize physically at Jantar Mantar, New Delhi. A formal demands document calls for the resignation of Union Education Minister Dharmendra Pradhan, citing NEET irregularities.",
    source: "Indian Express / Commission Records",
    type: "Public Assembly",
    image: "/images/stories/stories-intro-2.jpg"
  },
  {
    date: "JUNE – JULY 2026",
    title: "Sustained Mobilisation",
    desc: "The assemblies persist through prolonged summer weeks. Coordinating teams organize local clean-up guilds and request meetings with commission authorities.",
    source: "Delhi Police Logs / Representative Register",
    type: "Sustained Protests",
    image: "/images/stories/stories-intro-1.jpg"
  },
  {
    date: "JULY 20, 2026",
    title: "Chalo Sansad: The Parliament March",
    desc: "CJP supporters attempted to march from Jantar Mantar toward Parliament. Authorities had denied permission and deployed security barricades. Clashes followed, with documented use of tear gas and lathi/baton charges by police.",
    source: "Reuters / Indian Express / Amnesty International / PTI",
    type: "Confrontation",
    image: "/images/stories/stories-intro-2.jpg"
  },
  {
    date: "JULY 25, 2026",
    title: "Cabinet Resignation",
    desc: "Dharmendra Pradhan resigns as Union Education Minister. Following negotiations regarding entrance reforms, CJP coordinators announce the formal withdrawal of the physical assemblies. Note: while the resignation occurred during the protest, a direct causal link remains subject to debate.",
    source: "Government Gazette / Press Trust of India (PTI)",
    type: "Cabinet Resignation",
    image: "/images/stories/stories-intro-7.jpg"
  }
];

export default function IndiaToday() {
  const [activeChapter, setActiveChapter] = useState("hero");
  const [motionIndex, setMotionIndex] = useState(0);
  const [promiseId, setPromiseId] = useState("growth");
  const [youthIndex, setYouthIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredTimelineIdx, setHoveredTimelineIdx] = useState(null);

  // Dynamic Scroll Progress Line & Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    }, observerOptions);

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => {
      chapters.forEach((ch) => {
        const el = document.getElementById(ch.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activePromiseObj = promiseGapCards.find(c => c.id === promiseId) || promiseGapCards[0];
  const activeSlide = motionSlides[motionIndex];
  const activeYouth = youthProfiles[youthIndex];

  return (
    <PageTransition>
      <div className="w-full bg-[#F7F4EE] text-[#171717] min-h-screen relative font-sans">
        
        {/* Dynamic Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-[#E8752A] z-50 transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }}
        />

        {/* Minimal Floating Chapter indicators at the bottom */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#171717]/95 text-[#FAF8F5] px-6 py-2.5 rounded-full shadow-xl flex items-center gap-6 z-40 text-[9px] font-sans tracking-widest uppercase backdrop-blur-sm max-w-[90vw] overflow-x-auto scrollbar-none">
          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => handleScrollTo(ch.id)}
                className={`transition-all duration-300 outline-none cursor-pointer focus-visible:text-[#E8752A] ${
                  isActive 
                    ? "text-[#E8752A] font-semibold scale-105" 
                    : "text-[#FAF8F5]/60 hover:text-[#FAF8F5]"
                }`}
              >
                {ch.label}
              </button>
            );
          })}
        </div>

        {/* 01 — HERO / OPENING */}
        <section id="hero" className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#171717] px-6 md:px-12 py-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/stories/maharashtra-citylife.jpg" 
              alt="Grandiose architectural skyline and moving traffic in urban Mumbai during twilight sunset" 
              className="w-full h-full object-cover opacity-60 scale-102 transition-transform duration-10000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />
          </div>

          {/* Top Hero Info */}
          <div className="relative z-10 flex justify-between items-start pt-12">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FAF8F5] bg-[#E8752A] px-3 py-1 rounded-sm">
              INDIA TODAY
            </span>
            <div className="text-right text-[9px] font-mono text-[#FAF8F5]/60 tracking-widest">
              RECORD ARCHIVE: IT-2026-CH01
            </div>
          </div>

          {/* Middle/Bottom Main Title Block */}
          <div className="relative z-10 max-w-4xl space-y-6 my-auto pt-24">
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-[#FAF8F5] leading-none font-normal tracking-tight">
              THE INDIA<br/>WE LIVE IN
            </h1>
            <h2 className="font-serif text-lg md:text-2xl lg:text-3xl text-[#16734A] leading-relaxed max-w-2xl font-light">
              A country moving forward, carrying its contradictions with it.
            </h2>
            <div className="h-[1px] w-24 bg-[#E8752A]"></div>
            <p className="font-sans font-light text-sm md:text-base text-[#FAF8F5]/80 max-w-xl leading-relaxed">
              India today is a country of extraordinary change — ambitious, connected and increasingly confident, while still negotiating inequality, opportunity, identity and democracy.
            </p>
          </div>

          {/* Bottom details */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/10 pt-4 text-[9px] font-mono text-[#FAF8F5]/50 tracking-widest uppercase gap-2">
            <span>Location: Mumbai Metro Zone, Maharashtra</span>
            <span>Coordinates: 18.9220° N, 72.8347° E</span>
          </div>
        </section>

        {/* 02 — INDIA IN MOTION (Full Width Slideshow Carousel) */}
        <section id="motion" className="w-full py-28 px-6 md:px-12 bg-white border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.25em] uppercase block">
                02 — TRANSFORMATION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                INDIA IN MOTION
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl leading-relaxed">
                A visual showcase of contemporary infrastructure scaling across solar zones, digital identity networks, and transit nodes.
              </p>
            </div>

            {/* Immersive Slide Component */}
            <div className="bg-[#F7F4EE] border border-[#171717]/10 p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-8 items-stretch shadow-md rounded-sm">
              
              {/* Photo Area */}
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 shadow-sm bg-[#171717]/10">
                <img 
                  src={activeSlide.image} 
                  alt={activeSlide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                />
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
                      TRANSFORMATION PATHWAYS
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold leading-tight uppercase">
                      {activeSlide.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {activeSlide.desc}
                  </p>
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

            {/* Micro thumbnail links */}
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
                  {s.title.split(" ")[0]}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* 03 — THE PROMISE & THE GAP (Split Screen Composition) */}
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
                Growth vectors do not automatically distribute opportunity equally. We examine structural contrasts across urban growth and accessibility.
              </p>
            </div>

            {/* Split Switcher Tabs */}
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
                  {item.title}
                </button>
              ))}
            </div>

            {/* Immersive symmetrical split layout with full color images */}
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

        {/* Section Continuity tag block */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "But connectivity does not automatically mean equality."
          </p>
        </div>

        {/* 04 — A YOUNG COUNTRY */}
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
                  "A generation growing up with more connectivity, more information and more ambition than ever before."
                </h3>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  India is one of the world's youngest large populations. But youth also face a fundamental question: What kind of future will this young country be able to offer?
                </p>

                {/* Progress vector links */}
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

              {/* Large, Colourful Photograph of Indian Youth */}
              <div className="lg:col-span-7 bg-[#F7F4EE] border border-[#171717]/10 p-4 shadow-md rounded-sm relative overflow-hidden group">
                <div className="aspect-[16/9] relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/stories-intro-7.jpg" 
                    alt="Full-colour portrait of students studying in an educational park setting" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    YOUTH ARCHIVE FOCUS
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Location: Chandigarh Academic Block</span>
                  <span>Documentary Grid</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 05 — VOICE OF A GENERATION */}
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
                A democracy is heard in the voices of its youngest citizens. We present multiple profiles reflecting varying economic and professional paths.
              </p>
            </div>

            {/* Profile cards */}
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

        {/* Section Continuity tag block */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "And the generation growing up inside this transformation is demanding opportunity."
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

            {/* Split Symmetrical areas asking balanced questions */}
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

        {/* 08 — WORDS AS WEAPONS (Typographic Word Cloud / Graphic Art) */}
        <section id="words-weapons" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-5xl mx-auto space-y-12 text-center">
            
            <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
              08 — PUBLIC SPEECH
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
              WHEN DISAGREEMENT BECOMES HOSTILITY
            </h2>
            
            {/* Typographic Visual Treatment */}
            <div className="py-12 border-t border-b border-[#171717]/10 flex flex-col items-center justify-center space-y-4 select-none relative overflow-hidden bg-[#FAF8F5]/30">
              
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-3xl opacity-80">
                <span className="font-serif text-2xl md:text-4xl text-[#E8752A]/50 tracking-wider">POLARISATION</span>
                <span className="font-sans text-xs tracking-widest text-[#171717]/30">INCITEMENT</span>
                <span className="font-serif text-lg text-[#171717]/60 italic">Online Hostility</span>
                <span className="font-mono text-sm tracking-wider text-[#E8752A]/40">ECHO CHAMBER</span>
                <span className="font-serif text-3xl md:text-5xl text-[#171717]/80 font-normal">HATE SPEECH</span>
                <span className="font-sans text-sm tracking-widest text-[#16734A]/40 font-bold">ALGORITHMIC FEED</span>
              </div>

              <p className="font-serif text-xs md:text-sm text-[#6B6B6B] italic pt-6 max-w-lg leading-relaxed">
                "What happens to a plural society when disagreement becomes hostility?"
              </p>
            </div>

            <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
              We analyze the rise of targeted inflammatory political rhetoric and coordinated online misinformation, assessing their long-term impact on neighborhood cohesion.
            </p>

          </div>
        </section>

        {/* Section Continuity tag block */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "Sometimes that demand becomes a public voice."
          </p>
        </div>

        {/* 09 — CJP PROTEST CASE STUDY */}
        <section id="cjp-case-study" className="w-full py-28 px-6 md:px-12 max-w-6xl mx-auto">
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

            {/* Central chronology timeline */}
            <div className="relative border-l-2 border-[#171717]/10 pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
              
              {cjpCaseTimeline.map((item, idx) => {
                const isHovered = hoveredTimelineIdx === idx;
                
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredTimelineIdx(idx)}
                    onMouseLeave={() => setHoveredTimelineIdx(null)}
                    className={`relative p-6 bg-white border rounded-sm shadow-sm transition-all duration-300 ${
                      isHovered 
                        ? "border-[#E8752A] scale-[1.01] shadow-md" 
                        : "border-[#171717]/10 opacity-90"
                    }`}
                  >
                    {/* Circle marker on line */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-7 w-3 h-3 rounded-full bg-[#FAF8F5] border-2 border-[#E8752A] z-10 transition-transform duration-300" />
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b border-[#171717]/5 pb-3 mb-4">
                      <span className="font-serif text-lg font-bold text-[#E8752A]">
                        {item.date}
                      </span>
                      <span className="text-[8px] font-mono text-[#16734A] bg-[#FAF8F5] px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold">
                        {item.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      
                      <div className="md:col-span-8 space-y-3">
                        <h4 className="font-serif text-base md:text-lg font-bold text-[#171717] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="md:col-span-4 bg-[#F7F4EE] border border-[#171717]/5 p-3 rounded-sm relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-sm"
                        />
                      </div>

                    </div>

                    <div className="pt-3 mt-4 border-t border-[#171717]/5 text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest text-right">
                      Source: {item.source}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* JULY 20 CONFRONTATION DETAIL CARD */}
            <div className="bg-[#F7F4EE] border border-[#171717]/10 p-8 rounded-sm max-w-4xl mx-auto shadow-sm space-y-6">
              <div className="text-center space-y-2 border-b border-[#171717]/5 pb-4">
                <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                  SPECIAL DETAILED TIMELINE NODE
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal">
                  JULY 20, 2026 — CHALO SANSAD CONFRONTATION
                </h3>
              </div>

              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto text-center">
                A planned march from Jantar Mantar to Parliament collided with security restrictions. Police blocked routes using barricades. Clashes followed, with reported use of tear gas and baton/lathi charges.
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

        {/* Section Continuity tag block */}
        <div className="w-full py-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="w-[1px] h-12 bg-[#171717]/10 mb-4"></div>
          <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.2em] uppercase">
            Story Continuity
          </span>
          <p className="font-serif text-lg text-[#6B6B6B] italic max-w-md pt-2">
            "But the larger question remains: how does a democracy respond to dissent?"
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

        {/* 11 — LIVING TOGETHER ( एवरीडे प्लुरल इंडिया ) */}
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
                India is being built simultaneously through technology, labor, institutions, culture and everyday choices.
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
