import React from 'react';
import { motion } from 'framer-motion';

export default function StoriesIntro({ onStart }) {
  // Restrained, simple fade animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: customDelay }
    })
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-[#171717] select-none">
      
      {/* Static low-opacity background image (simple fade-in, no Ken Burns motion) */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/images/stories/stories-intro-7.jpg"
          alt="Quiet night street with distant lights"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-black/35" />
      </div>

      {/* Editorial Content Overlay */}
      <div className="relative z-10 max-w-4xl text-left space-y-6">
        <motion.span 
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs md:text-sm font-sans font-bold text-[#E8752A] uppercase tracking-[0.3em] block"
        >
          STORIES
        </motion.span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F7F4EE] font-normal tracking-tight leading-[1.1] max-w-3xl">
          <motion.span 
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Millions of lives.
          </motion.span>
          <motion.span 
            custom={0.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="block text-white/90"
          >
            Millions of stories.
          </motion.span>
        </h1>
        
        <motion.p 
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#D0C9BC] font-sans text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-xl"
        >
          India is too vast for one story. Here are a few.
        </motion.p>

        <motion.div 
          custom={1.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="pt-4"
        >
          <button
            onClick={onStart}
            className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-white bg-[#E8752A] hover:bg-[#16734A] py-3.5 px-8 transition-colors shadow-md outline-none focus-visible:outline-[#E8752A] cursor-pointer"
            aria-label="Begin browsing stories honeycomb index"
          >
            DISCOVER THE STORIES ↓
          </button>
        </motion.div>
      </div>

    </section>
  );
}
