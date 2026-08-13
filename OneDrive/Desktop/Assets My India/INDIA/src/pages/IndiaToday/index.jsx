import React, { useState, useEffect } from 'react';
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

const promiseGapImages = {
  digitalPromise: "/images/stories/digital-upi-payment.jpg",
  digitalGap: "/images/stories/story4-prep.jpg",
  educationPromise: "/images/stories/story6-lab.jpg",
  educationGap: "/images/people/everyday-school.jpg",
  employmentPromise: "/images/stories/airport-terminal.jpg",
  employmentGap: "/images/stories/story3-hands.jpg",
  urbanPromise: "/images/stories/mumbai-cityscape.jpg",
  urbanGap: "/images/stories/story1-inside.jpg",
  migrationStation: "/images/stories/story1-station.jpg",
  migrationTraveler: "/images/stories/story1-window.jpg"
};

const promiseGapStories = [
  {
    id: "digital",
    title: "DIGITAL CONNECTIONS & LIVED ACCESS",
    promise: "Aadhaar public identity registries and e-UPI smartphone payments enable instant micro-transfers across urban commercial centers.",
    gap: "Access varies across network reliability, smartphone affordability, and digital literacy in remote districts.",
    promiseImg: promiseGapImages.digitalPromise,
    gapImg: promiseGapImages.digitalGap,
    promiseLabel: "UPI & Open Payment Rails",
    gapLabel: "Informal Cash & Digital Literacy Disparities",
    metric: "820M+ Mobile Users | 34% Rural Internet Household Access (Source: TRAI & NFHS-5)"
  },
  {
    id: "education",
    title: "INSTITUTIONAL RESOURCES & LEARNING ENVIRONMENT",
    promise: "Expansion of premier polytechnics, microelectronics laboratories, and technical universities scaling skilled graduates.",
    gap: "Resource disparities between elite institutions and primary/secondary schools across regional districts.",
    promiseImg: promiseGapImages.educationPromise,
    gapImg: promiseGapImages.educationGap,
    promiseLabel: "Technical Labs & Applied Research",
    gapLabel: "Regional Classroom & Resource Disparities",
    metric: "79.6% Secondary GER | 1:35 Pupil-Teacher Ratio (Source: UDISE+ / MoE)"
  },
  {
    id: "employment",
    title: "FORMAL GROWTH & PRECARIOUS LABOR",
    promise: "Expanding startup hubs, commercial aviation networks, and infrastructure projects driving national GDP growth.",
    gap: "Over 88% of workers operate in informal employment without formal contracts or social safety nets.",
    promiseImg: promiseGapImages.employmentPromise,
    gapImg: promiseGapImages.employmentGap,
    promiseLabel: "Modern Tech & Logistics Hubs",
    gapLabel: "Informal Crafts & Manual Wage Labor",
    metric: "88.8% Informal Workforce Proportion (Source: MoSPI PLFS 2023–24)"
  },
  {
    id: "urban",
    title: "METROPOLITAN SKYLINES & URBAN FABRIC",
    promise: "Rapid skyline growth, high-rise commercial corridors, and elevated bypass flyovers transforming major cities.",
    gap: "Rapid urban growth strains housing affordability, municipal water systems, and daily labor commutes.",
    promiseImg: promiseGapImages.urbanPromise,
    gapImg: promiseGapImages.urbanGap,
    promiseLabel: "Metropolitan High-Rise Skylines",
    gapLabel: "Dense Commutes & Urban Infrastructure Strain",
    metric: "450M+ Urban Citizens (Source: MoHUA / Census)"
  }
];

const youngCountryImages = {
  aspiration: "/images/stories/story6-lab.jpg",
  exam: "/images/stories/stories-intro-7.jpg",
  work: "/images/stories/story4-prep.jpg",
  migration: "/images/stories/story1-station.jpg",
  future: "/images/stories/story6-child.jpg"
};

const youngCountryStories = [
  {
    id: "aspiration",
    chapter: "01 — THE ASPIRATION",
    title: "BUILDING THE FUTURE",
    subtitle: "Innovation, research and new economic avenues",
    desc: "India's expanding technology, education, and entrepreneurial ecosystem has opened new possibilities for young engineers, researchers, and founders. From cleanroom labs to software ventures, young Indians are designing products for global and domestic markets.",
    image: youngCountryImages.aspiration,
    imageCaption: "Microelectronics Cleanroom Lab & Research Facility",
    tag: "AMBITION & DISCOVERY"
  },
  {
    id: "exam",
    chapter: "02 — THE EXAM",
    title: "THE RECRUITMENT CYCLE",
    subtitle: "Preparation, competition and the wait for opportunity",
    desc: "For millions of candidates, securing a public service, railway, or university position represents family security and social status. Preparation involves long years in coaching districts and libraries, navigating intense competition and examination schedules.",
    image: youngCountryImages.exam,
    imageCaption: "Urban Coaching Hub & Study Center District",
    tag: "PREPARATION & WAITING"
  },
  {
    id: "work",
    chapter: "03 — THE WORK",
    title: "ENTERING THE LABOR MARKET",
    subtitle: "Economic diversity across formal and gig sectors",
    desc: "Young Indians enter the workforce across widely varying sectors — software development, retail counters, gig logistics, manufacturing, and traditional trades. The economic experience of the youth is diverse, balancing independence with wage stability.",
    image: youngCountryImages.work,
    imageCaption: "Urban Logistics & Retail Operations",
    tag: "LABOR & DIGNITY"
  },
  {
    id: "migration",
    chapter: "04 — MIGRATION",
    title: "LEAVING HOME FOR OPPORTUNITY",
    subtitle: "Mobility between agrarian hinterlands and metropolitan hubs",
    desc: "For millions, pursuing a career means leaving home. Young workers and students travel across state borders to major cities, seeking education and employment while maintaining deep ties to their families in origin towns.",
    image: youngCountryImages.migration,
    imageCaption: "Interstate Rail Transit & Youth Mobility",
    tag: "MOBILITY & INDEPENDENCE"
  },
  {
    id: "future",
    chapter: "05 — THE FUTURE",
    title: "THE HORIZON AHEAD",
    subtitle: "Expectations, aspirations and the years to come",
    desc: "India's median age is 28, making it one of the world's youngest major nations. The aspirations of this generation will shape the country's social fabric, economic policies, and democratic institutions over the coming decades.",
    image: youngCountryImages.future,
    imageCaption: "Young Citizens in Contemporary India",
    tag: "DEMOGRAPHIC HORIZON"
  }
];

const voiceGenerationImages = {
  questions: "/images/stories/stories-intro-3.jpg",
  campus: "/images/stories/stories-intro-2.jpg",
  street: "/images/stories/stories-intro-1.jpg",
  voice: "/images/identity/republic-voices.jpg"
};

const voiceGenerationStories = [
  {
    id: "questions",
    chapter: "01 — THE QUESTIONS",
    title: "EXAMINING THE PRESENT",
    subtitle: "Civic inquiry, awareness and public discourse",
    desc: "A generation growing up with widespread digital connections, open information channels, and expanding education is examining systemic issues — from recruitment fairness and campus infrastructure to employment opportunities and governance transparency.",
    image: voiceGenerationImages.questions,
    imageCaption: "Youth Engaged in Civic Discussion & Discourse",
    tag: "CIVIC DISCOURSE"
  },
  {
    id: "campus",
    chapter: "02 — THE CAMPUS",
    title: "SPACES OF DEBATE",
    subtitle: "University forums, student unions and academic freedom",
    editorialNote: "Universities are not only places to prepare for careers. They are also places where citizens learn to question authority, debate ideas and participate in public life.",
    desc: "Across central universities, state colleges, and polytechnics, campus gatherings serve as vital incubators for democratic discussion, student representation, and policy debate.",
    image: voiceGenerationImages.campus,
    imageCaption: "Student Campus Assemblies & Debate Forums",
    tag: "CAMPUS DIALOGUE"
  },
  {
    id: "street",
    chapter: "03 — THE STREET",
    title: "PUBLIC DEMONSTRATIONS",
    subtitle: "Peaceful assemblies, petitions and civic visibility",
    desc: "When formal administrative letters or petitions yield delayed responses, young people take their demands to public spaces like Jantar Mantar. Holding placards and assembling peacefully, candidates and students bring nationwide attention to structural grievances.",
    image: voiceGenerationImages.street,
    imageCaption: "Documentary View of Peaceful Public Assemblies",
    tag: "PUBLIC ASSEMBLY"
  },
  {
    id: "voice",
    chapter: "04 — THE VOICE",
    title: "DEMOCRATIC EXPRESSION",
    subtitle: "Classrooms, petitions, media and the right to disagree",
    desc: "Democracy is not only expressed at election time. It lives in classrooms, university campuses, street assemblies, digital petitions, investigative journalism, and the fundamental constitutional right to hold public authorities accountable.",
    image: voiceGenerationImages.voice,
    imageCaption: "Civic Participation & Public Expression",
    tag: "DEMOCRATIC RIGHTS"
  }
];

const youthConcerns = [
  { label: "EMPLOYMENT", desc: "Opportunities for stable, dignified careers." },
  { label: "FAIR RECRUITMENT", desc: "Transparent, merit-based hiring procedures." },
  { label: "EXAM INTEGRITY", desc: "Systemic safeguards against paper leaks and cancellations." },
  { label: "EQUAL OPPORTUNITY", desc: "Regional parity in funding and educational access." },
  { label: "EDUCATION", desc: "Upgraded facilities across state colleges and universities." },
  { label: "ACCOUNTABILITY", desc: "Responsive administrative communication with citizens." },
  { label: "DEMOCRATIC PARTICIPATION", desc: "Safe channels for public expression and feedback." }
];

const dissentImages = {
  opening: "/images/stories/stories-intro-1.jpg",
  formsOfDissent: "/images/stories/stories-intro-3.jpg",
  publicAssembly: "/images/stories/stories-intro-2.jpg",
  policeAndProtesters: "/images/stories/stories-intro-4.jpg",
  transition: "/images/identity/republic-voices.jpg"
};

const formsOfDissent = [
  { label: "QUESTION", desc: "Interrogating official statements, data, and policy decisions." },
  { label: "PETITION", desc: "Formal administrative appeals and legal filings submitted to authorities." },
  { label: "PROTEST", desc: "Physical gatherings, rallies, and placards in designated public spaces." },
  { label: "STRIKE", desc: "Organized labor shutdowns or academic boycotts to highlight grievances." },
  { label: "DEBATE", desc: "Public discussions, editorial journalism, and academic symposiums." },
  { label: "JOURNALISM", desc: "Investigative reporting holding power accountable to facts." },
  { label: "CIVIL DISOBEDIENCE", desc: "Non-violent symbolic non-cooperation with administrative directives." },
  { label: "PUBLIC ASSEMBLY", desc: "Civic meetings in shared urban areas to demand representation." }
];

const grievanceExamples = [
  { label: "EMPLOYMENT", desc: "Job creation guarantees and workforce security." },
  { label: "FAIR RECRUITMENT", desc: "Systemic integrity in competitive examination hiring." },
  { label: "EDUCATION", desc: "Affordable university tuition and campus infrastructure." },
  { label: "LAND & LIVELIHOODS", desc: "Protection against displacement and agrarian price drops." },
  { label: "ENVIRONMENT", desc: "Clean air standards, river conservation, and forest rights." },
  { label: "SOCIAL JUSTICE", desc: "Equal protection under the law for marginalized communities." },
  { label: "GOVERNMENT POLICY", desc: "Public consultation on legislative and regulatory bills." },
  { label: "CIVIL RIGHTS", desc: "Freedom of expression, assembly, and personal liberty." }
];

const proportionalityFactors = [
  { title: "PUBLIC SAFETY", desc: "Protecting citizens, commuters, and property from physical harm." },
  { title: "RIGHT TO ASSEMBLY", desc: "Constitutional protection for citizens to gather peacefully without arms." },
  { title: "LAW & ORDER", desc: "Maintaining traffic flow, emergency access, and public infrastructure." },
  { title: "FREEDOM OF EXPRESSION", desc: "Safeguarding the right of citizens to express criticism of power." },
  { title: "PROTESTERS' RIGHTS", desc: "Ensuring non-violent demonstrators face no arbitrary detention." },
  { title: "RESPONSIBILITY OF AUTHORITIES", desc: "Exercising restraint, proportional force, and neutral facilitation." }
];

const dissentStories = [
  {
    id: "forms",
    chapter: "01 — FORMS OF PARTICIPATION",
    title: "WHAT IS DISSENT?",
    subtitle: "Beyond elections: how citizens question power",
    desc: "Democracy is not static; it is active. Citizens express disagreement through multiple legitimate avenues — asking questions, filing legal petitions, writing investigative reporting, organizing peaceful assemblies, and holding public debates.",
    image: dissentImages.formsOfDissent,
    imageCaption: "Civic Debate & Public Discussion",
    tag: "DEMOCRATIC CHANNELS"
  },
  {
    id: "grievances",
    chapter: "02 — REASON FOR ASSEMBLY",
    title: "WHY PEOPLE PROTEST",
    subtitle: "Civic grievances, economic pressure and social justice",
    desc: "Citizens enter public spaces when they feel formal administrative channels have failed to resolve pressing concerns — including job security, examination paper leaks, agrarian land rights, clean water access, or legislative policy shifts.",
    image: dissentImages.opening,
    imageCaption: "Documentary View of Peaceful Public Gathering",
    tag: "CIVIC GRIEVANCES"
  },
  {
    id: "right-order",
    chapter: "03 — RIGHTS & RESPONSIBILITIES",
    title: "THE RIGHT TO PROTEST & PUBLIC ORDER",
    subtitle: "Constitutional assembly vs administrative regulation",
    desc: "Article 19(1)(b) of the Constitution guarantees the right to assemble peacefully and without arms. Simultaneously, public authorities bear the responsibility of regulating traffic, preventing violence, and ensuring safety for non-participating citizens.",
    image: dissentImages.publicAssembly,
    imageCaption: "Student Placards & Peaceful Assembly",
    tag: "CONSTITUTIONAL BALANCE"
  },
  {
    id: "power",
    chapter: "04 — WHEN PROTEST MEETS POWER",
    title: "TENSION IN THE PUBLIC SQUARE",
    subtitle: "Barricades, security arrangements and negotiation",
    desc: "When demonstrators and state authorities occupy the same public space, tension naturally emerges. The quality of a democracy is reflected in whether authorities use dialogue and restraint, or rely on heavy restrictions and barricades.",
    image: dissentImages.policeAndProtesters,
    imageCaption: "Public Space Barricades & Security Deployments",
    tag: "STATE & CITIZEN"
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
    title: "Origins & Satirical Emergence",
    desc: "The Cockroach Janta Party (CJP) emerged as a satirical online movement organizing student candidates around recruitment irregularities, paper leaks, and NEET examination safeguards.",
    source: "Indian Express / Supreme Court Records",
    sourceUrl: "https://indianexpress.com",
    type: "Digital Emergence",
    image: "/images/stories/stories-intro-3.jpg",
    why: "Satire and digital coordination enabled scattered candidates to unite behind shared administrative demands."
  },
  {
    date: "JUNE 6, 2026",
    title: "First Jantar Mantar Assembly",
    desc: "Hundreds of examination aspirants and coordinators assembled physically at Jantar Mantar, New Delhi, submitting a formal charter of demands regarding entrance exam safeguards.",
    source: "Indian Express / Commission Register",
    sourceUrl: "https://indianexpress.com",
    type: "Public Assembly",
    image: "/images/stories/stories-intro-2.jpg",
    why: "Shifted the online movement into a physical public assembly in the national capital."
  },
  {
    date: "JUNE – JULY 2026",
    title: "Sustained Mobilisation & Clean-Up Guilds",
    desc: "Physical assemblies persisted through summer weeks. Coordinating teams organized local volunteer guilds, maintained public hygiene, and submitted formal petitions to education authorities.",
    source: "Delhi Police Logs / Representative Register",
    sourceUrl: "https://theprint.in",
    type: "Sustained Protests",
    image: "/images/stories/stories-intro-1.jpg",
    why: "Demonstrated organizational discipline and sustained civic engagement through prolonged administrative delays."
  },
  {
    date: "JULY 20, 2026",
    title: "Chalo Sansad: Parliament March",
    desc: "Protesters attempted to march from Jantar Mantar toward Parliament. Police deployed multi-layered barricades along Janpath. Documented confrontations occurred, involving tear gas canisters and crowd control measures.",
    source: "Reuters / PTI / Hospital Logs",
    sourceUrl: "https://www.reuters.com",
    type: "Confrontation & Security Restrictions",
    image: "/images/stories/stories-intro-4.jpg",
    why: "The march brought national media visibility, legislative debates, and questions over crowd control proportionality."
  },
  {
    date: "JULY 25, 2026",
    title: "Ministerial Resignation & Stand-Down",
    desc: "Union Education Minister Dharmendra Pradhan submitted his resignation during a period of sustained mobilization. Following cabinet announcements on entrance board audits, organizers announced the stand-down of physical assemblies.",
    source: "Government Gazette / PTI Statements",
    sourceUrl: "https://pib.gov.in",
    type: "Political Outcome",
    image: "/images/identity/constitution.jpg",
    why: "Led to administrative audit commitments while physical demonstrations formally concluded."
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

const historicalThreads = [
  {
    era: "1946–1950",
    category: "CONSTITUTIONAL FOUNDATIONS",
    title: "Constituent Assembly & Fundamental Rights",
    desc: "Debates on universal adult franchise, fundamental rights, and executive limits created India's constitutional framework, guaranteeing democratic assembly to all citizens.",
    question: "What kind of republic did India choose to become?",
    why: "Established rights to free expression, equality, and peaceful assembly as foundational citizen guarantees.",
    source: "Constituent Assembly Debates (1946–1949)",
    image: "/images/identity/constitution.jpg"
  },
  {
    era: "1950s–1960s",
    category: "DISSENT & PARTICIPATION",
    title: "Parliamentary Assembly & Opposition Space",
    desc: "Early parliamentary debates and regional public assemblies established opposition rights, free speech, and public petitioning as integral to democratic governance.",
    question: "When citizens disagree with power, what space does democracy give them?",
    why: "Normalized public criticism, parliamentary opposition, and executive accountability during early nation-building.",
    source: "Lok Sabha Debates / National Archives of India",
    image: "/images/history/nehru-speech.jpg"
  },
  {
    era: "1975–1977",
    category: "THE EMERGENCY",
    title: "Institutional Pressure & Democratic Restoration",
    desc: "The 21-month Emergency suspended fundamental rights and curtailed press freedoms, leading to nationwide civil resistance and democratic restoration in 1977.",
    question: "What happens when democratic institutions are placed under extraordinary pressure?",
    why: "Proved the resilience of public electorate voting and citizen defence of fundamental liberties.",
    source: "Shah Commission Report / General Election Records (1977)",
    image: "/images/history/gandhi-march.jpg"
  },
  {
    era: "1980s–2000s",
    category: "MOVEMENTS FROM BELOW",
    title: "Grassroots Mobilisation & Civil Society",
    desc: "Farmers' alliances, environmental movements (Chipko), workers' unions, and women's collectives organized outside formal party politics to demand policy reform.",
    question: "Who gets to participate in shaping the republic?",
    why: "Expanded democratic participation beyond election days into everyday civic advocacy and legal rights.",
    source: "Planning Commission Reports / Civil Society Archives",
    image: "/images/stories/story3-forest.jpg"
  },
  {
    era: "2010s–PRESENT",
    category: "ONGOING EXPERIMENT",
    title: "Contemporary Assemblies & Digital Dissent",
    desc: "Modern anti-corruption movements, student assemblies, and digital petitioning demonstrate how new generations re-interpret constitutional rights in a digital age.",
    question: "What has India learned — and what remains unresolved?",
    why: "Connects historical precedents directly to contemporary youth mobilization and governance questions.",
    source: "Supreme Court Rulings / Ministry of Law Records",
    image: "/images/stories/stories-intro-2.jpg"
  }
];

export default function IndiaToday() {
  const [motionIndex, setMotionIndex] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [hoveredWord, setHoveredWord] = useState(null);
  const [isPlayingTimeline, setIsPlayingTimeline] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlayingTimeline) {
      timer = setInterval(() => {
        setTimelineIndex((prev) => (prev + 1) % cjpCaseTimeline.length);
      }, 8000);
    }
    return () => clearInterval(timer);
  }, [isPlayingTimeline]);

  const activeSlide = motionSlides[motionIndex];
  const activeTimelineObj = cjpCaseTimeline[timelineIndex];
  const activeHistoryObj = historicalThreads[historyIndex];

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
                02 — INDIA IN MOTION
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

        {/* 03 — THE PROMISE & THE GAP (Visual Paired Composition) */}
        <section id="promise-gap" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
          
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              03 — THE PROMISE & THE GAP
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
              THE PROMISE & THE GAP
            </h2>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
              Progress can be measured in new roads, faster trains and digital networks. But a country's transformation is also measured by who can access the opportunities they create.
            </p>
          </div>

          {/* 4 Large Paired Editorial Contrasts */}
          <div className="space-y-20">
            {promiseGapStories.map((story, index) => (
              <div key={story.id} className="bg-white border border-[#171717]/10 p-6 md:p-10 rounded-sm shadow-sm space-y-8">
                
                {/* Header & Metric */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#171717]/10 pb-4 gap-2">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-[#E8752A] tracking-widest uppercase block font-bold">
                      CONTRAST STORY 0{index + 1}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold uppercase">
                      {story.title}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-[#16734A] bg-[#F7F4EE] border border-[#16734A]/20 px-3 py-1.5 rounded-sm font-semibold self-start md:self-auto">
                    {story.metric}
                  </span>
                </div>

                {/* Paired Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  
                  {/* Left Column: PROMISE */}
                  <div className="space-y-4 flex flex-col justify-between bg-[#F7F4EE]/40 p-5 rounded-sm border border-[#171717]/5">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-widest uppercase block">
                        THE PROMISE
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed">
                        {story.promise}
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-xs">
                        <img 
                          src={story.promiseImg} 
                          alt={story.promiseLabel}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase tracking-widest block pt-1">
                        {story.promiseLabel}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: LIVED REALITY / GAP */}
                  <div className="space-y-4 flex flex-col justify-between bg-[#F7F4EE]/40 p-5 rounded-sm border border-[#171717]/5">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-widest uppercase block">
                        LIVED REALITY / THE GAP
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {story.gap}
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-xs">
                        <img 
                          src={story.gapImg} 
                          alt={story.gapLabel}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[8px] font-mono text-[#6B6B6B] uppercase tracking-widest block pt-1">
                        {story.gapLabel}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Internal Migration Visual Feature */}
          <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-12 rounded-sm space-y-8 shadow-md">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-[0.25em] block">
                INTERNAL MIGRATION & REBUILDING THE NATION
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-normal uppercase">
                "WORKERS IN MOTION: BUILDING THE NEW CITIES"
              </h3>
              <p className="text-xs md:text-sm font-sans font-light text-[#FAF8F5]/80 max-w-3xl leading-relaxed">
                Millions of workers migrate annually from agrarian hinterlands to metropolitan construction sites, factories, and transit hubs. Their labor builds the expressways, elevated metro lines, and towers — maintaining crucial financial support for families in home villages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-white/10 relative">
                <img 
                  src={promiseGapImages.migrationStation} 
                  alt="Transit hub connecting interstate labor networks" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#171717]/90 text-[#FAF8F5] text-[8px] font-mono px-2 py-0.5 uppercase tracking-widest">
                  Regional Transit Network Hub
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-white/10 relative">
                <img 
                  src={promiseGapImages.migrationTraveler} 
                  alt="Passenger looking out train window during migration journey" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#171717]/90 text-[#FAF8F5] text-[8px] font-mono px-2 py-0.5 uppercase tracking-widest">
                  Interstate Labor Journey Perspective
                </div>
              </div>
            </div>
          </div>

          {/* Restrained Data-Driven Indicator Panel */}
          <div className="bg-white border border-[#171717]/10 p-8 md:p-10 rounded-sm space-y-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#16734A] uppercase tracking-[0.25em] block font-bold">
                EVIDENCE & VERIFIED INDICATORS
              </span>
              <h3 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold uppercase">
                THE ECONOMIC LANDSCAPE IN NUMBERS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                  INFORMAL WORKFORCE
                </span>
                <span className="font-serif text-3xl font-bold text-[#171717] block">88.8%</span>
                <p className="text-[11px] font-sans font-light text-[#6B6B6B] leading-normal">
                  Proportion of workers operating in informal employment without formal contracts.
                </p>
                <span className="text-[8px] font-mono text-[#6B6B6B] block pt-1">
                  Source: MoSPI PLFS 2023–24
                </span>
              </div>

              <div className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                  AGRICULTURE SHARE
                </span>
                <span className="font-serif text-3xl font-bold text-[#171717] block">45.8%</span>
                <p className="text-[11px] font-sans font-light text-[#6B6B6B] leading-normal">
                  National workforce engaged in rural agricultural labor and farming.
                </p>
                <span className="text-[8px] font-mono text-[#6B6B6B] block pt-1">
                  Source: MoSPI PLFS 2023–24
                </span>
              </div>

              <div className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                  RURAL INTERNET ACCESS
                </span>
                <span className="font-serif text-3xl font-bold text-[#171717] block">34.0%</span>
                <p className="text-[11px] font-sans font-light text-[#6B6B6B] leading-normal">
                  Rural households with stable internet access compared to 68% in urban hubs.
                </p>
                <span className="text-[8px] font-mono text-[#6B6B6B] block pt-1">
                  Source: TRAI / NFHS-5
                </span>
              </div>

              <div className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                  NATIONAL INCOME SHARE
                </span>
                <span className="font-serif text-3xl font-bold text-[#171717] block">57.7%</span>
                <p className="text-[11px] font-sans font-light text-[#6B6B6B] leading-normal">
                  Share of national income held by the top 10% income bracket.
                </p>
                <span className="text-[8px] font-mono text-[#6B6B6B] block pt-1">
                  Source: World Inequality Lab 2024
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* Transition Section to A Young Country */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            TRANSITION TO DEMOGRAPHY
          </span>
          <h3 className="font-serif text-2xl md:text-4xl text-[#171717] font-normal uppercase max-w-3xl mx-auto leading-snug">
            "INDIA'S FUTURE IS EXPANDING. BUT OPPORTUNITY IS NOT EXPERIENCED FROM THE SAME STARTING LINE."
          </h3>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
          <p className="font-serif text-base md:text-xl text-[#16734A] italic font-semibold pt-2">
            "Who is the young generation entering this future?"
          </p>
        </section>

        {/* 04 — A YOUNG COUNTRY (5 Story Editorial Sequence) */}
        <section id="young-country" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Section Header */}
            <div className="space-y-4 max-w-3xl">
              <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.3em] uppercase block">
                04 — A YOUNG COUNTRY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
                A YOUNG COUNTRY
              </h2>
              <h3 className="font-serif text-lg md:text-2xl text-[#E8752A] italic font-light">
                "Millions are entering adulthood in a country changing faster than the world they grew up in."
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                For some, the future is being built in laboratories, startups and new industries. For others, it is shaped by exams, migration, unstable work and the search for a first real opportunity.
              </p>
            </div>

            {/* 5 Visual Story Sequence */}
            <div className="space-y-16">
              {youngCountryStories.map((story) => (
                <div 
                  key={story.id} 
                  className="bg-[#F7F4EE] border border-[#171717]/10 p-6 md:p-10 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Editorial Copy */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#16734A] tracking-widest uppercase block font-bold">
                        {story.chapter}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold uppercase">
                        {story.title}
                      </h3>
                      <h4 className="font-serif text-sm md:text-base text-[#E8752A] italic">
                        "{story.subtitle}"
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {story.desc}
                    </p>
                    <div className="pt-2">
                      <span className="text-[8px] font-mono text-[#171717] bg-white border border-[#171717]/15 px-3 py-1 rounded-sm uppercase tracking-widest font-semibold">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Full-Color Photograph */}
                  <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-sm bg-[#171717]/5">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                      {story.imageCaption}
                    </div>
                    <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Reflection Block */}
            <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-12 rounded-sm text-center space-y-4 shadow-md max-w-4xl mx-auto">
              <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-[0.3em] block">
                GENERATIONAL REFLECTION
              </span>
              <p className="font-serif text-xl md:text-3xl font-normal uppercase leading-relaxed text-[#FAF8F5]">
                "What happens when a generation expects more from the future than the present can offer?"
              </p>
            </div>

          </div>
        </section>

        {/* Quiet Transition Section to Voice of a Generation */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            TRANSITION TO EXPRESSION
          </span>
          <div className="max-w-3xl mx-auto space-y-2 text-base md:text-xl font-serif text-[#171717]">
            <p className="italic font-light">"Ambition can be patient.</p>
            <p className="italic font-semibold text-[#E8752A]">But uncertainty has a limit."</p>
          </div>
          <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed pt-2">
            When opportunities feel delayed, decisions feel unfair, or institutions stop listening, young people begin to make their voices heard.
          </p>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
        </section>

        {/* 05 — VOICE OF A GENERATION (4 Visual Editorial Chapters + Concerns Grid) */}
        <section id="generation-voice" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
          
          {/* Section Opening Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              05 — VOICE OF A GENERATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
              VOICE OF A GENERATION
            </h2>
            <h3 className="font-serif text-lg md:text-2xl text-[#16734A] italic font-light">
              "A generation growing up with more information, more connection and more expectations is also asking harder questions."
            </h3>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
              About work. About fairness. About institutions. About the future they are being promised.
            </p>
          </div>

          {/* 4 Visual Editorial Chapters */}
          <div className="space-y-16">
            {voiceGenerationStories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white border border-[#171717]/10 p-6 md:p-10 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Editorial Copy */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-[#E8752A] tracking-widest uppercase block font-bold">
                      {story.chapter}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold uppercase">
                      {story.title}
                    </h3>
                    <h4 className="font-serif text-sm md:text-base text-[#16734A] italic">
                      "{story.subtitle}"
                    </h4>
                  </div>

                  {story.editorialNote && (
                    <div className="bg-[#F7F4EE] border-l-2 border-[#16734A] p-3 text-xs font-serif text-[#171717] italic leading-relaxed">
                      "{story.editorialNote}"
                    </div>
                  )}

                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {story.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-[8px] font-mono text-[#171717] bg-[#F7F4EE] border border-[#171717]/15 px-3 py-1 rounded-sm uppercase tracking-widest font-semibold">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Right Column: Full-Color Photograph */}
                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-sm bg-[#171717]/5">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                    {story.imageCaption}
                  </div>
                  <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Grid: WHAT ARE THEY ASKING FOR? */}
          <div className="bg-white border border-[#171717]/10 p-8 md:p-10 rounded-sm space-y-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-[0.25em] block font-bold">
                RECURRING CIVIC THEMES
              </span>
              <h3 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold uppercase">
                WHAT ARE THEY ASKING FOR?
              </h3>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl leading-relaxed">
                Across different student movements, campus assemblies, and digital forums, several core priorities recur consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {youthConcerns.map((item) => (
                <div key={item.label} className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                  <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                    {item.label}
                  </span>
                  <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Closing Idea */}
          <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-12 rounded-sm text-center space-y-4 shadow-md max-w-4xl mx-auto">
            <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-[0.3em] block">
              DEMOCRATIC PRINCIPLE
            </span>
            <p className="font-serif text-xl md:text-3xl font-normal uppercase leading-relaxed text-[#FAF8F5]">
              "Democracy is not only expressed at election time."
            </p>
            <p className="text-xs md:text-sm font-sans font-light text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed">
              It also lives in classrooms, campuses, streets, petitions, public meetings, journalism, debate — and the right to disagree.
            </p>
          </div>

        </section>

        {/* Quiet Transition Section to Democratic Dissent */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            TRANSITION TO DEMOCRATIC DISSENT
          </span>
          <div className="max-w-3xl mx-auto space-y-2 text-base md:text-xl font-serif text-[#171717]">
            <p className="italic font-light">"Some voices remain part of the everyday democratic conversation.</p>
            <p className="italic font-semibold text-[#16734A]">Others become moments that demand closer examination."</p>
          </div>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
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

        {/* 06 — DEMOCRATIC DISSENT */}
        <section id="democracy-pressure" className="w-full py-28 px-6 md:px-12 bg-white border-t border-b border-[#171717]/5 space-y-20">
          
          {/* Section Header */}
          <div className="max-w-7xl mx-auto space-y-4 max-w-3xl">
            <span className="text-[10px] font-sans font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              06 — INDIA UNDER PRESSURE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-[#171717]">
              DEMOCRATIC DISSENT
            </h2>
            <h3 className="font-serif text-lg md:text-2xl text-[#E8752A] italic font-light">
              "A democracy is tested not only by how it celebrates agreement, but by how it responds to disagreement."
            </h3>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
              Across India, people have taken to campuses, streets, courts, workplaces and public spaces to question decisions, demand accountability and make themselves heard.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Visual Opening Documentary Photograph */}
            <div className="aspect-[21/9] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-sm bg-[#171717]/5">
              <img 
                src={dissentImages.opening} 
                alt="Documentary photograph of a peaceful public gathering in India"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                PEOPLE GATHERING · PEOPLE SPEAKING · PEOPLE BEING HEARD
              </div>
              <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
            </div>

            {/* Typographic Editorial: WHAT IS DISSENT? */}
            <div className="bg-[#F7F4EE] border border-[#171717]/10 p-8 md:p-10 rounded-sm space-y-8 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#16734A] uppercase tracking-[0.25em] block font-bold">
                  MULTIPLE AVENUES OF PARTICIPATION
                </span>
                <h3 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold uppercase">
                  WHAT IS DISSENT?
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl leading-relaxed">
                  Democratic participation extends far beyond voting once every five years. It manifests through distinct civic forms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {formsOfDissent.map((item) => (
                  <div key={item.label} className="bg-white p-5 rounded-sm border border-[#171717]/10 space-y-2">
                    <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                      {item.label}
                    </span>
                    <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Visual Editorial Chapters */}
            <div className="space-y-16">
              {dissentStories.map((story) => (
                <div 
                  key={story.id} 
                  className="bg-[#F7F4EE] border border-[#171717]/10 p-6 md:p-10 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Editorial Copy */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#16734A] tracking-widest uppercase block font-bold">
                        {story.chapter}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold uppercase">
                        {story.title}
                      </h3>
                      <h4 className="font-serif text-sm md:text-base text-[#E8752A] italic">
                        "{story.subtitle}"
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {story.desc}
                    </p>
                    <div className="pt-2">
                      <span className="text-[8px] font-mono text-[#171717] bg-white border border-[#171717]/15 px-3 py-1 rounded-sm uppercase tracking-widest font-semibold">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Full-Color Photograph */}
                  <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm border border-[#171717]/10 relative shadow-sm bg-[#171717]/5">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-[#171717] text-[#FAF8F5] px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase">
                      {story.imageCaption}
                    </div>
                    <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why People Protest Grid */}
            <div className="bg-white border border-[#171717]/10 p-8 md:p-10 rounded-sm space-y-8 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-[0.25em] block font-bold">
                  CATALYSTS FOR DEMONSTRATION
                </span>
                <h3 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold uppercase">
                  WHY PEOPLE PROTEST
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl leading-relaxed">
                  Citizens gather in public spaces when they feel their core economic, social, or constitutional concerns require nationwide visibility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {grievanceExamples.map((item) => (
                  <div key={item.label} className="bg-[#F7F4EE] p-5 rounded-sm border border-[#171717]/5 space-y-2">
                    <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                      {item.label}
                    </span>
                    <p className="text-xs font-sans font-light text-[#171717] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiet Editorial Question: THE QUESTION OF PROPORTIONALITY */}
            <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-12 rounded-sm text-center space-y-8 shadow-md max-w-5xl mx-auto">
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-[#E8752A] uppercase tracking-[0.3em] block font-bold">
                  THE QUESTION OF PROPORTIONALITY
                </span>
                <p className="font-serif text-xl md:text-3xl font-normal uppercase leading-relaxed text-[#FAF8F5] max-w-3xl mx-auto">
                  "When does maintaining public order become an excessive restriction on dissent?"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-4">
                {proportionalityFactors.map((f) => (
                  <div key={f.title} className="bg-white/5 border border-white/10 p-5 rounded-sm space-y-2">
                    <span className="text-[9px] font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                      {f.title}
                    </span>
                    <p className="text-xs font-sans font-light text-[#FAF8F5]/80 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 07 — MEDIA POLARISATION (Floating News Headline Ecosystem) */}
        <section id="media-polarisation" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-3 text-center">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.25em] uppercase block">
                07 — WHO TELLS THE STORY?
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
                08 — WHEN DISAGREEMENT BECOMES HOSTILITY
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

        {/* Quiet Transition Section to CJP — A CASE STUDY */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            TRANSITION TO SPECIFIC EVENT ANALYSIS
          </span>
          <div className="max-w-3xl mx-auto space-y-2 text-base md:text-xl font-serif text-[#171717]">
            <p className="italic font-light">"These questions become more difficult — and more important — when democracy moves from principle to the street."</p>
            <p className="italic font-semibold text-[#16734A]">"To understand dissent, sometimes we need to slow down and examine one story closely."</p>
          </div>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
          <p className="font-serif text-base md:text-xl text-[#E8752A] italic font-semibold pt-2">
            "CJP — A CASE STUDY"
          </p>
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

        {/* 09 — CJP CASE STUDY (Documentary Visual Timeline & Event Analysis) */}
        <section id="cjp-case-study" className="w-full py-10 md:py-14 px-4 sm:px-6 md:px-12 max-w-[94vw] mx-auto space-y-12">
          
          {/* Section Introduction */}
          <div className="text-center space-y-2 max-w-4xl mx-auto">
            <span className="text-[11px] font-mono text-[#E8752A] uppercase tracking-[0.35em] block font-bold">
              09 — CJP: A CASE STUDY
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl uppercase tracking-wider text-[#171717]">
              CJP — FROM GRIEVANCE TO PUBLIC PROTEST
            </h2>
            <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto">
              A political movement emerged around grievances concerning employment, recruitment/examination issues, opportunity and government accountability.
            </p>
            <p className="font-serif text-base md:text-lg text-[#16734A] italic font-semibold pt-0.5">
              "To understand what democratic dissent looks like in practice, follow the sequence of events."
            </p>
          </div>

          {/* CINEMATIC DOCUMENTARY VIEWPORT STAGE (Responsive to browser height calc(100vh - 140px)) */}
          <div className="bg-[#0a0a0a] text-[#FAF8F5] border border-white/15 rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-700 w-full h-[calc(100vh-140px)] min-h-[600px] max-h-[820px] flex flex-col justify-between p-4 md:p-8 lg:p-10">
            
            {/* Full-Bleed Background Image with Smooth Fade & Atmospheric Overlay */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeTimelineObj.date}
                  src={activeTimelineObj.image} 
                  alt={activeTimelineObj.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.55, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
            </div>

            {/* Top Meta Bar & Autoplay Story Controls */}
            <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 text-xs font-mono tracking-widest uppercase border-b border-white/15 pb-3 md:pb-4">
              <span className="bg-[#E8752A] text-white px-3.5 py-1 rounded-sm font-bold shadow-md">
                STAGE 0{timelineIndex + 1} OF 05 · {activeTimelineObj.type}
              </span>
              
              {/* Autoplay Play/Pause Toggle */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlayingTimeline(!isPlayingTimeline)}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 px-3.5 py-1 rounded-sm text-white font-mono text-xs font-semibold uppercase tracking-widest backdrop-blur-md transition-colors cursor-pointer outline-none"
                  aria-label={isPlayingTimeline ? "Pause timeline story playback" : "Play timeline story playback"}
                >
                  <span>{isPlayingTimeline ? "PAUSE STORY" : "PLAY STORY"}</span>
                </button>
                <span className="text-white/50 hidden sm:inline">8S AUTOPLAY</span>
              </div>
            </div>

            {/* LARGE LIQUID-GLASS STORY PANEL (Vertically Compact & Responsive to Viewport) */}
            <div className="relative z-10 my-auto py-2 md:py-4 w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTimelineObj.date}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    backgroundColor: "rgba(18, 18, 18, 0.22)",
                    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.015) 45%, rgba(255, 255, 255, 0.035))",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: "0 20px 50px -20px rgba(0, 0, 0, 0.45)",
                    borderRadius: "16px"
                  }}
                  className="w-full max-w-[1200px] lg:max-w-[1300px] min-h-[300px] md:min-h-[380px] p-5 md:p-8 lg:p-10 space-y-3 md:space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs md:text-sm font-mono text-[#E8752A] uppercase tracking-[0.25em] font-bold block">
                      {activeTimelineObj.date}
                    </span>
                    <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-semibold uppercase leading-tight tracking-wide">
                      {activeTimelineObj.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-xl font-sans font-light text-white/95 leading-relaxed pt-1">
                      {activeTimelineObj.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/15">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-[#16734A] uppercase tracking-wider block font-bold">
                        WHY IT MATTERED
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-white/85 leading-relaxed">
                        {activeTimelineObj.why}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-white/60 uppercase tracking-widest gap-3">
                      <span>Source: {activeTimelineObj.source}</span>
                      {activeTimelineObj.sourceUrl && (
                        <a 
                          href={activeTimelineObj.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#E8752A] underline hover:text-[#16734A] transition-colors font-bold"
                        >
                          VIEW SOURCE RECORD →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FIVE-STAGE GLASS TIMELINE & PROGRESS LINE */}
            <div className="relative z-10 pt-3 md:pt-4 border-t border-white/15 space-y-2.5">
              
              {/* Cards Navigation */}
              <div className="flex items-center justify-between overflow-x-auto gap-3 py-1 no-scrollbar">
                {cjpCaseTimeline.map((item, idx) => {
                  const isActive = timelineIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setTimelineIndex(idx);
                        setIsPlayingTimeline(false);
                      }}
                      className={`flex-1 min-w-[150px] md:min-w-[180px] p-2.5 md:p-3.5 rounded-xl border text-left transition-all duration-300 backdrop-blur-md cursor-pointer outline-none ${
                        isActive 
                          ? "bg-[#FAF8F5] text-[#171717] border-[#E8752A] shadow-2xl scale-102 ring-2 ring-[#E8752A]/50" 
                          : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30"
                      }`}
                      aria-label={`${item.date} — ${item.title}`}
                    >
                      <span className={`text-xs font-mono font-bold block ${isActive ? "text-[#E8752A]" : "text-[#E8752A]/80"}`}>
                        0{idx + 1} · {item.date}
                      </span>
                      <span className="text-xs md:text-sm font-serif font-semibold truncate block pt-0.5">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Timeline Progress Line (Dot-Line Matrix) */}
              <div className="relative w-full flex items-center justify-between px-4 pt-1">
                <div className="absolute left-6 right-6 h-[2px] bg-white/20 z-0" />
                <div 
                  className="absolute left-6 h-[2px] bg-[#E8752A] z-0 transition-all duration-700 ease-out" 
                  style={{ width: `calc(${(timelineIndex / (cjpCaseTimeline.length - 1)) * 100}% - 12px)` }}
                />
                {cjpCaseTimeline.map((_, idx) => {
                  const isActive = timelineIndex === idx;
                  const isPassed = timelineIndex >= idx;
                  return (
                    <div 
                      key={idx}
                      className={`relative z-10 w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                        isActive 
                          ? "bg-[#E8752A] ring-4 ring-[#E8752A]/40 scale-125" 
                          : isPassed 
                          ? "bg-[#E8752A]" 
                          : "bg-white/30"
                      }`}
                    />
                  );
                })}
              </div>

            </div>

          </div>

          {/* JULY 20 — THREE-PERSPECTIVE VISUAL EDITORIAL BLOCK */}
          <div className="bg-[#F7F4EE] border border-[#171717]/10 p-8 md:p-12 rounded-sm max-w-6xl mx-auto shadow-sm space-y-8">
            <div className="text-center space-y-2 border-b border-[#171717]/10 pb-6">
              <span className="text-xs font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                JULY 20 — CHALO SANSAD MARCH PERSPECTIVES
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase">
                THE SAME EVENT, DIFFERENT ACCOUNTS
              </h3>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed pt-1">
                On July 20, 2026, a planned march from Jantar Mantar toward Parliament met police barricades along Janpath. Accounts of the confrontation differ based on perspective.
              </p>
            </div>

            {/* Three Columns: Protesters, Police/State, Independent */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm space-y-3">
                <span className="text-xs font-sans font-bold text-[#16734A] tracking-wider uppercase block">
                  PROTESTERS' ACCOUNT
                </span>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Organizers alleged excessive force, restrictive barricading, and unnecessary tear gas deployment against peaceful candidates exercising constitutional assembly rights to present petitions.
                </p>
                <span className="text-[9px] font-mono text-[#6B6B6B]/60 block pt-2 border-t border-[#171717]/5">
                  Source: CJP Press Release / Student Union Statements
                </span>
              </div>

              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm space-y-3">
                <span className="text-xs font-sans font-bold text-[#E8752A] tracking-wider uppercase block">
                  POLICE / STATE ACCOUNT
                </span>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Authorities described police response in terms of crowd control, public safety, and enforcing security perimeters around restricted high-security Parliament zones.
                </p>
                <span className="text-[9px] font-mono text-[#6B6B6B]/60 block pt-2 border-t border-[#171717]/5">
                  Source: Delhi Police Press Briefing / Official Release
                </span>
              </div>

              <div className="p-6 bg-white border border-[#171717]/10 rounded-sm space-y-3">
                <span className="text-xs font-sans font-bold text-[#171717] tracking-wider uppercase block">
                  INDEPENDENT / RIGHTS ACCOUNT
                </span>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Independent reporting documented multi-hour negotiations, barricade pressures, tear gas canisters deployed, emergency medical transport calls, and injuries on both sides.
                </p>
                <span className="text-[9px] font-mono text-[#6B6B6B]/60 block pt-2 border-t border-[#171717]/5">
                  Source: Reuters / Press Trust of India / Amnesty International
                </span>
              </div>

            </div>

            {/* Attributed Injury Metrics Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#171717]/10 text-center">
              <div className="bg-white p-5 rounded-sm border border-[#171717]/5 space-y-1">
                <span className="text-xs font-mono text-[#E8752A] uppercase font-bold block">REPORTED PROTESTER INJURIES</span>
                <p className="text-xs md:text-sm font-sans font-semibold text-[#171717] leading-relaxed">
                  According to Delhi Hospital logs & protest coordinators, 42 protesters received treatment for minor injuries and tear gas exposure.
                </p>
              </div>
              <div className="bg-white p-5 rounded-sm border border-[#171717]/5 space-y-1">
                <span className="text-xs font-mono text-[#16734A] uppercase font-bold block">REPORTED POLICE INJURIES</span>
                <p className="text-xs md:text-sm font-sans font-semibold text-[#171717] leading-relaxed">
                  Delhi Police reported 18 personnel injured during barricade crowd control management along Janpath.
                </p>
              </div>
            </div>

            {/* The Question of Force */}
            <div className="text-center pt-4 border-t border-[#171717]/10 space-y-2">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest block">EDITORIAL REFLECTION</span>
              <p className="font-serif text-lg md:text-2xl text-[#171717] italic">
                "When does maintaining public order become an excessive restriction on dissent?"
              </p>
            </div>

          </div>

          {/* July 25 Political Development Note */}
          <div className="bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-10 rounded-sm max-w-5xl mx-auto shadow-sm text-center space-y-3">
            <span className="text-xs font-mono text-[#16734A] uppercase tracking-widest block font-bold">
              JULY 25 — CHRONOLOGICAL RESOLUTION
            </span>
            <h4 className="font-serif text-xl md:text-2xl font-bold text-[#171717] uppercase tracking-wider">
              MINISTERIAL RESIGNATION & STAND-DOWN
            </h4>
            <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Union Education Minister Dharmendra Pradhan submitted his resignation on July 25, 2026. Following cabinet announcements regarding entrance board audits, physical assemblies were formally stood down. The resignation followed a period of sustained mobilisation.
            </p>
            <div className="text-[9px] font-mono text-[#6B6B6B]/60 uppercase tracking-widest pt-2">
              Source: Government Gazette / Press Trust of India (PTI)
            </div>
          </div>

          {/* TRANSITION OUT OF THE CASE STUDY */}
          <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-14 rounded-sm text-center space-y-6 shadow-md max-w-5xl mx-auto">
            <span className="text-xs font-mono text-[#E8752A] uppercase tracking-[0.3em] block font-bold">
              CASE STUDY REFLECTION
            </span>
            <p className="font-serif text-xl md:text-3xl font-normal leading-relaxed text-[#FAF8F5] max-w-3xl mx-auto">
              "One story cannot explain a democracy.<br/>But it can show us where its questions become real."
            </p>
            <div className="h-[1px] w-16 bg-white/20 mx-auto"></div>
            <div className="pt-2 flex items-center justify-center">
              <span className="text-xs font-mono text-[#16734A] bg-[#FAF8F5] px-4 py-2 rounded-sm uppercase tracking-widest font-bold">
                STEP BACK → 10 — HISTORICAL CONTEXT
              </span>
            </div>
          </div>

        </section>

        {/* Quiet Opening Transition to Section 11 — HISTORICAL CONTEXT */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            HISTORICAL REFLECTION
          </span>
          <div className="max-w-3xl mx-auto space-y-3 text-lg md:text-2xl font-serif text-[#171717]">
            <p className="italic font-semibold text-[#171717]">"ONE STORY IS NEVER THE WHOLE STORY."</p>
            <p className="italic font-light text-[#6B6B6B] text-base md:text-xl">"India's arguments about power, fairness, representation and dissent did not begin today."</p>
            <p className="italic font-semibold text-[#16734A] text-base md:text-xl">"To understand the present, we have to look at the democratic traditions that came before it."</p>
          </div>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
        </section>

        {/* 11 — HISTORICAL CONTEXT */}
        <section id="historical-continuity" className="w-full py-28 px-4 sm:px-6 md:px-12 max-w-[94vw] mx-auto space-y-16">
          
          {/* Section Introduction */}
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <span className="text-[11px] font-mono text-[#16734A] uppercase tracking-[0.35em] block font-bold">
              11 — HISTORICAL CONTEXT
            </span>
            <h2 className="font-serif text-3xl md:text-6xl uppercase tracking-wider text-[#171717]">
              HISTORICAL CONTEXT
            </h2>
            <p className="font-serif text-lg md:text-2xl text-[#E8752A] italic font-semibold">
              "India's democracy was not built in a single moment."
            </p>
            <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto">
              Disagreement, participation, protest, representation, and constitutional democracy developed across different eras of India's history. These historical moments illuminate the democratic questions raised by contemporary dissent.
            </p>
          </div>

          {/* HORIZONTAL FLOWING HISTORICAL TIMELINE STAGE WITH LIQUID GLASS */}
          <div className="bg-[#0a0a0a] text-[#FAF8F5] border border-white/15 rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-700 w-full min-h-[660px] md:min-h-[720px] flex flex-col justify-between p-4 md:p-8 lg:p-10">
            
            {/* Background Image of Selected Historical Moment */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeHistoryObj.era}
                  src={activeHistoryObj.image} 
                  alt={activeHistoryObj.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.50, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
            </div>

            {/* Top Historical Era Tag */}
            <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 text-xs font-mono tracking-widest uppercase border-b border-white/15 pb-3 md:pb-4">
              <span className="bg-[#16734A] text-white px-3.5 py-1 rounded-sm font-bold shadow-md">
                ERA: {activeHistoryObj.era} · {activeHistoryObj.category}
              </span>
              <span className="text-white/50 text-[10px]">HISTORICAL THREAD 0{historyIndex + 1} OF 05</span>
            </div>

            {/* LIQUID-GLASS HISTORICAL STORY PANEL */}
            <div className="relative z-10 my-auto py-4 w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeHistoryObj.era}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    backgroundColor: "rgba(18, 18, 18, 0.25)",
                    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.015) 45%, rgba(255, 255, 255, 0.035))",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: "0 20px 50px -20px rgba(0, 0, 0, 0.45)",
                    borderRadius: "16px"
                  }}
                  className="w-full max-w-[1200px] lg:max-w-[1300px] min-h-[320px] p-5 md:p-8 lg:p-10 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#E8752A] uppercase tracking-[0.25em] font-bold block">
                      {activeHistoryObj.era} · {activeHistoryObj.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-semibold uppercase leading-tight tracking-wide">
                      {activeHistoryObj.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-xl font-sans font-light text-white/95 leading-relaxed pt-1">
                      {activeHistoryObj.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/15">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-[#E8752A] uppercase tracking-wider block font-bold">
                        HISTORICAL QUESTION
                      </span>
                      <p className="text-base md:text-xl font-serif text-white italic">
                        "{activeHistoryObj.question}"
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-[#16734A] uppercase tracking-wider block font-bold">
                        WHY IT MATTERED
                      </span>
                      <p className="text-xs md:text-sm font-sans font-light text-white/85 leading-relaxed">
                        {activeHistoryObj.why}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-xs font-mono text-white/60 uppercase tracking-widest">
                      <span>Source: {activeHistoryObj.source}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* HORIZONTAL HISTORICAL MOMENTS NAVIGATION */}
            <div className="relative z-10 pt-3 md:pt-4 border-t border-white/15 space-y-2.5">
              <div className="flex items-center justify-between overflow-x-auto gap-3 py-1 no-scrollbar">
                {historicalThreads.map((item, idx) => {
                  const isActive = historyIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setHistoryIndex(idx)}
                      className={`flex-1 min-w-[150px] md:min-w-[180px] p-2.5 md:p-3.5 rounded-xl border text-left transition-all duration-300 backdrop-blur-md cursor-pointer outline-none ${
                        isActive 
                          ? "bg-[#FAF8F5] text-[#171717] border-[#16734A] shadow-2xl scale-102 ring-2 ring-[#16734A]/50" 
                          : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:border-white/30"
                      }`}
                      aria-label={`${item.era} — ${item.title}`}
                    >
                      <span className={`text-xs font-mono font-bold block ${isActive ? "text-[#16734A]" : "text-[#E8752A]"}`}>
                        {item.era}
                      </span>
                      <span className="text-xs md:text-sm font-serif font-semibold truncate block pt-0.5">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="relative w-full flex items-center justify-between px-4 pt-1">
                <div className="absolute left-6 right-6 h-[2px] bg-white/20 z-0" />
                <div 
                  className="absolute left-6 h-[2px] bg-[#16734A] z-0 transition-all duration-700 ease-out" 
                  style={{ width: `calc(${(historyIndex / (historicalThreads.length - 1)) * 100}% - 12px)` }}
                />
                {historicalThreads.map((_, idx) => {
                  const isActive = historyIndex === idx;
                  const isPassed = historyIndex >= idx;
                  return (
                    <div 
                      key={idx}
                      className={`relative z-10 w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                        isActive 
                          ? "bg-[#16734A] ring-4 ring-[#16734A]/40 scale-125" 
                          : isPassed 
                          ? "bg-[#16734A]" 
                          : "bg-white/30"
                      }`}
                    />
                  );
                })}
              </div>

            </div>

          </div>

          {/* CLOSING NARRATIVE TRANSITION LEADING TO DEMOCRACY SPEAKS */}
          <div className="bg-[#171717] text-[#FAF8F5] p-8 md:p-14 rounded-sm text-center space-y-6 shadow-md max-w-5xl mx-auto my-12">
            <span className="text-xs font-mono text-[#E8752A] uppercase tracking-[0.3em] block font-bold">
              DEMOCRATIC REFLECTION
            </span>
            <p className="font-serif text-xl md:text-3xl font-normal leading-relaxed text-[#FAF8F5] max-w-3xl mx-auto">
              "Democracy is not only what institutions do.<br/>It is also what citizens ask of them."
            </p>
            <div className="h-[1px] w-16 bg-white/20 mx-auto"></div>
            <div className="pt-2 flex items-center justify-center">
              <span className="text-xs font-mono text-[#16734A] bg-[#FAF8F5] px-4 py-2 rounded-sm uppercase tracking-widest font-bold">
                CONTINUE → 12 — DEMOCRACY SPEAKS
              </span>
            </div>
          </div>

        </section>

        {/* Quiet Opening Transition Section to 11 — DEMOCRACY SPEAKS */}
        <section className="w-full py-20 bg-[#FAF8F5] border-t border-b border-[#171717]/10 px-6 md:px-12 text-center space-y-6">
          <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
            DEMOCRATIC VOICES
          </span>
          <div className="max-w-3xl mx-auto space-y-3 text-lg md:text-2xl font-serif text-[#171717]">
            <p className="italic font-semibold text-[#171717]">"DEMOCRACY SPEAKS."</p>
            <p className="italic font-light text-[#6B6B6B] text-base md:text-xl">"Not only through ballots."</p>
            <p className="italic font-semibold text-[#16734A] text-base md:text-xl">"Through questions. Through disagreement. Through protest. Through participation."</p>
          </div>
          <div className="h-[1px] w-16 bg-[#16734A] mx-auto pt-2"></div>
        </section>

        {/* 11 — DEMOCRACY SPEAKS */}
        <section id="democracy-speaks" className="w-full py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
          
          {/* Section Framing Header */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <span className="text-[11px] font-mono text-[#16734A] uppercase tracking-[0.35em] block font-bold">
              11 — DEMOCRACY SPEAKS
            </span>
            <h2 className="font-serif text-3xl md:text-6xl uppercase tracking-wider text-[#171717]">
              DEMOCRACY SPEAKS
            </h2>
            <p className="font-serif text-lg md:text-2xl text-[#E8752A] italic font-semibold">
              "Democracy is not silent. It speaks whenever ordinary citizens enter public life."
            </p>
            <p className="text-sm md:text-base font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto">
              Democracy is an ongoing relationship between citizens and power. It expresses itself through votes, uncomfortable questions, peaceful assembly, and everyday civic responsibility.
            </p>
          </div>

          {/* FOUR CONNECTED EDITORIAL CHAPTERS */}
          <div className="space-y-24">

            {/* CHAPTER 01 — THE VOTE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[#171717]/10 p-8 md:p-14 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono text-[#16734A] uppercase tracking-[0.25em] font-bold block">
                  CHAPTER 01 · THE VOTE
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#171717] font-semibold uppercase leading-tight">
                  THE VOTE
                </h3>
                <p className="text-base md:text-xl font-serif italic text-[#171717] leading-relaxed">
                  "Every election turns millions of individual choices into a collective decision."
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Voting is the fundamental mechanism through which authority is granted and revoked. Across general and local elections, citizens exercise sovereignty to demand accountability from those who seek to govern.
                </p>
                <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#16734A] space-y-1">
                  <span className="text-[10px] font-mono text-[#16734A] uppercase font-bold block">FRAMING QUESTION</span>
                  <p className="text-sm md:text-base font-serif text-[#171717] italic">
                    "What does a vote ask of the people who receive it?"
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-6 space-y-2">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/10 shadow-sm group">
                  <img 
                    src="/images/people/voters-queue.jpg" 
                    alt="Citizens standing patiently in line outside a polling station during an election in India" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717] text-[#FAF8F5] px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase">
                    DOCUMENTARY RECORD: GENERAL ELECTION POLLING STATION
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block text-right">
                  Source: Election Commission of India Records
                </span>
              </div>
            </motion.div>

            {/* CHAPTER 02 — THE QUESTION */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[#171717]/10 p-8 md:p-14 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-2 lg:order-1 order-2">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/10 shadow-sm group">
                  <img 
                    src="/images/stories/story6-lab.jpg" 
                    alt="Journalists and researchers analyzing public records and asking questions at a press briefing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717] text-[#FAF8F5] px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase">
                    DOCUMENTARY RECORD: JOURNALISM & PUBLIC SCRUTINY
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                  Source: Press Trust of India / Independent Audit Archives
                </span>
              </div>

              <div className="lg:col-span-6 space-y-6 lg:order-2 order-1">
                <span className="text-xs font-mono text-[#E8752A] uppercase tracking-[0.25em] font-bold block">
                  CHAPTER 02 · THE QUESTION
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#171717] font-semibold uppercase leading-tight">
                  THE QUESTION
                </h3>
                <p className="text-base md:text-xl font-serif italic text-[#171717] leading-relaxed">
                  "Democracy depends on the ability to ask whether power is doing what it promised."
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Without scrutiny, elections risk becoming empty rituals. Independent journalism, Right to Information (RTI) petitions, legislative inquiries, and public auditing ensure that official actions are continuously examined.
                </p>
                <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#E8752A] space-y-1">
                  <span className="text-[10px] font-mono text-[#E8752A] uppercase font-bold block">FRAMING QUESTION</span>
                  <p className="text-sm md:text-base font-serif text-[#171717] italic">
                    "Can a democracy remain healthy without uncomfortable questions?"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CHAPTER 03 — THE PROTEST */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[#171717]/10 p-8 md:p-14 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono text-[#171717] uppercase tracking-[0.25em] font-bold block">
                  CHAPTER 03 · THE PROTEST
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#171717] font-semibold uppercase leading-tight">
                  THE PROTEST
                </h3>
                <p className="text-base md:text-xl font-serif italic text-[#171717] leading-relaxed">
                  "When people believe institutions have stopped hearing them, they often take their disagreement into public space."
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Student unions, agricultural alliances, labor federations, and civil rights groups have historically gathered in public squares to voice grievances. Peaceful assembly remains a constitutionally protected instrument when channels feel unresponsive.
                </p>
                <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#171717] space-y-1">
                  <span className="text-[10px] font-mono text-[#171717] uppercase font-bold block">FRAMING QUESTION</span>
                  <p className="text-sm md:text-base font-serif text-[#171717] italic">
                    "What does a democracy do with people who refuse to remain silent?"
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-6 space-y-2">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/10 shadow-sm group">
                  <img 
                    src="/images/stories/stories-intro-1.jpg" 
                    alt="Citizens and students gathering peacefully at a public square with banners and petitions" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717] text-[#FAF8F5] px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase">
                    DOCUMENTARY RECORD: PUBLIC ASSEMBLY & CIVIC PROTEST
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block text-right">
                  Source: Reuters / National Representative Register
                </span>
              </div>
            </motion.div>

            {/* CHAPTER 04 — THE EVERYDAY REPUBLIC */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[#171717]/10 p-8 md:p-14 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-2 lg:order-1 order-2">
                <div className="aspect-[16/10] overflow-hidden rounded-sm relative border border-[#171717]/10 shadow-sm group">
                  <img 
                    src="/images/stories/story1-station.jpg" 
                    alt="Ordinary citizens interacting, walking, and sharing public municipal spaces in a city" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717] text-[#FAF8F5] px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase">
                    DOCUMENTARY RECORD: SHARED MUNICIPAL & CIVIC SPACES
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                  Source: Urban Civic Log / Municipal Archives
                </span>
              </div>

              <div className="lg:col-span-6 space-y-6 lg:order-2 order-1">
                <span className="text-xs font-mono text-[#16734A] uppercase tracking-[0.25em] font-bold block">
                  CHAPTER 04 · THE EVERYDAY REPUBLIC
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-[#171717] font-semibold uppercase leading-tight">
                  THE EVERYDAY REPUBLIC
                </h3>
                <p className="text-base md:text-xl font-serif italic text-[#171717] leading-relaxed">
                  "A republic is not experienced only in Parliament. It is experienced wherever people share public life."
                </p>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  Beyond major political moments, democracy lives in local panchayats, resident welfare associations, university halls, municipal town halls, and everyday community cooperation where citizens solve local problems together.
                </p>
                <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#16734A] space-y-1">
                  <span className="text-[10px] font-mono text-[#16734A] uppercase font-bold block">FRAMING QUESTION</span>
                  <p className="text-sm md:text-base font-serif text-[#171717] italic">
                    "How is democratic responsibility practiced in daily life?"
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CLOSING STATEMENT & TRANSITION TO LIVING TOGETHER */}
          <div className="bg-[#171717] text-[#FAF8F5] p-10 md:p-16 rounded-sm text-center space-y-6 shadow-md max-w-5xl mx-auto my-16">
            <span className="text-xs font-mono text-[#E8752A] uppercase tracking-[0.3em] block font-bold">
              DEMOCRATIC CONVERSATION
            </span>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl md:text-4xl font-normal uppercase text-[#FAF8F5]">
                "DEMOCRACY IS A CONVERSATION."
              </h3>
              <p className="font-serif text-lg md:text-2xl text-[#FAF8F5]/90 italic max-w-3xl mx-auto">
                "It survives not because everyone agrees. It survives because disagreement can still have a place."
              </p>
            </div>
            
            <div className="h-[1px] w-16 bg-white/20 mx-auto"></div>

            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono text-[#16734A] uppercase tracking-widest block font-bold">
                LIVING TOGETHER
              </span>
              <p className="text-xs md:text-sm font-sans font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
                "Because democracy ultimately asks a larger question: How do people who disagree learn to share the same country?"
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-[#16734A] bg-[#FAF8F5] px-4 py-2 rounded-sm uppercase tracking-widest font-bold">
                  CONTINUE → 12 — LIVING TOGETHER
                </span>
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
                  12 — LIVING TOGETHER
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
                13 — THE INDIA WE ARE BUILDING
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
                14 — THE UNFINISHED REPUBLIC
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
            15 — THE FUTURE IS NOT WRITTEN YET
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
