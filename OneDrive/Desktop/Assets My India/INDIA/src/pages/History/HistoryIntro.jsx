import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const introImages = [
  { src: "/images/history/history-intro-1.jpg", alt: "Harappan archaeological site ruins" },
  { src: "/images/history/history-intro-2.jpg", alt: "Didarganj Yakshi ancient stone sculpture" },
  { src: "/images/history/history-intro-3.jpg", alt: "Ancient Indian palm-leaf manuscript" },
  { src: "/images/history/history-intro-4.jpg", alt: "Brihadisvara Temple medieval stone architecture" },
  { src: "/images/history/history-intro-5.jpg", alt: "Mughal miniature painting court scene" },
  { src: "/images/history/history-intro-6.jpg", alt: "Colonial-era archival photo of the Gateway of India" },
  { src: "/images/history/history-intro-7.jpg", alt: "Archival independence-era flag raising 1947" },
  { src: "/images/history/history-intro-8.jpg", alt: "Contemporary Mumbai skyline at Marine Drive" }
];

export default function HistoryIntro() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Check reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % introImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % introImages.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev + 1 - 1 + introImages.length) % introImages.length);
  };

  return (
    <section className="relative w-full bg-[#171717] min-h-[90vh] md:min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 overflow-hidden">
      
      {/* Background Slideshow (Cinematic Crossfade) */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={introImages[index].src}
            alt={introImages[index].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }} // Reduced opacity for text legibility
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover scale-[1.01]"
          />
        </AnimatePresence>
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30" />
      </div>

      {/* Intro Editorial Content (Foreground) */}
      <div className="relative z-10 max-w-4xl text-left space-y-6">
        <span className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] block">
          HISTORY
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F7F4EE] font-normal tracking-tight leading-[1.1] max-w-2xl">
          A long story.<br />Still unfolding.
        </h1>
        
        <p className="text-[#D0C9BC] font-sans text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
          From the earliest urban settlements to a modern republic, the Indian subcontinent has witnessed migrations, cities, empires, trade, ideas, conflicts and extraordinary cultural exchange.
        </p>

        {/* Slideshow Controls */}
        <div className="flex items-center space-x-6 pt-6">
          <div className="flex items-center space-x-3 text-white">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/20 hover:border-white/60 hover:text-[#E8752A] transition-colors cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
              aria-label="Previous historical slide"
            >
              ←
            </button>
            <span className="font-mono text-xs text-[#D0C9BC]">
              {`0${index + 1} / 0${introImages.length}`}
            </span>
            <button
              onClick={handleNext}
              className="p-2 border border-white/20 hover:border-white/60 hover:text-[#E8752A] transition-colors cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A]"
              aria-label="Next historical slide"
            >
              →
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-[10px] font-sans font-bold text-[#D0C9BC]/60 hover:text-white uppercase tracking-widest cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#E8752A] border border-white/10 px-3 py-1.5"
            aria-label={isPlaying ? "Pause autoplaying history slideshow" : "Play history slideshow"}
          >
            {isPlaying ? "PAUSE II" : "PLAY ▶"}
          </button>
        </div>
      </div>

    </section>
  );
}
