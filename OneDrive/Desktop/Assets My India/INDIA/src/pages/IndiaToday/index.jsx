import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Chapter Transition Divider Component
function SectionDivider({ text, label = "Story Continuity" }) {
  return (
    <div className="w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center select-none pointer-events-none">
      <div className="w-[1px] h-16 bg-[#171717]/10 mb-6"></div>
      {label && (
        <span className="text-[9px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase mb-4">
          {label}
        </span>
      )}
      <p className="font-serif text-xl md:text-3xl text-[#171717]/80 italic max-w-3xl leading-relaxed">
        "{text}"
      </p>
      <div className="w-[1px] h-16 bg-[#171717]/10 mt-6"></div>
    </div>
  );
}

// 2. Full-Width Documentary Break
function DocumentaryBreak({ image, caption, label = "INDIA · 2026" }) {
  return (
    <div className="w-full relative h-[60vh] md:h-[80vh] overflow-hidden bg-[#171717] my-16">
      <img 
        src={image} 
        alt={caption}
        className="w-full h-full object-cover grayscale opacity-80"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-8 flex flex-col justify-between items-start z-10">
        <span className="text-[9px] font-mono text-[#FAF8F5] bg-[#E8752A] px-2 py-0.5 tracking-[0.2em] uppercase">
          {label}
        </span>
        <p className="font-serif text-2xl md:text-4xl text-[#FAF8F5] max-w-2xl leading-tight">
          {caption}
        </p>
      </div>
    </div>
  );
}

// 3. Data Structures
const motionStats = [
  {
    id: "digital",
    title: "DIGITAL NETWORK",
    value: "10 BILLION+",
    label: "Monthly UPI Payments",
    progress: "India's instant payment network has unified street vendors and modern conglomerates into a singular digital market.",
    unevenness: "Advanced digital services and high-speed broadband are urban-concentrated, leaving rural areas on unstable mobile-only data systems.",
    source: "National Payments Corporation of India (NPCI)"
  },
  {
    id: "space",
    title: "SPACE & AEROSPACE",
    value: "4th",
    label: "Nation to Land on the Moon",
    progress: "Successfully soft-landing Chandrayaan-3 on the lunar south pole via low-cost, high-efficiency engineering.",
    unevenness: "Specialized space divisions receive funding while basic laboratories in rural regional universities face resource caps.",
    source: "Indian Space Research Organisation (ISRO)"
  },
  {
    id: "urban",
    title: "METROPOLITAN HUBS",
    value: "450 MILLION+",
    label: "Urban Citizens",
    progress: "Tech and business clusters drive 60% of GDP, acting as major migration centers for employment and higher education.",
    unevenness: "Municipal systems face housing shortages and sanitation pressures, creating sharp disparities in living conditions.",
    source: "United Nations Population Division"
  },
  {
    id: "startups",
    title: "ENTREPRENEURSHIP",
    value: "115,000+",
    label: "Registered Tech Startups",
    progress: "A massive tech startup corridor generating jobs and bringing services to tier-2 and tier-3 towns.",
    unevenness: "Over 85% of working Indians operate in the informal economy without structured contracts or pension security.",
    source: "DPIIT Records"
  }
];

const promiseGaps = [
  {
    id: "economy",
    title: "ECONOMIC GROWTH vs UNEQUAL OPPORTUNITY",
    promise: "GDP expands at 7%–8% annually, establishing India as the fastest-growing major economy and expanding middle-class consumption.",
    gap: "Wealth accumulation remains concentrated; informal sector laborers experience work instability, low wages, and a lack of social safety nets.",
    line: "GROWTH ────────────────────── DISTRIBUTION",
    indicator: "GDP Growth Rate: 7.2%",
    source: "MoSPI (2024)"
  },
  {
    id: "education",
    title: "EDUCATION vs UNEQUAL ACCESS",
    promise: "Historic expansion of high-enrollment secondary schools, local polytechnics, and digital learning platforms reaching millions.",
    gap: "Underfunded state universities and structural disparities with private schools create early academic inequalities for rural graduates.",
    line: "EDUCATION ─────────────────── ACCESS",
    indicator: "Secondary School GER: 79.6%",
    source: "UDISE"
  },
  {
    id: "digital",
    title: "DIGITAL CONNECTIVITY vs DIGITAL DIVIDE",
    promise: "Over 800 million active internet consumers utilizing cheap mobile data tariffs to access finance and e-governance.",
    gap: "Gaps in rural female smartphone ownership and stable broadband connectivity leave remote communities digitally isolated.",
    line: "OPPORTUNITY ───────────────── INEQUALITY",
    indicator: "Active Connected Users: 820M+",
    source: "TRAI"
  },
  {
    id: "ecology",
    title: "DEVELOPMENT vs ENVIRONMENTAL PRESSURE",
    promise: "Rapid scale-up of solar and clean energy parks, targeting 500 GW of non-fossil capacity by 2030 to mitigate emissions.",
    gap: "Heavy municipal pollution, ground water depletion, and waste management challenges in industrial hubs compromise living conditions.",
    line: "DEVELOPMENT ───────────────── ENVIRONMENTAL STRESS",
    indicator: "Renewable Energy Share: 42.8%",
    source: "MNRE"
  },
  {
    id: "employment",
    title: "OPPORTUNITY vs UNEMPLOYMENT",
    promise: "New service, delivery, tech development, and gig economy opportunities created in metropolitan hubs.",
    gap: "High competition for secure formal sector jobs leaves a portion of university graduates facing long recruitment waits.",
    line: "DEMAND ────────────────────── EMPLOYMENT",
    indicator: "Graduate Unemployment: 13.4%",
    source: "MoSPI PLFS"
  }
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

const youthSequence = [
  { id: "employment", label: "EMPLOYMENT", title: "Public Sector Vacancies & Labor Transitions", desc: "The gap between degree completion and secure formal sector job creation remains the primary economic concern for young citizens.", ref: "PLFS Census" },
  { id: "education", label: "EDUCATION", title: "Affordable Higher State Education", desc: "Ensuring stable tuition fees and functional scholarship structures in regional public universities is central to student mobility.", ref: "AISHE Records" },
  { id: "exams", label: "EXAMINATIONS", title: "Competitive Exam Schedules & Integrity", desc: "The high-stakes nature of entrance and recruitment tests demands strict administrative safeguards against security leakages.", ref: "Parliament Commission" },
  { id: "opportunity", label: "OPPORTUNITY", title: "Bridges to Transparent Merit", desc: "Aspirants demand that selection is based purely on transparent merit and audit systems rather than corrupt exceptions.", ref: "Student Union Charters" },
  { id: "fairness", label: "FAIRNESS", title: "Protection Against Paper Leaks", desc: "Legislative backing is demanded to secure databases, penalize corruption, and protect candidate schedules.", ref: "Public Examinations Act" },
  { id: "protest", label: "PROTEST", title: "Assemblies at Designated Public Squares", desc: "Using public squares like Jantar Mantar to register complaints, call for dialogues, and demand institutional accountability.", ref: "Delhi Assembly Registers" },
  { id: "participation", label: "DEMOCRATIC PARTICIPATION", title: "Constructive Civic Engagement", desc: "Democratic dissent is expressed as a constructive tool to improve institutions rather than disengaging from them.", ref: "Constitutional Rights" }
];

const cjpTimeline = [
  {
    id: "may-satire",
    date: "MAY 2026",
    title: "Satirical Online Origins",
    desc: "CJP (Cockroach Janta Party) emerges as a satirical online movement associated with student organizer Abhijeet Dipke. The movement traces its origin to a Supreme Court hearing on May 15, 2026, regarding examination processes and the subsequent viral student responses calling for systemic reforms.",
    why: "Humor and digital satire became the vehicle for serious youth mobilisation, engaging students who felt standard political channels were unresponsive.",
    source: "Indian Express / Media Archives",
    image: "/images/stories/stories-intro-6.jpg"
  },
  {
    id: "june-6",
    date: "JUNE 6, 2026",
    title: "First Jantar Mantar Mobilisation",
    desc: "Hundreds of students, exam aspirants, and youth organizers gather at Jantar Mantar, New Delhi. A central demands document calls for the resignation of Union Education Minister Dharmendra Pradhan, amid intensifying concerns over NEET examination irregularities.",
    why: "This transitioned a viral digital movement into a physical public assembly, testing the logistics of student coordination in the capital.",
    source: "Indian Express / Commission Records",
    image: "/images/stories/stories-intro-2.jpg"
  },
  {
    id: "june-july",
    date: "JUNE → JULY 2026",
    title: "Prolonged Mobilisation & Calendar Disputes",
    desc: "The Jantar Mantar protests persist for weeks. Student representatives request official audiences with commission heads and parliamentarians, focusing on structural paper leak safeguards.",
    why: "Demonstrated sustained organization and endurance under varying summer weather conditions, drawing national editorial attention.",
    source: "Delhi Police Logs / Youth Forum Registers",
    image: "/images/stories/stories-intro-1.jpg"
  },
  {
    id: "july-negotiations",
    date: "JULY 2026",
    title: "Structural Negotiations",
    desc: "Formal dialogues open between government representatives and student CJP coordinators. Protesters demand a guaranteed annual exam calendar, while the government maintains that structural audits must conclude first.",
    why: "Highlights the translation of public protest slogans into specific legislative and administrative points.",
    source: "Ministry of Education Statements",
    image: "/images/stories/story1-station.jpg"
  },
  {
    id: "july-25",
    date: "JULY 25, 2026",
    title: "Union Education Minister Dharmendra Pradhan Resigns",
    desc: "Dharmendra Pradhan announces his resignation as Union Education Minister. Following negotiations and commitments to exam reforms, CJP coordinators announce the formal withdrawal of Jantar Mantar assemblies.",
    why: "A major milestone showing how youth mobilisation directly impacted cabinet appointments, though systemic debates remain open.",
    source: "Government Gazette / Press Trust of India (PTI)",
    image: "/images/stories/stories-intro-7.jpg"
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
  { day: "25", active: true, title: "Minister Resigns", desc: "Education Minister Dharmendra Pradhan resigns; protest called off." }
];

const buildersData = [
  { role: "The ASHA Worker", context: "Rural Public Health", desc: "Women community health volunteers forming the baseline link between rural homes and clinics, delivering vaccines and maternal care.", id: "IT-BUILD-01" },
  { role: "The Dryland Agronomist", context: "Agricultural Research", desc: "Scientists developing drought-resistant millet seeds to help small farmers secure yields amid irregular monsoons.", id: "IT-BUILD-02" },
  { role: "The Systems Engineer", context: "Low-Cost Space Flight", desc: "Space systems team designing micro-satellites for global climate monitoring at a fraction of standard international costs.", id: "IT-BUILD-03" },
  { role: "The Cooperative Leader", context: "Organic Farmer Cooperatives", desc: "Agrarian organizers building distribution chains to make organic mountain produce commercially viable in big cities.", id: "IT-BUILD-04" },
  { role: "The Civic Educator", context: "Tribal Literacy Blocks", desc: "Teachers setting up mobile device learning cells in remote villages to ensure children pass secondary exams.", id: "IT-BUILD-05" },
  { role: "The Heritage Archiver", context: "Textile Digitisation", desc: "Weavers digitizing regional patterns to establish direct online selling loops, bypassing local commission agents.", id: "IT-BUILD-06" }
];

const navigationItems = [
  { id: "sec-01", label: "01 INDIA WE LIVE" },
  { id: "sec-02", label: "02 COUNTRY IN MOTION" },
  { id: "sec-03", label: "03 PROMISE & GAP" },
  { id: "sec-04", label: "04 YOUNG COUNTRY" },
  { id: "sec-05", label: "05 VOICE" },
  { id: "sec-06", label: "06 DEMOCRACY" },
  { id: "sec-07", label: "07 LIVING TOGETHER" },
  { id: "sec-08", label: "08 BUILDING" },
  { id: "sec-09", label: "09 REPUBLIC" }
];

export default function IndiaToday() {
  const [activeSection, setActiveSection] = useState("sec-01");
  const [activePromiseId, setActivePromiseId] = useState("economy");
  const [activeYouthId, setActiveYouthId] = useState("innovator");
  const [activeSequenceId, setActiveSequenceId] = useState("employment");
  
  // Timeline sticky control
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [hoveredCalendarDay, setHoveredCalendarDay] = useState(null);
  
  // Builders conceptual network mapping: Science, Education, India, Democracy, Equality, Pluralism
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

  const activePromiseObj = promiseGaps.find(g => g.id === activePromiseId) || promiseGaps[0];
  const activeYouthObj = youthProfiles.find(y => y.id === activeYouthId) || youthProfiles[0];
  const activeSequenceObj = youthSequence.find(s => s.id === activeSequenceId) || youthSequence[0];
  const activeTimelineObj = cjpTimeline[activeTimelineIndex] || cjpTimeline[0];

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

  // Concept related matching for Builders section
  const conceptBuilderMapping = {
    science: ["IT-BUILD-02", "IT-BUILD-03"],
    education: ["IT-BUILD-05", "IT-BUILD-01"],
    india: ["IT-BUILD-01", "IT-BUILD-02", "IT-BUILD-03", "IT-BUILD-04", "IT-BUILD-05", "IT-BUILD-06"],
    democracy: ["IT-BUILD-01", "IT-BUILD-04", "IT-BUILD-05"],
    equality: ["IT-BUILD-01", "IT-BUILD-05"],
    pluralism: ["IT-BUILD-06"]
  };

  const conceptConnections = {
    science: ["education", "india"],
    education: ["equality", "democracy"],
    india: ["democracy", "science", "pluralism"],
    democracy: ["equality", "pluralism"],
    equality: ["education"],
    pluralism: ["india"]
  };

  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] pt-24 text-left relative flex">
        
        {/* Sticky Left Navigation (Desktop only) */}
        <aside className="hidden lg:flex flex-col justify-between fixed left-8 top-1/4 h-3/5 w-48 z-40 select-none border-l border-[#171717]/10 pl-4 py-4">
          <div className="space-y-1">
            <span className="text-[8px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block mb-4">
              INDIA TODAY INDEX
            </span>
            <ul className="space-y-3">
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
            STATUS: REDESIGN v2
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 w-full lg:pl-64">

          {/* 1. THE INDIA WE LIVE IN (Opening Hero) */}
          <section id="sec-01" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  INDIA TODAY
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#171717] font-normal leading-none tracking-tight">
                  THE INDIA<br/>WE LIVE IN
                </h1>
                <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
                  "India is not a finished story. It is being negotiated every day — between aspiration and reality, freedom and constraint, promise and experience."
                </p>
                <div className="h-[1px] w-24 bg-[#E8752A]/50"></div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>METADATA RECORD</span>
                  <span>•</span>
                  <span>INDIA · 2026</span>
                </div>
              </div>

              {/* Large Atmospheric Photograph */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-5 shadow-sm relative overflow-hidden group">
                <div className="aspect-[16/10] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                  <img 
                    src="/images/stories/maharashtra-citylife.jpg" 
                    alt="Atmospheric Mumbai city skyline and traffic motion, representing a country in movement"
                    className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    FIELD RECORD: IT-OPEN-01
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                  <span>Location: Mumbai, Maharashtra</span>
                  <span>Coordinates: 18.9220° N, 72.8347° E</span>
                </div>
              </div>

            </div>
          </section>

          <SectionDivider text="The movement creates opportunity. It does not distribute it equally." />

          {/* 2. A COUNTRY IN MOTION */}
          <section id="sec-02" className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
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
                  A COUNTRY IN MOTION
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  Explore contemporary transformations through data-driven editorial vectors. Our progress operates alongside persistent structural friction.
                </p>
              </div>

              {/* Asymmetrical Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {motionStats.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white/70 border border-[#171717]/10 p-6 flex flex-col justify-between space-y-8 shadow-sm hover:border-[#16734A]/30 transition-all duration-300 relative group"
                  >
                    <div className="space-y-4">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                        {item.title}
                      </span>
                      <span className="text-4xl lg:text-5xl font-serif text-[#171717] font-semibold tracking-tight block">
                        {item.value}
                      </span>
                      <span className="text-[9px] font-sans font-bold text-[#6B6B6B] uppercase tracking-widest block border-b border-[#171717]/5 pb-2">
                        {item.label}
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
                  Progress and inequality exist simultaneously. We trace the dual narratives of developmental expansion and economic opportunity gaps.
                </p>
              </div>

              {/* Editorial Split Screen Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Selector List */}
                <div className="lg:col-span-4 flex flex-col space-y-2">
                  {promiseGaps.map((item) => {
                    const isSelected = item.id === activePromiseId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActivePromiseId(item.id)}
                        className={`p-4 border text-left transition-all duration-300 w-full outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E8752A] ${
                          isSelected 
                            ? "bg-[#171717] border-[#171717] text-white" 
                            : "bg-[#FAF8F5]/30 border-[#171717]/10 text-[#171717] hover:bg-[#FAF8F5]"
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

                {/* Right Split comparison box */}
                <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 shadow-sm space-y-8 min-h-[380px]">
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

                      {/* Asymmetric Split Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 border-t border-[#171717]/5">
                        
                        {/* Promise Side */}
                        <div className="space-y-3 pr-0 md:pr-4 flex flex-col justify-between">
                          <div className="space-y-2">
                            <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                              {activePromiseObj.promiseLabel}
                            </span>
                            <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                              {activePromiseObj.promise}
                            </p>
                          </div>
                        </div>

                        {/* Gap Side */}
                        <div className="space-y-3 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-[#171717]/5 pt-6 md:pt-0 flex flex-col justify-between">
                          <div className="space-y-2">
                            <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                              {activePromiseObj.gapLabel}
                            </span>
                            <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                              {activePromiseObj.gap}
                            </p>
                          </div>
                        </div>

                      </div>

                      {/* Connecting Line display */}
                      <div className="hidden md:block py-2 text-center text-[9px] font-mono text-[#6B6B6B]/40 uppercase tracking-widest">
                        {activePromiseObj.line}
                      </div>

                      {/* Metadata */}
                      <div className="pt-4 border-t border-[#171717]/5 flex justify-between items-center text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-wider">
                        <span>Indicator: {activePromiseObj.indicator}</span>
                        <span>Source: {activePromiseObj.source}</span>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </section>

          <DocumentaryBreak 
            image="/images/stories/punjab-agriculture.jpg" 
            caption="A young country beginning to speak." 
            label="FIELD NOTE · AGRARIAN OUTPOST"
          />

          {/* 4. A YOUNG COUNTRY */}
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
                    A YOUNG COUNTRY
                  </h2>
                  <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                    India is one of the world's youngest large societies. Its future is being imagined by a generation growing up in a rapidly shifting economic environment, where aspirations are shaped by competition, migration, and new technologies.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden group">
                  <div className="aspect-[16/9] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                    <img 
                      src={activeYouthObj.image} 
                      alt={activeYouthObj.title}
                      className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700"
                    />
                    <div className="absolute inset-2 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2.5 text-[8px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    <span>Active Profile: {activeYouthObj.title}</span>
                    <span>Ref: Generation Archive IT-YOUTH</span>
                  </div>
                </div>
              </div>

              {/* Asymmetrical deck switcher */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Detail container */}
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

                {/* Selector menu */}
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

          <SectionDivider text="And a generation that inherits these contradictions is beginning to speak." />

          {/* 5. VOICE OF A GENERATION */}
          <section id="sec-05" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-16"
            >
              <div className="max-w-2xl space-y-4">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  CHAPTER 05
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  VOICE OF A GENERATION
                </h2>
                <span className="font-serif text-lg md:text-xl text-[#16734A] italic block font-normal">
                  "What happens when a generation feels that its future is uncertain?"
                </span>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  Interactive sequence of public square debates shaping student livelihoods, administrative integrity, and democratic participation.
                </p>
              </div>

              {/* Interconnected Sequence flow */}
              <div className="space-y-8 pt-8 border-t border-[#171717]/5">
                
                {/* Horizontal flow line of tags */}
                <div className="flex flex-wrap items-center gap-3 border-b border-[#171717]/5 pb-6">
                  {youthSequence.map((step, idx) => {
                    const isSelected = activeSequenceId === step.id;
                    return (
                      <React.Fragment key={step.id}>
                        <button
                          onClick={() => setActiveSequenceId(step.id)}
                          className={`px-3 py-1.5 border rounded-sm text-[9px] font-sans font-semibold tracking-wider transition-all duration-300 outline-none cursor-pointer ${
                            isSelected 
                              ? "bg-[#171717] border-[#171717] text-white scale-105" 
                              : "bg-[#FAF8F5] border-[#171717]/10 text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]/30"
                          }`}
                        >
                          {step.label}
                        </button>
                        {idx < youthSequence.length - 1 && (
                          <span className="text-[#171717]/20 hidden md:inline">→</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Display Panel */}
                <div className="bg-white border border-[#171717]/10 p-6 md:p-8 shadow-sm min-h-[220px] flex flex-col justify-between max-w-4xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSequenceObj.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                          CONSTITUTIONAL DEBATE FOCUS
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-semibold">
                          {activeSequenceObj.title}
                        </h3>
                      </div>

                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {activeSequenceObj.desc}
                      </p>

                      <div className="text-[8px] font-mono text-[#6B6B6B]/50 uppercase tracking-widest pt-2 border-t border-[#171717]/5 flex justify-between">
                        <span>Classification: Youth Public Space Action</span>
                        <span>Source: {activeSequenceObj.ref}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* JANTAR MANTAR CASE STUDY HEADER */}
              <div className="pt-16 border-t border-[#171717]/10 space-y-4">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block text-center">
                  MAJOR CASE STUDY
                </span>
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-mono text-[#6B6B6B] tracking-[0.3em] uppercase block">
                    CJP · COCKROACH JANTA PARTY
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                    JANTAR MANTAR · NEW DELHI
                  </h2>
                  <p className="font-serif text-lg text-[#16734A] italic max-w-xl mx-auto">
                    Jantar Mantar: A protest, a generation, a question.
                  </p>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] max-w-xl mx-auto leading-relaxed pt-2">
                    “What happens when young people believe the system is not listening?”
                  </p>
                </div>
              </div>

              {/* Why Did They Protest Explainer */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 max-w-4xl mx-auto space-y-6">
                <h3 className="font-serif text-lg md:text-xl text-[#171717] text-center font-normal uppercase tracking-wider">
                  WHY DID THEY PROTEST?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center items-start pt-4 relative">
                  
                  {[
                    { step: "PROBLEM", desc: "Exam delays & leak vacancies" },
                    { step: "FRUSTRATION", desc: "Long waits & career blocks" },
                    { step: "DEMAND", desc: "Resignation & calendar codes" },
                    { step: "PROTEST", desc: "Designated assembly NCR" },
                    { step: "NEGOTIATION", desc: "Government dialogs open" },
                    { step: "OUTCOME", desc: "Minister resigns & bill review" }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#171717] text-[#FAF8F5] flex items-center justify-center mx-auto text-xs font-mono">
                        {idx + 1}
                      </div>
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase block">
                        {item.step}
                      </span>
                      <p className="text-[10px] font-sans font-light text-[#6B6B6B] leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                  
                  {/* Background connecting line */}
                  <div className="absolute top-8 left-8 right-8 h-[1px] bg-[#171717]/5 hidden md:block z-0"></div>
                </div>
              </div>

              {/* Protest Event Dossier Panel */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-4xl mx-auto pt-8">
                
                <div className="md:col-span-5 bg-[#FAF8F5] border border-[#171717]/10 p-6 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest block">
                      ARCHIVAL DOSSIER
                    </span>
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">ORGANISATION</span>
                      <p className="text-xs font-sans font-semibold text-[#171717]">CJP — Cockroach Janta Party</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">PERIOD</span>
                      <p className="text-xs font-sans font-semibold text-[#171717]">May – July 2026</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">ISSUE</span>
                      <p className="text-xs font-sans font-semibold text-[#171717]">NEET Irregularities & Calendar Freezes</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase block">CENTRAL DEMAND</span>
                      <p className="text-xs font-sans font-semibold text-[#171717]">Education Minister Resignation & System Audit</p>
                    </div>
                  </div>
                  
                  {/* Sourced labels */}
                  <div className="pt-6 border-t border-[#171717]/5">
                    <span className="text-[8px] font-mono text-[#6B6B6B] uppercase tracking-widest block mb-2">VERIFIED SOURCES</span>
                    <ul className="text-[9px] font-mono text-[#6B6B6B] space-y-1">
                      <li>• Indian Express Reports</li>
                      <li>• Government Gazette Releases</li>
                      <li>• Media & PTI Wire Archives</li>
                    </ul>
                  </div>
                </div>

                {/* June - July calendar visualizer */}
                <div className="md:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-6 space-y-6 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest block">
                      JUNE – JULY CALENDAR PROGRESSION
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      Only highlighting specific dates containing verified milestones. Hover over highlighted dates to view corresponding timeline developments.
                    </p>
                  </div>

                  {/* Calendar Grid */}
                  <div className="space-y-4">
                    
                    {/* June Row */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold text-[#171717] block">JUNE 2026</span>
                      <div className="flex items-center gap-2">
                        {juneCalendar.map((d, i) => (
                          <div 
                            key={i} 
                            onMouseEnter={() => d.active && setHoveredCalendarDay(d)}
                            onMouseLeave={() => setHoveredCalendarDay(null)}
                            className={`px-3 py-1.5 border text-xs font-mono rounded-sm transition-all duration-300 ${
                              d.active 
                                ? "bg-[#E8752A]/10 border-[#E8752A] text-[#E8752A] cursor-help font-semibold" 
                                : "bg-white/40 border-[#171717]/5 text-[#6B6B6B]/40"
                            }`}
                          >
                            {d.day}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* July Row */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold text-[#171717] block">JULY 2026</span>
                      <div className="flex items-center gap-2">
                        {julyCalendar.map((d, i) => (
                          <div 
                            key={i} 
                            onMouseEnter={() => d.active && setHoveredCalendarDay(d)}
                            onMouseLeave={() => setHoveredCalendarDay(null)}
                            className={`px-3 py-1.5 border text-xs font-mono rounded-sm transition-all duration-300 ${
                              d.active 
                                ? "bg-[#16734A]/10 border-[#16734A] text-[#16734A] cursor-help font-semibold" 
                                : "bg-white/40 border-[#171717]/5 text-[#6B6B6B]/40"
                            }`}
                          >
                            {d.day}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Calendar description bubble */}
                  <div className="min-h-[50px] bg-white border border-[#171717]/5 p-2.5 rounded-sm flex items-center justify-center">
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
                        Hover highlighted dates to trace CJP timeline.
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Sticky Timeline Storytelling: Left sticky image, right scrolling dates */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-16 border-t border-[#171717]/15">
                
                {/* Left Sticky Column */}
                <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-wider uppercase block">
                    TIMELINE VISUAL FOCUS
                  </span>
                  
                  {/* Dynamic image depending on active timeline step */}
                  <div className="bg-[#FAF8F5] border border-[#171717]/10 p-4 shadow-sm relative overflow-hidden">
                    <div className="aspect-[4/3] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={activeTimelineObj.id}
                          src={activeTimelineObj.image}
                          alt={activeTimelineObj.title}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover grayscale opacity-90"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-2 border border-dashed border-white/10 pointer-events-none"></div>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                      <span>Milestone: {activeTimelineObj.date}</span>
                      <span>Archive Focus</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-semibold text-[#171717]">
                      {activeTimelineObj.title}
                    </h4>
                    <p className="text-xs font-sans font-light text-[#6B6B6B]">
                      This event showcases how student movements coordinate digital satirical narratives into physical public assembly strategies.
                    </p>
                  </div>
                </div>

                {/* Right Scrolling Column */}
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
                          
                          <div className="space-y-2">
                            <span className="text-[8px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                              WHAT HAPPENED
                            </span>
                            <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="space-y-2">
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

              {/* JULY 25 VISUAL CLIMAX */}
              <div className="bg-[#FAF8F5] border border-[#171717]/10 p-8 shadow-sm space-y-8 max-w-4xl mx-auto rounded-sm mt-16 text-center">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  TIMELINE CLIMAX
                </span>
                
                <div className="space-y-2">
                  <h2 className="font-serif text-5xl md:text-7xl text-[#171717] font-normal tracking-tight">
                    JULY 25
                  </h2>
                  <h3 className="font-serif text-xl md:text-2xl text-[#16734A] uppercase tracking-wide">
                    THE EDUCATION MINISTER RESIGNS
                  </h3>
                </div>

                {/* Climax flow vector */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 py-4 border-t border-b border-[#171717]/5 max-w-2xl mx-auto">
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">DEMAND</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">NEGOTIATION</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#16734A] font-semibold">RESIGNATION</span>
                  <span className="text-[#171717]/20">→</span>
                  <span className="text-[10px] font-sans font-bold text-[#171717]/60">PROTEST WITHDRAWAL</span>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                  While Dharmendra Pradhan's resignation marked a central demand fulfillment, it did not resolve every underlying education and examination structural issue in the republic. Inquiry actions regarding paper leak controls continue under active commission scrutiny.
                </p>
              </div>

              {/* Timeline Aftermath three columns */}
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

              {/* WHY THIS MATTERS CONCEPTUAL MATRIX */}
              <div className="bg-white border border-[#171717]/10 p-8 shadow-sm max-w-4xl mx-auto text-center space-y-6">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  WHY THIS MATTERS
                </span>
                
                <p className="font-serif text-xl md:text-2xl text-[#171717] italic">
                  "A protest is more than a crowd in a public square."
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[9px] font-mono text-[#6B6B6B] pt-4 border-t border-[#171717]/5 max-w-xl mx-auto">
                  <span>EXAMINATION INTEGRITY</span>
                  <span>→</span>
                  <span>YOUTH ASPIRATIONS</span>
                  <span>→</span>
                  <span>OPPORTUNITY BRIDGES</span>
                  <span>→</span>
                  <span>SYSTEMIC ACCOUNTABILITY</span>
                  <span>→</span>
                  <span>DEMOCRATIC DISSENT</span>
                </div>
              </div>

            </motion.div>
          </section>

          <SectionDivider text="A protest is not only an event. It is a question addressed to the republic." />

          {/* 6. DEMOCRACY UNDER PRESSURE */}
          <section id="sec-06" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="max-w-7xl mx-auto space-y-16"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                  CHAPTER 06
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                  DEMOCRACY UNDER PRESSURE
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  How does a democracy remain democratic when people disagree deeply? We map structural assets against polarization vectors.
                </p>
              </div>

              {/* Split Narrative Column structure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Democracy at Work */}
                <div className="bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                      DEMOCRACY AT WORK
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                      Elections & Participation
                    </h3>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      Over 960 million voters participating in national elections, deploying electronic voting systems (EVMs) across all geographic limits. Public assemblies and legal commissions maintain constitutional focus.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                    Assets: High Civic Participation Rate
                  </div>
                </div>

                {/* Democracy under Strain */}
                <div className="bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      DEMOCRACY UNDER STRAIN
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal uppercase tracking-wider">
                      Polarisation & Pressure
                    </h3>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      Rapid growth of social media algorithms intensifies political echo chambers and disinformation. Citizens, independent editors, and judicial bodies contest policy boundaries.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#171717]/5 text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest">
                    Strains: Echo Chambers & Platform Polarisation
                  </div>
                </div>

              </div>
            </motion.div>
          </section>

          <SectionDivider text="But democracy is not only institutions. It is also the everyday act of living together." />

          {/* 7. LIVING TOGETHER */}
          <section id="sec-07" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
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
                    CHAPTER 07
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-tight">
                    LIVING TOGETHER
                  </h2>
                  <p className="font-serif text-lg text-[#16734A] italic">
                    "Pluralism is not only a constitutional principle. It is something people practice every day."
                  </p>
                  <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                    Negotations take place in shared train coaches, mixed urban apartments, and local neighborhood assemblies, keeping the diverse social fabric functional despite differences.
                  </p>
                  <div className="h-[1px] w-16 bg-[#16734A]/50"></div>
                </div>

                {/* Atmospheric railway compartment photograph */}
                <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-5 shadow-sm relative">
                  <div className="aspect-[16/9] bg-[#171717]/5 relative border border-[#171717]/5 overflow-hidden">
                    <img 
                      src="/images/stories/story1-train.jpg" 
                      alt="Passengers sharing space inside a general coach compartment of the Indian Railways"
                      className="w-full h-full object-cover grayscale opacity-90"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                      COEXISTENCE SLATE IT-COEX-01
                    </div>
                    <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-[8px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                    <span>Subject: The Shared Railway Compartment</span>
                    <span>Documentary Record</span>
                  </div>
                </div>

              </div>

              {/* Three dimensions cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#171717]/5">
                
                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    The Shared Coach
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Sharing meals and political debates across faiths and backgrounds during long-distance travels spanning national rail corridors.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    Urban Neighborhoods
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Professionals from different linguistic states residing together in tech corridors, navigating differences in daily celebrations.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#171717]/10 shadow-sm space-y-2">
                  <h4 className="font-serif text-base text-[#171717] font-semibold uppercase tracking-wider">
                    Peace Committees
                  </h4>
                  <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                    Local multi-faith assemblies coordinating routes and schedules to preempt tensions and preserve community trust.
                  </p>
                </div>

              </div>

            </motion.div>
          </section>

          <SectionDivider text="Every generation adds something. Every generation leaves something unfinished." />

          {/* 8. THE INDIA WE ARE BUILDING */}
          <section id="sec-08" className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="max-w-7xl mx-auto space-y-16"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                  CHAPTER 08
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal uppercase tracking-wider leading-tight">
                  THE INDIA WE ARE BUILDING
                </h2>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                  Regular citizens engaged in local transformations. Hover over the core value nodes below to trace connections and see corresponding contributors.
                </p>
              </div>

              {/* Value node network grid */}
              <div className="space-y-10 pt-8 border-t border-[#171717]/5">
                
                {/* Horizontal values nodes */}
                <div className="flex flex-wrap justify-center items-center gap-4 py-6 bg-white/40 border border-[#171717]/10 max-w-4xl mx-auto">
                  {Object.keys(conceptBuilderMapping).map((concept) => {
                    const isHovered = hoveredBuildConcept === concept;
                    const isRelated = hoveredBuildConcept && conceptConnections[hoveredBuildConcept]?.includes(concept);
                    return (
                      <button
                        key={concept}
                        onMouseEnter={() => setHoveredBuildConcept(concept)}
                        onMouseLeave={() => setHoveredBuildConcept(null)}
                        className={`px-4 py-2 border rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer ${
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

                {/* Contributor list mapping based on hovered value node */}
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

            </motion.div>
          </section>

          <SectionDivider text="The story is still being written." />

          {/* 9. THE UNFINISHED REPUBLIC */}
          <section id="sec-09" className="py-32 px-6 md:px-12 max-w-4xl mx-auto min-h-[50vh] flex flex-col justify-center">
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              variants={fadeUp}
              className="space-y-8"
            >
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CHAPTER 09
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
                THE UNFINISHED REPUBLIC
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed max-w-3xl">
                The constitutional promises of Freedom, Equality, Democracy, Secularism, Justice, Scientific Temper, and Pluralism are not static benchmarks. They remain active points of contestation, shaped and negotiated daily by citizens. The republic remains a process, continuously written and rewritten.
              </p>
            </motion.div>
          </section>

          <SectionDivider text="India is not a finished idea." />

          {/* 10. Final Conclusion */}
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
                "India is not a finished idea."
              </h2>

              <div className="space-y-4 max-w-xl mx-auto pt-4 text-center">
                <p className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  It is something every generation inherits, questions, reshapes and passes forward.
                </p>
                <p className="text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Every generation inherits an India. Every generation changes it.
                </p>
              </div>

              {/* Final Statement with Generous Whitespace */}
              <div className="pt-20 pb-36">
                <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#16734A] tracking-wider uppercase font-semibold leading-none">
                  ITS FUTURE<br/>IS NOT<br/>WRITTEN YET.
                </h3>
              </div>
            </motion.div>
          </section>

        </div>

      </div>
    </PageTransition>
  );
}
