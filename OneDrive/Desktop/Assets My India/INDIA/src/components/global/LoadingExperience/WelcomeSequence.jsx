import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetingsData = [
  {
    id: 1,
    text: "नमस्ते",
    languageName: "हिन्दी",
    englishDetails: "NORTH & CENTRAL INDIA • HINDI",
    bg: "/images/culture/dance-kathak.jpg"
  },
  {
    id: 2,
    text: "নমস্কার",
    languageName: "বাংলা",
    englishDetails: "WEST BENGAL • BENGALI",
    bg: "/images/culture/festival-durga.jpg"
  },
  {
    id: 3,
    text: "નમસ્તે",
    languageName: "ગુજરાતી",
    englishDetails: "GUJARAT • GUJARATI",
    bg: "/images/culture/dance-garba.jpg"
  },
  {
    id: 4,
    text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    languageName: "ਪੰਜਾਬੀ",
    englishDetails: "PUNJAB • PUNJABI",
    bg: "/images/culture/dance-bhangra.jpg"
  },
  {
    id: 5,
    text: "ନମସ୍କାର",
    languageName: "ଓଡ଼ିଆ",
    englishDetails: "ODISHA • ODIA",
    bg: "/images/culture/dance-odissi.jpg"
  },
  {
    id: 6,
    text: "नमस्कार",
    languageName: "मराठी",
    englishDetails: "MAHARASHTRA • MARATHI",
    bg: "/images/stories/maharashtra-citylife.jpg"
  },
  {
    id: 7,
    text: "வணக்கம்",
    languageName: "தமிழ்",
    englishDetails: "TAMIL NADU • TAMIL",
    bg: "/images/culture/dance-bharatanatyam.jpg"
  },
  {
    id: 8,
    text: "నమస్కారం",
    languageName: "తెలుగు",
    englishDetails: "ANDHRA PRADESH & TELANGANA • TELUGU",
    bg: "/images/culture/art-kalamkari.jpg"
  },
  {
    id: 9,
    text: "ನಮಸ್ಕಾರ",
    languageName: "ಕನ್ನಡ",
    englishDetails: "KARNATAKA • KANNADA",
    bg: "/images/culture/craft-channapatna.jpg"
  },
  {
    id: 10,
    text: "നമസ്കാരം",
    languageName: "മലയാളം",
    englishDetails: "KERALA • MALAYALAM",
    bg: "/images/culture/dance-kathakali.jpg"
  },
  {
    id: 11,
    text: "নমস্কাৰ",
    languageName: "অসমীয়া",
    englishDetails: "ASSAM • ASSAMESE",
    bg: "/images/culture/festival-bihu.jpg"
  }
];

export default function WelcomeSequence({ isReducedMotion, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 11 languages staggered sequentially.
    // First 10 languages transition at intervalTime.
    // Final language holds for 2.0s to allow final reflection.
    const intervalTime = isReducedMotion ? 400 : 1000;
    const finalHoldTime = isReducedMotion ? 1000 : 2000;
    
    const timers = [];
    
    // Schedule language transitions
    for (let i = 1; i <= 10; i++) {
      const t = setTimeout(() => {
        setCurrentIndex(i);
      }, i * intervalTime);
      timers.push(t);
    }
    
    // Schedule stage complete notification
    const totalDuration = 10 * intervalTime + finalHoldTime;
    const completeTimer = setTimeout(() => {
      onComplete();
    }, totalDuration);
    timers.push(completeTimer);
    
    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isReducedMotion, onComplete]);

  // Framer Motion variants for sequential text dissolve (fade out -> pause -> fade in)
  const textVariants = {
    initial: { 
      opacity: 0, 
      y: isReducedMotion ? 0 : 6 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isReducedMotion ? 0.05 : 0.5, // 500ms fade in
        delay: isReducedMotion ? 0 : 0.1,       // 100ms breathing space/pause
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: isReducedMotion ? 0 : -6,
      transition: {
        duration: isReducedMotion ? 0.05 : 0.4, // 400ms fade out
        ease: "easeIn"
      }
    }
  };

  const currentGreeting = greetingsData[currentIndex];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center bg-[#F7F4EE]">
      {/* Background Images Layer - Stacked and crossfading concurrently with original high-fidelity colors */}
      {greetingsData.map((g, index) => {
        const isActive = index === currentIndex;
        return (
          <motion.img
            key={g.bg}
            src={g.bg}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? (isReducedMotion ? 0.05 : 0.78) : 0 }}
            transition={{ duration: isReducedMotion ? 0.1 : 1.5, ease: "easeInOut" }} // 1.5s crossfade
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
        );
      })}

      {/* Subtle linear ivory gradient to protect text legibility on center-left, keeping right-side details rich */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-10"
        style={{
          background: 'linear-gradient(to right, rgba(247, 244, 238, 0.98) 0%, rgba(247, 244, 238, 0.82) 40%, rgba(247, 244, 238, 0.35) 72%, rgba(247, 244, 238, 0.05) 100%)'
        }}
      />

      {/* Top Left Label: 🇮🇳 11 LANGUAGES. ONE INDIA. */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center select-none pointer-events-none">
        <span className="text-[10px] md:text-xs font-sans font-medium tracking-[0.25em] text-[#111111]/70 uppercase">
          🇮🇳 11 LANGUAGES. ONE INDIA.
        </span>
      </div>

      {/* Center-Left Greeting Text blocks container */}
      <div className="relative z-20 w-full h-full max-w-[90vw] mx-auto">
        <AnimatePresence mode="wait">
          {currentGreeting && (
            <motion.div
              key={currentGreeting.id}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-[8vw] md:left-[14vw] top-[50%] -translate-y-1/2 flex flex-col items-start text-left select-none max-w-[80vw] md:max-w-[48vw]"
            >
              {/* Native greeting in VERY LARGE typography (near-black deep charcoal) */}
              <h2 className="font-serif font-normal text-5xl md:text-7xl lg:text-[6.5rem] tracking-wide text-[#111111] leading-none mb-1">
                {currentGreeting.text}
              </h2>

              {/* Subtle decorative horizontal divider: ─── ◆ ─── */}
              <div className="flex items-center gap-3 my-4 text-[#111111]/25 w-[140px] select-none">
                <div className="h-px bg-[#111111]/15 flex-1" />
                <span className="text-[10px]">◆</span>
                <div className="h-px bg-[#111111]/15 flex-1" />
              </div>

              {/* Language name in native script */}
              <span className="text-base md:text-lg font-serif text-[#111111]/90 tracking-wider mb-1">
                {currentGreeting.languageName}
              </span>

              {/* English language/location identification */}
              <span className="text-[9px] md:text-[10px] font-sans tracking-[0.25em] text-[#E8752A] uppercase font-semibold">
                {currentGreeting.englishDetails}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
