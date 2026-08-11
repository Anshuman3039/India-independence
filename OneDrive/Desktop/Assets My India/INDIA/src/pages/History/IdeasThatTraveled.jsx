import React from 'react';
import { motion } from 'framer-motion';
import { ideas } from '../../data/history';

export default function IdeasThatTraveled() {
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
            GLOBAL CONNECTIVITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Ideas crossed borders.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            The Indian subcontinent was connected to wider Eurasian and maritime networks, trading concepts alongside commerce.
          </p>
        </div>

        {/* Ideas rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="space-y-16"
        >
          {ideas.map((idea, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={idea.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section (cols 6) */}
                <div className={`lg:col-span-6 w-full ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                    <img
                      src={idea.primaryImage}
                      alt={idea.title}
                      className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                  </div>
                </div>

                {/* Text Content Section (cols 6) */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                      HISTORICAL EXCHANGES
                    </span>
                    <h3 className="font-serif text-2xl text-[#171717] font-normal leading-tight">
                      {idea.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Route Indicator Display */}
                  <div className="space-y-2 p-4 bg-white border border-[#171717]/5 shadow-sm">
                    <span className="text-[9px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Geographic Transmission Pathway
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-mono font-semibold text-[#171717]">
                      {idea.routes.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span>{step}</span>
                          {idx < idea.routes.length - 1 && (
                            <span className="text-[#6B6B6B]/40 font-light">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Historical Evidence notes */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-widest block">
                      ARCHAEOLOGICAL & TEXTUAL EVIDENCE
                    </span>
                    <p className="text-xs font-sans font-light text-[#6B6B6B] leading-relaxed">
                      {idea.details}
                    </p>
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
