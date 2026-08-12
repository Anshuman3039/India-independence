import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Chapter Transition Divider Component
function SectionDivider({ text }) {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center select-none pointer-events-none">
      <div className="w-[1px] h-12 bg-[#171717]/10 mb-6"></div>
      <p className="font-serif text-lg md:text-2xl text-[#171717]/70 italic max-w-2xl leading-relaxed">
        "{text}"
      </p>
      <div className="w-[1px] h-12 bg-[#171717]/10 mt-6"></div>
    </div>
  );
}

// 2. Data Structures
const motionStats = [
  {
    id: "digital",
    title: "Digital Connectivity",
    statValue: "10 Billion+",
    statLabel: "Monthly Transactions",
    progress: "UPI instant payment system has integrated street vendors, local shops, and national retail chains into a singular digital framework.",
    unevenness: "Stable high-speed broadband and advanced digital literacy are urban-concentrated, leaving rural areas on unstable mobile-only data loops.",
    source: "National Payments Corporation of India (NPCI)"
  },
  {
    id: "science",
    title: "Space & Science",
    statValue: "4th",
    statLabel: "Nation on the Moon",
    progress: "Successfully soft-landing Chandrayaan-3 on the unexplored lunar south pole using highly efficient, low-cost precision engineering.",
    unevenness: "Specialized science programs receive funding while infrastructure and basic research labs in regional state institutions face constraints.",
    source: "Indian Space Research Organisation (ISRO)"
  },
  {
    id: "urbanisation",
    title: "Urban Expansion",
    statValue: "450M+",
    statLabel: "Estimated Urban Citizens",
    progress: "Metropolitan tech and business clusters drive over 60% of GDP, acting as major migration destinations for work and education.",
    unevenness: "Rapid influxes place heavy burdens on public housing, clean water networks, and municipal waste management structures.",
    source: "United Nations Population Division"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    statValue: "115,000+",
    statLabel: "Registered Startups",
    progress: "A booming startup corridor generating high-skilled tech jobs and bringing digital services to tier-2 and tier-3 towns.",
    unevenness: "Startups employ a small segment; over 85% of working Indians continue to operate in the informal economy without contracts.",
    source: "DPIIT Records"
  }
];

const promiseGaps = [
  {
    id: "economy",
    title: "ECONOMIC LANDSCAPE",
    promiseLabel: "Economic Growth",
    promiseText: "India remains the world's fastest-growing major economy, with GDP expanding at 7%–8% annually, fostering middle-class consumption.",
    gapLabel: "Unequal Opportunity",
    gapText: "Wealth accumulation is highly concentrated; informal laborers face job instability, lack of contract agreements, and no social security.",
    indicator: "GDP Annual Growth: 7.2%",
    source: "Ministry of Statistics & Programme Implementation (MoSPI)"
  },
  {
    id: "education",
    title: "EDUCATION & LITERACY",
    promiseLabel: "Massive Educational Outreach",
    promiseText: "A historic expansion of high-enrollment secondary schools, local polytechnics, and online universities reaching millions of families.",
    gapLabel: "Infrastructure Gaps",
    gapText: "Underfunded state universities and structural disparities with private schools create early academic inequalities for rural graduates.",
    indicator: "Secondary School GER: 79.6%",
    source: "Unified District Information System for Education (UDISE)"
  },
  {
    id: "digital",
    title: "DIGITAL LITERACY",
    promiseLabel: "Cheap Mobile Connectivity",
    promiseText: "Over 800 million active internet consumers utilizing the world's cheapest data tariffs to access mobile finance and digital services.",
    gapLabel: "The Digital Divide",
    gapText: "Vast differences in rural female smartphone ownership and stable broadband connectivity leave remote families digitally isolated.",
    indicator: "Active Connected Users: 820M+",
    source: "Telecom Regulatory Authority of India (TRAI)"
  },
  {
    id: "ecology",
    title: "ECOLOGICAL FOOTPRINT",
    promiseLabel: "Renewable Power Initiatives",
    promiseText: "Rapid deployment of clean energy parks, aiming for 500 GW of non-fossil fuel capacity by 2030 to mitigate carbon emissions.",
    gapLabel: "Environmental Stress",
    gapText: "Heavy municipal pollution, ground water depletion, and landfill pressure in industrial zones compromise local living conditions.",
    indicator: "Renewable Energy Share: 42.8%",
    source: "Ministry of New and Renewable Energy"
  },
  {
    id: "employment",
    title: "EMPLOYMENT MATRIX",
    promiseLabel: "Emerging Service & Tech Sectors",
    promiseText: "Tens of thousands of software, logistics, and gig-work opportunities created annually in growing tech hubs.",
    gapLabel: "Underemployment & Competition",
    gapText: "Intense competition for stable government positions leaves qualified first-generation graduates facing long recruitment waits.",
    indicator: "Graduate Unemployment Rate: 13.4%",
    source: "Periodic Labour Force Survey (PLFS), MoSPI"
  }
];

const youthProfiles = [
  {
    id: "innovator",
    title: "The Tech Innovator",
    context: "Metropolitan Clusters (Bengaluru / Noida)",
    desc: "Growing up alongside cloud software, remote freelance networks, and venture initiatives. They navigate highly competitive tech corridors, building platforms for global trade while facing job market shifts and high cost-of-living index rates.",
    quote: "We are building platforms for international markets from desks in Bengaluru, balancing economic potential with intense workspace shifts."
  },
  {
    id: "aspirant",
    title: "The Exam Aspirant",
    context: "Educational Hubs (Kota / Patna / Delhi)",
    desc: "Millions of students spend years in coaching institutions preparing for government commission exams (UPSC, banking, railways). They seek stable income, systemic security, and social mobility, bearing heavy psychological pressure and family hopes.",
    quote: "Securing a government position means transforming the security of an entire family. It is a long, difficult wait, but we persist."
  },
  {
    id: "migrant",
    title: "The Migrant Worker",
    context: "Agrarian-Urban Corridors",
    desc: "Young adults leaving local family farms to find retail, delivery, and building jobs in major metropolises. They constitute the physical backbone of urban infrastructure, sending earnings back to rural homes and building new city cultures.",
    quote: "Working in the city gives me economic independence. The earnings here support my family's agricultural inputs and sibling education."
  }
];

const networkConcepts = [
  { id: "employment", label: "EMPLOYMENT", desc: "Economic security, public vacancy schedules, and formal sector job creation remain central concerns shaping youth career paths." },
  { id: "education", label: "EDUCATION", desc: "Access to quality state training, scholarship availability, and standard exams are critical subjects of public discussion." },
  { id: "opportunity", label: "OPPORTUNITY", desc: "The bridge between personal effort and fair economic reward determines generational trust in state institutions." },
  { id: "fairness", label: "FAIRNESS", desc: "Robust protection against paper leaks and transparent recruitment timelines are demanded by state job aspirants." },
  { id: "representation", label: "REPRESENTATION", desc: "Having student assemblies and active representations ensures that regional challenges are communicated to policy makers." },
  { id: "democracy", label: "DEMOCRACY", desc: "Active protest and debate in public squares are expressed as core constitutional rights in a functioning state." },
  { id: "protest", label: "PROTEST", desc: "Gatherings serve as critical civic channels to address institutional gaps through public argument and reasoning." },
  { id: "future", label: "FUTURE", desc: "Navigating rapid economic digitisation, local societal pressures, and global job competition defines the path forward." }
];

const timelineEvents = [
  {
    step: "01",
    phase: "THE ISSUE",
    title: "Graduate Vacancy Freezes & Exam Delays",
    desc: "Aspirants begin expressing concerns over repeated delays in state public service commission cycles, administrative leakages of exam papers, and prolonged freezes in recruitment schedules.",
    date: "January 2026",
    location: "National Capital Region / Uttar Pradesh",
    type: "Grievance Record"
  },
  {
    step: "02",
    phase: "THE DEMAND",
    title: "Calendar Guarantees & Strict Oversight",
    desc: "Student organizations draft demands calling for transparent, timely examination schedules, binding timelines for exam-to-posting procedures, and strict legal accountability for leakages.",
    date: "February 2026",
    location: "State Universities",
    type: "Charter of Demands"
  },
  {
    step: "03",
    phase: "JANTAR MANTAR",
    title: "Gathering at the Designated Public Square",
    desc: "Student groups and non-partisan job forums schedule assemblies at Jantar Mantar, New Delhi—the designated public space for protests—to hold peaceful demonstrations and seek official dialogue.",
    date: "March 2026",
    location: "Jantar Mantar, New Delhi",
    type: "Public Assembly"
  },
  {
    step: "04",
    phase: "THE PROTEST",
    title: "Satirical Slogans & Security Barriers",
    desc: "Aspirants gather, utilizing satirical symbols like the \"Cockroach Janta Party\" (CJP) to mock their survival in tight coaching rooms. Peaceful speeches are held, and security forces deploy standard barriers to regulate movement.",
    date: "Mid-March 2026",
    location: "New Delhi",
    type: "Documented Assembly"
  },
  {
    step: "05",
    phase: "THE RESPONSE",
    title: "Investigative Committees & Anti-Leak Bill",
    desc: "Authorities set up specialized committees to investigate grievances. Simultaneously, parliament reviews legislative bills introducing severe criminal penalties for unfair examination leakages.",
    date: "Late March 2026",
    location: "Parliament of India / Commission Offices",
    type: "Official Response"
  },
  {
    step: "06",
    phase: "WHAT REMAINED",
    title: "Ongoing Systemic Negotiations",
    desc: "The protest assembly disbands following assurances. While investigations commence and legislative codes are passed, the core demand for guaranteed annual calendar timelines remains a subject of active negotiation.",
    date: "Ongoing 2026",
    location: "National",
    type: "Unresolved Aftermath"
  }
];

const buildersData = [
  { role: "The ASHA Worker", context: "Rural Public Health", desc: "Women community health volunteers forming the baseline link between rural homes and clinics, delivering vaccines and maternal care.", id: "IT-BUILD-01" },
  { role: "The Dryland Agronomist", context: "Agricultural Research", desc: "Scientists developing drought-resistant millet seeds to help small farmers secure yields amid irregular monsoons.", id: "IT-BUILD-02" },
  { role: "The Systems Engineer", context: "Low-Cost Space Flight", desc: "Space systems team designing micro-satellites for global climate monitoring at a fraction of standard international costs.", id: "IT-BUILD-03" },
  { role: "The Cooperative Leader", context: "Organic Farmer Cooperatives", desc: "Agrarian organizers building distribution chains to make organic mountain produce commercially viable in big cities.", id: "IT-BUILD-04" },
  { role: "The Civic Educator", context: "Tribal Literacy Blocks", desc: "Teachers setting up mobile device learning cells in remote villages to ensure children pass secondary exams.", id: "IT-BUILD-05" },
  { role: "The Heritage Archiver", context: "Textile Digitisation", desc: "Weavers digitizing regional patterns to establish direct online selling loops, bypassing local commission agents.", id: "IT-BUILD-06" }
];

export default function IndiaToday() {
  const [hoveredConceptId, setHoveredConceptId] = useState(null);
  const [focusedConceptId, setFocusedConceptId] = useState(null);
  const [activePromiseId, setActivePromiseId] = useState("economy");
  const [activeYouthId, setActiveYouthId] = useState("innovator");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const activePromiseObj = promiseGaps.find(g => g.id === activePromiseId) || promiseGaps[0];
  const activeYouthObj = youthProfiles.find(y => y.id === activeYouthId) || youthProfiles[0];
  const currentActiveConcept = networkConcepts.find(c => c.id === (hoveredConceptId || focusedConceptId));

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }
    }
  };

  // Node placements for Voice of a Generation network
  const nodes = {
    youth: { x: 300, y: 200, label: "YOUTH", role: "core" },
    employment: { x: 120, y: 100, label: "EMPLOYMENT" },
    education: { x: 480, y: 100, label: "EDUCATION" },
    opportunity: { x: 100, y: 220, label: "OPPORTUNITY" },
    fairness: { x: 500, y: 220, label: "FAIRNESS" },
    representation: { x: 160, y: 310, label: "REPRESENTATION" },
    democracy: { x: 440, y: 310, label: "DEMOCRACY" },
    protest: { x: 300, y: 330, label: "PROTEST" },
    future: { x: 300, y: 65, label: "FUTURE" }
  };

  const connections = [
    { from: "youth", to: "employment" },
    { from: "youth", to: "education" },
    { from: "youth", to: "opportunity" },
    { from: "youth", to: "fairness" },
    { from: "youth", to: "representation" },
    { from: "youth", to: "democracy" },
    { from: "youth", to: "protest" },
    { from: "youth", to: "future" },
    { from: "future", to: "employment" },
    { from: "future", to: "education" },
    { from: "employment", to: "opportunity" },
    { from: "education", to: "fairness" },
    { from: "opportunity", to: "representation" },
    { from: "fairness", to: "democracy" },
    { from: "representation", to: "protest" },
    { from: "democracy", to: "protest" }
  ];

  const handleConceptSelect = (id) => {
    setFocusedConceptId(id);
  };

  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] pt-24 text-left">
        
        {/* Story Transition from Ideas Section */}
        <section className="bg-[#FAF8F5] py-8 border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B] tracking-[0.2em] uppercase">
              Story Continuity
            </span>
            <div className="flex items-center gap-3">
              <span className="font-serif text-xs italic text-[#6B6B6B]">Ideas we inherit</span>
              <span className="text-[#171717]/30 text-xs">→</span>
              <span className="font-serif text-xs font-semibold text-[#16734A]">The India we live in</span>
            </div>
          </div>
        </section>

        {/* 1. Opening Section — THE INDIA WE LIVE IN */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title / Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                INDIA TODAY
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#171717] font-normal leading-tight">
                THE INDIA WE LIVE IN
              </h1>
              <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
                "India is changing faster than ever — growing, arguing, adapting, building and imagining what comes next."
              </p>
              <div className="h-[1px] w-20 bg-[#E8752A]/50"></div>
              <p className="text-[10px] font-mono text-[#6B6B6B]/80 tracking-widest uppercase">
                A documentary archive of contemporary reality.
              </p>
            </div>

            {/* Cinematic documentary photograph layout */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-5 shadow-sm relative overflow-hidden">
              <div className="aspect-[16/10] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                <img 
                  src="/images/stories/maharashtra-citylife.jpg" 
                  alt="Contemporary Mumbai city life silhouette, representing urbanization and motion"
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Visual tactile overlay representing document slate */}
                <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                  RECORD NO. IT-80
                </div>
                <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
              </div>
              <div className="flex justify-between items-center mt-3.5 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                <span>Location: Mumbai, Maharashtra</span>
                <span>Coordinates: 18.9220° N, 72.8347° E</span>
                <span>Date: 2026</span>
              </div>
            </div>

          </div>
        </section>

        <SectionDivider text="The movement creates opportunity. It does not distribute it equally." />

        {/* 2. A Country in Motion */}
        <section className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                TRANSFORMATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal uppercase tracking-wider">
                A COUNTRY IN MOTION
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Across cities, villages, laboratories and digital networks, India is changing every day. Explore the statistical moments and the structural contradictions of these changes.
              </p>
            </div>

            {/* Asymmetrical Editorial Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {motionStats.map((item, idx) => (
                <div 
                  key={item.id}
                  className="bg-white/70 border border-[#171717]/10 p-6 flex flex-col justify-between space-y-8 shadow-sm hover:border-[#16734A]/30 transition-all duration-300 relative group"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      {item.title}
                    </span>
                    <span className="text-4xl lg:text-5xl font-serif text-[#171717] font-semibold tracking-tight block">
                      {item.statValue}
                    </span>
                    <span className="text-[9px] font-sans font-bold text-[#6B6B6B] uppercase tracking-widest block border-b border-[#171717]/5 pb-2">
                      {item.statLabel}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs font-sans font-light leading-relaxed text-[#171717]">
                    <div className="space-y-1">
                      <span className="text-[8px] font-sans font-bold text-[#16734A] uppercase block">THE PROGRESS</span>
                      <p className="text-[#6B6B6B]">{item.progress}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-sans font-bold text-[#E8752A] uppercase block">THE UNEVENNESS</span>
                      <p className="text-[#6B6B6B]">{item.unevenness}</p>
                    </div>
                  </div>

                  <div className="text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest pt-2 border-t border-[#171717]/5">
                    Source: {item.source}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <SectionDivider text="And much of that unfinished promise belongs to a generation coming of age now." />

        {/* 3. The Promise & The Gap */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CONTRADICTIONS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                THE PROMISE & THE GAP
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Growth can transform a country. But growth does not automatically reach everyone equally. Both narratives exist simultaneously.
              </p>
            </div>

            {/* Split Screen Design with Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Selector left menu */}
              <div className="lg:col-span-4 flex flex-col space-y-2.5">
                {promiseGaps.map((item) => {
                  const isSelected = item.id === activePromiseId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePromiseId(item.id)}
                      className={`p-4 border text-left transition-all duration-300 outline-none w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] ${
                        isSelected
                          ? "bg-[#171717] border-[#171717] text-white"
                          : "bg-[#FAF8F5]/30 border-[#171717]/10 text-[#171717] hover:bg-[#FAF8F5] hover:border-[#171717]/30"
                      }`}
                    >
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block mb-1">
                        AXIS COMPARISON
                      </span>
                      <h3 className="font-serif text-sm font-semibold tracking-wide">
                        {item.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Editorial Split comparison output */}
              <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 shadow-sm space-y-8 min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePromiseObj.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block mb-1">
                        AXIS ANALYSIS
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717] uppercase tracking-wider font-semibold">
                        {activePromiseObj.title}
                      </h3>
                    </div>

                    {/* Split details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 border-t border-[#171717]/5 relative">
                      
                      {/* Left: The Promise (Green) */}
                      <div className="space-y-3 pr-0 md:pr-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                            {activePromiseObj.promiseLabel}
                          </span>
                          <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                            {activePromiseObj.promiseText}
                          </p>
                        </div>
                      </div>

                      {/* Right: The Gap (Orange) */}
                      <div className="space-y-3 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-[#171717]/5 pt-6 md:pt-0 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                            {activePromiseObj.gapLabel}
                          </span>
                          <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                            {activePromiseObj.gapText}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Metadata indicators */}
                    <div className="pt-6 border-t border-[#171717]/5 flex justify-between items-center text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-wider">
                      <span>Indicator: {activePromiseObj.indicator}</span>
                      <span>Source: {activePromiseObj.source}</span>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </section>

        <SectionDivider text="A young country does not speak with one voice." />

        {/* 4. A Young Country */}
        <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            
            {/* Header info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  DEMOGRAPHICS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  A YOUNG COUNTRY
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  India is one of the world's youngest large societies. Its future is being imagined by a generation growing up in a rapidly shifting economic environment, where aspirations are shaped by competition, migration, and new technologies.
                </p>
              </div>

              {/* Large documentary image on Chandigarh/Punjab Youth context */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
                <div className="aspect-[16/9] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/stories-intro-7.jpg" 
                    alt="A young Indian in a contemplative city environment, expressing contemporary student life"
                    className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700"
                  />
                  <div className="absolute inset-2 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-2.5 text-[8px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                  <span>Location: Chandigarh University District</span>
                  <span>Ref: Generation Archive IT-YOUTH</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical deck of profiles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Profile details */}
              <div className="lg:col-span-8 bg-white border border-[#171717]/10 p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeYouthObj.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                        GENERATIONAL PROFILE
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717] uppercase tracking-wider font-normal">
                        {activeYouthObj.title}
                      </h3>
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                        Context: {activeYouthObj.context}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {activeYouthObj.desc}
                    </p>

                    <div className="bg-[#FAF8F5] border-l-2 border-[#E8752A] p-4 italic font-serif text-xs md:text-sm text-[#171717]">
                      "{activeYouthObj.quote}"
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Selector buttons */}
              <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
                <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1">
                  ASPIRATIONAL VOICES
                </span>
                {youthProfiles.map((y) => {
                  const isSelected = y.id === activeYouthId;
                  return (
                    <button
                      key={y.id}
                      onClick={() => setActiveYouthId(y.id)}
                      className={`p-4 border text-left transition-all duration-300 w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] outline-none ${
                        isSelected
                          ? "bg-[#171717] border-[#171717] text-white"
                          : "bg-white border-[#171717]/10 text-[#171717] hover:bg-[#FAF8F5] hover:border-[#171717]/30"
                      }`}
                    >
                      <h4 className="font-serif text-sm font-semibold block mb-0.5">{y.title}</h4>
                      <span className={`text-[9px] font-sans block ${isSelected ? "text-white/70" : "text-[#6B6B6B]"}`}>
                        {y.context}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

          </motion.div>
        </section>

        <SectionDivider text="When voices enter the public square, democracy becomes visible — and contested." />

        {/* 5. Voice of a Generation & Conceptual Network */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                PARTICIPATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                VOICE OF A GENERATION
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "What happens when a generation feels that its future is uncertain?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Young Indians are expressing diverse concerns and positions. These concerns—employment, education, opportunity, fairness, representation—are interconnected parts of a shared public square.
              </p>
            </div>

            {/* Interactive Conceptual Network Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#171717]/5">
              
              {/* Concept SVG Network Diagram (Desktop) / Vertical representation (Mobile) */}
              <div className="lg:col-span-7 flex justify-center">
                {/* Mobile Concept List */}
                <div className="block lg:hidden w-full space-y-2">
                  <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block mb-2">
                    CONCEPTS (TAP TO EXPLORE)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {networkConcepts.map((item) => {
                      const isActive = (hoveredConceptId === item.id || focusedConceptId === item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleConceptSelect(item.id)}
                          className={`p-3 border text-left rounded-sm transition-all duration-300 focus:outline-none ${
                            isActive
                              ? "bg-[#171717] border-[#171717] text-white"
                              : "bg-[#FAF8F5] border-[#171717]/15 text-[#171717]"
                          }`}
                        >
                          <span className="text-[10px] font-sans font-semibold tracking-wider">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop Interactive SVG */}
                <div className="hidden lg:block relative w-[600px] h-[400px] border border-[#171717]/10 bg-white/40 p-4 rounded-sm">
                  <svg className="w-full h-full select-none" viewBox="0 0 600 400">
                    
                    {/* SVG Connections/Lines */}
                    {connections.map((c, idx) => {
                      const fromNode = nodes[c.from];
                      const toNode = nodes[c.to];
                      
                      const isHoveredNodeRelated = 
                        hoveredConceptId === c.from || hoveredConceptId === c.to ||
                        focusedConceptId === c.from || focusedConceptId === c.to;
                      const hasActiveNode = hoveredConceptId !== null || focusedConceptId !== null;

                      let opacity = 0.15;
                      let strokeColor = "#171717";
                      let strokeDash = "2,3";

                      if (hasActiveNode && isHoveredNodeRelated) {
                        opacity = 0.65;
                        strokeColor = "#E8752A";
                        strokeDash = "none";
                      } else if (hasActiveNode) {
                        opacity = 0.05;
                      }

                      return (
                        <line
                          key={idx}
                          x1={fromNode.x}
                          y1={fromNode.y}
                          x2={toNode.x}
                          y2={toNode.y}
                          stroke={strokeColor}
                          strokeWidth={isHoveredNodeRelated ? 1.5 : 1}
                          strokeDasharray={strokeDash}
                          style={prefersReducedMotion ? { transition: 'none' } : { transition: "all 0.5s ease-out" }}
                          opacity={opacity}
                        />
                      );
                    })}

                    {/* SVG Nodes */}
                    {Object.entries(nodes).map(([key, n]) => {
                      const isCore = n.role === "core";
                      const isHovered = hoveredConceptId === key;
                      const isFocused = focusedConceptId === key;
                      const isSelected = isHovered || isFocused;
                      
                      const hasActiveNode = hoveredConceptId !== null || focusedConceptId !== null;
                      const isRelated = hasActiveNode && (
                        key === hoveredConceptId || key === focusedConceptId ||
                        connections.some(c => 
                          (c.from === key && (c.to === hoveredConceptId || c.to === focusedConceptId)) ||
                          (c.to === key && (c.from === hoveredConceptId || c.from === focusedConceptId))
                        )
                      );

                      let fill = "#F7F4EE";
                      let stroke = "#171717";
                      let r = isCore ? 26 : 14;
                      let opacity = 1;

                      if (isSelected) {
                        fill = isCore ? "#171717" : "#E8752A";
                        stroke = isCore ? "#171717" : "#E8752A";
                      } else if (isRelated) {
                        fill = "#F2EDE4";
                        stroke = "#16734A";
                        opacity = 0.9;
                      } else if (hasActiveNode) {
                        opacity = 0.35;
                      }

                      return (
                        <g 
                          key={key} 
                          transform={`translate(${n.x}, ${n.y})`}
                          className="cursor-pointer outline-none"
                          onMouseEnter={() => !isCore && setHoveredConceptId(key)}
                          onMouseLeave={() => setHoveredConceptId(null)}
                          onClick={() => !isCore && handleConceptSelect(key)}
                          tabIndex={isCore ? -1 : 0}
                          role="button"
                          onKeyDown={(e) => {
                            if (!isCore && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              handleConceptSelect(key);
                            }
                          }}
                        >
                          {/* Pulsing focus outline coordinates */}
                          {isFocused && (
                            <circle r={r + 6} fill="none" stroke="#E8752A" strokeWidth="1" strokeDasharray="3,3" />
                          )}
                          
                          <circle
                            r={r}
                            fill={fill}
                            stroke={stroke}
                            strokeWidth={isCore ? 1.5 : 1}
                            opacity={opacity}
                            style={prefersReducedMotion ? { transition: 'none' } : { transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
                          />

                          {/* Node Text labels */}
                          <text
                            textAnchor="middle"
                            dy={isCore ? ".35em" : "2.2em"}
                            className={`${isCore ? "font-serif text-[10px]" : "font-sans text-[8px] font-semibold"} select-none`}
                            fill={isSelected && isCore ? "#FAF8F5" : "#171717"}
                            opacity={opacity}
                          >
                            {n.label}
                          </text>
                        </g>
                      );
                    })}

                  </svg>
                  
                  {/* Subtle diagram legend overlay */}
                  <span className="absolute bottom-3 left-3 text-[8px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest block">
                    Interactive Network Map
                  </span>
                </div>
              </div>

              {/* Explanatory concept panel right side */}
              <div className="lg:col-span-5 bg-white border border-[#171717]/10 p-6 shadow-sm min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {currentActiveConcept ? (
                    <motion.div
                      key={currentActiveConcept.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                          CONCEPT ARCHIVE
                        </span>
                        <h3 className="font-serif text-xl text-[#171717] font-semibold uppercase tracking-wider">
                          {currentActiveConcept.label}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {currentActiveConcept.desc}
                      </p>
                      <div className="text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest pt-2 border-t border-[#171717]/5">
                        STATUS: ACTIVE DIALOGUE MATRIX
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center py-8">
                      <span className="font-serif text-sm text-[#6B6B6B]/60 italic">
                        {prefersReducedMotion 
                          ? "Select a concept to trace connection detail."
                          : "Hover nodes on desktop or tap concepts above to trace connections."}
                      </span>
                    </div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        </section>

        {/* 6. Why Students Protest (Constellation & Conceptual Bridge) */}
        <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              CONCEPTUAL BRIDGE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
              WHY THEY PROTEST
            </h2>
            
            {/* Visual Constellation Arrangement */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-2xl mx-auto py-6">
              {["OPPORTUNITY", "FAIRNESS", "EMPLOYMENT", "EDUCATION", "REPRESENTATION", "ACCOUNTABILITY"].map((term, i) => (
                <span 
                  key={i} 
                  className="font-serif text-xs md:text-sm tracking-widest text-[#171717]/60 hover:text-[#E8752A] transition-colors duration-300 uppercase font-semibold"
                >
                  {term}
                </span>
              ))}
            </div>

            <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              Student protest is rarely about one emotion or one issue. It emerges from intersecting concerns about opportunity, fairness, employment, education, representation, and institutional accountability. These gatherings represent active civic participation within India's constitutional framework, reflecting a diversity of concerns.
            </p>
          </div>
        </section>

        {/* 7. Major Case Study: CJP Jantar Mantar Student Protest */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            {/* Case Study Header info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  A CASE FROM THE STREET
                </span>
                <span className="text-[10px] font-mono text-[#6B6B6B] tracking-[0.3em] uppercase block">
                  CJP · COCKROACH JANTA PARTY
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  JANTAR MANTAR · NEW DELHI
                </h2>
                <h3 className="font-serif text-lg text-[#16734A] italic font-normal pt-1">
                  A protest, a generation, a question.
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed border-l border-[#171717]/10 pl-6">
                  “What happens when young people believe the system is not listening?” We trace the documented timeline of the CJP student assemblies highlighting graduate employment concerns and exam security reforms.
                </p>
              </div>
            </div>

            {/* Contextual Photography for the Protest Case Study */}
            <div className="bg-[#FAF8F5] border border-[#171717]/10 p-5 shadow-sm">
              <div className="aspect-[21/9] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                <img 
                  src="/images/stories/stories-intro-2.jpg" 
                  alt="Documented assembly context view, representing public democratic protest spacing"
                  className="w-full h-full object-cover grayscale opacity-95"
                />
                <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                  CASE ARCHIVE IT-PROTEST-02
                </div>
                <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
              </div>
              <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                <span>Subject: Jantar Mantar Public Assembly Spaces</span>
                <span>Contextual Archive Photograph</span>
                <span>Coordinates: 28.6271° N, 77.2185° E</span>
              </div>
            </div>

            {/* CJP Timeline Exhibit: Horizontal on Desktop, Vertical on Mobile */}
            <div className="space-y-6 pt-8 border-t border-[#171717]/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em]">
                  DOCUMENTARY TIMELINE (CHRONOLOGICAL)
                </span>
                <span className="text-[8px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Slide or scroll below
                </span>
              </div>

              {/* Horizontal Scroll Track */}
              <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400">
                <div className="flex flex-col md:flex-row gap-6 md:min-w-[1500px]">
                  {timelineEvents.map((evt, idx) => (
                    <div 
                      key={evt.step}
                      className="w-full md:w-[320px] flex-shrink-0 bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-6 shadow-sm relative group"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-[#171717]/5 pb-3">
                          <span className="font-serif text-3xl font-normal text-[#E8752A]">
                            {evt.step}
                          </span>
                          <span className="text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                            {evt.phase}
                          </span>
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="font-serif text-base text-[#171717] font-semibold leading-snug">
                            {evt.title}
                          </h4>
                          <div className="flex items-center gap-2 pt-0.5">
                            <span className="text-[8px] font-sans font-bold text-[#16734A] uppercase tracking-wider">
                              {evt.location}
                            </span>
                            <span className="text-[#171717]/30 text-[9px]">•</span>
                            <span className="text-[8px] font-mono text-[#6B6B6B] uppercase">
                              {evt.date}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                          {evt.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#171717]/5 flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest">
                        <span>Classification: {evt.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* End Statement block */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-5 text-center rounded-sm mt-4">
                <span className="font-serif text-base md:text-lg text-[#171717] italic">
                  “The protest ended. The question did not.”
                </span>
              </div>
            </div>

            {/* Reflection: "WHAT DOES THIS TELL US?" */}
            <div className="bg-white border border-[#171717]/10 p-8 shadow-sm space-y-6 max-w-4xl mx-auto rounded-sm mt-12">
              <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-widest block text-center">
                REFLECTIVE SYNTHESIS
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight text-center">
                WHAT DOES A PROTEST TELL US?
              </h3>
              <div className="h-[1px] w-12 bg-[#16734A]/40 mx-auto"></div>
              
              <div className="space-y-4 max-w-2xl mx-auto text-center">
                <p className="font-serif text-lg text-[#171717] font-normal italic">
                  “Democracy is not only what happens inside institutions. It is also what happens when citizens ask those institutions to listen.”
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  A protest can be inconvenient, imperfect, emotional, and contested—and still remain a valid part of democratic life. Importantly, democratic participation and the correctness of a specific demand are separate questions; the value of public expression is in the space it provides for negotiation.
                </p>
              </div>
            </div>

          </motion.div>
        </section>

        <SectionDivider text="Democracy is not only about disagreement. It is also about learning to live with it." />

        {/* 8. Democracy Under Pressure */}
        <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CIVIC INSTITUTIONS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                DEMOCRACY UNDER PRESSURE
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Explore the complexity of democratic life through the machinery of elections and the friction of public debate.
              </p>
            </div>

            {/* Asymmetric grid of two narratives */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left narrative: Electoral machine */}
              <div className="lg:col-span-6 bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                    THE LOGISTICAL FEAT
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    Electoral Machine
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Over 960 million voters participate in national elections, utilizing millions of electronic voting machines (EVMs) deployed across Himalayan high-altitude schools to island territories.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Operational Scope: 1.05 Million Polling Stations
                </div>
              </div>

              {/* Right narrative: Polarization */}
              <div className="lg:col-span-6 bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    THE PUBLIC CONTEST
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    Discourse & Polarisation
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Algorithms shape social platforms, concentrating echo chambers and online polarization. Civil groups, institutional checks, and independent journalism debate the protections of dissent.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Discourse Reach: Over 600 Million Online Voters
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        <SectionDivider text="What we inherit is only part of what we become." />

        {/* 9. Living Together */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            
            {/* Split layout - copy vs image triptych */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text copy */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  COEXISTENCE
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  LIVING TOGETHER
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  India is not held together because everyone agrees. It is held together through the everyday practice of living together despite difference. diversity is negotiated daily in compartments, corridors, and neighborhood councils.
                </p>
                <div className="h-[1px] w-16 bg-[#16734A]/50"></div>
                <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                  EVERYDAY NEGOTIATIONS
                </span>
              </div>

              {/* Triptych of Train/Coexistence images */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-5 shadow-sm relative">
                <div className="aspect-[16/9] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/story1-train.jpg" 
                    alt="Indian railway coach compartment, a microcosm of everyday negotiated space"
                    className="w-full h-full object-cover grayscale opacity-90"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    MICROCOSM INDEX IT-COEX-01
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[8px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Subject: The Shared Railway Compartment</span>
                  <span>Contextual Archive Record</span>
                </div>
              </div>
            </div>

            {/* Tri-card grid showing coexistence dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#171717]/5">
              <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                  The Passenger Coach
                </h4>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Daily sharing of space, food, and debate across languages and social backgrounds during long-distance travels spanning national rail corridors.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                  Mixed Neighborhoods
                </h4>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Linguistic tech corridors housing professionals from every state, who manage language boundaries and share in mixed local celebrations.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                  Peace Committees
                </h4>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Local neighborhood volunteers and multi-faith leaders coordinating civic efforts to resolve community tensions and preserve public trust.
                </p>
              </div>
            </div>

          </motion.div>
        </section>

        <SectionDivider text="Every generation adds something. Every generation leaves something unfinished." />

        {/* 10. The India We Are Building */}
        <section className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                BUILDERS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal uppercase tracking-wider">
                THE INDIA WE ARE BUILDING
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The republic is continuously shaped by the everyday work of its people. Meet the voices engaged in local transformations.
              </p>
            </div>

            {/* Contributor Cards with Restrained Archival Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildersData.map((builder) => (
                <div 
                  key={builder.id}
                  className="bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#16734A]/30 transition-all duration-300 relative group"
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#171717] font-semibold">
                        {builder.role}
                      </h4>
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                        {builder.context}
                      </span>
                    </div>

                    <div className="w-12 h-[1px] bg-[#171717]/5"></div>

                    <div className="space-y-1.5">
                      <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                        WHY THEIR VOICE MATTERS
                      </span>
                      <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {builder.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#171717]/5 flex justify-between items-center text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest">
                    <span>ARCHIVE · INDIA TODAY</span>
                    <span>{builder.id}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </section>

        <SectionDivider text="The story is still being written." />

        {/* 11. The Unfinished Republic */}
        <section className="py-28 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                REFLECTION
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#171717] font-normal leading-tight">
                THE UNFINISHED REPUBLIC
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "How much of the India we imagined has become the India we live in?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The constitutional promises of Freedom, Equality, Democracy, Secularism, Justice, Scientific Temper, and Pluralism are not static benchmarks. They remain active points of contestation, shaped and negotiated daily by citizens. The republic remains a process, continuously written and rewritten.
              </p>
            </div>
          </motion.div>
        </section>

        <SectionDivider text="India is not a finished idea." />

        {/* 12. Final Conclusion */}
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: prefersReducedMotion ? 0 : 0.25 }
              }
            }}
            className="space-y-12"
          >
            <motion.span 
              variants={fadeUp}
              className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] block"
            >
              THE REPUBLIC REMAINS A QUESTION
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#171717] font-normal leading-tight"
            >
              "India is not a finished idea."
            </motion.h2>

            <div className="space-y-3 max-w-xl mx-auto pt-4 text-center">
              <motion.p 
                variants={fadeUp}
                className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed"
              >
                It is being argued, tested, challenged and rebuilt by every generation.
              </motion.p>
              <motion.p 
                variants={fadeUp}
                className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed"
              >
                Every generation inherits an India. Every generation changes it.
              </motion.p>
            </div>

            {/* Final Statement with Generous Whitespace */}
            <div className="pt-16 pb-28">
              <motion.h3 
                variants={fadeUp}
                className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#16734A] tracking-wider uppercase font-semibold"
              >
                ITS FUTURE IS NOT WRITTEN YET.
              </motion.h3>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
