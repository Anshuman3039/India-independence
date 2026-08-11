import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StoriesClosing() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section id="stories-closing-section" className="relative bg-[#171717] py-28 px-6 md:px-12 text-center text-[#F7F4EE] w-full min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Quiet final image backdrop with low opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/stories/stories-intro-4.jpg"
          alt="Quiet sunset coastline"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-[#171717]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl mx-auto"
      >
        <motion.h2 
          variants={fadeUp}
          className="font-serif text-3xl md:text-5xl text-white font-normal tracking-wider leading-tight"
        >
          Six stories.<br />And countless more.
        </motion.h2>
        
        <motion.p 
          variants={fadeUp}
          className="text-[#D0C9BC] font-sans text-sm md:text-base leading-relaxed font-light"
        >
          India is too large to fit inside a single story. Perhaps that is the point.
        </motion.p>

        <motion.p 
          variants={fadeUp}
          className="font-serif text-lg text-white/50 italic pt-2 animate-pulse"
        >
          "Keep looking."
        </motion.p>

        <motion.div variants={fadeUp} className="pt-4">
          <Link 
            to="/explore" 
            className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-white bg-[#E8752A] hover:bg-[#16734A] py-3.5 px-8 transition-colors shadow-md outline-none focus-visible:outline-[#E8752A]"
            aria-label="Explore the interactive regional geography map portal"
          >
            EXPLORE INDIA →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
