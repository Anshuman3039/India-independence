import React from 'react';
import { motion } from 'framer-motion';
import { regions } from '../../data/food';

export default function RegionalCuisine() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            CULINARY GEOGRAPHY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Every region has a flavour of its own.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Broad culinary perspectives shaped by climate, soil, history, and community habits.
          </p>
        </div>

        {/* Asymmetrical List / Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="space-y-20"
        >
          {regions.map((region, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={region.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center text-left ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Text Content Area (cols 5) */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                      REGIONAL PERSPECTIVE
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                      {region.name}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {region.intro}
                  </p>

                  {/* Dishes and Traditions */}
                  <div className="pt-4 border-t border-[#171717]/5 space-y-4">
                    <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                      REPRESENTATIVE TRADITIONS
                    </span>
                    <div className="space-y-3">
                      {region.dishes.map((dish, dIndex) => (
                        <div key={dIndex} className="space-y-0.5">
                          <h4 className="font-serif text-sm text-[#171717] font-medium">
                            {dish.name}
                          </h4>
                          <p className="text-xs font-sans font-light text-[#6B6B6B]">
                            {dish.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Area (cols 7) */}
                <div className={`lg:col-span-7 w-full ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 shadow-md">
                    <img
                      src={region.image}
                      alt={`${region.name} culinary landscape`}
                      className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
