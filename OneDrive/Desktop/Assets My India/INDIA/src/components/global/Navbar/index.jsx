import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Explore', path: '/explore' },
  { name: 'People', path: '/people' },
  { name: 'Culture', path: '/culture' },
  { name: 'Food', path: '/food' },
  { name: 'Nature', path: '/nature' },
  { name: 'History', path: '/history' },
  { name: 'Ideas', path: '/ideas' },
  { name: 'India Today', path: '/india-today' },
];

export default function Navbar({ onReplayIntro }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDarkHeroPage = location.pathname === '/history';
  const isTransparentDark = isDarkHeroPage && !isScrolled;
  
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Monitor scroll for transition to solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manage body scroll lock and trap focus for mobile drawer dialog
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      const handleFocusTrap = (e) => {
        if (e.key === 'Tab') {
          const focusable = drawerRef.current?.querySelectorAll(
            'a[href], button:not([disabled])'
          );
          if (focusable && focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            
            if (e.shiftKey && document.activeElement === first) {
              last.focus();
              e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      const currentDrawer = drawerRef.current;
      window.addEventListener('keydown', handleKeyDown);
      currentDrawer?.addEventListener('keydown', handleFocusTrap);
      
      // Auto focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        currentDrawer?.removeEventListener('keydown', handleFocusTrap);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#E8752A] text-white px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm focus-visible:outline-offset-2"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#171717]/5 py-3' 
            : isDarkHeroPage
              ? 'bg-black/35 backdrop-blur-sm border-b border-white/10 py-5'
              : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl tracking-[0.1em] hover:opacity-80 transition-opacity focus-visible:outline-[#E8752A] ${
              isTransparentDark ? 'text-[#F7F4EE]' : 'text-[#171717]'
            }`}
            aria-label="INDIA homepage logo"
          >
            INDIA
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-sans text-xs xl:text-sm tracking-wider uppercase transition-colors relative py-1 focus-visible:outline-[#E8752A] group ${
                    isActive 
                      ? 'text-[#16734A] font-semibold' 
                      : isTransparentDark
                        ? 'text-[#D0C9BC] hover:text-[#F7F4EE]'
                        : 'text-[#8C8C8C] hover:text-[#171717]'
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E8752A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </NavLink>
            ))}

            {/* Replay Intro Link */}
            <button
              onClick={onReplayIntro}
              className={`font-sans text-xs tracking-wider uppercase transition-colors py-1.5 px-3 rounded-[2px] cursor-pointer focus-visible:outline-[#E8752A] ${
                isTransparentDark
                  ? 'text-[#E8752A] hover:text-white border border-[#E8752A]/40 hover:border-white/40'
                  : 'text-[#E8752A] hover:text-[#171717] border border-[#E8752A]/30 hover:border-[#171717]/35'
              }`}
              aria-label="Replay website introduction cinematic sequence"
            >
              Replay Intro
            </button>
          </nav>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 focus-visible:outline-[#E8752A] cursor-pointer ${
              isTransparentDark ? 'text-[#F7F4EE]' : 'text-[#171717]'
            }`}
            aria-haspopup="dialog"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label="Open navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#F7F4EE] flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between w-full">
              <span className="font-serif text-2xl tracking-[0.1em] text-[#171717]">
                INDIA
              </span>
              
              <button
                ref={closeButtonRef}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="p-2 text-[#171717] focus-visible:outline-[#E8752A] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Vertical Navigation Links */}
            <nav className="flex flex-col space-y-6 my-auto text-left pl-4 max-w-sm">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl md:text-4xl tracking-wider text-[#171717] hover:text-[#16734A] focus-visible:outline-[#E8752A] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="border-t border-[#171717]/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => onReplayIntro(), 200);
                }}
                className="font-sans text-xs tracking-wider uppercase text-[#E8752A] hover:text-[#171717] transition-colors py-2.5 px-4 border border-[#E8752A]/30 text-center rounded-sm focus-visible:outline-[#E8752A] cursor-pointer"
              >
                Replay Introduction Sequence
              </button>
              <p className="text-xs text-[#6B6B6B] tracking-wide text-left">
                80th Independence Day Celebration • 15 August 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
