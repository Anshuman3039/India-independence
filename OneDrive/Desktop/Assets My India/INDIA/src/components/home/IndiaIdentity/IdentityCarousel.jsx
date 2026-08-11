import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { identityStories } from '../../../data/indiaIdentity';
import IdentitySlide from './IdentitySlide';

export default function IdentityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Touch swipe reference handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 1. Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 2. Autoplay: 7-second intervals (disabled on interaction or reduced motion)
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, prefersReducedMotion]);

  // 3. Keyboard arrow controls (← Previous, → Next)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        handlePrev();
        setIsPlaying(false); // Pause on manual user interaction
      } else if (e.key === 'ArrowRight') {
        handleNext();
        setIsPlaying(false); // Pause on manual user interaction
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % identityStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + identityStories.length) % identityStories.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  // 4. Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNext(); // Swiped left -> next
      } else {
        handlePrev(); // Swiped right -> prev
      }
      setIsPlaying(false); // Pause on manual user swipe interaction
    }
  };

  const currentStory = identityStories[currentIndex];
  if (!currentStory) return null;

  // Text slide variants synced with image transitions
  const textVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
      }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: "easeOut" } 
        },
        exit: { 
          opacity: 0, 
          y: -10, 
          transition: { duration: 0.4, ease: "easeIn" } 
        }
      };

  return (
    <div 
      className="w-full flex flex-col items-center space-y-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Interactive carousel of India's symbols, ideas, and identity"
    >
      {/* Screen reader slide descriptor */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${currentIndex + 1} of ${identityStories.length} — ${currentStory.category}: ${currentStory.title}`}
      </div>

      {/* A. Large Image Canvas Slot */}
      <div className="w-full flex justify-center">
        <AnimatePresence mode="wait">
          <IdentitySlide
            key={currentStory.id}
            imageSrc={currentStory.image}
            altText={`${currentStory.category}: ${currentStory.title} — ${currentStory.description}`}
            isPlaying={isPlaying}
            prefersReducedMotion={prefersReducedMotion}
          />
        </AnimatePresence>
      </div>

      {/* B. Metadata Caption & Direction Controls */}
      <div className="w-full max-w-[72vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4 border-t border-charcoal/5">
        
        {/* Left Column: Story Description details */}
        <div className="space-y-1 text-left max-w-xl min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-1.5"
            >
              {/* Highlight colors depending on category type */}
              <span className={`text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] block ${
                currentStory.category === "THE IDEA OF INDIA" 
                  ? "text-[#243B6B]" 
                  : currentStory.category === "THE CONSTITUTION"
                  ? "text-[#16734A]"
                  : "text-[#E8752A]"
              }`}>
                {currentStory.category}
              </span>
              
              <h4 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-tight">
                {currentStory.title}
              </h4>
              
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                {currentStory.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interaction Buttons & Counter */}
        <div className="flex items-center gap-6 self-end md:self-auto shrink-0">
          
          {/* Play / Pause Autoplay Controller (Hidden if reduced motion preferred) */}
          {!prefersReducedMotion && (
            <button
              onClick={togglePlayPause}
              className="text-[10px] font-sans font-semibold text-[#171717] hover:text-[#E8752A] tracking-wider uppercase border border-[#171717]/15 hover:border-[#E8752A] px-2.5 py-1 transition-colors cursor-pointer outline-none focus-visible:outline-[#E8752A]"
              aria-label={isPlaying ? "Pause automatic slide advancement" : "Play automatic slide advancement"}
            >
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>
          )}

          {/* Directional Button Navigations */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { handlePrev(); setIsPlaying(false); }}
              className="w-8 h-8 rounded-full border border-charcoal/15 hover:border-charcoal text-[#171717] flex items-center justify-center transition-colors cursor-pointer hover:bg-charcoal/5 focus-visible:outline-[#E8752A] outline-none"
              aria-label="Previous slide"
            >
              ←
            </button>

            {/* Custom Editorial Counter */}
            <span className="text-xs font-sans font-semibold text-[#171717] tracking-wider tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(identityStories.length).padStart(2, '0')}
            </span>

            <button
              onClick={() => { handleNext(); setIsPlaying(false); }}
              className="w-8 h-8 rounded-full border border-charcoal/15 hover:border-charcoal text-[#171717] flex items-center justify-center transition-colors cursor-pointer hover:bg-charcoal/5 focus-visible:outline-[#E8752A] outline-none"
              aria-label="Next slide"
            >
              →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
