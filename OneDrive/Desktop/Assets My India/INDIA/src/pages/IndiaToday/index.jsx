import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Chapter Transition Divider Component
function SectionDivider({ text, label = "Story Continuity" }) {
  return (
    <div className="w-full py-20 md:py-28 px-6 md:px-12 flex flex-col items-center justify-center text-center select-none pointer-events-none">
      <div className="w-[1px] h-14 bg-[#171717]/10 mb-6"></div>
      {label && (
        <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase mb-4">
          {label}
        </span>
      )}
      <p className="font-serif text-lg md:text-2xl text-[#171717]/80 italic max-w-3xl leading-relaxed">
        "{text}"
      </p>
      <div className="w-[1px] h-14 bg-[#171717]/10 mt-6"></div>
    </div>
  );
}

// 2. Full-Width Documentary Break
function DocumentaryBreak({ image, caption, label = "INDIA TODAY · 2026" }) {
  return (
    <div className="w-full relative h-[60vh] md:h-[70vh] overflow-hidden bg-[#171717] my-12">
      <img 
        src={image} 
        alt={caption}
        className="w-full h-full object-cover opacity-90"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-8 flex flex-col justify-between items-start z-10">
        <span className="text-[9px] font-mono text-[#FAF8F5] bg-[#E8752A] px-2.5 py-0.5 tracking-[0.2em] uppercase">
          {label}
        </span>
        <p className="font-serif text-xl md:text-3xl text-[#FAF8F5] max-w-xl leading-tight">
          {caption}
        </p>
      </div>
    </div>
  );
}

// 3. Data Structures
const progressSlides = [
  {
    id: "space",
    title: "LOOKING BEYOND EARTH",
    subtitle: "India in Space",
    desc: "India's space programme has moved from building national capability to pursuing increasingly ambitious scientific and exploration missions, including the Chandrayaan-3 lunar landing and the Aditya-L1 solar observatory.",
    image: "/images/stories/story6-launch.jpg",
    label: "LAUNCH SITE · SRIHARIKOTA",
    dataLabel: "ISRO Lunar Soft-landing Accomplished"
  },
  {
    id: "digital",
    title: "INDIA, CONNECTED",
    subtitle: "Digital Public Infrastructure",
    desc: "Digital public infrastructure has transformed everyday life. Low-cost data access and the Unified Payments Interface (UPI) enable over 10 billion instant mobile financial transactions monthly.",
    image: "/images/stories/story4-prep.jpg",
    label: "STREET VENDOR GRID · BENGALURU",
    dataLabel: "10 Billion+ Monthly Payments (UPI)"
  },
  {
    id: "transport",
    title: "A COUNTRY ON THE MOVE",
    subtitle: "Physical Transit Networks",
    desc: "Physical connectivity is expanding rapidly. Modern transit networks—including high-speed Vande Bharat express trains, expanded highway grids, and municipal metro lines—are reshaping intercity mobility.",
    image: "/images/stories/story1-station.jpg",
    label: "METROPOLITAN STATION · NEW DELHI",
    dataLabel: "Transit Expansion: Vande Bharat & Metros"
  },
  {
    id: "cities",
    title: "CITIES IN TRANSFORMATION",
    subtitle: "Urban Migration Hubs",
    desc: "Metropolitan hubs like Bengaluru, Hyderabad, and Mumbai drive the service sectors, acting as magnets for labor migration, education, and software export development.",
    image: "/images/stories/maharashtra-citylife.jpg",
    label: "MARINE DRIVE · MUMBAI",
    dataLabel: "450 Million+ Estimated Urban Citizens"
  },
  {
    id: "science",
    title: "BUILDING WHAT COMES NEXT",
    subtitle: "Scientific Research",
    desc: "Ambition, investment, and challenges in engineering, AI modeling, biotechnology, and semiconductor labs. While structural barriers persist, national research continues to scale.",
    image: "/images/stories/story6-lab.jpg",
    label: "MICRO-LAB · BENGALURU",
    dataLabel: "AI & Biotech Hubs Scaling"
  }
];

const promiseGaps = [
  {
    id: "economy",
    title: "ECONOMIC ENVIRONMENT",
    promiseText: "India is the world's fastest-growing major economy, expanding at 7%–8% annually and driving middle-class consumer demand.",
    gapText: "Wealth remains highly concentrated; informal sector workers face job insecurity, low daily wages, and a lack of social safety nets.",
    promiseImg: "/images/stories/maharashtra-citylife.jpg",
    gapImg: "/images/stories/story1-window.jpg",
    line: "GROWTH ────────────────────── DISTRIBUTION",
    indicator: "GDP Growth: 7.2% | Source: MoSPI (2024)"
  },
  {
    id: "education",
    title: "EDUCATIONAL ACCESS",
    promiseText: "Massive scale-up in secondary school enrollment and expansion of local polytechnic institutions to reach rural families.",
    gapText: "Underfunded regional state universities and quality imbalances with private systems create early academic disparity.",
    promiseImg: "/images/stories/stories-intro-7.jpg",
    gapImg: "/images/stories/story4-prep.jpg",
    line: "EDUCATION ─────────────────── ACCESS",
    indicator: "Secondary School GER: 79.6% | Source: UDISE"
  },
  {
    id: "digital",
    title: "DIGITAL PUBLIC SPACE",
    promiseText: "Over 800 million active internet consumers utilizing cheap mobile data tariffs to access e-finance and national portals.",
    gapText: "Vast differences in rural female smartphone ownership and stable broadband access keep remote communities isolated.",
    promiseImg: "/images/stories/story4-stall.jpg",
    gapImg: "/images/stories/story1-train.jpg",
    line: "OPPORTUNITY ───────────────── INEQUALITY",
    indicator: "Active Connected Users: 820M+ | Source: TRAI"
  }
];

const cjpTimeline = [
  {
    id: "may-origin",
    date: "MAY 2026",
    title: "Satirical Online Origins",
    desc: "CJP (Cockroach Janta Party) emerges as a satirical online movement associated with student organizer Abhijeet Dipke. The movement traces its origin to a Supreme Court hearing on May 15, 2026, regarding examination processes and the subsequent viral student responses calling for systemic reforms.",
    why: "Humor and digital satire became the vehicle for serious youth mobilisation, engaging students who felt standard political channels were unresponsive.",
    source: "Indian Express / Media Archives",
    image: "/images/stories/stories-intro-6.jpg",
    type: "Digital Genesis"
  },
  {
    id: "june-6",
    date: "JUNE 6, 2026",
    title: "First Jantar Mantar Mobilisation",
    desc: "Hundreds of students, examination aspirants, and youth organizers gather at Jantar Mantar, New Delhi. A central demands document calls for the resignation of Union Education Minister Dharmendra Pradhan, amid intensifying concerns over NEET examination irregularities.",
    why: "This transitioned a viral digital movement into a physical public assembly, testing the logistics of student coordination in the capital.",
    source: "Indian Express / Commission Records",
    image: "/images/stories/stories-intro-2.jpg",
    type: "Public Assembly"
  },
  {
    id: "june-july",
    date: "JUNE → JULY 2026",
    title: "Prolonged Mobilisation",
    desc: "The Jantar Mantar protests persist for weeks. Student representatives request official audiences with commission heads and parliamentarians, focusing on structural paper leak safeguards.",
    why: "Demonstrated sustained organization and endurance under varying summer weather conditions, drawing national editorial attention.",
    source: "Delhi Police Logs / Youth Forum Registers",
    image: "/images/stories/stories-intro-1.jpg",
    type: "Sustained Assembly"
  },
  {
    id: "july-20",
    date: "JULY 20, 2026",
    title: "Chalo Sansad: The Parliament March",
    desc: "A planned march from Jantar Mantar toward Parliament by CJP supporters collided with security restrictions. Authorities had denied permission, deploying police barricades. Clashes followed, with documented use of tear gas and baton/lathi charges to stop the march.",
    why: "A major point of confrontation. Reporting noted that over 60 protesters and over 100 police personnel were injured, raising concerns from human rights groups.",
    source: "Reuters / Indian Express / PTI / Amnesty International",
    image: "/images/stories/stories-intro-2.jpg",
    type: "Clashes & Restrictions"
  },
  {
    id: "july-25",
    date: "JULY 25, 2026",
    title: "Education Minister Dharmendra Pradhan Resigns",
    desc: "Union Education Minister Dharmendra Pradhan announces his resignation as Union Education Minister. Following negotiations and commitments to exam reforms, CJP coordinators announce the formal withdrawal of Jantar Mantar assemblies.",
    why: "A major milestone showing how youth mobilisation directly impacted cabinet appointments, though systemic debates remain open.",
    source: "Government Gazette / Press Trust of India (PTI)",
    image: "/images/stories/stories-intro-7.jpg",
    type: "Resignation & Withdrawal"
  }
];

const juneCalendar = [
  { day: "06", active: true, title: "Protest Begins", desc: "First major Jantar Mantar assembly calling for structural audits." },
  { day: "13", active: false },
  { day: "20", active: false },
  { day: "27", active: false }
];

const julyCalendar = [
  { day: "04", active: false },
  { day: "11", active: false },
  { day: "18", active: true, title: "Negotiation Talks", desc: "CJP representatives meet government officers." },
  { day: "20", active: true, title: "Chalo Sansad March", desc: "Clashes reported as police block march toward Parliament." },
  { day: "25", active: true, title: "Minister Resigns", desc: "Education Minister Dharmendra Pradhan resigns; protest called off." }
];

const navigationItems = [
  { id: "sec-01", label: "01 HERO" },
  { id: "sec-02", label: "02 MOVING FORWARD" },
  { id: "sec-03", label: "03 PROMISE & GAP" },
  { id: "sec-04", label: "04 YOUNG INDIA" },
  { id: "sec-05", label: "05 SOCIETY PRESSURE" },
  { id: "sec-06", label: "06 MEDIA POLARISATION" },
  { id: "sec-07", label: "07 WORDS AS WEAPONS" },
  { id: "sec-08", label: "08 DEMOCRACY SPEAKS" },
  { id: "sec-09", label: "09 CJP PROTEST CASE" },
  { id: "sec-10", label: "10 DEMOCRACY PRESSURES" },
  { id: "sec-11", label: "11 LIVING TOGETHER" },
  { id: "sec-12", label: "12 REPUBLIC" }
];

// Return to Progress Montage Images
const returnProgressImages = [
  { src: "/images/stories/story6-launch.jpg", label: "SPACE FRONTIER", caption: "Deep-space exploration, Moon landings, and solar observatories." },
  { src: "/images/stories/story4-prep.jpg", label: "DIGITAL INFRASTRUCTURE", caption: "Cheapest data access and global leadership in instant payments." },
  { src: "/images/stories/story1-station.jpg", label: "MODERN TRANSIT", caption: "Vande Bharat, expressways, and municipal metros connecting towns." },
  { src: "/images/stories/story6-lab.jpg", label: "SCIENCE & STARTUPS", caption: "Booms in biotechnology, AI models, and startups in tech hubs." }
];

const youthProfiles = [
  {
    id: "innovator",
    title: "The Tech Innovator",
    context: "Metropolitan Hubs (Bengaluru / Noida)",
    desc: "Growing up alongside software platforms, remote gig networks, and tech ventures. They navigate highly competitive tech corridors, building systems for international trade while facing job market shifts and cost-of-living increases.",
    quote: "We are building platforms for international markets from desks in Bengaluru, balancing economic potential with intense workspace shifts.",
    image: "/images/stories/story6-lab.jpg"
  },
  {
    id: "aspirant",
    title: "The Exam Aspirant",
    context: "Educational Centers (Kota / Patna / Delhi)",
    desc: "Millions of students spend years in coaching centers preparing for government commissions (UPSC, railways, banks). They seek stable careers, public service security, and social status, bearing heavy psychological pressure and family hopes.",
    quote: "Securing a government position means transforming the security of an entire family. It is a long, difficult wait, but we persist.",
    image: "/images/stories/stories-intro-7.jpg"
  },
  {
    id: "migrant",
    title: "The Migrant Worker",
    context: "Agrarian-Urban Corridors",
    desc: "Young adults leaving agricultural work to find building, retail, and delivery jobs in major metropolises. They are the physical backbone of urban building, sending money home and shaping contemporary city cultures.",
    quote: "Working in the city gives me economic independence. The earnings here support my family's agricultural inputs and sibling education.",
    image: "/images/stories/story4-prep.jpg"
  }
];

const buildersData = [
  { role: "The ASHA Worker", context: "Rural Public Health", desc: "Women community health volunteers forming the baseline link between rural homes and clinics, delivering vaccines and maternal care.", id: "IT-BUILD-01" },
  { role: "The Dryland Agronomist", context: "Agricultural Research", desc: "Scientists developing drought-resistant millet seeds to help small farmers secure yields amid irregular monsoons.", id: "IT-BUILD-02" },
  { role: "The Systems Engineer", context: "Low-Cost Space Flight", desc: "Space systems team designing micro-satellites for global climate monitoring at a fraction of standard international costs.", id: "IT-BUILD-03" },
  { role: "The Cooperative Leader", context: "Organic Farmer Cooperatives", desc: "Organic organizers building distribution chains to make organic mountain produce commercially viable in big cities.", id: "IT-BUILD-04" },
  { role: "The Civic Educator", context: "Tribal Literacy Blocks", desc: "Teachers setting up mobile device learning cells in remote villages to ensure children pass secondary exams.", id: "IT-BUILD-05" },
  { role: "The Heritage Archiver", context: "Textile Digitisation", desc: "Weavers digitizing regional patterns to establish direct online selling loops, bypassing local commission agents.", id: "IT-BUILD-06" }
];

export default function IndiaToday() {
  const [activeSection, setActiveSection] = useState("sec-01");
  const [activePromiseId, setActivePromiseId] = useState("economy");
  const [activeYouthId, setActiveYouthId] = useState("innovator");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  // Timeline sticky control
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [hoveredCalendarDay, setHoveredCalendarDay] = useState(null);
  
  // Builders conceptual network mapping: Science, Education, India, Democracy, Equality, Pluralism, Technology, Opportunity, Culture, Environment
  const [hoveredBuildConcept, setHoveredBuildConcept] = useState(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // IntersectionObserver for side scroll progress
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navigationItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navigationItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Slideshow auto advance (7s)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % progressSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const activePromiseObj = promiseGaps.find(g => g.id === activePromiseId) || promiseGaps[0];
  const activeYouthObj = youthProfiles.find(y => y.id === activeYouthId) || youthProfiles[0];
  const activeTimelineObj = cjpTimeline[activeTimelineIndex] || cjpTimeline[0];
  const activeSlideObj = progressSlides[activeSlideIndex] || progressSlides[0];

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }
    }
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Concept mapping for final building network: Science, Education, Democracy, Equality, Technology, Pluralism, Opportunity, Culture, Environment
  const conceptBuilderMapping = {
    science: ["IT-BUILD-02", "IT-BUILD-03"],
    education: ["IT-BUILD-05", "IT-BUILD-01"],
    democracy: ["IT-BUILD-01", "IT-BUILD-04", "IT-BUILD-05"],
    equality: ["IT-BUILD-01", "IT-BUILD-05"],
    technology: ["IT-BUILD-03", "IT-BUILD-05"],
    pluralism: ["IT-BUILD-06"],
    opportunity: ["IT-BUILD-02", "IT-BUILD-04"],
    culture: ["IT-BUILD-06"],
    environment: ["IT-BUILD-02", "IT-BUILD-04"]
  };

  const conceptConnections = {
    science: ["technology", "education"],
    education: ["equality", "democracy", "opportunity"],
    democracy: ["equality", "pluralism"],
    equality: ["education"],
    technology: ["science", "opportunity", "environment"],
    pluralism: ["culture"],
    opportunity: ["equality", "technology"],
    culture: ["pluralism"],
    environment: ["science"]
  };

  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] pt-24 text-left relative flex">
        
        {/* Sticky Left Navigation */}
        <aside className="hidden lg:flex flex-col justify-between fixed left-8 top-1/4 h-3/5 w-48 z-40 select-none border-l border-[#171717]/10 pl-4 py-4">
          <div className="space-y-1">
            <span className="text-[8px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block mb-4">
              INDIA TODAY INDEX
            </span>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToSection(item.id)}
                      className={`text-left text-[9px] font-sans tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer block focus-visible:text-[#E8752A] ${
                        isActive 
                          ? "text-[#171717] font-semibold translate-x-1" 
                          : "text-[#6B6B6B]/60 hover:text-[#171717]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest">
            STATUS: VISUAL REDESIGN
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 w-full lg:pl-64">

          {/* 1. HERO — INDIA TODAY */}
          <section id="sec-01" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  INDIA TODAY
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#171717] font-normal leading-none tracking-tight">
                  THE INDIA<br/>WE LIVE IN
                </h1>
                <div className="space-y-2">
                  <h2 className="font-serif text-lg md:text-xl text-[#16734A] font-semibold">
                    A country moving forward.
                  </h2>
                  <h2 className="font-serif text-lg md:text-xl text-[#E8752A] font-semibold">
                    A republic still being tested.
                  </h2>
                </div>
                <p className="text-[#6B6B6B] font-sans text-base leading-relaxed font-light">
                  "India today is a country of extraordinary change — ambitious, connected and increasingly confident, while still negotiating inequality, opportunity, identity and democracy."
                </p>
                <div className="h-[1px] w-24 bg-[#E8752A]/50"></div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>METADATA RECORD</span>
                  <span>•</span>
                  <span>INDIA · 2026</span>
                </div>
              </div>

              {/* Large, Colorful Documentary Photograph */}
              <div className="lg:col-span-7 bg-white border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
                <div className="aspect-[16/10] relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/maharashtra-citylife.jpg" 
                    alt="Full-colour Mumbai city traffic and architectural skyline at sunset"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    FIELD NOTE · MUMBAI METRO LINE
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/15 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Location: Mumbai, Maharashtra</span>
                  <span>Coordinates: 18.9220° N, 72.8347° E</span>
                </div>
              </div>

            </div>
          </section>

          <SectionDivider text="India is building. A transformation written in steel, code, and orbits." />

          {/* 2. A COUNTRY MOVING FORWARD & IMMERSIVE SLIDESHOW */}
          <section id="sec-02" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="max-w-7xl mx-auto space-y-16"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                  CHAPTER 02
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal uppercase tracking-wider leading-tight">
                  A COUNTRY MOVING FORWARD
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  National capabilities are shifting rapidly from infrastructural backbones to frontier technology, orbital networks, and massive transit projects.
                </p>
              </div>

              {/* Immersive Slideshow component */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 shadow-md max-w-5xl mx-auto flex flex-col justify-between space-y-6">
                
                {/* Visual Area */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#171717]/5 bg-[#171717]/5">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeSlideObj.id}
                      src={activeSlideObj.image}
                      alt={activeSlideObj.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Decorative corner lines */}
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                  
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    {activeSlideObj.label}
                  </div>

                  <div className="absolute bottom-4 right-4 z-10 bg-[#FAF8F5] text-[#171717] px-2 py-0.5 text-[9px] font-mono font-semibold uppercase">
                    {activeSlideObj.dataLabel}
                  </div>
                </div>

                {/* Info and Navigation bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 border-t border-[#171717]/5">
                  <div className="space-y-1 max-w-xl">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      {activeSlideObj.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#171717] font-normal uppercase tracking-wider">
                      {activeSlideObj.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed pt-1">
                      {activeSlideObj.desc}
                    </p>
                  </div>

                  {/* Selector Controls */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <button 
                      onClick={() => setActiveSlideIndex((prev) => (prev - 1 + progressSlides.length) % progressSlides.length)}
                      className="w-8 h-8 rounded-full border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
                    >
                      ←
                    </button>
                    <span className="text-xs font-mono text-[#6B6B6B]">
                      {activeSlideIndex + 1} / {progressSlides.length}
                    </span>
                    <button 
                      onClick={() => setActiveSlideIndex((prev) => (prev + 1) % progressSlides.length)}
                      className="w-8 h-8 rounded-full border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
                    >
                      →
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </section>

          <SectionDivider text="BUT PROGRESS DOES NOT REACH EVERYONE EQUALLY." label="TRANSITION" />

          {/* 3. THE PROMISE & THE GAP */}
          <section id="sec-03" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-16"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  CHAPTER 03
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  THE PROMISE & THE GAP
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  We balance the growth vectors of the fastest-growing major economy with the structural challenges of access and wealth distribution.
                </p>
              </div>

              {/* Selector horizontal list */}
              <div className="flex flex-wrap items-center gap-3 border-b border-[#171717]/5 pb-6">
                {promiseGaps.map((item) => {
                  const isSelected = item.id === activePromiseId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePromiseId(item.id)}
                      className={`px-3 py-1.5 border rounded-sm text-[9px] font-sans font-semibold tracking-wider transition-all duration-300 outline-none cursor-pointer ${
                        isSelected 
                          ? "bg-[#171717] border-[#171717] text-white scale-105" 
                          : "bg-[#FAF8F5] border-[#171717]/10 text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]/30"
                      }`}
                    >
                      {item.title.split(" vs ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Editorial Split Comparison Panel */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 shadow-sm space-y-8 min-h-[380px]">
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
                        AXIS COMPARISON
                      </span>
                      <h3 className="font-serif text-2xl text-[#171717] uppercase tracking-wider font-semibold">
                        {activePromiseObj.title}
                      </h3>
                    </div>

                    {/* Visually rich comparison with colour photography */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 border-t border-[#171717]/5">
                      
                      {/* Left: The Promise (Green highlight) */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                            THE PROMISE
                          </span>
                          <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                            {activePromiseObj.promiseText}
                          </p>
                        </div>
                        <div className="aspect-[16/9] border border-[#171717]/10 overflow-hidden relative rounded-sm shadow-sm">
                          <img 
                            src={activePromiseObj.promiseImg} 
                            alt="The Promise visual representation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Right: The Gap (Orange highlight) */}
                      <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#171717]/5 pt-6 md:pt-0 pl-0 md:pl-8 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                            THE GAP
                          </span>
                          <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                            {activePromiseObj.gapText}
                          </p>
                        </div>
                        <div className="aspect-[16/9] border border-[#171717]/10 overflow-hidden relative rounded-sm shadow-sm">
                          <img 
                            src={activePromiseObj.gapImg} 
                            alt="The Gap visual representation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Connecting line */}
                    <div className="hidden md:block py-2 text-center text-[9px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest">
                      {activePromiseObj.line}
                    </div>

                    <div className="pt-4 border-t border-[#171717]/5 flex justify-between items-center text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-wider">
                      <span>{activePromiseObj.indicator}</span>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </section>

          <SectionDivider text="And the generation growing up inside this transformation is demanding opportunity." />

          {/* 4. A YOUNG INDIA */}
          <section id="sec-04" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="max-w-7xl mx-auto space-y-16"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                    CHAPTER 04
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                    A YOUNG INDIA
                  </h2>
                  <h3 className="font-serif text-lg text-[#16734A] italic font-normal">
                    "A generation growing up with more connectivity, more information and more ambition than ever before."
                  </h3>
                  <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                    India is one of the world's youngest large societies. Its future is being imagined by a generation growing up in a rapidly shifting economic environment.
                  </p>
                  <div className="space-y-1.5 pt-4">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      BUT ASPIRATION NEEDS OPPORTUNITY.
                    </span>
                    {/* Visual Chain vector */}
                    <div className="flex items-center gap-2 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
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

                <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
                  <div className="aspect-[16/9] relative border border-[#171717]/5 overflow-hidden">
                    <img 
                      src={activeYouthObj.image} 
                      alt={activeYouthObj.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-2 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2.5 text-[8px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    <span>Active Profile: {activeYouthObj.title}</span>
                    <span>Ref: Generation Archive IT-YOUTH</span>
                  </div>
                </div>
              </div>

              {/* Aspirational switcher */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
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
                          GENERATIONAL VOICE
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
                            : "bg-white border-[#171717]/10 text-[#171717] hover:bg-[#FAF8F5]"
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

          {/* 5. A SOCIETY UNDER PRESSURE */}
          <section id="sec-05" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CHAPTER 05
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                A SOCIETY UNDER PRESSURE
              </h2>
              <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                "How does a diverse democracy remain cohesive when disagreement becomes increasingly intense?"
              </span>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                As physical and digital networks expand, social and political disagreements intensify, presenting complex challenges to public discourse and shared spaces.
              </p>
            </div>
          </section>

          {/* 6. MEDIA, INFORMATION & POLARISATION */}
          <section id="sec-06" className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  CHAPTER 06
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  WHO TELLS THE STORY?
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  More information does not always mean more understanding. We map the contemporary ecosystem of television, digital creator columns, and algorithmic networks.
                </p>
              </div>

              {/* Typographic Information network visual */}
              <div className="bg-white border border-[#171717]/10 p-6 md:p-8 max-w-4xl mx-auto text-center space-y-8">
                <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                  MEDIA DISTRIBUTION CHANNELS
                </span>
                
                <div className="flex flex-col items-center justify-center space-y-4">
                  <span className="font-serif text-lg font-semibold bg-[#171717] text-white px-4 py-1">NEWS SQUARE</span>
                  <div className="w-[1px] h-8 bg-[#171717]/20"></div>
                  
                  <div className="grid grid-cols-3 gap-8 w-full max-w-2xl text-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] block">TELEVISION</span>
                      <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-tight">National broadcasts & daily debates</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] block">DIGITAL OUTLETS</span>
                      <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-tight">Independent sites & podcasts</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] block">SOCIAL PLATFORMS</span>
                      <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-tight">WhatsApp corridors & creators</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#171717]/5">
                  <span className="text-xs font-serif text-[#171717] italic block">
                    "Algorithmic amplification prioritizes engagement over verification, fostering media polarisation alongside unprecedented informational diversity."
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* 7. WHEN WORDS BECOME WEAPONS */}
          <section id="sec-07" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CHAPTER 07
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                WHEN DISAGREEMENT BECOMES HOSTILITY
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The documented prevalence of hate speech and coordinated online hostility poses severe challenges to social cohesion. To protect the public square, we distinguish political criticism from incitement and hate speech, seeking paths toward balanced dialogue.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#171717]/5 text-center">
                <div className="p-3 bg-[#FAF8F5] border border-[#171717]/10"><span className="text-[9px] font-sans font-bold text-[#16734A] block">CRITICISM</span><p className="text-[10px] text-[#6B6B6B] pt-1">Democratic review</p></div>
                <div className="p-3 bg-[#FAF8F5] border border-[#171717]/10"><span className="text-[9px] font-sans font-bold text-[#E8752A] block">INSULT</span><p className="text-[10px] text-[#6B6B6B] pt-1">Personal friction</p></div>
                <div className="p-3 bg-[#FAF8F5] border border-[#171717]/10"><span className="text-[9px] font-sans font-bold text-[#E8752A] block">INCITEMENT</span><p className="text-[10px] text-[#6B6B6B] pt-1">Direct hostility call</p></div>
                <div className="p-3 bg-[#FAF8F5] border border-[#171717]/10"><span className="text-[9px] font-sans font-bold text-[#E8752A] block">HATE SPEECH</span><p className="text-[10px] text-[#6B6B6B] pt-1">Targeted profiling</p></div>
              </div>
            </div>
          </section>

          {/* 8. DEMOCRACY SPEAKS & DISAGREES */}
          <section id="sec-08" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  CHAPTER 08
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  DEMOCRACY DISAGREES
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  Disagreement is a core element of a living republic. Dissent is expressed through courts, elections, public debates, and assemblies, balancing the maintenance of public order with constitutional rights.
                </p>
              </div>

              {/* Graphic separation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="p-6 bg-white border border-[#171717]/10 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block mb-2">DEMOCRACY SPEAKS</span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Electoral representation, judicial reviews, news analysis, and peaceful civic petitions drive national feedback and institutional audits.
                  </p>
                </div>
                <div className="p-6 bg-white border border-[#171717]/10 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block mb-2">DEMOCRACY CONTESTS</span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Public street mobilisations and campus assemblies highlight systemic gaps, asserting democratic representation when institutional channels stall.
                  </p>
                </div>
              </div>

            </div>
          </section>

          <SectionDivider text="Sometimes that demand becomes a public voice. One protest became a national conversation." />

          {/* 9. JANTAR MANTAR PROTEST TIMELINE (CJP Case Study) */}
          <section id="sec-09" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-16"
            >
              
              <div className="max-w-2xl space-y-4">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  CHAPTER 09
                </span>
                <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                  CASE STUDY · CJP / COCKROACH JANTA PARTY
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  JANTAR MANTAR · NEW DELHI
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  We document the chronological milestone events of the student protest assembly at Delhi's Jantar Mantar, detailing CJP claims, police coordinates, and official responses.
                </p>
              </div>

              {/* Interactive Calendar Progress Visual */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 max-w-4xl mx-auto space-y-6">
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block text-center">
                  JUNE – JULY CALENDAR PROGRESSION
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#171717]/5">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono font-bold text-[#171717] block">JUNE 2026</span>
                    <div className="flex items-center gap-2">
                      {juneCalendar.map((d, i) => (
                        <button 
                          key={i} 
                          onMouseEnter={() => d.active && setHoveredCalendarDay(d)}
                          onMouseLeave={() => setHoveredCalendarDay(null)}
                          className={`px-3 py-1.5 border text-xs font-mono rounded-sm transition-all duration-300 outline-none ${
                            d.active 
                              ? "bg-[#E8752A]/10 border-[#E8752A] text-[#E8752A] cursor-help font-semibold" 
                              : "bg-white/40 border-[#171717]/5 text-[#6B6B6B]/40"
                          }`}
                        >
                          {d.day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-mono font-bold text-[#171717] block">JULY 2026</span>
                    <div className="flex items-center gap-2">
                      {julyCalendar.map((d, i) => (
                        <button 
                          key={i} 
                          onMouseEnter={() => d.active && setHoveredCalendarDay(d)}
                          onMouseLeave={() => setHoveredCalendarDay(null)}
                          className={`px-3 py-1.5 border text-xs font-mono rounded-sm transition-all duration-300 outline-none ${
                            d.active 
                              ? "bg-[#16734A]/10 border-[#16734A] text-[#16734A] cursor-help font-semibold" 
                              : "bg-white/40 border-[#171717]/5 text-[#6B6B6B]/40"
                          }`}
                        >
                          {d.day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-h-[50px] bg-white border border-[#171717]/5 p-2 rounded-sm flex items-center justify-center">
                  {hoveredCalendarDay ? (
                    <div className="text-left w-full">
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase block">
                        MILESTONE: {hoveredCalendarDay.title}
                      </span>
                      <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-tight">
                        {hoveredCalendarDay.desc}
                      </p>
                    </div>
                  ) : (
                    <span className="text-[9px] font-sans font-light text-[#6B6B6B]/60 italic">
                      Hover over highlighted dates to view corresponding verified milestones.
                    </span>
                  )}
                </div>
              </div>

              {/* Sticky timeline storytelling: Left sticky image, right scrolling text */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-16 border-t border-[#171717]/15">
                
                {/* Left sticky column */}
                <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-wider uppercase block">
                    TIMELINE ARCHIVE FOCUS
                  </span>
                  
                  {/* Dynamic full colour image */}
                  <div className="bg-white border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden">
                    <div className="aspect-[4/3] relative border border-[#171717]/5 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={activeTimelineObj.id}
                          src={activeTimelineObj.image}
                          alt={activeTimelineObj.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-2 border border-dashed border-white/15 pointer-events-none"></div>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                      <span>Milestone: {activeTimelineObj.date}</span>
                      <span>Archive Focus</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-semibold text-[#171717]">
                      {activeTimelineObj.title}
                    </h4>
                    <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase block">
                      Category: {activeTimelineObj.type}
                    </span>
                  </div>
                </div>

                {/* Right scrolling column */}
                <div className="lg:col-span-7 space-y-8">
                  {cjpTimeline.map((item, idx) => {
                    const isActive = activeTimelineIndex === idx;
                    return (
                      <div 
                        key={item.id}
                        onClick={() => setActiveTimelineIndex(idx)}
                        className={`p-6 border text-left rounded-sm cursor-pointer transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[#E8752A] outline-none ${
                          isActive 
                            ? "bg-white border-[#E8752A] shadow-md scale-102" 
                            : "bg-white/40 border-[#171717]/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <div className="flex justify-between items-center border-b border-[#171717]/5 pb-3 mb-4">
                          <span className="font-serif text-xl font-semibold text-[#E8752A]">
                            {item.date}
                          </span>
                          <span className="text-[8px] font-mono text-[#6B6B6B] bg-[#FAF8F5] px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
                            STEP 0{idx + 1}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-serif text-lg text-[#171717] font-semibold leading-snug">
                            {item.title}
                          </h4>
                          
                          <div className="space-y-1">
                            <span className="text-[8px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                              WHAT HAPPENED
                            </span>
                            <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-[8px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                              WHY IT MATTERED
                            </span>
                            <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                              {item.why}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 mt-6 border-t border-[#171717]/5 text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest">
                          Source: {item.source}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* JULY 20 — CHALO SANSAD MARCH DETAILED SPLIT */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-8 shadow-sm space-y-8 max-w-4xl mx-auto rounded-sm mt-16">
                
                <div className="text-center space-y-2">
                  <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                    TIMELINE CRITICAL EVENT
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
                    JULY 20, 2026
                  </h2>
                  <h3 className="font-serif text-xl text-[#16734A] uppercase tracking-wide">
                    CHALO SANSAD — THE MARCH TO PARLIAMENT
                  </h3>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto text-center border-b border-[#171717]/5 pb-6">
                  CJP supporters attempted to march from Jantar Mantar toward Parliament. Security barricades were deployed, and clashes followed with reported use of tear gas and baton/lathi charges.
                </p>

                {/* Symmetrical Split Accounts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
                  
                  {/* Left: Protesters' Account */}
                  <div className="space-y-3 pr-0 md:pr-6">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                      PROTESTERS' POSITION
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      Asserted their democratic right to peaceful assembly and speech, demanding direct cabinet dialogue regarding NEET calendar reforms and exam corruption accountability.
                    </p>
                  </div>

                  {/* Right: State Response / Police Position */}
                  <div className="space-y-3 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-[#171717]/5 pt-6 md:pt-0">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                      POLICE / STATE POSITION
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      Stated that permission for the march toward Parliament had been denied due to security zones, and barricades were deployed to regulate movement and maintain public order.
                    </p>
                  </div>

                </div>

                {/* Conflict Statistics & Sourcing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#171717]/5 text-center items-center">
                  <div>
                    <span className="text-[9px] font-mono text-[#6B6B6B] uppercase block">INJURIES</span>
                    <p className="text-xs font-sans font-semibold text-[#171717] pt-1">
                      60+ Protesters & 100+ Police Personnel Reported Injured
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#6B6B6B] uppercase block">REPORTED ACTION</span>
                    <p className="text-xs font-sans font-semibold text-[#171717] pt-1">
                      Tear Gas & Baton Charges Used at Barricades
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#6B6B6B] uppercase block">HUMAN RIGHTS REPORT</span>
                    <p className="text-xs font-sans font-semibold text-[#171717] pt-1">
                      Amnesty expressed concerns regarding excessive force
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-[#171717]/5">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase block mb-1">
                    THE SYSTEMIC QUESTION
                  </span>
                  <p className="font-serif text-lg text-[#171717] italic">
                    "When does maintaining public order become excessive restriction of dissent?"
                  </p>
                </div>

                <div className="text-right text-[8px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                  Sources: India Today · Reuters · ThePrint · Amnesty International
                </div>

              </div>

              {/* JULY 25 CABINET RESIGNATION */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-8 shadow-sm space-y-6 max-w-4xl mx-auto rounded-sm mt-12 text-center">
                <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-[0.25em] block">
                  TIMELINE RESOLUTION
                </span>
                
                <h2 className="font-serif text-4xl md:text-5xl text-[#171717] font-normal leading-tight">
                  JULY 25, 2026
                </h2>
                <h3 className="font-serif text-xl text-[#E8752A] uppercase tracking-wide">
                  MINISTER DHARMENDRA PRADHAN RESIGNS
                </h3>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
                  Following prolonged negotiations and the July 20 clashes, Education Minister Dharmendra Pradhan resigned. CJP representatives subsequently called off the physical Jantar Mantar assemblies, shifting focus to inquiry panel follow-ups.
                </p>

                {/* Timeline flow vector */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 py-4 border-t border-[#171717]/5 max-w-2xl mx-auto">
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">DEMAND</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">NEGOTIATION</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#16734A] font-semibold">RESIGNATION</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">PROTEST WITHDRAWAL</span>
                </div>
              </div>

              {/* AFTERMATH MATRIX */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-[#171717]/5">
                
                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-3">
                  <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                    WHAT WAS ACHIEVED
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Cabinet level accountability through the resignation of Dharmendra Pradhan, illustrating direct democratic impact.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-3">
                  <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                    WHAT WAS ACCEPTED
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Parliamentary reviews of criminal codes penalizing examination leakages and formulation of auditing boards.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-3">
                  <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                    WHAT REMAINS
                  </span>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Long waits in state commission recruitment calendars and infrastructure imbalances in state coaching universities.
                  </p>
                </div>

              </div>

            </motion.div>
          </section>

          <SectionDivider text="But the larger question remains: how does a democracy respond to dissent?" />

          {/* 10. DEMOCRACY UNDER PRESSURE */}
          <section id="sec-10" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="max-w-7xl mx-auto space-y-16"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  CHAPTER 10
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  DEMOCRACY UNDER PRESSURE
                </h2>
                <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                  "Democracy is a continuous practice."
                </span>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  The health of a democracy is tested by how its institutions balance disagreement, civic expression, and state authority.
                </p>
              </div>

              {/* Democratic Contradictions interactive cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { from: "MORE PARTICIPATION", to: "MORE POLARISATION", desc: "Voter turnouts scale new records, while public reasoning becomes highly polarized across digital echo chambers." },
                  { from: "MORE INFORMATION", to: "MORE MISINFORMATION", desc: "Cheapest mobile data access reaches billions, alongside systemic distributions of unverified news and rumors." },
                  { from: "MORE CONNECTIVITY", to: "MORE ECHO CHAMBERS", desc: "Instant mobile payment corridors expand trade, while social networks segment citizens into localized ideological groups." },
                  { from: "MORE EXPRESSION", to: "MORE CONFLICT", desc: "State channels accommodate countless regional student representations, while public dissent faces intense local restriction." }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-white border border-[#171717]/10 hover:border-[#E8752A]/30 shadow-sm flex flex-col justify-between space-y-6 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[9px] font-mono text-[#6B6B6B] uppercase font-semibold">
                        <span>{item.from}</span>
                        <span>↕</span>
                        <span>{item.to}</span>
                      </div>
                      <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[8px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest block">
                      CONTRADICTION VECTOR 0{idx+1}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          </section>

          <SectionDivider text="And beyond politics, the republic is lived every day." />

          {/* 11. LIVING TOGETHER */}
          <section id="sec-11" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-16"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                    CHAPTER 11
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight animate-pulse">
                    LIVING TOGETHER
                  </h2>
                  <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                    "The republic is not only experienced in Parliament or on television. It is lived every day by millions of people who share the same streets, trains, markets and cities."
                  </p>
                  <div className="h-[1px] w-16 bg-[#16734A]/50"></div>
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                    EVERYDAY COEXISTENCE
                  </span>
                </div>

                {/* High quality visual of shared train Coach */}
                <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
                  <div className="aspect-[16/9] relative border border-[#171717]/5 overflow-hidden">
                    <img 
                      src="/images/stories/story1-train.jpg" 
                      alt="Full-colour view inside a general class compartment of the Indian Railways"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                      COEXISTENCE ARCHIVE: IT-LIVE-01
                    </div>
                    <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                    <span>Subject: The Shared Railway Passenger Coach</span>
                    <span>Documentary Record</span>
                  </div>
                </div>

              </div>

              {/* Triptych of Coexistence */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#171717]/5">
                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    The General Coach
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Passengers of diverse faiths, dialects, and economic classes sharing meals, resources, and conversations over journeys crossing thousands of miles.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    Urban Markets & Streets
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Mixed-population marketplaces negotiating language variations and economic transactions daily, forming stable social habits of coexistence.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    Neighborhood Peace Guilds
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Civic committees in mixed quarters working continuously behind the scenes to preempt local disputes and coordinate neighborhood trust.
                  </p>
                </div>
              </div>

              {/* Interactive builders conceptual network */}
              <div className="pt-16 border-t border-[#171717]/10 space-y-8">
                <div className="max-w-xl mx-auto text-center space-y-2">
                  <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    THE CONCEPTUAL NETWORK
                  </span>
                  <h3 className="font-serif text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    THE INDIA WE ARE BUILDING
                  </h3>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    India's future depends on how these values develop together. Hover over any value node to reveal matching everyday builders and trace related concepts.
                  </p>
                </div>

                {/* Value node grid switcher */}
                <div className="flex flex-wrap justify-center items-center gap-3 py-6 bg-white/40 border border-[#171717]/10 max-w-4xl mx-auto rounded-sm">
                  {Object.keys(conceptBuilderMapping).map((concept) => {
                    const isHovered = hoveredBuildConcept === concept;
                    const isRelated = hoveredBuildConcept && conceptConnections[hoveredBuildConcept]?.includes(concept);
                    return (
                      <button
                        key={concept}
                        onMouseEnter={() => setHoveredBuildConcept(concept)}
                        onMouseLeave={() => setHoveredBuildConcept(null)}
                        className={`px-3 py-1.5 border rounded-sm text-[9px] font-mono tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer ${
                          isHovered 
                            ? "bg-[#171717] border-[#171717] text-white scale-105" 
                            : isRelated
                              ? "bg-[#16734A]/10 border-[#16734A] text-[#16734A]"
                              : "bg-[#FAF8F5] border-[#171717]/10 text-[#6B6B6B]"
                        }`}
                      >
                        {concept}
                      </button>
                    );
                  })}
                </div>

                {/* Builders cards mapping */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {buildersData.map((builder) => {
                    const hasActiveConcept = hoveredBuildConcept !== null;
                    const isMapped = hasActiveConcept && conceptBuilderMapping[hoveredBuildConcept]?.includes(builder.id);
                    
                    return (
                      <div 
                        key={builder.id}
                        className={`bg-white border p-6 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-300 relative group ${
                          hasActiveConcept 
                            ? isMapped 
                              ? "border-[#16734A] scale-102 opacity-100" 
                              : "opacity-30 border-[#171717]/5"
                            : "border-[#171717]/10 hover:border-[#16734A]/30"
                        }`}
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
                    );
                  })}
                </div>

              </div>

              {/* RETURN TO PROGRESS SLIDESHOW / CAROUSEL */}
              <div className="pt-16 border-t border-[#171717]/10 space-y-8">
                <div className="max-w-2xl mx-auto text-center space-y-2">
                  <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                    TRANSFORMATION OVERVIEW
                  </span>
                  <h3 className="font-serif text-2xl text-[#171717] font-normal uppercase tracking-wider">
                    INDIA IS BUILDING ENORMOUSLY
                  </h3>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    India is not only dealing with challenges. It is concurrently building massive projects in science, space, and physical infrastructure. This balance is central to the republic.
                  </p>
                </div>

                {/* Colour progress montage grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {returnProgressImages.map((img, idx) => (
                    <div 
                      key={idx}
                      className="bg-white border border-[#171717]/10 p-4 shadow-sm hover:border-[#16734A]/30 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/5">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-4 space-y-1">
                        <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                          {img.label}
                        </span>
                        <p className="text-[11px] font-sans font-light text-[#6B6B6B] leading-snug">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </section>

          {/* 12. THE UNFINISHED REPUBLIC */}
          <section id="sec-12" className="py-32 px-6 md:px-12 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-8"
            >
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                THE UNFINISHED REPUBLIC
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
                "India is not a finished idea."
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed max-w-3xl">
                It is something every generation inherits, questions, reshapes and passes forward.
              </p>
              
              <div className="space-y-1.5 pt-8">
                <h3 className="font-serif text-2xl md:text-4xl text-[#16734A] tracking-wider uppercase font-semibold">
                  THE STORY CONTINUES.
                </h3>
                <h3 className="font-serif text-2xl md:text-4xl text-[#E8752A] tracking-wider uppercase font-semibold">
                  INDIA IS STILL BECOMING.
                </h3>
              </div>
            </motion.div>
          </section>

          {/* Conclusion */}
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
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] block">
                THE REPUBLIC REMAINS A QUESTION
              </span>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#171717] font-normal leading-tight">
                ITS FUTURE IS NOT WRITTEN YET.
              </h2>
              
              <div className="h-[1px] w-12 bg-[#171717]/10 mx-auto"></div>
              
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-md mx-auto italic">
                It is built every day — in classrooms, laboratories, farms, streets, courts, workplaces, homes and public squares.
              </p>
            </motion.div>
          </section>

        </div>

      </div>
    </PageTransition>
  );
}
