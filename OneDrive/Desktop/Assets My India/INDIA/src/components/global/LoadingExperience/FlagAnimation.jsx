import React from 'react';
import { motion } from 'framer-motion';

export default function FlagAnimation({ isReducedMotion }) {
  // If reduced motion is preferred, use a simple fade-in state and bypass sways
  const containerVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const fabricTransition = isReducedMotion 
    ? {} 
    : {
        animate: {
          y: [0, -4, 2, -4, 0],
          skewX: [0, 0.5, -0.5, 0.5, 0],
          transition: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }
      };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center"
    >
      {/* Editorial Flag Frame */}
      <motion.div 
        {...fabricTransition}
        className="relative w-72 h-48 md:w-[360px] md:h-[240px] shadow-lg border border-charcoal/5 flex flex-col overflow-hidden bg-white select-none"
        style={{ transformOrigin: "left center" }}
      >
        {/* Saffron Band */}
        <div className="flex-1 bg-[#E8752A] relative">
          {/* Subtle lighting reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* White Band with Ashoka Chakra */}
        <div className="flex-1 bg-white flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-white/5" />
          
          {/* Ashoka Chakra - mathematically drawn */}
          <svg 
            viewBox="0 0 100 100" 
            className="w-12 h-12 md:w-16 md:h-16 text-[#243B6B] stroke-[#243B6B] fill-none select-none relative z-10" 
            strokeWidth="2.5"
            aria-label="Ashoka Chakra"
          >
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="44" />
            
            {/* Inner Ring */}
            <circle cx="50" cy="50" r="7" className="fill-[#243B6B]" />
            
            {/* 24 Spokes */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x2 = 50 + 44 * Math.cos(angle);
              const y2 = 50 + 44 * Math.sin(angle);
              return (
                <line 
                  key={i} 
                  x1="50" 
                  y1="50" 
                  x2={x2} 
                  y2={y2} 
                  strokeWidth="1.8" 
                />
              );
            })}
            
            {/* 24 small semi-circular beads/dots on the border edge */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = ((i * 15 + 7.5) * Math.PI) / 180;
              const cx = 50 + 41.5 * Math.cos(angle);
              const cy = 50 + 41.5 * Math.sin(angle);
              return (
                <circle 
                  key={`dot-${i}`} 
                  cx={cx} 
                  cy={cy} 
                  r="0.8" 
                  className="fill-[#243B6B] stroke-none" 
                />
              );
            })}
          </svg>
        </div>

        {/* Green Band */}
        <div className="flex-1 bg-[#16734A] relative">
          {/* Subtle shadow shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Smooth shimmer ripple effect simulating breeze */}
        {!isReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.08) 45%, rgba(0,0,0,0.06) 50%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 70%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["150% 0%", "-50% 0%"]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        )}
      </motion.div>

      {/* Elegant minimalist caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-xs tracking-[0.2em] font-sans text-charcoal uppercase select-none"
      >
        Tricolor • Ashoka Chakra
      </motion.p>
    </motion.div>
  );
}
