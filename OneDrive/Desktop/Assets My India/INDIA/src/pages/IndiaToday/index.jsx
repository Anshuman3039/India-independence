import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Chapter Connector thread motif
function ChapterConnector() {
  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-12 py-4 opacity-30 select-none pointer-events-none">
      <div className="h-[1px] flex-grow bg-[#171717]/10"></div>
      <div className="mx-4 w-1.5 h-1.5 rounded-full border border-[#171717]/30 bg-transparent"></div>
      <div className="h-[1px] flex-grow bg-[#171717]/10"></div>
    </div>
  );
}

// 2. Data for A Country in Motion
const motionThemes = [
  {
    id: "digital",
    title: "Digital Connectivity",
    description: "The rapid integration of mobile networks and low-cost data has brought over 800 million people online, transforming finance, governance, and daily communication.",
    progress: "The Unified Payments Interface (UPI) enables instant bank transfers for over 10 billion transactions monthly, from metropolitan retailers to small rural vendors.",
    unevenness: "A digital divide persists; rural access is often limited to mobile-only entertainment, while advanced digital literacy and high-speed broadband remain urban-concentrated.",
    statValue: "131 Billion+",
    statLabel: "UPI Transaction Volume (Annual)",
    statYear: "2024",
    statSource: "National Payments Corporation of India (NPCI)"
  },
  {
    id: "science",
    title: "Space & Science",
    description: "India's space capabilities have achieved major global milestones through low-cost, high-precision engineering and research.",
    progress: "Chandrayaan-3 successfully completed a soft landing on the unexplored lunar south pole, demonstrating scientific self-reliance and engineering ingenuity.",
    unevenness: "While space capabilities and technological research excel, foundational science funding and laboratory infrastructure in state universities face constraints.",
    statValue: "4th",
    statLabel: "Nation to Soft-Land on the Moon",
    statYear: "2023",
    statSource: "Indian Space Research Organisation (ISRO)"
  },
  {
    id: "urbanisation",
    title: "Urban Expansion",
    description: "Cities are expanding rapidly, turning local towns into tech hubs and drawing millions from rural districts in search of new lives.",
    progress: "Metropolitan clusters drive over 60% of India's GDP, acting as major hubs for software development, logistics, and private service sectors.",
    unevenness: "Urban infrastructure struggles with public housing, clean water supply, and garbage processing, leading to environmental stress and unequal living conditions.",
    statValue: "450 Million+",
    statLabel: "Estimated Urban Population",
    statYear: "2024",
    statSource: "United Nations Population Division"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description: "A booming startup ecosystem has turned India into a global hotspot for software-as-a-service, fintech, and digital logistics.",
    progress: "Over 115,000 startups have registered nationwide, generating high-skilled tech jobs and bringing venture capital investment to tier-2 cities.",
    unevenness: "Venture-backed startups represent a small segment; over 85% of working Indians are employed in the informal sector, lacking stable labor contracts.",
    statValue: "115,000+",
    statLabel: "Registered Tech Startups",
    statYear: "2024",
    statSource: "Department for Promotion of Industry and Internal Trade (DPIIT)"
  }
];

// 3. Data for The Promise & The Gap
const promiseGaps = [
  {
    id: "economy",
    title: "ECONOMIC GROWTH vs UNEQUAL OPPORTUNITY",
    promise: "India is the world's fastest-growing major economy, with GDP expanding at 7%–8% annually, fostering a massive middle-class market.",
    gap: "Wealth distribution is highly concentrated; informal workers face job insecurity, low wages, and a lack of structured welfare protections.",
    statTitle: "Annual GDP Growth",
    statVal: "7.2%",
    statSource: "Ministry of Statistics & Programme Implementation (2024)"
  },
  {
    id: "education",
    title: "EDUCATION vs UNEQUAL ACCESS",
    promise: "A massive expansion of higher educational institutions and digital classrooms, bringing secondary education to millions of first-generation learners.",
    gap: "Infrastructure discrepancies between private schools and government rural institutions create early educational disadvantages.",
    statTitle: "Secondary School GER",
    statVal: "79.6%",
    statSource: "Unified District Information System for Education (UDISE)"
  },
  {
    id: "digital_divide",
    title: "DIGITAL CONNECTIVITY vs DIGITAL DIVIDE",
    promise: "India boasts the world's cheapest data tariffs, allowing hundreds of millions of citizens to access mobile banking and online services.",
    gap: "Gaps remain in digital literacy; gender differences in mobile ownership restrict access to digital services for rural women.",
    statTitle: "Active Internet Users",
    statVal: "820M+",
    statSource: "Telecom Regulatory Authority of India (2024)"
  },
  {
    id: "environment",
    title: "DEVELOPMENT vs ENVIRONMENTAL PRESSURE",
    promise: "India has scaled up its solar and renewable power generation, aiming for 500 GW of non-fossil energy capacity by 2030.",
    gap: "Rapid urbanisation and industrial demands lead to air pollution, clean water depletion, and severe municipal waste challenges in major cities.",
    statTitle: "Renewable Energy Share",
    statVal: "42.8%",
    statSource: "Ministry of New and Renewable Energy (2024)"
  },
  {
    id: "unemployment",
    title: "OPPORTUNITY vs UNEMPLOYMENT",
    promise: "The growth of services, technology export, and gig-work platforms offers new income sources for millions of skilled youths.",
    gap: "High competition for stable formal sector jobs leaves a portion of university graduates searching for long-term secure positions.",
    statTitle: "Graduate Unemployment",
    statVal: "13.4%",
    statSource: "Periodic Labour Force Survey, MoSPI (2023-24)"
  }
];

// 4. Data for A Young Country (Perspectives)
const youthProfiles = [
  {
    id: "innovator",
    title: "The Tech Innovator",
    context: "Metropolitan Hubs (Bengaluru/Noida)",
    description: "A generation growing up with artificial intelligence, open-source software, and remote freelance opportunities. They seek global integration, entrepreneurial autonomy, and modern workspaces, reshaping urban lifestyles.",
    quote: "We aren't just building localized services; we are building software platforms for the global market from a desk in Bengaluru."
  },
  {
    id: "aspirant",
    title: "The Exam Aspirant",
    context: "Educational Hubs (Kota/Patna/Delhi)",
    description: "Millions of students spend years studying for competitive exams like UPSC (civil services), JEE, or banking tests. They seek the security and social status of public service, navigating high family expectations and immense mental pressure.",
    quote: "An exam isn't just about a job; for an entire rural family, it represents the only secure bridge into the formal economy."
  },
  {
    id: "migrant",
    title: "The Migrant Worker",
    context: "Rural-Urban Transition Districts",
    description: "Young adults moving from agriculture to construction, delivery services, and retail in cities. They create vital economic linkages, sending urban earnings back to rural households and shaping new metropolitan cultures.",
    quote: "Moving to the city gives me independence and the ability to fund my sister's higher education back home."
  }
];

// 5. Data for Voice of a Generation
const youthConcerns = [
  {
    title: "Public Recruitment Gaps",
    location: "National Assemblies",
    context: "Protests and public assemblies (at locations like Jantar Mantar in New Delhi) highlight recruitment delays and vacancy updates in public service roles.",
    source: "Recorded Student Organisation Dialogues (2024)"
  },
  {
    title: "Examination Integrity",
    location: "State Capitals",
    context: "Student groups campaign for stronger safeguards against paper leaks and irregularities in competitive admission and recruitment tests.",
    source: "Legislative Anti-Paper Leak Bills, Parliament Records (2024)"
  },
  {
    title: "Academic Equity & Scholarships",
    location: "University Campuses",
    context: "Debates centered around tuition fees, scholarship availability, and representation policies to ensure first-generation graduates from marginalized backgrounds can stay in higher education.",
    source: "All-India Survey on Higher Education (AISHE)"
  }
];

// 6. Data for Living Together
const coexistenceCards = [
  {
    title: "The Shared Train Compartment",
    description: "The passenger coach of the Indian Railways serves as a daily negotiated space. Passengers of diverse languages, religions, castes, and economic backgrounds sit side by side, sharing meals, managing space, and debating politics over journeys spanning thousands of miles."
  },
  {
    title: "Linguistic Tech Hubs",
    description: "Booming metropolitan apartment blocks in Bengaluru, Pune, and Hyderabad house professionals from every corner of India. Residents actively negotiate language differences and celebrate regional festivals—Pongal, Durga Puja, Eid, and Diwali—collectively."
  },
  {
    title: "Grassroots Peace Committees",
    description: "In mixed-population urban quarters, local neighborhood committees composed of diverse religious leaders and civic volunteers work continuously behind the scenes to address local disputes, manage festival routes, and maintain social harmony."
  }
];

// 7. Data for The India We Are Building
const buildersGrid = [
  { role: "The ASHA Worker", field: "Rural Health", desc: "Women community health volunteers who form the vital link between rural households and the public healthcare system, delivering vaccines and maternal care." },
  { role: "The Agri-Scientist", field: "Dryland Crops", desc: "Researchers developing drought-resistant millet varieties to help farmers secure stable yields amid changing weather patterns." },
  { role: "The Low-Cost Launch Team", field: "Aerospace", desc: "Space systems engineers designing micro-satellites for global research institutions at a fraction of standard international costs." },
  { role: "The Cooperative Organizer", field: "Organic Farming", desc: "Agrarian organizers in regions like Sikkim who built cooperative networks to make local organic produce commercially viable." },
  { role: "The Digital Educator", field: "Civic Education", desc: "Teachers setting up mobile-device learning groups in tribal blocks to help first-generation learners pass board exams." },
  { role: "The Craft Re-Interpreter", field: "Design & Heritage", desc: "Weavers and textile researchers digitizing traditional patterns to establish direct-to-consumer online trade loops." }
];

export default function IndiaToday() {
  const [activeThemeId, setActiveThemeId] = useState("digital");
  const [activeGapId, setActiveGapId] = useState("economy");
  const [activeYouthId, setActiveYouthId] = useState("innovator");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const activeThemeObj = motionThemes.find(t => t.id === activeThemeId) || motionThemes[0];
  const activeGapObj = promiseGaps.find(g => g.id === activeGapId) || promiseGaps[0];
  const activeYouthObj = youthProfiles.find(y => y.id === activeYouthId) || youthProfiles[0];

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut" }
    }
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

        {/* 1. Opening Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                INDIA TODAY
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
                THE INDIA WE LIVE IN
              </h1>
              <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light max-w-xl">
                "India is changing faster than ever — growing, arguing, adapting, building and imagining what comes next."
              </p>
              <div className="h-[1px] w-16 bg-[#E8752A]/50"></div>
              <p className="text-xs font-sans text-[#6B6B6B] tracking-wide uppercase">
                A documentary record of contemporary life, aspirations, and contradictions.
              </p>
            </div>
            
            {/* Cinematic Editorial Image Sequence Placeholder */}
            <div className="lg:col-span-6 bg-white border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
              <div className="aspect-[4/3] bg-[#171717]/5 flex items-center justify-center relative border border-[#171717]/5">
                {/* Visual tactile overlay representing document slate */}
                <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                  RECORD NO. 80-IT
                </div>
                <div className="text-center p-6 space-y-3">
                  <span className="font-serif text-lg text-[#171717]/60 block italic">
                    "Observation of Contemporary Reality"
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                    Mumbai Harbor Crossing / Solar Array Grid Slate
                  </span>
                </div>
                {/* Tactical paper/frame lines */}
                <div className="absolute inset-2 border border-dashed border-[#171717]/5 pointer-events-none"></div>
              </div>
              <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                <span>Location: Maharashtra / Rajasthan</span>
                <span>Archive Ref: IT-HERO-01</span>
              </div>
            </div>
          </div>
        </section>

        <ChapterConnector />

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
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                TRANSFORMATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal">
                A COUNTRY IN MOTION
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                Across cities, villages, laboratories and digital networks, India is changing every day. Explore the progress alongside the unevenness of this transformation.
              </p>
            </div>

            {/* Grid layout containing dynamic switcher */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Selector Column */}
              <div className="lg:col-span-4 flex flex-col space-y-2">
                {motionThemes.map((theme) => {
                  const isSelected = theme.id === activeThemeId;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setActiveThemeId(theme.id)}
                      className={`p-4 border text-left transition-all duration-300 outline-none w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] ${
                        isSelected
                          ? "bg-[#171717] border-[#171717] text-[#F7F4EE]"
                          : "bg-white/40 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                      }`}
                    >
                      <h3 className="font-serif text-base font-normal tracking-wide">
                        {theme.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Card */}
              <div className="lg:col-span-8 bg-white border border-[#171717]/10 p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeThemeObj.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                        THEME ARCHIVE
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717] uppercase tracking-wider">
                        {activeThemeObj.title}
                      </h3>
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {activeThemeObj.description}
                      </p>
                    </div>

                    {/* Progress vs Unevenness Compare */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#171717]/5">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                          THE PROGRESS
                        </span>
                        <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                          {activeThemeObj.progress}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          THE UNEVENNESS
                        </span>
                        <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                          {activeThemeObj.unevenness}
                        </p>
                      </div>
                    </div>

                    {/* Numerical Data Box */}
                    <div className="bg-[#FAF8F5] border border-[#171717]/5 p-4 rounded-sm flex items-center justify-between pt-4 mt-6">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-sans font-semibold text-[#6B6B6B]/60 uppercase tracking-widest block">
                          {activeThemeObj.statLabel}
                        </span>
                        <span className="text-3xl font-serif text-[#171717] font-semibold block">
                          {activeThemeObj.statValue}
                        </span>
                      </div>
                      <div className="text-right text-[8px] font-mono text-[#6B6B6B]/60 uppercase tracking-wider">
                        <div>Source: {activeThemeObj.statSource}</div>
                        <div>Year: {activeThemeObj.statYear}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </section>

        <ChapterConnector />

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
                "Growth can transform a country. But growth does not automatically reach everyone equally." View the visual data comparisons across five major developmental axes.
              </p>
            </div>

            {/* Split Screen Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left selector */}
              <div className="lg:col-span-5 flex flex-col space-y-2">
                <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1">
                  COMPARATIVE AXES
                </span>
                {promiseGaps.map((item) => {
                  const isSelected = item.id === activeGapId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveGapId(item.id)}
                      className={`p-4 border text-left transition-all duration-300 outline-none w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] ${
                        isSelected
                          ? "bg-[#171717] border-[#171717] text-white"
                          : "bg-[#FAF8F5]/30 border-[#171717]/10 text-[#171717] hover:bg-[#FAF8F5] hover:border-[#171717]/30"
                      }`}
                    >
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block mb-1">
                        AXIS COMPARISON
                      </span>
                      <h3 className="font-serif text-sm font-normal">
                        {item.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Right comparison display */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 shadow-sm space-y-8 min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGapObj.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/50 uppercase tracking-wider block mb-1">
                        AXIS ANALYSIS
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-[#171717] uppercase tracking-wider">
                        {activeGapObj.title.split(' vs ')[0]} <span className="text-[#E8752A] font-light">vs</span> {activeGapObj.title.split(' vs ')[1]}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      {/* Saffron Promise */}
                      <div className="bg-white border border-[#E8752A]/20 p-5 rounded-sm flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                            THE PROMISE
                          </span>
                          <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                            {activeGapObj.promise}
                          </p>
                        </div>
                      </div>

                      {/* Charcoal Gap */}
                      <div className="bg-white border border-[#171717]/10 p-5 rounded-sm flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                            THE GAP
                          </span>
                          <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                            {activeGapObj.gap}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Source metadata */}
                    <div className="pt-4 border-t border-[#171717]/5 flex items-center justify-between text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-wider">
                      <span>Indicator: {activeGapObj.statTitle} ({activeGapObj.statVal})</span>
                      <span>Source: {activeGapObj.statSource}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 4. A Young Country */}
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
                DEMOGRAPHICS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                A YOUNG COUNTRY
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                India is one of the world's youngest large societies. Its future is being imagined by a generation growing up in a rapidly shifting economic and educational environment.
              </p>
            </div>

            {/* Selector list of profiles */}
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
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                        GENERATIONAL PROFILE
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717] uppercase tracking-wider font-normal">
                        {activeYouthObj.title}
                      </h3>
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                        Context: {activeYouthObj.context}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl">
                      {activeYouthObj.description}
                    </p>

                    <div className="bg-[#FAF8F5] border-l-2 border-[#E8752A] p-4 italic font-serif text-sm text-[#171717]">
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
                      className={`p-4 border text-left transition-all duration-300 outline-none w-full cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] ${
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

        <ChapterConnector />

        {/* 5. Voice of a Generation */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                PARTICIPATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                VOICE OF A GENERATION
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "What happens when a generation feels that its future is uncertain?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed pt-1">
                Young Indians are expressing diverse concerns and positions. Public demonstrations, campus debates, and legislative demands regarding vacancies, exams, and tuition fees are integral to India's public reasoning.
              </p>
            </div>

            {/* Concerns Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {youthConcerns.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#E8752A]/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-[2px] bg-[#FAF8F5] border border-[#171717]/10 flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-[#E8752A]">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg text-[#171717] font-normal leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                        Location: {item.location}
                      </span>
                    </div>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {item.context}
                    </p>
                  </div>

                  <div className="text-[9px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest pt-2 border-t border-[#171717]/5">
                    Source: {item.source}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 6. Democracy Under Pressure */}
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
                CIVIC LIFE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                DEMOCRACY UNDER PRESSURE
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "How does a democracy remain democratic when people disagree deeply?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed pt-1">
                India's democracy is not a quiet agreement, but an ongoing negotiation. We balance the world's largest electoral machinery with active public debate, institutional friction, and digital polarization.
              </p>
            </div>

            {/* Split balanced comparison card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              <div className="bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                    THE LOGISTICAL FEAT
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    Electoral Machinery
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Over 960 million voters participating in national elections, deploying millions of electronic voting machines (EVMs) across every geographic terrain—from Himalayan summits to the deserts of Kutch.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Logistics: 1.05M+ Polling Stations
                </div>
              </div>

              <div className="bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    THE PUBLIC SQUARE FRICTION
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    Discourse & Polarisation
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    The rapid growth of social media algorithms has heightened political polarization and echo chambers. Citizens, independent media, and judicial institutions actively debate the limits of dissent and freedom of expression.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Platform: Over 600 Million Social Media Users
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 7. Living Together */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                COEXISTENCE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                LIVING TOGETHER
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                "India's diversity is not only something inherited from history. It is something negotiated every day." Explore both the friction and the mechanisms of everyday coexistence.
              </p>
            </div>

            {/* Coexistence Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {coexistenceCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F2EDE4]/30 border border-[#171717]/10 p-6 flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg text-[#171717] font-normal">
                      {card.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest">
                    NEGOTIATED DIALOGUE
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center max-w-xl mx-auto pt-4">
              <span className="text-xs font-sans font-semibold text-[#16734A] uppercase tracking-wider block mb-1">
                CENTRAL NEGOTIATION
              </span>
              <p className="font-serif text-xl md:text-2xl text-[#171717] italic">
                "How does such a diverse society continue to live together? Through daily habits of sharing space."
              </p>
            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 8. The India We Are Building */}
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
              <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal">
                THE INDIA WE ARE BUILDING
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                India is built every day by regular citizens participating in its transformation—scientists, farmers, teachers, doctors, and cooperative organizers.
              </p>
            </div>

            {/* Editorial Mosaic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildersGrid.map((builder, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#16734A]/30 transition-all duration-300"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-[#E8752A] bg-[#E8752A]/5 border border-[#E8752A]/10 px-1.5 py-0.5 rounded-sm tracking-wider uppercase">
                      {builder.field}
                    </span>
                    <h3 className="font-serif text-lg text-[#171717] font-normal pt-2">
                      {builder.role}
                    </h3>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {builder.desc}
                    </p>
                  </div>
                  <div className="text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest text-right">
                    BUILDER INDEX IT-0{idx+1}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 9. The Unfinished Republic */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                REFLECTION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                THE UNFINISHED REPUBLIC
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "How much of the India we imagined has become the India we live in?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed pt-1">
                The constitutional promises of <strong>Freedom, Equality, Democracy, Secularism, Justice, Scientific Temper, and Pluralism</strong> are not stagnant laws. They are actively contested values, continuously shaped and rewritten by civic action.
              </p>
            </div>

            {/* Visual Reflection grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-5 space-y-2">
                <span className="font-serif text-sm text-[#16734A] font-semibold block">THE PROJECT</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  The Republic is not a finished state or landmark achievement. It is a daily framework of democratic dialogue.
                </p>
              </div>
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-5 space-y-2">
                <span className="font-serif text-sm text-[#16734A] font-semibold block">THE DISAGREEMENT</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Contradictions between economic growth and structural opportunity keep the democratic conversation vital.
                </p>
              </div>
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-5 space-y-2">
                <span className="font-serif text-sm text-[#16734A] font-semibold block">THE RESPONSIBILITY</span>
                <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                  As generations inherit the republic, the shape of its institutions and values belongs entirely to its citizens.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <ChapterConnector />

        {/* 10. The People Make the Country */}
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.25 }
              }
            }}
            className="space-y-12"
          >
            <motion.span 
              variants={fadeUp}
              className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] block"
            >
              THE PEOPLE MAKE THE COUNTRY
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-tight"
            >
              "India is not a finished idea."
            </motion.h2>

            <div className="space-y-3 pt-4 max-w-xl mx-auto">
              <motion.p 
                variants={fadeUp}
                className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed"
              >
                It is built every day — in classrooms, laboratories, farms, streets, courts, workplaces, homes and public squares.
              </motion.p>
              <motion.p 
                variants={fadeUp}
                className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed"
              >
                Every generation inherits an India. Every generation changes it.
              </motion.p>
            </div>

            <div className="pt-12 pb-24">
              <motion.h3 
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#16734A] tracking-wider uppercase font-semibold"
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
