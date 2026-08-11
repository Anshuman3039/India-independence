import React from 'react';

export default function Footer({ onReplayIntro }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative w-full overflow-hidden py-20 md:py-28 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-slide-3.jpg')",
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Subtle soft dark gradient overlay to ensure perfect contrast and legibility */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(23, 23, 23, 0.70) 0%, rgba(23, 23, 23, 0.82) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col space-y-16 md:space-y-20">
        
        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Left Column: Contact us (occupying 7 columns ~58.3%) */}
          <div className="md:col-span-7 flex flex-col items-start space-y-4 text-left max-w-md">
            <h3 className="font-serif text-3xl md:text-4xl text-[#F7F4EE] font-normal tracking-wide">
              Something wrong?
            </h3>
            <p className="text-xs md:text-sm font-sans font-light text-[#D0C9BC] leading-relaxed">
              Found incorrect information, an issue, broken link, or something that needs correction?
            </p>
            <a 
              href="mailto:anshuman3039@gmail.com" 
              className="inline-flex items-center gap-2.5 text-xs md:text-sm font-sans font-semibold uppercase tracking-wider text-[#E8752A] hover:text-[#F7F4EE] transition-colors duration-300 group mt-2"
            >
              Contact us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column: Connect Links (occupying 4 columns ~33.3%, starting at col 9) */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start space-y-5 text-left">
            <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] select-none">
              Connect
            </span>
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="https://github.com/Anshuman3039" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs md:text-sm font-sans font-light text-[#F7F4EE] hover:text-[#E8752A] border-b border-transparent hover:border-[#E8752A] pb-0.5 transition-all duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/anshuman-behera-623745386" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs md:text-sm font-sans font-light text-[#F7F4EE] hover:text-[#E8752A] border-b border-transparent hover:border-[#E8752A] pb-0.5 transition-all duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Divider, Copyright and Disclaimer */}
        <div className="border-t border-[#F7F4EE]/15 pt-8 flex flex-col items-center text-center space-y-3">
          <p className="text-[10px] font-sans font-light text-[#D0C9BC] tracking-[0.2em] uppercase">
            &copy; 2026 ANSHUMAN BEHERA. All rights reserved.
          </p>
          <p className="text-[9px] font-sans font-light text-[#8C8C8C] tracking-wide max-w-xl leading-relaxed">
            Images used on this website belong to their respective owners. They are used for illustrative/editorial purposes.
          </p>
        </div>

      </div>
    </footer>
  );
}
