import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stories } from '../../data/stories';

export default function StorySection({ story, index, totalStories }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Monitor scroll progress of the container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Scroll progress inside this sticky container
      // 0 when top enters/reaches top of viewport
      // 1 when bottom reaches bottom of viewport
      const totalScrollable = elementHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);

      // Determine active scene based on progress
      const totalScenes = story.narrativeBlocks.length;
      const currentScene = Math.min(totalScenes - 1, Math.floor(progress * totalScenes));
      setActiveScene(currentScene);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [story.narrativeBlocks.length]);

  const activeImage = story.visualSequence[activeScene % story.visualSequence.length];
  const activeText = story.narrativeBlocks[activeScene];

  // Specific story decorations / helpers
  const renderStoryExtras = () => {
    if (prefersReducedMotion) return null;

    if (story.id === 'train') {
      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full">
          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 tracking-wider">
            <span>STATION</span>
            <span>JOURNEY</span>
            <span>ARRIVAL</span>
          </div>
          <div className="relative w-full h-[2px] bg-white/20 mt-2">
            <motion.div 
              style={{ left: `${scrollProgress * 95}%` }}
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#E8752A]"
            />
          </div>
        </div>
      );
    }

    if (story.id === 'rain') {
      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[10px] font-mono text-white/50 tracking-wider">
          <span>DRY HEAT</span>
          <span className={scrollProgress > 0.33 && scrollProgress < 0.66 ? "text-[#E8752A]" : ""}>MONSOON ARRIVAL</span>
          <span className={scrollProgress >= 0.66 ? "text-green-400" : ""}>FERTILE GREEN</span>
        </div>
      );
    }

    if (story.id === 'weaver') {
      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[10px] font-mono text-white/50 tracking-wider">
          <span>RAW THREADS</span>
          <span>WEAVING LOOM</span>
          <span>FINISHED WEAVE</span>
        </div>
      );
    }

    if (story.id === 'chai') {
      // Mapping progress to tea stall hours
      let timeLabel = "05:30 AM";
      if (scrollProgress > 0.25 && scrollProgress <= 0.5) timeLabel = "08:00 AM";
      else if (scrollProgress > 0.5 && scrollProgress <= 0.75) timeLabel = "01:00 PM";
      else if (scrollProgress > 0.75 && scrollProgress <= 0.9) timeLabel = "06:00 PM";
      else if (scrollProgress > 0.9) timeLabel = "10:00 PM";

      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-between">
          <span className="text-[10px] font-mono text-white/50 tracking-wider">TEA STALL HOURS:</span>
          <span className="text-xs font-mono font-bold text-[#E8752A] bg-black/40 px-2.5 py-1 border border-white/10 rounded-sm">
            {timeLabel}
          </span>
        </div>
      );
    }

    if (story.id === 'sea') {
      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full">
          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 tracking-wider">
            <span>MALABAR COAST (WEST)</span>
            <span>KANYAKUMARI (SOUTH)</span>
            <span>VARANASI (EAST)</span>
          </div>
          <div className="relative w-full h-[2px] bg-white/20 mt-2">
            <motion.div 
              style={{ left: `${scrollProgress * 95}%` }}
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400"
            />
          </div>
        </div>
      );
    }

    if (story.id === 'lookup') {
      return (
        <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[10px] font-mono text-white/50 tracking-wider">
          <span>STARS</span>
          <span>INQUIRY</span>
          <span>LAUNCH</span>
          <span>SPACE</span>
        </div>
      );
    }

    return null;
  };

  // Custom visual styles per story scene
  const getImageStyle = () => {
    if (prefersReducedMotion) return {};

    if (story.id === 'train' && activeScene === 3) {
      // Slow horizontal movement representing train window panning
      return {
        x: `${(scrollProgress - 0.75) * 40}%`,
        scale: 1.12
      };
    }

    if (story.id === 'rain') {
      // Atmospheric light shifts (cooler/deeper tones for monsoon)
      const isRainActive = activeScene === 1;
      const isAfterActive = activeScene === 2;
      return {
        filter: isRainActive 
          ? "saturate(0.8) contrast(1.1) brightness(0.85)" 
          : isAfterActive 
            ? "saturate(1.2) contrast(1.05) brightness(0.95)"
            : "saturate(0.9) brightness(0.95)",
        scale: 1.04 + scrollProgress * 0.05
      };
    }

    if (story.id === 'weaver') {
      // Extreme close-up tactile zooms
      return {
        scale: 1.05 + scrollProgress * 0.12
      };
    }

    if (story.id === 'lookup' && activeScene === 2) {
      // Vertical ascent for ISRO rocket launch lift off
      return {
        y: `-${(scrollProgress - 0.5) * 55}%`,
        scale: 1.08
      };
    }

    return {
      scale: 1.04 + scrollProgress * 0.04
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#171717]"
      id={`story-section-${story.id}`}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row bg-[#171717] border-b border-white/5">
        
        {/* Left Editorial Text Column */}
        <div className="w-full lg:w-2/5 h-1/2 lg:h-full flex flex-col justify-between py-12 lg:py-24 px-6 md:px-12 bg-[#171717] z-10 select-none">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[#E8752A] font-mono text-xs tracking-wider">
              <span>{story.number} / {String(totalStories).padStart(2, '0')}</span>
              <span className="w-6 h-[1px] bg-white/20" />
              <span className="text-white/40 uppercase tracking-widest text-[10px]">VISUAL ESSAY</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight tracking-tight">
              {story.title}
            </h2>
            
            <p className="text-white/40 font-sans text-xs uppercase tracking-widest italic font-light pt-0.5">
              {story.subtitle}
            </p>

            {/* Narrative text block with smooth animation on change */}
            <div className="pt-6 lg:pt-10 min-h-[140px] md:min-h-[160px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeScene}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: prefersReducedMotion ? 0.05 : 0.5, ease: "easeOut" }}
                  className="text-[#D0C9BC] font-sans text-sm md:text-base leading-relaxed font-light pl-0.5"
                >
                  {activeText}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Story Specific Custom Extras (Progress bars, clocks, etc.) */}
          {renderStoryExtras()}

          {/* Next / Prev Chapter Navigation triggers */}
          <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
            {index > 0 ? (
              <button 
                onClick={() => {
                  const prevId = stories[index - 1].id;
                  document.getElementById(`story-section-${prevId}`).scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[10px] tracking-widest uppercase text-white/50 hover:text-[#E8752A] transition-colors cursor-pointer focus-visible:outline-[#E8752A]"
              >
                ← PREV CHAPTER
              </button>
            ) : (
              <div />
            )}
            <button 
              onClick={() => {
                if (index < totalStories - 1) {
                  const nextId = stories[index + 1].id;
                  document.getElementById(`story-section-${nextId}`).scrollIntoView({ behavior: 'smooth' });
                } else {
                  document.getElementById('stories-closing-section').scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[10px] tracking-widest uppercase text-[#E8752A] hover:text-white transition-colors font-bold cursor-pointer focus-visible:outline-[#E8752A]"
            >
              {index === totalStories - 1 ? "CONTINUE TO CONCLUSION →" : "NEXT STORY →"}
            </button>
          </div>

        </div>

        {/* Right Immersive Visual Column */}
        <div className="w-full lg:w-3/5 h-1/2 lg:h-full relative overflow-hidden bg-black/45">
          {/* Masked reveal container */}
          <motion.div 
            initial={{ clipPath: "inset(12% 12% 12% 12% round 2px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.05 : 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.8 }}
                className="w-full h-full"
              >
                {/* Apply story-specific translate/scale logic */}
                <motion.img
                  src={activeImage}
                  alt={`${story.title} - Scene ${activeScene + 1}`}
                  animate={getImageStyle()}
                  transition={{ type: "tween", ease: "linear", duration: 0 }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Rain falling visual overlay for Monsoon Story */}
            {story.id === 'rain' && activeScene === 1 && !prefersReducedMotion && (
              <div className="absolute inset-0 bg-sky-950/15 pointer-events-none mix-blend-overlay">
                <div className="w-full h-full opacity-35 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Rain_drops_texture.png')] animate-[pulse_2.5s_infinite]" />
              </div>
            )}

            {/* Saree Pattern Detail Overlay for Weavers */}
            {story.id === 'weaver' && activeScene === 2 && !prefersReducedMotion && (
              <div className="absolute inset-0 bg-orange-900/10 pointer-events-none mix-blend-color-burn" />
            )}

            {/* Editorial subtle light gradients overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-black/20 lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-transparent hidden lg:block" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
