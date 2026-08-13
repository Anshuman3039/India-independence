import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';

// 1. Ideas Data
const ideasData = [
  {
    id: "freedom",
    title: "Freedom",
    description: "The foundational right of self-determination, expression, and liberation from external and internal subjugation.",
    related: ["democracy", "equality"],
    voices: ["tagore", "naidu", "gandhi", "nehru"]
  },
  {
    id: "democracy",
    title: "Democracy",
    description: "A system where power rests with the people, exercised through dialogue, representation, and public reasoning.",
    related: ["freedom", "equality", "republic"],
    voices: ["ambedkar", "nehru", "phule_jyotirao"]
  },
  {
    id: "republic",
    title: "Republic",
    description: "A constitutional state governed by law, where public offices are open to all citizens rather than ruled by dynasty.",
    related: ["democracy", "secularism", "equality", "modernity"],
    voices: ["ambedkar", "nehru"]
  },
  {
    id: "secularism",
    title: "Secularism",
    description: "The principle of state neutrality toward all religions, guaranteeing freedom of faith while keeping institutions distinct from religious control.",
    related: ["pluralism", "republic", "social_justice"],
    voices: ["nehru", "gandhi"]
  },
  {
    id: "equality",
    title: "Equality",
    description: "The recognition of the equal moral worth of every individual, demanding the removal of social, economic, and legal hierarchies.",
    related: ["democracy", "social_justice", "freedom"],
    voices: ["ambedkar", "phule_savitribai", "phule_jyotirao", "periyar"]
  },
  {
    id: "social_justice",
    title: "Social Justice",
    description: "The active dismantling of structural inequalities, social discrimination, and caste barriers to ensure dignity for all.",
    related: ["equality", "democracy", "secularism"],
    voices: ["ambedkar", "phule_savitribai", "phule_jyotirao", "periyar"]
  },
  {
    id: "pluralism",
    title: "Pluralism",
    description: "The belief that India's strength lies in its diverse cultures, languages, and beliefs living together in mutual respect.",
    related: ["secularism", "culture"],
    voices: ["tagore", "gandhi", "kalam"]
  },
  {
    id: "scientific_temper",
    title: "Scientific Temper",
    description: "An attitude of inquiry, observation, reason, and testing assumptions against evidence rather than blind tradition.",
    related: ["modernity"],
    voices: ["bhabha", "nehru", "kalam"]
  },
  {
    id: "culture",
    title: "Culture",
    description: "The creative expression, languages, literature, and living traditions that form the diverse heritage of the subcontinent.",
    related: ["pluralism"],
    voices: ["tagore", "naidu"]
  },
  {
    id: "modernity",
    title: "Modernity",
    description: "The integration of reason, institutional progress, and industrial/scientific advancement to build a forward-looking society.",
    related: ["scientific_temper", "republic"],
    voices: ["bhabha", "nehru"]
  }
];

// 2. Voices Data
const voicesData = [
  {
    id: "ambedkar",
    name: "B. R. Ambedkar",
    title: "Constitutionalist & Reformer",
    description: "The chief architect of India's Constitution. He argued that political democracy is meaningless without social and economic equality, dedicating his life to fighting caste discrimination and securing rights for the marginalized.",
    ideas: ["equality", "social_justice", "democracy", "republic"],
    image: null,
    archivalRef: "Doc: Draft Constitution (1949)"
  },
  {
    id: "tagore",
    name: "Rabindranath Tagore",
    title: "Poet, Thinker & Nobel Laureate",
    description: "He imagined an India free from narrow nationalism, seeking freedom through universal humanism, creative education, and a pluralistic synthesis of cultures.",
    ideas: ["pluralism", "culture", "freedom"],
    image: null,
    archivalRef: "Essay: Nationalism (1917)"
  },
  {
    id: "gandhi",
    name: "Mahatma Gandhi",
    title: "Leader of Anti-colonial Resistance",
    description: "Champion of non-violence (Satyagraha) and religious harmony. He envisioned an India of self-reliant villages, where pluralism and ethical self-governance were central.",
    ideas: ["freedom", "pluralism", "secularism"],
    image: null,
    archivalRef: "Text: Hind Swaraj (1909)"
  },
  {
    id: "nehru",
    name: "Jawaharlal Nehru",
    title: "First Prime Minister & Writer",
    description: "A builder of modern institutions who championed a secular republic, scientific temper, and planned development to raise India onto the global stage.",
    ideas: ["democracy", "scientific_temper", "secularism", "modernity", "freedom"],
    image: null,
    archivalRef: "Book: Discovery of India (1946)"
  },
  {
    id: "naidu",
    name: "Sarojini Naidu",
    title: "Poet & Freedom Fighter",
    description: "Known as the Nightingale of India, she advocated for women's suffrage, education, and active participation in public life, bridging cultural expression and political struggle.",
    ideas: ["freedom", "culture"],
    image: null,
    archivalRef: "Poetry: Golden Threshold (1905)"
  },
  {
    id: "phule_jyotirao",
    name: "Jyotirao Phule",
    title: "Social Reformer & Thinker",
    description: "A pioneer of anti-caste struggle and women's education in Maharashtra. He challenged traditional hierarchies and founded the Satyashodhak Samaj.",
    ideas: ["equality", "social_justice", "democracy"],
    image: null,
    archivalRef: "Treatise: Gulamgiri (1873)"
  },
  {
    id: "phule_savitribai",
    name: "Savitribai Phule",
    title: "Educator & Feminist Pioneer",
    description: "India's first female teacher. Alongside her husband, she established the first school for girls, advocating fiercely for universal education, gender equality, and social reform.",
    ideas: ["equality", "social_justice"],
    image: null,
    archivalRef: "Poetry: Kavya Phule (1854)"
  },
  {
    id: "periyar",
    name: "Periyar E. V. Ramasamy",
    title: "Rationalist & Social Activist",
    description: "Leader of the Self-Respect Movement. He campaigned against caste privilege and patriarchy in southern India, advocating for reason, self-respect, and equality.",
    ideas: ["equality", "social_justice"],
    image: null,
    archivalRef: "Journal: Kudi Arasu (1925)"
  },
  {
    id: "bhabha",
    name: "Homi J. Bhabha",
    title: "Nuclear Physicist & Visionary",
    description: "The founding director of India's nuclear program. He envisioned high-level scientific research as the key driver for India's technological self-reliance and modernity.",
    ideas: ["scientific_temper", "modernity"],
    image: null,
    archivalRef: "Paper: Cosmic Ray Research (1944)"
  },
  {
    id: "kalam",
    name: "A. P. J. Abdul Kalam",
    title: "Scientist & Former President",
    description: "The 'People's President' and aerospace scientist. He inspired generations with a vision of a developed, scientific, and inclusive India rooted in pluralistic values.",
    ideas: ["scientific_temper", "pluralism"],
    image: null,
    archivalRef: "Book: India 2020 (1998)"
  }
];

// 3. Debates Data
const debatesData = [
  {
    id: "d1",
    question: "What should freedom mean?",
    context: "While anti-colonial struggle focused on liberation from British rule (Swaraj), thinkers debated its internal meaning.",
    perspectives: [
      {
        by: "Mahatma Gandhi",
        text: "Swaraj is not just a political transfer of power. It is individual self-rule, moral self-discipline, and decentralised village autonomy."
      },
      {
        by: "Jawaharlal Nehru",
        text: "True freedom requires economic liberation, scientific planning, state-led industrialisation, and raising the material standards of life."
      }
    ]
  },
  {
    id: "d2",
    question: "Can democracy exist without equality?",
    context: "As India moved toward constitutional democracy, reformers warned that political democracy could not survive on social inequality.",
    perspectives: [
      {
        by: "B. R. Ambedkar",
        text: "On 26th January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality. We must remove this contradiction."
      },
      {
        by: "Social Reform Movements",
        text: "Democracy must extend into the family, schools, and workplaces. Without dismantling the caste system and patriarchies, voting remains a superficial democracy."
      }
    ]
  },
  {
    id: "d3",
    question: "How should religion and the state relate?",
    context: "Faced with partition and immense diversity, founders rejected a state religion but disagreed on the form of secularism.",
    perspectives: [
      {
        by: "Equal Respect (Sarva Dharma Sambhava)",
        text: "The state should respect all religions equally, supporting their cultural rights and participating in inter-faith harmony without siding with any."
      },
      {
        by: "Principled Distance (Dharma Nirapekshata)",
        text: "The state should maintain a strict principled distance from religious affairs, intervening only to reform social evils (like untouchability) and protect individual rights."
      }
    ]
  },
  {
    id: "d4",
    question: "Can tradition and modernity coexist?",
    context: "The transition to a modern nation-state forced thinkers to evaluate ancient heritage against modern values.",
    perspectives: [
      {
        by: "Rabindranath Tagore",
        text: "Tradition is a living stream. We must synthesize the best of India's intellectual heritage with the liberating reason of Western modernity, avoiding narrow nationalism."
      },
      {
        by: "Rationalist Movements",
        text: "Blind adherence to tradition leads to stagnation and social oppression. Rationalism, critique, and scientific temper must take precedence to reform society."
      }
    ]
  },
  {
    id: "d5",
    question: "What should development mean?",
    context: "Post-independence planning faced choices on how to build the country's economy.",
    perspectives: [
      {
        by: "Village-Centric Development",
        text: "Development should focus on the grassroots, supporting agricultural self-reliance, local craft, and ecological balance."
      },
      {
        by: "Heavy Industrialisation",
        text: "Modernity requires scientific infrastructure, dams ('temples of modern India'), power grids, and high-technology industries managed by a central republic."
      }
    ]
  },
  {
    id: "d6",
    question: "How should a diverse society live together?",
    context: "Debates around national language, state boundaries, and minorities shaped the federal republic.",
    perspectives: [
      {
        by: "Unitary Integration",
        text: "A strong, unified center is needed to prevent fragmentation and foster a common national identity."
      },
      {
        by: "Linguistic Federalism",
        text: "True integration comes from honoring regional languages and identities through states organized on linguistic lines, making diversity the foundation of unity."
      }
    ]
  }
];

// 4. Constitution Core Values
const constitutionValues = [
  { id: "justice", title: "JUSTICE", desc: "Social, economic, and political. Securing a society free from caste, class, and gender hierarchies." },
  { id: "liberty", title: "LIBERTY", desc: "Of thought, expression, belief, faith, and worship. Securing the freedom to think, speak, and practice one's beliefs." },
  { id: "equality", title: "EQUALITY", desc: "Of status and of opportunity. Demanding that every citizen is treated with equal moral worth under the law." },
  { id: "fraternity", title: "FRATERNITY", desc: "Assuring the dignity of the individual and the unity and integrity of the nation. Fostering a spirit of common brotherhood." },
  { id: "democracy", title: "DEMOCRACY", desc: "A government of, by, and for the people. Conducted through dialogue, public reasoning, and representation." },
  { id: "secularism", title: "SECULARISM", desc: "Equal protection and respect for all faiths, guaranteeing state neutrality and freedom of worship." },
  { id: "republic", title: "REPUBLIC", desc: "A state headed by elected representatives of the people, where public offices are open to all citizens." }
];

// 5. Historical Eras of Continuing Conversations
const continuingDecades = [
  {
    era: "1950s–1960s",
    title: "Building the Foundations",
    description: "The early decades focused on consolidating states on linguistic lines, setting up scientific institutions (like IITs and Atomic Research facilities), and defining the rights of citizens within a fragile, newly born republic."
  },
  {
    era: "1970s–1980s",
    title: "Widening Representation",
    description: "Grassroots environment struggles (such as the Chipko movement) arose to define development. Agrarian reforms and civil liberties campaigns redefined state boundaries, and regional voices pushed for decentralized power."
  },
  {
    era: "1990s–2000s",
    title: "Rights-Based Citizenship",
    description: "The opening of the economy created new opportunities but highlighted wealth disparities. Landmark policies established legislative rights to education, information, and rural employment, shifting the state-citizen relationship."
  },
  {
    era: "2010s–Present",
    title: "The Digital & Identity Age",
    description: "A hyper-connected society reinterprets the meaning of freedom of expression, citizenship, representation, and opportunity. Later generations continue to debate how ancestral culture and progressive modernity co-exist."
  }
];

function ChapterConnector() {
  return (
    <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-12 py-4 opacity-30 select-none pointer-events-none">
      <div className="h-[1px] flex-grow bg-[#171717]/10"></div>
      <div className="mx-4 w-1.5 h-1.5 rounded-full border border-[#171717]/30 bg-transparent"></div>
      <div className="h-[1px] flex-grow bg-[#171717]/10"></div>
    </div>
  );
}

export default function Ideas() {
  const [selectedIdeaId, setSelectedIdeaId] = useState("freedom");
  const [activeVoiceFilter, setActiveVoiceFilter] = useState("all");
  const [activeDebateId, setActiveDebateId] = useState("d1");
  const [activeConstValId, setActiveConstValId] = useState("justice");
  
  const [hoveredIdeaId, setHoveredIdeaId] = useState(null);
  const [focusedIdeaId, setFocusedIdeaId] = useState(null);
  const [focusedConstValId, setFocusedConstValId] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const selectedIdeaObj = ideasData.find(i => i.id === selectedIdeaId) || ideasData[0];

  // Graph layout coordinates (Normalized to 500x320 viewport)
  const nodeCoords = {
    freedom: { x: 120, y: 70 },
    democracy: { x: 250, y: 70 },
    republic: { x: 380, y: 70 },
    secularism: { x: 410, y: 200 },
    pluralism: { x: 280, y: 240 },
    culture: { x: 120, y: 240 },
    equality: { x: 100, y: 155 },
    social_justice: { x: 200, y: 155 },
    scientific_temper: { x: 420, y: 130 },
    modernity: { x: 300, y: 140 }
  };

  const getRelations = (id) => {
    return ideasData.find(item => item.id === id)?.related || [];
  };

  const activeId = hoveredIdeaId || selectedIdeaId;
  const activeRelations = getRelations(activeId);

  // Filter voices based on selected idea tag
  const filteredVoices = activeVoiceFilter === "all" 
    ? voicesData 
    : voicesData.filter(v => v.ideas.includes(activeVoiceFilter));

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
        
        {/* 1. Opening Section with History -> Ideas Transition */}
        <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
          
          {/* HISTORY → IDEAS TRANSITION HEADER */}
          <div className="border-b border-[#171717]/10 pb-8 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              HISTORY → IDEAS
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold tracking-wide uppercase">
              "THE PAST BECOMES AN IDEA."
            </h2>
            <p className="text-sm md:text-base font-serif italic text-[#E8752A] font-normal max-w-xl">
              "What we inherit, we question, reshape and carry forward."
            </p>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              IDEAS
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
              THE IDEA OF INDIA
            </h1>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light max-w-2xl">
              "India is more than a territory. It is an idea constantly being shaped through freedom, democracy, equality, pluralism, reason, culture and the lives of its people."
            </p>
            <div className="pt-8 border-t border-[#171717]/10 max-w-xl">
              <span className="text-xs font-sans font-bold text-[#16734A] uppercase tracking-wider block mb-1">
                CENTRAL QUESTION
              </span>
              <p className="font-serif text-2xl md:text-3xl text-[#171717] font-normal italic">
                "What does it mean to be Indian?"
              </p>
            </div>
          </div>
        </section>

        <ChapterConnector />

        {/* 2. The Fabric of India */}
        <section className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-12"
          >
            
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                CONCEPTUAL AXIS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal">
                THE FABRIC OF INDIA
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                These ideas do not exist alone. They overlap, influence one another, and are continually reinterpreted. Click on any thread to trace its connections.
              </p>
            </div>

            {/* Interactive Fabric Graph */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left: Responsive SVG Node Graph */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-sm">
                
                {/* SVG Graph layer */}
                <div className="w-full flex-grow flex items-center justify-center">
                  <svg 
                    viewBox="0 0 500 320" 
                    className="w-full max-w-[500px] h-auto select-none"
                  >
                    {/* Background connection lines */}
                    <g stroke="#171717" strokeWidth="1.2" opacity={hoveredIdeaId ? 0.04 : 0.12} strokeDasharray="3,3" style={prefersReducedMotion ? { transition: 'none' } : { transition: 'opacity 0.6s ease-in-out' }}>
                      {/* Freedom - Democracy */}
                      <line x1={nodeCoords.freedom.x} y1={nodeCoords.freedom.y} x2={nodeCoords.democracy.x} y2={nodeCoords.democracy.y} />
                      {/* Democracy - Equality */}
                      <line x1={nodeCoords.democracy.x} y1={nodeCoords.democracy.y} x2={nodeCoords.equality.x} y2={nodeCoords.equality.y} />
                      {/* Equality - Social Justice */}
                      <line x1={nodeCoords.equality.x} y1={nodeCoords.equality.y} x2={nodeCoords.social_justice.x} y2={nodeCoords.social_justice.y} />
                      {/* Pluralism - Secularism */}
                      <line x1={nodeCoords.pluralism.x} y1={nodeCoords.pluralism.y} x2={nodeCoords.secularism.x} y2={nodeCoords.secularism.y} />
                      {/* Scientific Temper - Modernity */}
                      <line x1={nodeCoords.scientific_temper.x} y1={nodeCoords.scientific_temper.y} x2={nodeCoords.modernity.x} y2={nodeCoords.modernity.y} />
                      {/* Culture - Pluralism */}
                      <line x1={nodeCoords.culture.x} y1={nodeCoords.culture.y} x2={nodeCoords.pluralism.x} y2={nodeCoords.pluralism.y} />
                      {/* Democracy - Republic */}
                      <line x1={nodeCoords.democracy.x} y1={nodeCoords.democracy.y} x2={nodeCoords.republic.x} y2={nodeCoords.republic.y} />
                      {/* Republic - Secularism */}
                      <line x1={nodeCoords.republic.x} y1={nodeCoords.republic.y} x2={nodeCoords.secularism.x} y2={nodeCoords.secularism.y} />
                      {/* Secularism - Social Justice */}
                      <line x1={nodeCoords.secularism.x} y1={nodeCoords.secularism.y} x2={nodeCoords.social_justice.x} y2={nodeCoords.social_justice.y} />
                      {/* Modernity - Republic */}
                      <line x1={nodeCoords.modernity.x} y1={nodeCoords.modernity.y} x2={nodeCoords.republic.x} y2={nodeCoords.republic.y} />
                    </g>

                    {/* Highlighted connection lines for active node */}
                    <g stroke="#E8752A" strokeWidth="2" opacity="0.85">
                      {activeRelations.map((relatedId, index) => {
                        const target = nodeCoords[relatedId];
                        const origin = nodeCoords[activeId];
                        if (!target || !origin) return null;
                        return (
                          <line 
                            key={index} 
                            x1={origin.x} 
                            y1={origin.y} 
                            x2={target.x} 
                            y2={target.y} 
                            strokeDasharray="4,4"
                            style={prefersReducedMotion ? { transition: 'none' } : { transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }}
                          />
                        );
                      })}
                    </g>

                    {/* Node Circles */}
                    {ideasData.map((node) => {
                      const coord = nodeCoords[node.id];
                      const isSelected = selectedIdeaId === node.id;
                      const isActiveNode = activeId === node.id;
                      const isRelated = activeRelations.includes(node.id);
                      const isMuted = activeId && !isActiveNode && !isRelated;
                      
                      let fillVal = "#FAF8F5";
                      let strokeVal = "#171717";
                      let strokeW = "1.5";
                      let textColorClass = "fill-[#171717]/85 font-normal";
                      
                      if (isSelected) {
                        fillVal = "#E8752A";
                        strokeVal = "#E8752A";
                        textColorClass = "fill-[#E8752A] font-bold";
                      } else if (isActiveNode) {
                        fillVal = "#16734A";
                        strokeVal = "#16734A";
                        textColorClass = "fill-[#16734A] font-bold";
                      } else if (isRelated) {
                        fillVal = "#FAF8F5";
                        strokeVal = "#16734A";
                        strokeW = "2";
                        textColorClass = "fill-[#171717] font-semibold";
                      }

                      const transitionStyle = prefersReducedMotion 
                        ? { transition: 'none' } 
                        : { transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' };

                      return (
                        <g 
                          key={node.id} 
                          transform={`translate(${coord.x}, ${coord.y})`}
                          className="cursor-pointer group focus:outline-none"
                          tabIndex={0}
                          role="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedIdeaId(node.id)}
                          onMouseEnter={() => setHoveredIdeaId(node.id)}
                          onMouseLeave={() => setHoveredIdeaId(null)}
                          onFocus={() => {
                            setHoveredIdeaId(node.id);
                            setFocusedIdeaId(node.id);
                          }}
                          onBlur={() => {
                            setHoveredIdeaId(null);
                            setFocusedIdeaId(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedIdeaId(node.id);
                            }
                          }}
                          style={{
                            ...transitionStyle,
                            opacity: isMuted ? 0.35 : 1
                          }}
                        >
                          <circle 
                            r="12" 
                            fill={fillVal} 
                            stroke={strokeVal} 
                            strokeWidth={strokeW}
                            className="transition-all duration-300" 
                            style={{
                              ...transitionStyle,
                              transform: !prefersReducedMotion && (isActiveNode || isSelected) ? 'scale(1.18)' : 'scale(1)'
                            }}
                          />
                          {focusedIdeaId === node.id && (
                            <circle 
                              r="18" 
                              fill="none" 
                              stroke="#E8752A" 
                              strokeWidth="1.5" 
                              strokeDasharray="3,3" 
                              className={prefersReducedMotion ? "" : "animate-pulse"}
                            />
                          )}
                          <circle r="22" fill="transparent" />
                          <text 
                            y="24"
                            textAnchor="middle"
                            className={`font-sans text-[8px] tracking-wider uppercase pointer-events-none transition-colors duration-300 ${textColorClass}`}
                          >
                            {node.title}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Mobile hint */}
                <div className="block lg:hidden text-center text-[10px] font-sans text-[#6B6B6B] tracking-wider uppercase mt-4">
                  Tap any node to view relations and details.
                </div>
              </div>

              {/* Right: Explanation & Voices Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#171717]/10 p-6 md:p-8 shadow-sm text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      THREAD DESCRIPTION
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal uppercase tracking-wider">
                      {selectedIdeaObj.title}
                    </h3>
                    <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {selectedIdeaObj.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#171717]/5">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                      INTERCONNECTED THREADS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedIdeaObj.related.map((relId) => {
                        const relObj = ideasData.find(i => i.id === relId);
                        return (
                          <button
                            key={relId}
                            onClick={() => setSelectedIdeaId(relId)}
                            className="text-[10px] font-sans border border-[#E8752A]/20 hover:border-[#E8752A]/50 bg-[#E8752A]/5 text-[#E8752A] px-2 py-0.5 rounded-sm transition-colors cursor-pointer"
                          >
                            {relObj?.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#171717]/5">
                    <span className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider block">
                      CONTRIBUTING VOICES
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedIdeaObj.voices.map((voiceId) => {
                        const voiceObj = voicesData.find(v => v.id === voiceId);
                        if (!voiceObj) return null;
                        return (
                          <span 
                            key={voiceId}
                            className="text-[10px] font-sans border border-[#171717]/10 bg-[#FAF8F5] text-[#171717] px-2 py-0.5 rounded-sm"
                          >
                            {voiceObj.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-6 text-[10px] font-sans font-bold text-[#6B6B6B]/40 uppercase tracking-widest text-right">
                  IDEAS ATLAS RECORD
                </div>
              </div>

            </div>

          </motion.div>
        </section>

        <ChapterConnector />

        {/* 3. Voices in the Conversation */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            
            {/* Header */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                CONTRIBUTORS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                VOICES IN THE CONVERSATION
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                The Idea of India has been shaped by writers, reformers, poets, scientists, and leaders. They did not always agree, but together they formed an ongoing intellectual fabric.
              </p>
            </div>

            {/* Filter Tags */}
            <div className="space-y-3 border-b border-[#171717]/5 pb-6">
              <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block">
                FILTER BY CONTRIBUTED IDEA
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveVoiceFilter("all")}
                  className={`text-xs font-sans px-3 py-1 rounded-[2px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] focus-visible:border-[#E8752A] ${
                    activeVoiceFilter === "all"
                      ? "bg-[#171717] border-[#171717] text-[#F7F4EE]"
                      : "bg-[#F7F4EE] border-[#171717]/15 text-[#6B6B6B] hover:border-[#171717]/40"
                  }`}
                >
                  All Contributors
                </button>
                {ideasData.map((idea) => (
                  <button
                    key={idea.id}
                    onClick={() => setActiveVoiceFilter(idea.id)}
                    className={`text-xs font-sans px-3 py-1 rounded-[2px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] focus-visible:border-[#E8752A] ${
                      activeVoiceFilter === idea.id
                        ? "bg-[#171717] border-[#171717] text-[#F7F4EE]"
                        : "bg-[#F7F4EE] border-[#171717]/15 text-[#6B6B6B] hover:border-[#171717]/40"
                    }`}
                  >
                    {idea.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Voices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredVoices.map((voice) => (
                  <motion.div
                    layout
                    key={voice.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    tabIndex={0}
                    className="bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#E8752A]/30 focus-visible:border-[#E8752A]/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="space-y-4 z-10">
                      {/* Top Bar with Initials & Archival Reference */}
                      <div className="flex justify-between items-start w-full">
                        {/* Typographic Serif Initials Placeholder */}
                        <div className="w-12 h-12 rounded-[2px] bg-[#FAF8F5] border border-[#171717]/10 flex items-center justify-center">
                          <span className="font-serif text-lg text-[#16734A] font-semibold tracking-wider">
                            {voice.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Genuine Archival/Work Reference */}
                        {voice.archivalRef && (
                          <span 
                            className="text-[8px] font-mono text-[#16734A]/80 bg-[#16734A]/5 border border-[#16734A]/10 px-1.5 py-0.5 rounded-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 ease-in-out select-none pointer-events-none"
                            style={prefersReducedMotion ? { transition: 'none' } : { transition: 'opacity 0.5s ease-in-out' }}
                          >
                            {voice.archivalRef}
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="font-serif text-xl text-[#171717] font-normal leading-tight">
                          {voice.name}
                        </h3>
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                          {voice.title}
                        </span>
                      </div>
                      
                      <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                        {voice.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#171717]/5 z-10">
                      <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                        KEY IDEAS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {voice.ideas.map((ideaId) => {
                          const ideaObj = ideasData.find(i => i.id === ideaId);
                          return (
                            <span 
                              key={ideaId}
                              className="text-[9px] font-sans font-light text-[#171717] bg-[#F7F4EE] px-2 py-0.5 rounded-sm border border-[#171717]/5"
                            >
                              {ideaObj?.title}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Watermark-like paper/document initials background detail */}
                    <span 
                      className="absolute bottom-2 right-4 font-serif text-5xl font-bold select-none pointer-events-none text-[#171717]/[0.015] group-hover:text-[#171717]/[0.05] group-focus-within:text-[#171717]/[0.05] transition-all duration-700 ease-out translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0"
                      style={prefersReducedMotion ? { transition: 'none' } : { transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }}
                    >
                      {voice.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </motion.div>
        </section>

        <ChapterConnector />

        {/* 4. Ideas in Debate */}
        <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-b border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            
            {/* Header */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                DELIBERATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                IDEAS IN DEBATE
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                India's intellectual history was never unanimous. Thinkers, movements, and traditions offered different answers to foundational questions, establishing debate as a core democratic habit.
              </p>
            </div>

            {/* Split layout: Selector List on Left, Active Debate on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Selector Column */}
              <div className="lg:col-span-5 flex flex-col space-y-3 w-full">
                <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1">
                  HISTORICAL DEBATE TOPICS
                </span>
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
                  {debatesData.map((d, index) => {
                    const isSelected = d.id === activeDebateId;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setActiveDebateId(d.id)}
                        className={`p-4 border text-left transition-all duration-300 outline-none w-64 lg:w-full flex-shrink-0 cursor-pointer ${
                          isSelected 
                            ? "bg-[#171717] border-[#171717] text-white" 
                            : "bg-[#F7F4EE]/30 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                        } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                      >
                        <span className={`text-[9px] font-sans font-bold uppercase tracking-wider block mb-1 ${
                          isSelected ? "text-[#E8752A]" : "text-[#E8752A]/80"
                        }`}>
                          QUESTION 0{index + 1}
                        </span>
                        <p className={`font-serif text-sm font-normal truncate ${
                          isSelected ? "text-white" : "text-[#171717]"
                        }`}>
                          {d.question}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Detail Card Column */}
              <div className="lg:col-span-7 bg-white border border-[#171717]/10 p-6 md:p-8 shadow-sm">
                <AnimatePresence mode="wait">
                  {(() => {
                    const activeDebate = debatesData.find(d => d.id === activeDebateId) || debatesData[0];
                    return (
                      <motion.div
                        key={activeDebate.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Title and Context */}
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl text-[#171717] font-normal leading-tight">
                            {activeDebate.question}
                          </h3>
                          <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                            {activeDebate.context}
                          </p>
                        </div>

                        {/* Perspectives */}
                        <div className="space-y-4 pt-4 border-t border-[#171717]/5">
                          <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                            HISTORICAL PERSPECTIVES
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeDebate.perspectives.map((p, idx) => (
                              <div 
                                key={idx} 
                                className="bg-[#FAF8F5] border border-[#171717]/5 p-4 rounded-sm space-y-2 flex flex-col justify-between"
                              >
                                <p className="text-xs md:text-sm font-serif italic text-[#171717] leading-relaxed">
                                  "{p.text}"
                                </p>
                                <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wider block pt-2">
                                  — {p.by}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        </section>

        <ChapterConnector />

        {/* 5. The Constitution */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="space-y-16"
          >
            
            {/* Header */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                FOUNDATIONAL TEXT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                THE CONSTITUTION
              </h2>
              <p className="font-serif text-lg md:text-xl text-[#16734A] italic font-normal">
                AN IDEA WRITTEN INTO A REPUBLIC
              </p>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed pt-1">
                The Constitution of India synthesized regional aspirations, social reform agendas, and anti-colonial values into a unified democratic blueprint. Its core principles function as a system of interlocking values.
              </p>
            </div>

            {/* Circular Interconnected Wheel Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Wheel Graphic */}
              <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#171717]/10 p-6 md:p-8 flex items-center justify-center shadow-sm relative min-h-[380px] overflow-hidden">
                <svg viewBox="0 0 360 360" className="w-full max-w-[320px] h-auto select-none">
                  {/* Central Node representing Sovereign Base */}
                  <g transform="translate(180, 180)">
                    <circle r="42" fill="#16734A" stroke="#16734A" strokeWidth="1" />
                    <text 
                      textAnchor="middle" 
                      y="-4" 
                      className="font-serif text-[8px] fill-[#F7F4EE] tracking-widest font-semibold"
                    >
                      WE, THE
                    </text>
                    <text 
                      textAnchor="middle" 
                      y="8" 
                      className="font-serif text-[8px] fill-[#F7F4EE] tracking-widest font-semibold"
                    >
                      PEOPLE
                    </text>
                  </g>

                  {/* Outer values arranged in ring */}
                  {constitutionValues.map((val, index) => {
                    const angle = (index * 2 * Math.PI) / constitutionValues.length - Math.PI / 2;
                    const r = 110;
                    const x = 180 + r * Math.cos(angle);
                    const y = 180 + r * Math.sin(angle);
                    const isSelected = activeConstValId === val.id;

                    return (
                      <g key={val.id}>
                        {/* Interconnecting dashed radial lines */}
                        <line 
                          x1="180" 
                          y1="180" 
                          x2={x} 
                          y2={y} 
                          stroke={isSelected ? "#E8752A" : "#171717"} 
                          strokeWidth={isSelected ? "1.5" : "0.8"} 
                          strokeDasharray="3,3"
                          opacity={isSelected ? "0.8" : "0.3"} 
                        />
                        {/* Ring connection */}
                        {index > 0 && (() => {
                          const prevAngle = ((index - 1) * 2 * Math.PI) / constitutionValues.length - Math.PI / 2;
                          const px = 180 + r * Math.cos(prevAngle);
                          const py = 180 + r * Math.sin(prevAngle);
                          return (
                            <line 
                              x1={px} 
                              y1={py} 
                              x2={x} 
                              y2={y} 
                              stroke="#171717" 
                              strokeWidth="0.6" 
                              opacity="0.15" 
                            />
                          );
                        })()}
                        {/* Closing link for final item */}
                        {index === constitutionValues.length - 1 && (() => {
                          const firstAngle = -Math.PI / 2;
                          const px = 180 + r * Math.cos(firstAngle);
                          const py = 180 + r * Math.sin(firstAngle);
                          return (
                            <line 
                              x1={x} 
                              y1={y} 
                              x2={px} 
                              y2={py} 
                              stroke="#171717" 
                              strokeWidth="0.6" 
                              opacity="0.15" 
                            />
                          );
                        })()}

                        {/* Interactive circle tags */}
                        <g 
                          transform={`translate(${x}, ${y})`}
                          className="cursor-pointer group focus:outline-none"
                          tabIndex={0}
                          role="button"
                          aria-pressed={isSelected}
                          onClick={() => setActiveConstValId(val.id)}
                          onFocus={() => {
                            setFocusedConstValId(val.id);
                            setActiveConstValId(val.id);
                          }}
                          onBlur={() => setFocusedConstValId(null)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActiveConstValId(val.id);
                            }
                          }}
                        >
                          <circle 
                            r="28" 
                            fill={isSelected ? "#E8752A" : "#FAF8F5"} 
                            stroke={isSelected ? "#E8752A" : "#171717"} 
                            strokeWidth="1.2"
                            className="transition-all duration-300" 
                            style={prefersReducedMotion ? { transition: 'none' } : { transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', transform: isSelected ? 'scale(1.05)' : 'scale(1)' }}
                          />
                          {focusedConstValId === val.id && (
                            <circle 
                              r="34" 
                              fill="none" 
                              stroke="#E8752A" 
                              strokeWidth="1.5" 
                              strokeDasharray="3,3" 
                              className={prefersReducedMotion ? "" : "animate-pulse"}
                            />
                          )}
                          <text 
                            textAnchor="middle" 
                            y="3"
                            className={`font-sans text-[7px] tracking-wider font-bold transition-colors ${
                              isSelected ? "fill-white" : "fill-[#171717]/85"
                            }`}
                          >
                            {val.title}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Right Detail Card */}
              <div className="lg:col-span-6 bg-white border border-[#171717]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm min-h-[380px] text-left">
                <AnimatePresence mode="wait">
                  {(() => {
                    const activeVal = constitutionValues.find(v => v.id === activeConstValId) || constitutionValues[0];
                    return (
                      <motion.div
                        key={activeVal.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 my-auto"
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                            CONSTITUTIONAL IDEAL
                          </span>
                          <h3 className="font-serif text-2xl md:text-3xl text-[#16734A] uppercase tracking-wider font-normal">
                            {activeVal.title}
                          </h3>
                        </div>

                        <p className="font-serif text-lg md:text-xl text-[#171717] leading-relaxed italic">
                          "{activeVal.desc}"
                        </p>

                        <div className="text-[10px] font-sans font-light text-[#6B6B6B] leading-relaxed pt-4 border-t border-[#171717]/5">
                          In the constitutional design, no value operates in isolation. For example, <strong>Liberty</strong> cannot be sustained without <strong>Equality</strong>, and both are bound together by the civic friendship of <strong>Fraternity</strong> under a <strong>Republic</strong>.
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        </section>

        <ChapterConnector />

        {/* 6. The Conversation Continues */}
        <section className="py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-[#171717]/5">
          <motion.div 
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto space-y-16"
          >
            
            {/* Header */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                EVOLUTION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
                THE CONVERSATION CONTINUES
              </h2>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light leading-relaxed">
                "The questions did not end with the founding of the Republic. They continued through every generation." Later decades reinterpreted inherited ideals against changing realities.
              </p>
            </div>

            {/* Eras Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {continuingDecades.map((dec, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#171717]/10 p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#16734A]/30 transition-colors duration-300"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                      {dec.era}
                    </span>
                    <h3 className="font-serif text-lg text-[#171717] font-normal leading-tight">
                      {dec.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {dec.description}
                    </p>
                  </div>
                  <div className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-widest pt-2 border-t border-[#171717]/5">
                    DECADE ARCHIVE RECORD
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </section>

        <ChapterConnector />

        {/* 7. Closing — The Idea Continues */}
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-b border-[#171717]/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="space-y-8"
          >
            <motion.span 
              variants={fadeUp}
              className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] block"
            >
              THE IDEA CONTINUES
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-tight"
            >
              "The idea of India was never finished."
            </motion.h2>

            <div className="space-y-2 pt-4">
              <motion.p 
                variants={fadeUp}
                className="text-lg md:text-xl font-serif text-[#16734A] italic"
              >
                It was argued for. It was challenged.
              </motion.p>
              <motion.p 
                variants={fadeUp}
                className="text-lg md:text-xl font-serif text-[#16734A] italic"
              >
                It was rewritten. It was carried forward.
              </motion.p>
            </div>

            <motion.p 
              variants={fadeUp}
              className="text-[#6B6B6B] font-sans text-xs md:text-sm tracking-widest uppercase pt-6"
            >
              And now it belongs to another generation.
            </motion.p>
          </motion.div>
        </section>

        {/* 8. Transition Section to India Today */}
        <section className="bg-[#F7F4EE] pb-20 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
          <div className="pt-24 pb-4 text-center flex flex-col items-center space-y-6 max-w-2xl mx-auto w-full">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              NEXT: INDIA TODAY
            </span>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                The ideas we inherit meet the India we live in.
              </h3>
            </div>
            <div className="pt-4">
              <Link 
                to="/india-today"
                className="group inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
              >
                EXPLORE INDIA TODAY
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
