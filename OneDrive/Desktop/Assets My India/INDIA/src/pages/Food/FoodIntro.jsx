import React from 'react';
import { motion } from 'framer-motion';

export default function FoodIntro() {
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
    <section className="bg-[#F7F4EE] pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center space-y-6 max-w-3xl mx-auto"
      >
        <motion.span 
          variants={fadeUp}
          className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] block"
        >
          FOOD
        </motion.span>
        
        <motion.div variants={fadeUp} className="space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
            A country on a plate.
          </h1>
          <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
            From mountain kitchens to coastal homes, India's food traditions change with the landscape, the seasons, the ingredients and the people who prepare them.
          </p>
        </motion.div>

        {/* Large Documentary Photograph */}
        <motion.div 
          variants={fadeUp}
          className="w-full pt-10 md:pt-14 overflow-hidden"
        >
          <div className="w-full aspect-[16/9] md:h-[50vh] overflow-hidden bg-charcoal/5 shadow-md">
            <img 
              src="/images/food/food-intro.jpg" 
              alt="Traditional home kitchen cooking and food preparation in India, showing fresh raw ingredients and copper utensils" 
              className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-1000 ease-out"
            />
          </div>
          <span className="text-[10px] font-sans text-[#6B6B6B]/60 tracking-wider text-left block mt-2">
            Traditional Meal Preparation • Sourced via Wikimedia Commons
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
