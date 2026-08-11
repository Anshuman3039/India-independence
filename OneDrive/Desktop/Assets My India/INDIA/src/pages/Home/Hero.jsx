/**
 * Hero Component
 * 
 * Visual Asset Information:
 * - Title: Peacock Gate, City Palace, Jaipur
 * - Provider: User Uploaded via Antigravity Chat
 * - Local Filename: public/images/hero_india.jpg
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  // Staggered transitions settings for text content
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const headingVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const ctaVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Reusable CTA Link component
  const CTALink = () => (
    <Link 
      to="/explore" 
      className="group inline-flex items-center gap-3 font-sans text-sm md:text-base font-semibold tracking-wider text-[#171717] hover:text-[#E8752A] transition-colors focus-visible:outline-[#E8752A] py-2"
      aria-label="Explore India portal"
    >
      Explore India
      <motion.span 
        className="inline-block text-lg"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        →
      </motion.span>
    </Link>
  );

  // Staggered card transition settings
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.97 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 } 
    }
  };

  return (
    <section 
      id="main-content" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 bg-[#F7F4EE] overflow-hidden"
    >
      {/* Background is clean cream/off-white (no image background) */}
      
      {/* Main Grid Wrapper: 12 Columns, vertically centered */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-center">
        
        {/* Left Column: Hero Text Content (occupying 5 columns ~41.6%) */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="lg:col-span-5 flex flex-col items-start text-left space-y-6 md:space-y-8 z-20"
        >
          {/* Accent Label */}
          <motion.span 
            variants={headingVariants}
            className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em]"
          >
            80TH INDEPENDENCE DAY
          </motion.span>
          
          {/* Main Headings */}
          <div className="space-y-2 md:space-y-3">
            <motion.h1 
              variants={headingVariants}
              className="font-serif text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] text-[#171717] font-normal leading-[1.05] tracking-tight"
            >
              79 Years of <br />
              <span className="text-[#171717]">Independence.</span>
            </motion.h1>
            
            <motion.h2 
              variants={headingVariants}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#16734A] italic font-normal tracking-wide"
            >
              Infinite Stories.
            </motion.h2>
          </div>

          {/* Description Body Text */}
          <motion.p 
            variants={textVariants}
            className="text-[#2C2C2C] font-sans text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            A journey through the people, places, cultures, ideas and landscapes that make India.
          </motion.p>

          {/* CTA Link */}
          <motion.div 
            variants={ctaVariants} 
            className="pt-2"
          >
            <CTALink />
          </motion.div>
        </motion.div>

        {/* Right Column: Contained Static Photograph (occupying 6 columns starting at column 7, leaving margins on the right) */}
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-center w-full z-20">
          
          {/* Frameless Picture Container with Tactile Hover Lift */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="w-full flex flex-col transition-all duration-500 hover:-translate-y-1.5 group"
          >
            {/* The Photograph Frame with Ken Burns and Sheen - No border edges, rounded-sm corner */}
            <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[56vh] relative overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] rounded-sm bg-[#171717]/5 transition-shadow duration-500">
              <motion.img 
                src="/images/hero_india.jpg" 
                alt="Peacock Gate, City Palace, Jaipur, Rajasthan"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Reflection Sheen Gloss Layer - sweeps across on hover */}
              <div 
                className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                style={{ transitionDelay: '50ms' }}
              />
            </div>

            {/* Editorial Caption Details (placed directly under the image, no divider borders) */}
            <div className="flex items-center justify-between text-left select-none w-full pl-1 mt-4">
              <span className="font-serif italic text-[11px] md:text-xs text-[#6B6B6B] hover:text-[#171717] transition-colors duration-300 tracking-wide">
                Peacock Gate, City Palace, Jaipur
              </span>
              <span className="font-sans text-[8px] font-bold text-[#E8752A] tracking-[0.2em] uppercase">
                Plate 01
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
