import React from 'react';
import { motion } from 'framer-motion';
import LanguageExplorer from './LanguageExplorer';
import CommunityStories from './CommunityStories';
import EverydayIndia from './EverydayIndia';

export default function People() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="people-section" className="bg-[#F7F4EE] py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="flex flex-col space-y-20 md:space-y-28"
      >
        
        {/* A. Main Introduction Header */}
        <motion.div 
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] block">
            PEOPLE
          </span>
          <div className="space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
              India speaks in many voices.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
              Across its cities, villages, mountains, coasts and plains, people shape India through the languages they speak, the communities they build and the lives they live.
            </p>
          </div>
        </motion.div>

        {/* B. The Three Primary Entry Points (Rules 3 & 16) */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-6"
        >
          {/* Card 01: Languages */}
          <div className="border-t border-[#171717]/15 pt-6 flex flex-col justify-between text-left space-y-4">
            <div className="space-y-2">
              <span className="font-serif text-xs text-[#6B6B6B]/60 block font-semibold">01</span>
              <h4 className="font-serif text-lg text-[#171717] font-normal tracking-wide uppercase">
                LANGUAGES
              </h4>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                22 languages in the Eighth Schedule. Hundreds more spoken across the country.
              </p>
            </div>
            <a 
              href="#languages-explore" 
              className="text-[10px] font-sans font-bold text-[#E8752A] hover:text-[#16734A] uppercase tracking-widest transition-colors self-start cursor-pointer outline-none focus-visible:outline-[#E8752A]"
            >
              Explore languages →
            </a>
          </div>

          {/* Card 02: Communities */}
          <div className="border-t border-[#171717]/15 pt-6 flex flex-col justify-between text-left space-y-4">
            <div className="space-y-2">
              <span className="font-serif text-xs text-[#6B6B6B]/60 block font-semibold">02</span>
              <h4 className="font-serif text-lg text-[#171717] font-normal tracking-wide uppercase">
                COMMUNITIES
              </h4>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                Different traditions, histories and ways of life, sharing the same republic.
              </p>
            </div>
            <a 
              href="#communities-explore" 
              className="text-[10px] font-sans font-bold text-[#E8752A] hover:text-[#16734A] uppercase tracking-widest transition-colors self-start cursor-pointer outline-none focus-visible:outline-[#E8752A]"
            >
              Meet India's communities →
            </a>
          </div>

          {/* Card 03: Everyday Life */}
          <div className="border-t border-[#171717]/15 pt-6 flex flex-col justify-between text-left space-y-4">
            <div className="space-y-2">
              <span className="font-serif text-xs text-[#6B6B6B]/60 block font-semibold">03</span>
              <h4 className="font-serif text-lg text-[#171717] font-normal tracking-wide uppercase">
                EVERYDAY LIFE
              </h4>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                India is also found in ordinary moments — markets, trains, kitchens, streets, schools and homes.
              </p>
            </div>
            <a 
              href="#everyday-explore" 
              className="text-[10px] font-sans font-bold text-[#E8752A] hover:text-[#16734A] uppercase tracking-widest transition-colors self-start cursor-pointer outline-none focus-visible:outline-[#E8752A]"
            >
              See everyday India →
            </a>
          </div>
        </motion.div>

        {/* C. Interactive Languages Constellation Section */}
        <motion.div 
          id="languages-explore"
          variants={fadeUp}
          className="space-y-8 pt-8 border-t border-[#171717]/15 text-left"
        >
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
              LANGUAGES
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
              22 Scheduled Languages
            </h3>
          </div>
          <LanguageExplorer />
        </motion.div>

        {/* D. Communities Stories Subsection */}
        <motion.div id="communities-explore" variants={fadeUp}>
          <CommunityStories />
        </motion.div>

        {/* E. Everyday Life Strip Subsection */}
        <motion.div id="everyday-explore" variants={fadeUp}>
          <EverydayIndia />
        </motion.div>

      </motion.div>
    </section>
  );
}
