import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CultureClosing() {
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
    <section className="bg-[#F7F4EE] py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 text-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="flex flex-col items-center space-y-6 max-w-2xl mx-auto"
      >
        <motion.h2 
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight"
        >
          Traditions change.<br />Stories remain.
        </motion.h2>
        
        <motion.p 
          variants={fadeUp}
          className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light"
        >
          Explore India's cultural traditions — one region, one community and one story at a time.
        </motion.p>

        <motion.div variants={fadeUp} className="pt-4">
          <Link 
            to="/explore" 
            className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-white bg-[#E8752A] hover:bg-[#16734A] py-3.5 px-8 transition-colors shadow-md outline-none focus-visible:outline-[#E8752A]"
            aria-label="Explore the interactive regional cultural map portal"
          >
            EXPLORE INDIA →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
