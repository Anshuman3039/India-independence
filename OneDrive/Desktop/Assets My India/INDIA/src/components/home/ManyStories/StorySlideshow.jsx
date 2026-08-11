import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stories } from '../../../data/stories';

export default function StorySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slideshowRef = useRef(null);

  // 1. Detect prefers-reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 2. Auto-advance slides at 5.5s intervals when playing
  useEffect(() => {
    // If reduced motion is preferred, disable automatic transitions as requested
    if (!isPlaying || prefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, prefersReducedMotion]);

  // 3. Keyboard control hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid capturing hotkeys if user is in an input field (form inputs, textareas)
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        e.preventDefault(); // Stop standard spacebar page scrolling
        setIsPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const currentStory = stories[currentIndex];
  if (!currentStory) return null;

  // Slide Animation Definitions
  const slideVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
      }
    : {
        initial: { opacity: 0, scale: 1.01 },
        animate: { 
          opacity: 1, 
          scale: 1, 
          transition: { duration: 0.8, ease: "easeOut" } 
        },
        exit: { 
          opacity: 0, 
          scale: 0.99, 
          transition: { duration: 0.6, ease: "easeIn" } 
        }
      };

  return (
    <div 
      ref={slideshowRef}
      className="w-full flex flex-col items-center space-y-6 select-none"
      aria-label="Editorial Photographic Slideshow of India"
    >
      
      {/* Visual Live Region for screen readers to announce slide transitions */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${currentIndex + 1} of ${stories.length}: ${currentStory.location} — ${currentStory.title}`}
      </div>

      {/* A. Centered Large Photographic Canvas (65-75vw wide, 65-75vh tall on desktop) */}
      <div className="w-full max-w-[70vw] aspect-[4/3] md:h-[68vh] md:aspect-none relative overflow-hidden bg-[#171717]/5 border border-charcoal/5 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentStory.id}
            src={currentStory.image}
            alt={`${currentStory.location} — ${currentStory.description}`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>
        
        {/* Subtle accent highlight overlay */}
        <div className="absolute inset-0 border border-white/5 pointer-events-none" />
      </div>

      {/* B. Asymmetrical Editorial Metadata Footer */}
      <div className="w-full max-w-[70vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4 border-t border-charcoal/5">
        
        {/* Left Column: Caption Details */}
        <div className="space-y-1 text-left">
          <span className="text-[10px] md:text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
            {currentStory.location}
          </span>
          <h4 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-tight">
            {currentStory.title}
          </h4>
          <span className="text-[10px] md:text-xs font-sans font-light text-[#6B6B6B] block">
            {currentStory.category} • {currentStory.description}
          </span>
        </div>

        {/* Right Column: Interaction Controls & Counters */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          
          {/* Pause / Play Toggle (Only visible if reduced motion is NOT enabled) */}
          {!prefersReducedMotion && (
            <button
              onClick={togglePlayPause}
              className="text-[10px] font-sans font-semibold text-[#171717] hover:text-[#E8752A] tracking-wider uppercase border border-[#171717]/15 hover:border-[#E8752A] px-2.5 py-1 transition-colors cursor-pointer outline-none focus-visible:outline-[#E8752A]"
              aria-label={isPlaying ? "Pause automatic slideshow transitions" : "Play automatic slideshow transitions"}
            >
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-charcoal/15 hover:border-charcoal text-[#171717] flex items-center justify-center transition-colors cursor-pointer hover:bg-charcoal/5 focus-visible:outline-[#E8752A] outline-none"
              aria-label="Previous slide"
            >
              ←
            </button>
            
            {/* Custom Editorial Counter */}
            <span className="text-xs font-sans font-semibold text-[#171717] tracking-wider tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
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
