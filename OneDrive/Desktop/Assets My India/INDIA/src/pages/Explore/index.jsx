import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PageTransition from '../../components/global/PageTransition';
import { exploreStates } from '../../data/exploreStates';

export default function ExplorePage() {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  
  // State variables for search query and active region filter
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState(() => {
    return sessionStorage.getItem('explore_active_region') || 'North';
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stateId]);

  // Find active state if stateId is present in URL
  const activeState = stateId ? exploreStates.find(state => state.id === stateId) : null;

  // Keyboard navigation: Close detail page with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && stateId) {
        navigate('/explore');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stateId, navigate]);

  // Handle invalid stateId parameter (404 fallback for state lookup)
  if (stateId && !activeState) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#F7F4EE] select-none">
          <span className="text-xs font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] mb-4">
            Archive Registry
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#171717] mb-6 font-normal">
            Chapter Not Found
          </h1>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base max-w-md leading-relaxed mb-8 font-light">
            The requested State or Territory chapter does not exist in our historical archive.
          </p>
          <Link 
            to="/explore" 
            className="font-sans text-xs md:text-sm tracking-wider uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717] hover:border-[#E8752A] pb-1 transition-colors duration-200"
          >
            ← Back to Explore India
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Development-time image system audit tool
  useEffect(() => {
    const missingPaths = [];
    const duplicateHeroes = {};
    const missingAltOrCredit = [];

    exploreStates.forEach(state => {
      const name = state.name;
      const imgs = state.images;
      if (!imgs) {
        missingPaths.push(`${name} (Missing images block entirely)`);
        return;
      }

      const categories = ['hero', 'geography', 'culture', 'food', 'heritage', 'nature'];
      categories.forEach(cat => {
        const node = imgs[cat];
        if (!node) {
          missingPaths.push(`${name} (Missing category: ${cat})`);
          return;
        }

        // Placeholder tags are verified and valid
        if (node.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE') {
          return;
        }

        if (!node.src || node.src.trim() === '') {
          missingPaths.push(`${name} (Category ${cat} has empty src)`);
        }
        if (!node.alt || node.alt.trim() === '') {
          missingAltOrCredit.push(`${name} (Category ${cat} is missing descriptive Alt text)`);
        }
        if (!node.credit || node.credit.trim() === '') {
          missingAltOrCredit.push(`${name} (Category ${cat} is missing Attribution Credit)`);
        }

        if (cat === 'hero') {
          if (duplicateHeroes[node.src]) {
            duplicateHeroes[node.src].push(name);
          } else {
            duplicateHeroes[node.src] = [name];
          }
        }
      });
    });

    // Print reports in console
    if (missingPaths.length > 0) {
      console.warn('Explore Image Audit: Missing path attributes detected:\n', missingPaths);
    }
    if (missingAltOrCredit.length > 0) {
      console.warn('Explore Image Audit: Alt tag or credit warnings:\n', missingAltOrCredit);
    }
    const heroDuplicates = Object.entries(duplicateHeroes).filter(([_, list]) => list.length > 1);
    if (heroDuplicates.length > 0) {
      console.warn('Explore Image Audit: Duplicate primary hero paths found:\n', heroDuplicates);
    }
  }, []);

  // Deriving global states and UTs counts directly from the registry
  const totalStates = exploreStates.filter(item => item.type === 'state').length;
  const totalUTs = exploreStates.filter(item => item.type === 'union-territory').length;

  // Static Metadata for the 6 visual regions
  const regionalMeta = [
    {
      id: "North",
      name: "North India",
      image: "/images/nature/geo-himalayas.jpg",
      imageCredit: "Nature Archive",
      description: "From the towering Himalayas to the fertile Indo-Gangetic plains, a region shaped by snow-fed rivers, historic empires, and centuries of spiritual exchange."
    },
    {
      id: "West",
      name: "West India",
      image: "/images/stories/rajasthan-culture.jpg",
      imageCredit: "Rajasthan Tourism / ASI",
      description: "Defined by the sands of the Thar Desert, rugged Rajput hill forts, salt marshes, and a long history of maritime merchant trade."
    },
    {
      id: "East",
      name: "East India",
      image: "/images/stories/odisha-culture.jpg",
      imageCredit: "Odisha Tourism / ASI",
      description: "Stretching along the Bay of Bengal, a culturally rich land of stone monuments, classical dance traditions, delta floodplains, and the mangrove forests of the Sundarbans."
    },
    {
      id: "Central",
      name: "Central India",
      image: "/images/stories/central-wildlife.jpg",
      imageCredit: "Central Wildlife Archive",
      description: "The central heartland of India, housing vast teak forests, river gorges, core tiger sanctuaries, and prehistoric rock art."
    },
    {
      id: "South",
      name: "South India",
      image: "/images/stories/tamilnadu-architecture.jpg",
      imageCredit: "Dravidian Cultural Archive",
      description: "Flanked by the Western Ghats and two oceans, a region of ancient Dravidian temple architecture, classical arts, spice hills, and marine trade lanes."
    },
    {
      id: "Northeast",
      name: "Northeast India",
      image: "/images/nature/geo-northeast.jpg",
      imageCredit: "Northeast Nature Archive",
      description: "A high-biodiversity mountain zone framed by the Brahmaputra River, home to golden silks, tribal custom networks, and the great one-horned rhino."
    }
  ];

  // Derive counts dynamically for each region
  const getRegionCount = (regionName) => {
    return exploreStates.filter(s => s.region === regionName).length;
  };

  const isSearching = searchQuery.trim() !== '';

  // Get active region metadata object
  const activeRegionObj = regionalMeta.find(r => r.id === activeRegion);

  // Generate Filtered Items based on search string or active region
  let filteredItems = [];
  if (isSearching) {
    const query = searchQuery.toLowerCase().trim();
    filteredItems = exploreStates.filter(item => {
      // 1. Match State/UT Name
      if (item.name.toLowerCase().includes(query)) return true;
      // 2. Match Capital Name
      if (item.capital.toLowerCase().includes(query)) return true;
      // 3. Match Region
      if (item.region.toLowerCase().includes(query)) return true;
      // 4. Match Heritage Sites
      if (item.heritage && item.heritage.sites) {
        if (item.heritage.sites.some(site => site.toLowerCase().includes(query))) return true;
      }
      // 5. Match Places to Know names
      if (item.places) {
        if (item.places.some(place => place.name.toLowerCase().includes(query))) return true;
      }
      // 6. Match description/intro keywords
      if (item.introduction && item.introduction.toLowerCase().includes(query)) return true;
      if (item.description && item.description.toLowerCase().includes(query)) return true;
      
      return false;
    });
  } else {
    filteredItems = exploreStates.filter(item => item.region === activeRegion);
  }

  // Sort alphabetically programmatically by name
  filteredItems.sort((a, b) => a.name.localeCompare(b.name));

  // Region Card selection handler
  const handleSelectRegion = (regionId) => {
    setActiveRegion(regionId);
    sessionStorage.setItem('explore_active_region', regionId);
    setTimeout(() => {
      document.getElementById('states-grid-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Previous and Next state navigation helper (sorted alphabetically)
  const getPrevNextStates = () => {
    if (!activeState) return { prev: null, next: null };
    const sortedStates = [...exploreStates].sort((a, b) => a.name.localeCompare(b.name));
    const currentIndex = sortedStates.findIndex(s => s.id === activeState.id);
    const prevIndex = (currentIndex - 1 + sortedStates.length) % sortedStates.length;
    const nextIndex = (currentIndex + 1) % sortedStates.length;
    return {
      prev: sortedStates[prevIndex],
      next: sortedStates[nextIndex]
    };
  };
  const { prev: prevState, next: nextState } = getPrevNextStates();

  // Helper component to render image or placeholder
  const ContentImage = ({ imageNode, categoryLabel, className = "" }) => {
    if (!imageNode || imageNode.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE') {
      return (
        <div className={`w-full bg-[#EAE5D9]/40 border border-dashed border-[#171717]/15 rounded-[2px] flex flex-col items-center justify-center text-center p-6 select-none min-h-[220px] ${className}`}>
          <span className="text-[10px] font-sans font-bold text-[#E8752A]/85 uppercase tracking-[0.15em] block">
            [ {categoryLabel} Image Pending ]
          </span>
          <span className="text-[8.5px] text-[#6B6B6B] font-sans font-light mt-1.5 leading-relaxed max-w-[200px]">
            Authentic photograph required for verification.
          </span>
        </div>
      );
    }

    return (
      <div className={`relative overflow-hidden bg-[#171717]/5 border border-[#171717]/5 rounded-[2px] shadow-sm group ${className}`}>
        <img 
          src={imageNode.src} 
          alt={imageNode.alt}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 bg-[#171717]/70 text-[#F7F4EE] text-[8px] font-sans px-2 py-0.5 rounded-sm">
          Credit: {imageNode.credit}
        </div>
      </div>
    );
  };

  // Animation variants
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 15 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const detailFadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // 1. RENDER DETAILED REFINED STATE STORY
  if (activeState) {
    const images = activeState.images;

    return (
      <PageTransition>
        <div id="main-content" className="w-full bg-[#F7F4EE] pt-24 md:pt-32 pb-24 px-6 md:px-12 min-h-screen text-left">
          <motion.div 
            variants={detailFadeVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto flex flex-col"
          >
            
            {/* Top Navigation Trigger */}
            <div className="w-full flex items-center justify-between border-b border-[#171717]/8 pb-4 mb-10">
              <Link
                to="/explore"
                className="group inline-flex items-center gap-2.5 text-[11px] font-sans font-semibold tracking-widest uppercase text-[#16734A] hover:text-[#E8752A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8752A]/50 focus-visible:ring-offset-2 rounded-[2px]"
                aria-label="Return to Explore India archive"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
                Back to Explore India
              </Link>
              <span className="text-[10px] font-sans text-[#8C8C8C] tracking-widest uppercase">
                {activeState.type === 'union-territory' ? 'Territory Chapter' : 'State Chapter'}
              </span>
            </div>

            {/* State Name & Summary Introduction */}
            <header className="space-y-4">
              <h1 className="font-serif text-5xl md:text-8xl text-[#171717] font-normal tracking-tight leading-none uppercase">
                {activeState.name}
              </h1>
              <div className="flex items-center gap-3 text-xs md:text-sm font-sans font-medium text-[#16734A] uppercase tracking-widest">
                <span>{activeState.region} India</span>
                <span className="text-[#171717]/20">•</span>
                <span>Capital — {activeState.capital}</span>
              </div>
            </header>

            {/* Cover Picture / Placeholder */}
            {images.hero.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE' ? (
              <div className="w-full h-[40vh] bg-[#EAE5D9]/40 border border-dashed border-[#171717]/15 rounded-[2px] flex flex-col items-center justify-center text-center my-10 select-none">
                <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-wider">[ COVER LANDSCAPE PHOTOGRAPH PENDING ]</span>
                <span className="text-[10px] text-[#6B6B6B] font-sans font-light mt-1">Requires Authentic Source Verification</span>
              </div>
            ) : (
              <div className="w-full h-[45vh] md:h-[60vh] relative overflow-hidden bg-[#171717]/5 rounded-[2px] shadow-sm my-10 border border-[#171717]/5">
                <img 
                  src={images.hero.src} 
                  alt={images.hero.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
                />
                {images.hero.credit && (
                  <div className="absolute bottom-4 left-4 bg-[#171717]/70 text-[#F7F4EE] text-[9px] font-sans px-2.5 py-1 rounded-sm tracking-wider uppercase backdrop-blur-[2px]">
                    Credit: {images.hero.credit}
                  </div>
                )}
              </div>
            )}

            {/* Short Fact Intro Block */}
            <p className="text-lg md:text-2xl text-[#171717] font-serif font-light leading-relaxed italic border-l-4 border-[#16734A] pl-5 my-8 max-w-4xl py-2 bg-[#16734A]/2 pr-4 rounded-r-[2px]">
              {activeState.introduction}
            </p>

            {/* SECTION 01 — AT A GLANCE */}
            <section className="bg-[#FCFAF7] border border-[#171717]/8 p-6 rounded-[2px] grid grid-cols-2 md:grid-cols-4 gap-6 text-left my-8 shadow-sm">
              <div>
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">Capital</span>
                <span className="font-serif text-lg text-[#171717]">{activeState.capital}</span>
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">Region</span>
                <span className="font-serif text-lg text-[#171717]">{activeState.region} India</span>
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">Languages</span>
                <span className="font-serif text-lg text-[#171717]">{activeState.culture.languages.join(', ')}</span>
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">Chapter Type</span>
                <span className="font-serif text-lg text-[#171717]">{activeState.type === 'union-territory' ? 'Union Territory' : 'State'}</span>
              </div>
            </section>

            {/* Content sections */}
            <div className="space-y-20 pt-10">

              {/* SECTION 02 — THE LAND */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans font-bold text-[#E8752A]">01</span>
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest">The Land & Climate</span>
                  </div>
                  <h2 className="font-serif text-3xl text-[#171717] font-normal tracking-tight">Geography & Terrain</h2>
                  <p className="text-sm md:text-base text-[#6B6B6B] font-sans font-light leading-relaxed">
                    {activeState.geography.location}
                  </p>
                  <p className="text-xs md:text-sm text-[#6B6B6B] font-sans font-light leading-relaxed">
                    <span className="font-semibold text-[#171717]">Climate:</span> {activeState.geography.climate}
                  </p>
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-sans font-bold text-[#171717] uppercase tracking-wider block">Key Landmarks</span>
                    <p className="text-xs text-[#6B6B6B] font-sans font-light leading-relaxed">
                      {activeState.geography.features.join(' • ')}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <ContentImage 
                    imageNode={images.geography} 
                    categoryLabel="Geography" 
                    className="aspect-[4/3] w-full"
                  />
                </div>
              </section>

              {/* SECTION 03 — CULTURE */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-5 order-last md:order-first">
                  <ContentImage 
                    imageNode={images.culture} 
                    categoryLabel="Culture" 
                    className="aspect-[4/3] w-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans font-bold text-[#16734A]">02</span>
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest">People & Arts</span>
                  </div>
                  <h2 className="font-serif text-3xl text-[#171717] font-normal tracking-tight">Cultural Heritage</h2>
                  <p className="text-sm md:text-base text-[#6B6B6B] font-sans font-light leading-relaxed">
                    The social fabric is defined by localized customs, artistic practices, and community celebrations. Primary languages spoken include {activeState.culture.languages.join(' and ')}.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-[#FCFAF7] border border-[#171717]/5 p-4 rounded-[2px]">
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wide block mb-1">Festivals</span>
                      <p className="text-xs text-[#171717] font-normal leading-relaxed">
                        {activeState.culture.festivals.join(', ')}
                      </p>
                    </div>
                    <div className="bg-[#FCFAF7] border border-[#171717]/5 p-4 rounded-[2px]">
                      <span className="text-[9px] font-sans font-bold text-[#16734A] uppercase tracking-wide block mb-1">Traditions & Crafts</span>
                      <p className="text-xs text-[#171717] font-normal leading-relaxed">
                        {activeState.culture.traditions.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 04 — FOOD */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans font-bold text-[#E8752A]">03</span>
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest">Gastronomy</span>
                  </div>
                  <h2 className="font-serif text-3xl text-[#171717] font-normal tracking-tight">Regional Flavors</h2>
                  <p className="text-sm md:text-base text-[#6B6B6B] font-sans font-light leading-relaxed">
                    {activeState.food.traditions}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wide block mb-1">Staple Ingredients</span>
                      <p className="text-xs text-[#171717] font-normal leading-relaxed">
                        {activeState.food.ingredients.join(' • ')}
                      </p>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wide block mb-1">Representative Cuisine</span>
                      <p className="text-xs text-[#171717] font-normal leading-relaxed">
                        {activeState.food.cuisine.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <ContentImage 
                    imageNode={images.food} 
                    categoryLabel="Food" 
                    className="aspect-[4/3] w-full"
                  />
                </div>
              </section>

              {/* SECTION 05 — HERITAGE */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-[#6B6B6B]">04</span>
                  <span className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-widest">Monuments & Ruins</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal tracking-tight">Architecture & History</h2>
                
                {images.heritage.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE' ? (
                  <div className="w-full h-[25vh] md:h-[35vh] bg-[#EAE5D9]/40 border border-dashed border-[#171717]/15 rounded-[2px] flex flex-col items-center justify-center text-center p-6 select-none my-4 shadow-sm">
                    <span className="text-xs font-sans font-bold text-[#171717]/60 uppercase tracking-widest">[ HERITAGE ARCHITECTURE IMAGERY PENDING ]</span>
                    <span className="text-[10px] text-[#6B6B6B] font-sans font-light mt-1.5">Authentic monument photograph required</span>
                  </div>
                ) : (
                  <div className="w-full h-[35vh] md:h-[45vh] relative overflow-hidden bg-[#171717]/5 rounded-[2px] border border-[#171717]/5 shadow-sm group">
                    <img 
                      src={images.heritage.src} 
                      alt={images.heritage.alt}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#171717]/70 text-[#F7F4EE] text-[8px] font-sans px-2 py-0.5 rounded-sm">
                      Credit: {images.heritage.credit}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  <div className="md:col-span-4">
                    <span className="text-[10px] font-sans font-bold text-[#171717] uppercase tracking-wider block">Architectural Style</span>
                    <p className="text-xs text-[#6B6B6B] font-sans font-light leading-relaxed mt-1">
                      {activeState.heritage.architecture}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <span className="text-[10px] font-sans font-bold text-[#171717] uppercase tracking-wider block">Notable Historical Sites</span>
                    <p className="text-xs md:text-sm text-[#171717] font-normal leading-relaxed mt-1">
                      {activeState.heritage.sites.join(' • ')}
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 06 — NATURE */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-5 order-last md:order-first">
                  <ContentImage 
                    imageNode={images.nature} 
                    categoryLabel="Nature" 
                    className="aspect-[4/3] w-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans font-bold text-[#16734A]">05</span>
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-widest">Ecology</span>
                  </div>
                  <h2 className="font-serif text-3xl text-[#171717] font-normal tracking-tight">Protected Sanctuaries</h2>
                  <p className="text-sm md:text-base text-[#6B6B6B] font-sans font-light leading-relaxed">
                    Ecosystems are dominated by {activeState.nature.ecosystems.join(', ')}. Local protected zones cover {activeState.nature.areas.join(' and ')}.
                  </p>
                  <p className="text-xs md:text-sm text-[#6B6B6B] font-sans font-light leading-relaxed">
                    <span className="font-semibold text-[#171717]">Representative Fauna:</span> {activeState.nature.wildlife.join(', ')}
                  </p>
                </div>
              </section>

              {/* SECTION 07 — PLACES TO KNOW */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-[#171717]">06</span>
                  <span className="text-[10px] font-sans font-bold text-[#171717] uppercase tracking-widest">Destinations</span>
                </div>
                <h2 className="font-serif text-3xl text-[#171717] font-normal tracking-tight">Significant Places to Know</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {activeState.places.map((place, idx) => (
                    <div key={idx} className="bg-[#FCFAF7] border border-[#171717]/8 p-5 rounded-[2px] shadow-sm flex flex-col justify-between text-left">
                      <div className="space-y-2">
                        <h4 className="font-serif text-lg text-[#171717] font-normal">{place.name}</h4>
                        <p className="text-xs text-[#6B6B6B] font-sans font-light leading-relaxed">
                          {place.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 08 — DID YOU KNOW? */}
              <section className="bg-[#FCFAF7] border border-[#171717]/8 p-8 rounded-[2px] shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-[#E8752A]">07</span>
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-widest">Curiosities</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal tracking-tight">Did You Know?</h2>
                
                <ul className="space-y-4" aria-label="Interesting facts details list">
                  {activeState.facts.map((fact, idx) => (
                    <li key={idx} className="text-sm text-[#171717] font-sans font-light leading-relaxed flex gap-3">
                      <span className="text-[#E8752A] text-lg mt-0.5">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Tri-Navigation footer */}
            <div className="border-t border-[#171717]/8 pt-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {prevState && (
                <Link
                  to={`/explore/${prevState.id}`}
                  className="group flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#16734A] hover:text-[#E8752A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]/50 rounded-[2px] py-1 px-2"
                  aria-label={`Go to previous chapter: ${prevState.name}`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  {prevState.name}
                </Link>
              )}

              <Link
                to="/explore"
                className="text-xs font-sans font-bold tracking-[0.2em] text-[#171717] hover:text-[#E8752A] transition-colors uppercase border-b border-transparent hover:border-[#E8752A] pb-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]/50 rounded-[2px]"
                aria-label="Return to all chapters overview"
              >
                Explore another part of India
              </Link>

              {nextState && (
                <Link
                  to={`/explore/${nextState.id}`}
                  className="group flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#16734A] hover:text-[#E8752A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]/50 rounded-[2px] py-1 px-2"
                  aria-label={`Go to next chapter: ${nextState.name}`}
                >
                  {nextState.name}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}

            </div>

          </motion.div>
        </div>
      </PageTransition>
    );
  }

  // 2. RENDER EXPLORE LANDING GRID
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 min-h-screen text-left">
        <div className="max-w-7xl mx-auto flex flex-col space-y-10 md:space-y-12">
          
          {/* 1. Editorial Header Intro */}
          <div className="flex flex-col space-y-4 md:space-y-6 max-w-4xl">
            <span className="text-[10px] md:text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              {totalStates} States • {totalUTs} Union Territories
            </span>
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
                28 States. 8 Union Territories. <br />
                Countless stories.
              </h1>
              <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed max-w-3xl font-light">
                India is a land defined not by borders, but by the endless weave of its landscapes, 
                languages, and histories. From the snow-capped passes of the Himalayas to the tropical 
                Malabar coast, explore the unique heritage, local delicacies, and cultural traditions 
                that shape each state and territory.
              </p>
            </div>
          </div>

          {/* 2. Accessible Search Input */}
          <div className="relative w-full max-w-md pb-2">
            <input
              type="text"
              placeholder="Search a state or union territory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-[#171717]/15 focus:border-[#E8752A] py-2 pl-8 pr-8 text-sm font-sans font-light text-[#171717] placeholder-[#171717]/35 outline-none transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[#E8752A]/20"
              aria-label="Search states and union territories by name, capital, or region"
            />
            {/* Search Magnifying Glass Icon */}
            <span className="absolute left-1 top-2 text-[#171717]/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            </span>
            {/* Clear Query Trigger Button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-1 top-1.5 text-[#171717]/40 hover:text-[#171717] p-1 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]/50"
                aria-label="Clear search input query"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* 3. Conditional Layout Switch */}
          {isSearching ? (
            /* A. SEARCH RESULTS LISTING (IMMEDIATE) */
            <div className="w-full space-y-6 animate-fade-in duration-75">
              <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                Search Results — {filteredItems.length} chapters found
              </span>
              {filteredItems.length === 0 ? (
                /* No Results Placeholder */
                <div className="w-full border border-dashed border-[#171717]/15 rounded-sm p-12 md:p-20 flex flex-col items-center justify-center text-center space-y-4 select-none min-h-[300px]">
                  <div className="w-12 h-12 rounded-full border border-[#171717]/10 flex items-center justify-center text-[#171717]/40 bg-[#171717]/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-serif text-xl text-[#171717] font-normal uppercase tracking-wide">No Match Found</h3>
                    <p className="text-xs text-[#6B6B6B] font-sans font-light leading-relaxed">
                      Try searching for a state, territory, capital, landmark, or region.
                    </p>
                  </div>
                </div>
              ) : (
                /* Cards Grid */
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                  key={searchQuery}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full pt-2"
                >
                  {filteredItems.map((state) => (
                    <div
                      key={state.id}
                      onClick={() => navigate(`/explore/${state.id}`)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigate(`/explore/${state.id}`);
                        }
                      }}
                      className="group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8752A]/50 focus-visible:ring-offset-4 rounded-[2px]"
                      role="button"
                      tabIndex={0}
                      aria-label={`Explore archive for ${state.name}. Capital: ${state.capital}`}
                    >
                      {/* Photograph Frame / Placeholder */}
                      {state.images.hero.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE' ? (
                        <div className="w-full aspect-[4/3] bg-[#EAE5D9]/40 border border-dashed border-[#171717]/15 rounded-[2px] flex flex-col items-center justify-center text-center p-4 select-none relative">
                          <span className="text-[9px] font-sans font-bold text-[#E8752A]/80 uppercase tracking-widest">[ IMAGE PENDING ]</span>
                          <span className="text-[8px] text-[#6B6B6B] font-mono mt-1">Requires Authentic Source</span>
                        </div>
                      ) : (
                        <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#171717]/5 border border-[#171717]/5 rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.015)]">
                          <img 
                            src={state.images.hero.src} 
                            alt={state.images.hero.alt}
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                        </div>
                      )}
                      
                      <div className="flex flex-col mt-4">
                        <span className="text-[9px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                          {state.type === 'union-territory' ? 'Union Territory' : 'State'}
                        </span>
                        <h2 className="font-serif text-2xl text-[#171717] font-normal tracking-tight group-hover:text-[#E8752A] transition-colors duration-300">
                          {state.name}
                        </h2>
                        <div className="flex flex-wrap gap-x-2 text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.15em] mt-1 block">
                          <span>Capital — {state.capital}</span>
                          <span className="text-[#171717]/15">•</span>
                          <span>Region — {state.region}</span>
                        </div>
                        <p className="text-sm text-[#6B6B6B] font-sans font-light leading-relaxed mt-2.5 line-clamp-3">
                          {state.description || state.introduction}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#16734A] uppercase mt-4 select-none">
                          Explore {state.type === 'union-territory' ? 'Territory' : 'State'}
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            /* B. VISUAL REGIONAL EXPLORATION (EDITORIAL GRID) */
            <div className="w-full space-y-16">
              
              {/* Asymmetric 12-Column Regional Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full pt-2">
                {regionalMeta.map((region, idx) => {
                  const count = getRegionCount(region.id);
                  const isSelected = activeRegion === region.id;
                  
                  // Asymmetric column spans
                  let colSpan = "lg:col-span-6";
                  if (idx === 0) colSpan = "lg:col-span-8"; // North
                  else if (idx === 1) colSpan = "lg:col-span-4"; // West
                  else if (idx === 2) colSpan = "lg:col-span-4"; // East
                  else if (idx === 3) colSpan = "lg:col-span-8"; // Central

                  return (
                    <button
                      key={region.id}
                      onClick={() => handleSelectRegion(region.id)}
                      className={`group relative overflow-hidden bg-[#FCFAF7] border rounded-[2px] shadow-[0_4px_15px_rgba(0,0,0,0.015)] transition-all duration-500 ease-out cursor-pointer h-56 lg:h-80 flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8752A] focus-visible:ring-offset-2 ${colSpan} ${
                        isSelected ? 'border-[#E8752A] ring-2 ring-[#E8752A]/10' : 'border-[#171717]/8 hover:border-[#E8752A]/40'
                      }`}
                      aria-current={isSelected ? 'true' : 'false'}
                      aria-label={`Explore region ${region.name}. Contains ${count} chapters.`}
                    >
                      {/* Active Indicator Tag */}
                      {isSelected && (
                        <span className="absolute top-4 right-4 bg-[#E8752A]/90 text-[#F7F4EE] text-[8px] font-sans font-bold px-2 py-0.5 rounded-[2px] tracking-wider uppercase z-20 shadow-sm animate-fade-in">
                          Active
                        </span>
                      )}

                      {/* Atmospheric background photograph */}
                      <img 
                        src={region.image} 
                        alt={`Representative scene of ${region.name}`}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Gradient shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 z-10" />

                      {/* Content block */}
                      <div className="relative z-20 flex flex-col text-left text-white">
                        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                          {count} Chapters
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-white mt-1 group-hover:text-[#E8752A]/90 transition-colors">
                          {region.name}
                        </h3>
                        <p className="text-xs text-[#EAEAEA] font-sans font-light leading-relaxed mt-2 line-clamp-2 max-w-xl">
                          {region.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Separator line */}
              <div className="w-full h-[1px] bg-[#171717]/8" />

              {/* Active Region Detail Heading & Card Grid */}
              {activeRegionObj && (
                <div id="states-grid-section" className="w-full space-y-8 pt-2 scroll-mt-24">
                  
                  {/* Region Summary Text */}
                  <div className="max-w-4xl space-y-3">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                      Active Exploration Zone
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal tracking-tight">
                      {activeRegionObj.name}
                    </h2>
                    <p className="text-sm text-[#6B6B6B] font-sans font-light leading-relaxed italic border-l-2 border-[#16734A] pl-3 py-0.5 bg-[#16734A]/2 rounded-r-[1px]">
                      {activeRegionObj.description}
                    </p>
                  </div>

                  {/* List Header title */}
                  <div className="flex items-center justify-between border-b border-[#171717]/8 pb-3">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider">
                      STATES & TERRITORIES IN {activeRegionObj.name.toUpperCase()} ({filteredItems.length})
                    </span>
                  </div>

                  {/* Region State Card Grid */}
                  <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeRegion}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full pt-2"
                  >
                    {filteredItems.map((state) => (
                      <div
                        key={state.id}
                        onClick={() => navigate(`/explore/${state.id}`)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(`/explore/${state.id}`);
                          }
                        }}
                        className="group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8752A]/50 focus-visible:ring-offset-4 rounded-[2px]"
                        role="button"
                        tabIndex={0}
                        aria-label={`Explore archive for ${state.name}. Capital: ${state.capital}`}
                      >
                        {/* Photograph Frame / Placeholder */}
                        {state.images.hero.src === 'IMAGE_REQUIRES_AUTHENTIC_SOURCE' ? (
                          <div className="w-full aspect-[4/3] bg-[#EAE5D9]/40 border border-dashed border-[#171717]/15 rounded-[2px] flex flex-col items-center justify-center text-center p-4 select-none relative">
                            <span className="text-[9px] font-sans font-bold text-[#E8752A]/80 uppercase tracking-widest">[ IMAGE PENDING ]</span>
                            <span className="text-[8px] text-[#6B6B6B] font-mono mt-1">Requires Authentic Source</span>
                          </div>
                        ) : (
                          <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#171717]/5 border border-[#171717]/5 rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.015)]">
                            <img 
                              src={state.images.hero.src} 
                              alt={state.images.hero.alt}
                              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                          </div>
                        )}
                        
                        <div className="flex flex-col mt-4">
                          <span className="text-[9px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">
                            {state.type === 'union-territory' ? 'Union Territory' : 'State'}
                          </span>
                          <h2 className="font-serif text-2xl text-[#171717] font-normal tracking-tight group-hover:text-[#E8752A] transition-colors duration-300">
                            {state.name}
                          </h2>
                          <div className="flex flex-wrap gap-x-2 text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.15em] mt-1 block">
                            <span>Capital — {state.capital}</span>
                            <span className="text-[#171717]/15">•</span>
                            <span>Region — {state.region}</span>
                          </div>
                          <p className="text-sm text-[#6B6B6B] font-sans font-light leading-relaxed mt-2.5 line-clamp-3">
                            {state.description || state.introduction}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#16734A] uppercase mt-4 select-none">
                            Explore {state.type === 'union-territory' ? 'Territory' : 'State'}
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                </div>
              )}

            {/* Transition to People Page */}
            <div className="border-t border-[#171717]/5 pt-20 pb-4 text-center flex flex-col items-center space-y-6 max-w-2xl mx-auto w-full">
              <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
                NEXT: PEOPLE
              </span>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                  India begins with its people.
                </h3>
                <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
                  Before we look at India's traditions, landscapes, food and history, we begin with the people who live them — speaking different languages, building communities and shaping everyday life.
                </p>
              </div>
              <div className="pt-2">
                <Link 
                  to="/people"
                  className="group inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
                >
                  MEET THE PEOPLE 
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  </PageTransition>
);
}
