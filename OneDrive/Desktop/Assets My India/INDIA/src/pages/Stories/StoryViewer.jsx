import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StoryNavigation from './StoryNavigation';
import StoryProgress from './StoryProgress';

// Ambient audio loops from public assets
const ambientSounds = {
  train: "https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav",
  rain: "https://assets.mixkit.co/active_storage/sfx/2433/2433-84.wav",
  weaver: "https://assets.mixkit.co/active_storage/sfx/2324/2324-84.wav",
  chai: "https://assets.mixkit.co/active_storage/sfx/1202/1202-84.wav",
  sea: "https://assets.mixkit.co/active_storage/sfx/2507/2507-84.wav",
  lookup: "https://assets.mixkit.co/active_storage/sfx/1971/1971-84.wav"
};

export default function StoryViewer({ story, activeIndex, totalStories, onNext, onPrev: _onPrev, onClose }) {
  const [started, setStarted] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  
  const audioRef = useRef(null);

  // Cover image for the title screen
  const coverImage = story.scenes[0].image;

  // Monitor prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Sync scroll and reset index when story changes
  useEffect(() => {
    setStarted(false);
    setCurrentSceneIndex(0);
    window.scrollTo({ top: 0 });
  }, [story.id]);

  // Audio ambient player control
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isSoundOn) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio play blocked by browser rules or offline:", err);
          setIsSoundOn(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isSoundOn, story.id]);

  const handleBegin = () => {
    setStarted(true);
    setCurrentSceneIndex(0);
  };

  const handleToggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  const handleNext = useCallback(() => {
    if (currentSceneIndex < story.scenes.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
    } else {
      onNext();
    }
  }, [currentSceneIndex, story.scenes.length, onNext]);

  const handlePrev = useCallback(() => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(prev => prev - 1);
    }
  }, [currentSceneIndex]);

  // Keyboard navigation listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (!started) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [started, handleNext, handlePrev, onClose]);

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const progressPercent = ((currentSceneIndex) / (story.scenes.length - 1)) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-[#171717] overflow-hidden text-[#F7F4EE] flex flex-col font-sans select-none">
      
      {/* Ambient Audio Element */}
      <audio 
        ref={audioRef} 
        src={ambientSounds[story.id]} 
        loop 
        preload="auto"
      />

      {/* Floating Audio Ambient Toggle */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleToggleSound}
          className="font-sans text-[10px] font-bold tracking-widest uppercase text-white bg-black/60 hover:bg-black border border-white/10 px-4 py-2.5 rounded-sm shadow-lg flex items-center space-x-2 cursor-pointer focus-visible:outline-[#E8752A]"
          aria-label={isSoundOn ? "Mute ambient audio" : "Unmute ambient audio"}
        >
          <span>AMBIENT SOUND:</span>
          <span className={isSoundOn ? "text-green-400" : "text-white/40"}>
            {isSoundOn ? "ON" : "OFF"}
          </span>
        </button>
      </div>

      {/* Cover Screen View (Initial landing / Title card) */}
      {!started ? (
        <section className="relative w-full h-full flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-black select-none">
          {/* Full Screen visual background */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={coverImage}
              alt={story.scenes[0].alt || story.title}
              initial={{ scale: 1.02, opacity: 0 }}
              animate={{ scale: 1.0, opacity: 0.35 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 1.2, ease: "easeOut" }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30" />
          </div>

          {/* Opening Overlay Content */}
          <div className="relative z-10 max-w-4xl text-left space-y-6">
            <div className="flex items-center justify-between max-w-xs">
              <span className="font-mono text-xs text-[#E8752A] tracking-wider font-semibold">
                CHAPTER {story.number} / {String(totalStories).padStart(2, '0')}
              </span>
              <StoryProgress activeIndex={activeIndex} totalStories={totalStories} />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.1] max-w-2xl uppercase">
              {story.title}
            </h1>

            <p className="text-[#D0C9BC] font-sans text-base md:text-lg italic font-light max-w-xl">
              "{story.subtitle}"
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <button
                onClick={handleBegin}
                className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-white bg-[#E8752A] hover:bg-[#16734A] py-3.5 px-8 transition-colors shadow-md outline-none focus-visible:outline-[#E8752A] cursor-pointer"
                aria-label="Begin visual documentary"
              >
                BEGIN STORY →
              </button>

              <button
                onClick={onClose}
                className="font-sans text-xs tracking-widest uppercase font-semibold text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Exit back to the stories selection page"
              >
                ALL STORIES
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Thin navigation header toolbar */}
          <StoryNavigation
            story={story}
            activeIndex={activeIndex}
            totalStories={totalStories}
            onNext={onNext}
            onPrev={_onPrev}
            onClose={onClose}
          />

          {/* Immersive Editorial Photo Essay Layout */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full flex-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-hidden bg-[#171717]"
          >
            
            {/* Main Visual Image Container (Hero element, 70-85% weight) */}
            <div className="w-full max-w-6xl h-[55vh] md:h-[65vh] lg:h-[70vh] relative overflow-hidden shadow-2xl rounded-sm border border-white/5 bg-black/40">
              
              {/* Active Image with 500-800ms crossfade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSceneIndex}
                  src={story.scenes[currentSceneIndex].image}
                  alt={story.scenes[currentSceneIndex].alt || story.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.05 : 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Gentle gradient overlay inside image frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none z-10" />

              {/* Desktop Text Overlay (Lower left corner inside image frame) */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 max-w-xl text-left hidden md:block">
                <span className="font-mono text-[10px] text-[#E8752A] tracking-widest uppercase font-semibold block mb-1">
                  SCENE {String(currentSceneIndex + 1).padStart(2, '0')} / {String(story.scenes.length).padStart(2, '0')}
                </span>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSceneIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: prefersReducedMotion ? 0.05 : 0.4 }}
                    className="text-[#F7F4EE] font-serif text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide drop-shadow-sm"
                  >
                    {story.scenes[currentSceneIndex].text}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Desktop Slide Navigation Controls (Lower right corner inside image frame) */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center space-x-6 hidden md:flex font-mono text-[10px] tracking-widest font-bold">
                <button
                  onClick={handlePrev}
                  disabled={currentSceneIndex === 0}
                  className="text-white/50 hover:text-white transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed uppercase"
                  aria-label="Load previous visual scene"
                >
                  ← PREVIOUS
                </button>

                <button
                  onClick={handleNext}
                  className="text-[#E8752A] hover:text-white transition-colors cursor-pointer uppercase"
                  aria-label="Load next visual scene"
                >
                  {currentSceneIndex === story.scenes.length - 1 ? "NEXT STORY →" : "NEXT SCENE →"}
                </button>
              </div>

              {/* Horizontal line progress indicator at bottom of image frame */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-20">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-[#E8752A] transition-all duration-300"
                />
              </div>

            </div>

            {/* Mobile/Tablet text and navigation block below image frame */}
            <div className="w-full mt-6 space-y-4 md:hidden block text-left px-2">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#E8752A] tracking-wider uppercase font-semibold block">
                  SCENE {String(currentSceneIndex + 1).padStart(2, '0')} / {String(story.scenes.length).padStart(2, '0')}
                </span>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSceneIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: prefersReducedMotion ? 0.05 : 0.3 }}
                    className="text-[#D0C9BC] font-sans text-sm leading-relaxed font-light"
                  >
                    {story.scenes[currentSceneIndex].text}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Mobile Navigation controls */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[9px] font-mono font-bold tracking-widest text-white">
                <button
                  onClick={handlePrev}
                  disabled={currentSceneIndex === 0}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer disabled:opacity-20"
                >
                  PREVIOUS
                </button>

                <button
                  onClick={handleNext}
                  className="text-[#E8752A] hover:text-white transition-colors cursor-pointer"
                >
                  {currentSceneIndex === story.scenes.length - 1 ? "NEXT STORY" : "NEXT SCENE"}
                </button>
              </div>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
