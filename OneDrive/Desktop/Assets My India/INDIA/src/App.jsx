import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingExperience from './components/global/LoadingExperience';
import Navbar from './components/global/Navbar';
import Home from './pages/Home';
import Culture from './pages/Culture';
import PeoplePage from './pages/People';
import ExplorePage from './pages/Explore';
// import StoriesPage from './pages/Stories';
import Food from './pages/Food';
import Nature from './pages/Nature';
import History from './pages/History';
import Ideas from './pages/Ideas';
import IndiaToday from './pages/IndiaToday';
import About from './pages/About';
import Footer from './components/global/Footer';

// Simple, elegant editorial placeholder for under-development pages
function ComingSoonPage({ title }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#F7F4EE] select-none">
      <span className="text-xs font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] mb-4">
        Phase 2 Development
      </span>
      <h1 className="font-serif text-4xl md:text-6xl text-[#171717] mb-6 font-normal">
        {title}
      </h1>
      <p className="text-[#6B6B6B] font-sans text-sm md:text-base max-w-md leading-relaxed mb-8 font-light">
        This archive is currently being cataloged for the next implementation phase. 
        Stay tuned as we continue building the digital cultural museum of India.
      </p>
      <Link 
        to="/" 
        className="font-sans text-xs md:text-sm tracking-wider uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717] hover:border-[#E8752A] pb-1 transition-colors duration-200 focus-visible:outline-[#E8752A]"
      >
        ← Return to Main Page
      </Link>
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if the user is a returning visitor to bypass intro
    return localStorage.getItem('india_intro_played') !== 'true';
  });
  
  const [forceReplay, setForceReplay] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setForceReplay(false);
  };

  const handleReplayIntro = () => {
    setForceReplay(true);
    setShowIntro(true);
  };

  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-[#F7F4EE] selection:bg-[#E8752A]/20 text-[#171717] font-sans antialiased relative">
        
        {/* Cinematic Loading Experience */}
        <AnimatePresence>
          {showIntro && (
            <LoadingExperience 
              onComplete={handleIntroComplete} 
              forcePlay={forceReplay} 
            />
          )}
        </AnimatePresence>

        {/* Global Navigation and Footer - Rendered only when intro is not playing */}
        {!showIntro && (
          <>
            <Navbar onReplayIntro={handleReplayIntro} />
            
            {/* Page Content */}
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/explore/:stateId" element={<ExplorePage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/food" element={<Food />} />
                <Route path="/nature" element={<Nature />} />
                <Route path="/history" element={<History />} />
                <Route path="/stories" element={<Navigate to="/" replace />} />
                <Route path="/ideas" element={<Ideas />} />
                <Route path="/india-today" element={<IndiaToday />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ComingSoonPage title="Archive Not Found" />} />
              </Routes>
            </div>

            <Footer onReplayIntro={handleReplayIntro} />
          </>
        )}

      </div>
    </Router>
  );
}
