import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StoryScene({ scene, index }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center py-12 px-6 select-none bg-[#171717]">
      <div className="max-w-4xl w-full flex flex-col space-y-6">
        
        {/* Cinematic Photo Composition */}
        <div className="w-full aspect-[16/10] md:h-[65vh] overflow-hidden relative bg-white/5 border border-white/5 shadow-2xl">
          <motion.img
            src={scene.image}
            alt={scene.alt || `Visual moment ${index + 1}`}
            initial={{ scale: 1.03 }}
            whileInView={{ scale: prefersReducedMotion ? 1.03 : 1.07 }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ duration: 8, ease: "linear" }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-white/5 pointer-events-none" />
        </div>

        {/* Caption details */}
        <div className="text-left max-w-2xl pl-1 space-y-2">
          <span className="font-mono text-[10px] text-[#E8752A] tracking-wider uppercase">
            SCENE {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-[#D0C9BC] font-sans text-sm md:text-base lg:text-lg leading-relaxed font-light">
            {scene.text}
          </p>
        </div>

      </div>
    </div>
  );
}
