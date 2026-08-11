import React from 'react';
import { motion } from 'framer-motion';
import { everydayFood } from '../../data/food';

export default function EverydayFood() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            DAILY COMMONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            What India eats every day.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Indian food is not defined only by festive feasts. It is found in daily routines, busy city corners, and home kitchens.
          </p>
        </div>

        {/* Asymmetric 3-Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start"
        >
          {everydayFood.map((item, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col space-y-4 text-left group ${isMiddle ? "lg:mt-8" : ""}`}
              >
                {/* Photo Frame */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>

                {/* Metadata details */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal group-hover:text-[#E8752A] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
