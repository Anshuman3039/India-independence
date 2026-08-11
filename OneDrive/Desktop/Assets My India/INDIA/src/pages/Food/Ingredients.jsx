import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ingredients } from '../../data/food';

export default function Ingredients() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = ingredients[selectedIndex];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            AGRICULTURAL FOUNDATION
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Before the dish, there is the ingredient.
          </h2>
        </div>

        {/* Split Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Prominent Display (cols 7) */}
          <div className="lg:col-span-7 space-y-6 text-left w-full">
            <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.id}
                  src={selected.image}
                  alt={`${selected.name} ingredient crop`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>

            {/* Ingredient Metadata & Descriptions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-tight">
                    {selected.name}
                  </h3>
                  <span className="text-xs font-sans font-semibold text-[#16734A] block">
                    {selected.grown}
                  </span>
                </div>

                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl">
                  {selected.description}
                </p>

                {/* Additional details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#171717]/5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Common Regions
                    </span>
                    <p className="text-xs font-sans text-[#171717]">
                      {selected.details.regions.join(', ')}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-wider block">
                      Common Uses
                    </span>
                    <p className="text-xs font-sans text-[#171717]">
                      {selected.details.uses.join(', ')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Thumbnails Selector (cols 5) */}
          <div className="lg:col-span-5 space-y-4 w-full text-left">
            <span className="text-[10px] font-sans font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] block mb-1">
              SELECT AN INGREDIENT
            </span>
            <div className="grid grid-cols-2 gap-3">
              {ingredients.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedIndex(index);
                      }
                    }}
                    className={`flex flex-col p-3 border text-left transition-all duration-300 outline-none w-full cursor-pointer h-24 justify-between ${
                      isSelected 
                        ? "bg-[#171717] border-[#171717] text-white" 
                        : "bg-[#F7F4EE]/50 border-[#171717]/10 text-[#171717] hover:bg-white hover:border-[#171717]/30"
                    } focus-visible:ring-1 focus-visible:ring-[#E8752A]`}
                    aria-label={`Select ${item.name}`}
                  >
                    <span className="font-serif text-sm md:text-base font-normal leading-tight">
                      {item.name}
                    </span>
                    <span className={`text-[9px] font-sans uppercase tracking-wider block mt-1 line-clamp-1 ${
                      isSelected ? "text-white/60" : "text-[#6B6B6B]"
                    }`}>
                      {item.grown.split('(')[0].replace('Grown in ', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
